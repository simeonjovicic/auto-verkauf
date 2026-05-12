"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SITE } from "@/lib/site";
import { vehicles } from "@/lib/vehicles";

const GENERAL = "allgemein" as const;
const OTHER = "sonstiges" as const;

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen an."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().optional(),
  fahrzeug: z.string(),
  message: z.string().min(10, "Bitte schreiben Sie ein paar Worte zu Ihrer Anfrage."),
});

type FormValues = z.infer<typeof schema>;

function buildMailto(v: FormValues): string {
  const car =
    v.fahrzeug && v.fahrzeug !== GENERAL && v.fahrzeug !== OTHER
      ? vehicles.find((x) => x.slug === v.fahrzeug)
      : null;

  const subjectSuffix =
    car ? `${car.name} ${car.subtitle}` : v.fahrzeug === OTHER ? "Sonstige Anfrage" : "Allgemeine Anfrage";

  const subject = `Anfrage: ${subjectSuffix}`;

  const lines = [
    `Name: ${v.name}`,
    `E-Mail: ${v.email}`,
    v.phone ? `Telefon: ${v.phone}` : null,
    car
      ? `Fahrzeug: ${car.name} ${car.subtitle} (${car.num})`
      : `Anliegen: ${v.fahrzeug === OTHER ? "Sonstiges" : "Allgemein"}`,
    "",
    "Nachricht:",
    v.message,
    "",
    "—",
    "Gesendet über meyer-motorsport.at",
  ].filter(Boolean) as string[];

  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialVehicle = searchParams.get("fahrzeug") ?? GENERAL;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      fahrzeug: vehicles.some((v) => v.slug === initialVehicle)
        ? initialVehicle
        : initialVehicle === OTHER
          ? OTHER
          : GENERAL,
      message: "",
    },
  });

  useEffect(() => {
    const v = searchParams.get("fahrzeug");
    if (!v) return;
    if (vehicles.some((x) => x.slug === v) || v === OTHER) {
      setValue("fahrzeug", v);
    }
  }, [searchParams, setValue]);

  function onSubmit(values: FormValues) {
    const url = buildMailto(values);
    setSubmitted(true);
    window.location.href = url;
    setTimeout(() => reset({ ...values }), 200);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-8"
      aria-describedby="form-help"
    >
      <p id="form-help" className="text-xs text-mute">
        Pflichtfelder sind mit · gekennzeichnet. Beim Absenden öffnet sich Ihr
        E-Mail-Programm mit einer vorbereiteten Nachricht.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name ·" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field label="E-Mail ·" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field label="Telefon" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={inputClass(!!errors.phone)}
          />
        </Field>

        <Field label="Fahrzeug / Anliegen" error={errors.fahrzeug?.message}>
          <select {...register("fahrzeug")} className={inputClass(false)}>
            <option value={GENERAL}>Allgemeine Anfrage</option>
            <optgroup label="Aktueller Bestand">
              {vehicles.map((v) => (
                <option key={v.slug} value={v.slug}>
                  {v.name} {v.subtitle}
                </option>
              ))}
            </optgroup>
            <option value={OTHER}>Sonstiges (VIPs / Stunts / …)</option>
          </select>
        </Field>
      </div>

      <Field label="Nachricht ·" error={errors.message?.message}>
        <textarea
          rows={6}
          {...register("message")}
          className={inputClass(!!errors.message) + " resize-y"}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-mute" aria-live="polite">
          {submitted
            ? "E-Mail-Programm geöffnet — bitte dort senden."
            : "Wir antworten meist innerhalb desselben Tages."}
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center bg-bone px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold disabled:opacity-60"
        >
          {isSubmitting ? "Wird vorbereitet…" : "Anfrage senden →"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-mute">{label}</span>
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-2 text-xs text-gold" role="alert">
          {error}
        </p>
      ) : null}
    </label>
  );
}

function inputClass(hasError: boolean): string {
  return [
    "w-full border bg-transparent px-4 py-3 text-sm text-bone placeholder:text-mute focus:outline-none",
    hasError ? "border-gold" : "border-line focus:border-bone",
  ].join(" ");
}

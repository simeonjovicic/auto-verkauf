type SafePerformance = Performance & {
  __fischerSafeMeasure?: boolean;
};

try {
  const perf = globalThis.performance as SafePerformance | undefined;

  if (perf && typeof perf.measure === "function" && !perf.__fischerSafeMeasure) {
    const nativeMeasure = perf.measure.bind(perf);

    Object.defineProperty(perf, "measure", {
      configurable: true,
      value: (...args: unknown[]) => {
        try {
          return Reflect.apply(nativeMeasure, perf, args);
        } catch (error) {
          if (error instanceof TypeError) return undefined;
          throw error;
        }
      },
    });

    perf.__fischerSafeMeasure = true;
  }
} catch {
  // Instrumentation must never block hydration.
}

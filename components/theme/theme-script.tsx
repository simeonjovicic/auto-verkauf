const SCRIPT = `(function(){try{var t=localStorage.getItem('fa-home-theme');if(t!=='meyer'&&t!=='fischer')t='fischer';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='fischer';}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}

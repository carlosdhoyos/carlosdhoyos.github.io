"use client";

// Theme and language live on <html data-theme / data-lang>, set before first
// paint by the inline script in layout.tsx. These buttons only flip them.

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  save("theme", next);
}

function setLang(lang: "en" | "es") {
  const root = document.documentElement;
  root.setAttribute("data-lang", lang);
  root.setAttribute("lang", lang);
  save("lang", lang);
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:text-fg hover:border-fg/40"
    >
      <svg viewBox="0 0 24 24" className="size-4 dark:hidden" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      <svg viewBox="0 0 24 24" className="hidden size-4 dark:block" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}

export function LangToggle() {
  return (
    <div className="flex rounded-full border border-line p-0.5 text-xs font-medium">
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`lang-btn lang-btn-${l} rounded-full px-2.5 py-1 uppercase text-muted transition hover:text-fg`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

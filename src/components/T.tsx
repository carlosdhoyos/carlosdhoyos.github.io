import type { L } from "@/content/site";

// Renders both languages; CSS shows the one matching <html data-lang>.
// This keeps the export fully static and avoids a flash on load.
export function T({ t }: { t: L }) {
  return (
    <>
      <span lang="en" className="i18n-en">{t.en}</span>
      <span lang="es" className="i18n-es">{t.es}</span>
    </>
  );
}

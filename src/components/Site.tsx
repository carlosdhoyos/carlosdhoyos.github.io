import Link from "next/link";
import { nav, profile, type L } from "@/content/site";
import { LangToggle, ThemeToggle } from "@/components/Controls";
import { MobileNav } from "@/components/MobileNav";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";

// Shared chrome for every page. Nav links point at "/#section" so they also
// work from course pages.

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="whitespace-nowrap font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-5 whitespace-nowrap text-sm text-muted lg:flex">
          {nav.map((n) => (
            <a key={n.id} href={`/#${n.id}`} className="transition hover:text-fg">
              <T t={n.label} />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-4 py-8 text-sm text-muted sm:px-6">
        <span>
          © {year} {profile.name}
        </span>
        <span>
          <T t={profile.affiliation} />
        </span>
      </div>
    </footer>
  );
}

export function SoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
      <span className="size-1.5 animate-pulse rounded-full bg-accent-2" />
      <T t={{ en: "Coming soon", es: "Próximamente" }} />
    </span>
  );
}

export function EmptyState({ title, body }: { title: L; body: L }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-dashed border-line p-10 text-center">
        <p className="text-lg font-medium">
          <T t={title} />
        </p>
        <p className="mt-2 text-muted">
          <T t={body} />
        </p>
      </div>
    </Reveal>
  );
}

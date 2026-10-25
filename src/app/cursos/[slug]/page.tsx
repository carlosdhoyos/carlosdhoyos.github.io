import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, courseMaterialCount, profile, type Material, type MaterialKind } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { EmptyState } from "@/components/Site";
import { T } from "@/components/T";

// Only the slugs listed in `courses` exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

function getCourse(slug: string) {
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();
  return course;
}

export async function generateMetadata({ params }: PageProps<"/cursos/[slug]">): Promise<Metadata> {
  const course = getCourse((await params).slug);
  return {
    title: `${course.title.es} · ${profile.name}`,
    description: course.summary?.es ?? `${course.title.es} — ${profile.affiliation.es}`,
  };
}

const kindLabel: Record<MaterialKind, { en: string; es: string }> = {
  notes: { en: "Notes", es: "Notas" },
  slides: { en: "Slides", es: "Diapositivas" },
  notebook: { en: "Notebook", es: "Notebook" },
  pdf: { en: "PDF", es: "PDF" },
  video: { en: "Video", es: "Video" },
  repo: { en: "Repository", es: "Repositorio" },
  data: { en: "Data", es: "Datos" },
  link: { en: "Link", es: "Enlace" },
};

// Simple line icons, one per material kind.
const kindIcon: Record<MaterialKind, React.ReactNode> = {
  notes: <path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6" />,
  slides: <path d="M3 5h18v11H3zM12 16v4M8 20h8" />,
  notebook: <path d="M5 4h13v16H5zM9 9l-2 2 2 2M14 9l2 2-2 2" />,
  pdf: <path d="M7 3h7l5 5v13H7zM14 3v5h5M9.5 16h5" />,
  video: <path d="M3 6h13v12H3zM16 10l5-3v10l-5-3" />,
  repo: <path d="M6 3v18M6 7a2 2 0 1 0 0-.01M18 7a2 2 0 1 0 0-.01M6 17a2 2 0 1 0 0-.01M18 9v1a4 4 0 0 1-4 4H6" />,
  data: <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />,
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
};

function MaterialRow({ m }: { m: Material }) {
  const kind = m.kind ?? "link";
  const external = /^https?:\/\//.test(m.href);
  const host = external ? new URL(m.href).hostname.replace(/^www\./, "") : null;

  return (
    <a
      href={m.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex items-start gap-4 rounded-xl border border-line bg-card p-4 transition hover:border-accent/50"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {kindIcon[kind]}
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium leading-snug">
          <T t={m.title} />
        </span>
        {m.description && (
          <span className="mt-1 block text-sm text-muted">
            <T t={m.description} />
          </span>
        )}
        <span className="mt-1.5 flex flex-wrap gap-x-3 text-xs text-muted">
          <span>
            <T t={kindLabel[kind]} />
          </span>
          <span>{host ?? <T t={{ en: "This site", es: "Este sitio" }} />}</span>
        </span>
      </span>
      <span className="self-center text-muted transition group-hover:translate-x-0.5 group-hover:text-accent">
        {external ? "↗" : "→"}
      </span>
    </a>
  );
}

export default async function CoursePage({ params }: PageProps<"/cursos/[slug]">) {
  const course = getCourse((await params).slug);
  const sections = (course.sections ?? []).filter((s) => s.materials.length > 0);

  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden border-b border-line/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_80%_0%,color-mix(in_srgb,var(--accent-2)_16%,transparent),transparent)]" />
        <div className="mx-auto max-w-5xl px-4 pb-14 pt-32 sm:px-6">
          <Link href="/#teaching" className="text-sm text-muted transition hover:text-fg">
            ← <T t={{ en: "Teaching", es: "Docencia" }} />
          </Link>
          {course.term && <p className="mt-6 font-mono text-sm text-accent">{course.term}</p>}
          <h1 className={`${course.term ? "mt-2" : "mt-6"} text-4xl font-semibold tracking-tight sm:text-5xl`}>
            <T t={course.title} />
          </h1>
          {course.summary && (
            <p className="mt-4 max-w-2xl text-lg text-muted">
              <T t={course.summary} />
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        {course.about && (
          <Reveal>
            <p className="mb-14 max-w-3xl text-lg leading-relaxed">
              <T t={course.about} />
            </p>
          </Reveal>
        )}

        {courseMaterialCount(course) === 0 ? (
          <EmptyState
            title={{ en: "Course materials coming soon.", es: "Material del curso próximamente." }}
            body={{
              en: "Notes, slides, notebooks and other resources will be linked here.",
              es: "Aquí se enlazarán notas, diapositivas, notebooks y otros recursos.",
            }}
          />
        ) : (
          <div className="space-y-14">
            {sections.map((s, i) => (
              <Reveal key={s.title.en}>
                <section>
                  <h2 className="flex items-baseline gap-4 text-xl font-semibold tracking-tight sm:text-2xl">
                    <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <T t={s.title} />
                  </h2>
                  {s.description && (
                    <p className="mt-2 text-muted">
                      <T t={s.description} />
                    </p>
                  )}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.materials.map((m) => (
                      <MaterialRow key={m.href} m={m} />
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

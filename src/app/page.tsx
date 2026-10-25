import Link from "next/link";
import { about, academicProfiles, courses, materialCount, profile, publications, research, semillero } from "@/content/site";
import { Publications } from "@/components/Publications";
import { Reveal } from "@/components/Reveal";
import { EmptyState, SoonBadge } from "@/components/Site";
import { T } from "@/components/T";
import { WindField } from "@/components/WindField";

function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-baseline gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
      <span className="font-mono text-sm text-accent">{index}</span>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main id="top" className="flex-1">
      {/* Hero */}
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden">
        <WindField />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_30%,color-mix(in_srgb,var(--accent-2)_18%,transparent),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pt-24 sm:px-6">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent-2" />
              <T t={profile.affiliation} />
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-xl font-medium text-transparent sm:text-2xl">
              <T t={profile.role} />
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              <T t={profile.tagline} />
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#research"
                className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-85"
              >
                <T t={{ en: "Explore research", es: "Ver investigación" }} />
              </a>
              <a
                href="#teaching"
                className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:border-fg/40"
              >
                <T t={{ en: "Teaching", es: "Docencia" }} />
              </a>
            </div>
          </Reveal>
          <p className="mt-16 hidden text-xs text-muted sm:block">
            <T t={{ en: "Move your cursor to stir the flow.", es: "Mueve el cursor para agitar el flujo." }} />
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionTitle index="01">
            <T t={{ en: "About", es: "Perfil" }} />
          </SectionTitle>
          <p className="max-w-3xl text-xl leading-relaxed sm:text-2xl">
            <T t={about} />
          </p>
        </Reveal>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionTitle index="02">
            <T t={{ en: "Research interests", es: "Líneas de investigación" }} />
          </SectionTitle>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {research.map((r, i) => (
            <Reveal key={r.title.en} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_10px_40px_-15px_var(--accent)]">
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">
                  <T t={r.title} />
                </h3>
                <p className="mt-2 text-muted">
                  <T t={r.body} />
                </p>
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionTitle index="03">
            <T t={{ en: "Publications", es: "Publicaciones" }} />
          </SectionTitle>
          <div className="-mt-4 mb-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-muted">
              <T t={{ en: "Selected publications. Full list on:", es: "Publicaciones seleccionadas. Lista completa en:" }} />
            </p>
            <div className="flex flex-wrap gap-2">
              {academicProfiles.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line bg-card px-4 py-1.5 text-sm font-medium transition hover:border-accent/50 hover:text-accent"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        {publications.length === 0 ? (
          <EmptyState
            title={{ en: "Publications coming soon.", es: "Publicaciones próximamente." }}
            body={{
              en: "A searchable list of articles and papers will be available here.",
              es: "Aquí estará disponible una lista de artículos que se podrá buscar y filtrar.",
            }}
          />
        ) : (
          <Reveal>
            <Publications items={publications} />
          </Reveal>
        )}
      </section>

      {/* Semillero */}
      <section id="semillero" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionTitle index="04">
            <T t={semillero.name} />
          </SectionTitle>
        </Reveal>
        {!semillero.intro.en && !semillero.intro.es && semillero.groups.length === 0 ? (
          <EmptyState
            title={{ en: "More information coming soon.", es: "Más información próximamente." }}
            body={{
              en: "Details about the study group and how to join will be published here.",
              es: "Aquí se publicarán los detalles del semillero y cómo hacer parte de él.",
            }}
          />
        ) : (
          <div className="space-y-10">
            {(semillero.intro.en || semillero.intro.es) && (
            <Reveal>
              <p className="max-w-3xl text-xl leading-relaxed">
                <T t={semillero.intro} />
              </p>
              {semillero.lines.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {semillero.lines.map((l) => (
                    <span key={l.en} className="rounded-full border border-line bg-card px-3 py-1 text-sm">
                      <T t={l} />
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
            )}
            {semillero.groups.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {semillero.groups.map((g, i) => (
                  <Reveal key={g.slug} delay={i * 80}>
                    <Link
                      href={`/semillero/${g.slug}/`}
                      className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent/50"
                    >
                      <h3 className="text-lg font-semibold">
                        <T t={g.name} />
                      </h3>
                      {g.summary && (
                        <p className="mt-2 flex-1 text-muted">
                          <T t={g.summary} />
                        </p>
                      )}
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="text-sm font-medium text-accent">
                          <T t={{ en: "Open", es: "Abrir" }} />{" "}
                          <span className="inline-block transition group-hover:translate-x-1">→</span>
                        </span>
                        {materialCount(g.sections) === 0 && <SoonBadge />}
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
            {semillero.activities.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-3">
                {semillero.activities.map((a, i) => (
                  <Reveal key={a.title.en} delay={i * 80}>
                    <article className="h-full rounded-2xl border border-line bg-card p-6">
                      <h3 className="font-semibold">
                        <T t={a.title} />
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        <T t={a.body} />
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
            {semillero.members.length > 0 && (
              <Reveal>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {semillero.members.map((m) => (
                    <li key={m.name} className="rounded-xl border border-line bg-card px-4 py-3">
                      <p className="font-medium">{m.name}</p>
                      <p className="text-sm text-muted">
                        <T t={m.role} />
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {(semillero.join.en || semillero.join.es) && (
              <Reveal>
                <div className="rounded-2xl bg-gradient-to-r from-accent/10 to-accent-2/10 p-6">
                  <p>
                    <T t={semillero.join} />
                  </p>
                  {profile.emails[0] && (
                    <a href={`mailto:${profile.emails[0]}`} className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
                      {profile.emails[0]} →
                    </a>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        )}
      </section>

      {/* Teaching */}
      <section id="teaching" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionTitle index="05">
            <T t={{ en: "Teaching", es: "Docencia" }} />
          </SectionTitle>
        </Reveal>
        {courses.length === 0 ? (
          <EmptyState
            title={{ en: "New course materials are on the way.", es: "Nuevos materiales de curso en camino." }}
            body={{
              en: "Updated versions of my courses will be published here soon.",
              es: "Las versiones actualizadas de mis cursos se publicarán aquí pronto.",
            }}
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((c, i) => {
              const count = materialCount(c.sections);
              return (
                <Reveal key={c.slug} delay={i * 80}>
                  <Link
                    href={`/cursos/${c.slug}/`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent/50"
                  >
                    {c.term && <span className="mb-2 font-mono text-xs text-muted">{c.term}</span>}
                    <h3 className="text-lg font-semibold">
                      <T t={c.title} />
                    </h3>
                    {c.summary && (
                      <p className="mt-2 flex-1 text-muted">
                        <T t={c.summary} />
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-medium text-accent">
                        <T t={{ en: "Open course", es: "Abrir curso" }} />{" "}
                        <span className="inline-block transition group-hover:translate-x-1">→</span>
                      </span>
                      {count === 0 && <SoonBadge />}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionTitle index="06">
            <T t={{ en: "Contact", es: "Contacto" }} />
          </SectionTitle>
          <div className="flex flex-wrap gap-3">
            {profile.emails.map((email, i) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className={
                  i === 0
                    ? "rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-85"
                    : "rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium transition hover:border-fg/40"
                }
              >
                {email}
              </a>
            ))}
            {[...academicProfiles, ...profile.links].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium transition hover:border-fg/40"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}

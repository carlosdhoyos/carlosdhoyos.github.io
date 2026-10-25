"use client";

import { useMemo, useState } from "react";
import type { Publication } from "@/content/site";
import { T } from "@/components/T";

// Searchable, topic-filterable list of publications grouped by year.
export function Publications({ items }: { items: Publication[] }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string | null>(null);

  const topics = useMemo(
    () => [...new Set(items.flatMap((p) => p.topics ?? []))].sort(),
    [items],
  );

  const byYear = useMemo(() => {
    const q = query.trim().toLowerCase();
    const shown = items
      .filter((p) => !topic || p.topics?.includes(topic))
      .filter((p) => !q || `${p.title} ${p.authors} ${p.venue} ${p.year}`.toLowerCase().includes(q))
      .sort((a, b) => b.year - a.year);
    const groups = new Map<number, Publication[]>();
    for (const p of shown) groups.set(p.year, [...(groups.get(p.year) ?? []), p]);
    return [...groups];
  }, [items, query, topic]);

  const chip = (active: boolean) =>
    `rounded-full border px-3 py-1 text-xs font-medium transition ${
      active ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-fg/40 hover:text-fg"
    }`;

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar / Search…"
          aria-label="Search publications"
          className="w-full rounded-full border border-line bg-card px-4 py-2 text-sm outline-none transition placeholder:text-muted focus:border-accent sm:max-w-xs"
        />
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button type="button" className={chip(topic === null)} onClick={() => setTopic(null)}>
              <T t={{ en: "All", es: "Todas" }} />
            </button>
            {topics.map((t) => (
              <button key={t} type="button" className={chip(topic === t)} onClick={() => setTopic(topic === t ? null : t)}>
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {byYear.length === 0 ? (
        <p className="py-8 text-center text-muted">
          <T t={{ en: "No publications match your search.", es: "Ninguna publicación coincide con la búsqueda." }} />
        </p>
      ) : (
        <div className="space-y-10">
          {byYear.map(([year, pubs]) => (
            <div key={year} className="grid gap-4 sm:grid-cols-[5rem_1fr]">
              <h3 className="font-mono text-sm text-accent sm:pt-5">{year}</h3>
              <ul className="space-y-3">
                {pubs.map((p) => {
                  const body = (
                    <>
                      <p className="font-medium leading-snug">{p.title}</p>
                      <p className="mt-1 text-sm text-muted">{p.authors}</p>
                      <p className="mt-1 text-sm italic text-muted">{p.venue}</p>
                    </>
                  );
                  return (
                    <li key={p.title}>
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group block rounded-xl border border-line bg-card p-5 transition hover:border-accent/50"
                        >
                          {body}
                          <span className="mt-2 inline-block text-xs font-medium text-accent">
                            <T t={{ en: "Read", es: "Leer" }} />{" "}
                            <span className="inline-block transition group-hover:translate-x-1">→</span>
                          </span>
                        </a>
                      ) : (
                        <div className="rounded-xl border border-line bg-card p-5">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { profile, semillero } from "@/content/site";
import { ResourcePage } from "@/components/ResourcePage";

// Only the slugs listed in `semillero.groups` exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return semillero.groups.map((g) => ({ slug: g.slug }));
}

function getGroup(slug: string) {
  const group = semillero.groups.find((g) => g.slug === slug);
  if (!group) notFound();
  return group;
}

export async function generateMetadata({ params }: PageProps<"/semillero/[slug]">): Promise<Metadata> {
  const group = getGroup((await params).slug);
  return {
    title: `${group.name.es} · ${semillero.name.es} · ${profile.name}`,
    description: group.summary?.es ?? `${semillero.name.es} — ${profile.affiliation.es}`,
  };
}

export default async function StudyGroupPage({ params }: PageProps<"/semillero/[slug]">) {
  const group = getGroup((await params).slug);
  return (
    <ResourcePage
      back={{ href: "/#semillero", label: { en: "Study Group", es: "Semillero" } }}
      title={group.name}
      summary={group.summary}
      about={group.about}
      sections={group.sections}
      empty={{
        title: { en: "Materials coming soon.", es: "Material próximamente." },
        body: {
          en: "Projects, readings, notebooks and other resources will be linked here.",
          es: "Aquí se enlazarán proyectos, lecturas, notebooks y otros recursos.",
        },
      }}
    />
  );
}

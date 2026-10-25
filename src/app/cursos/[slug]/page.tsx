import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses, profile } from "@/content/site";
import { ResourcePage } from "@/components/ResourcePage";

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

export default async function CoursePage({ params }: PageProps<"/cursos/[slug]">) {
  const course = getCourse((await params).slug);
  return (
    <ResourcePage
      back={{ href: "/#teaching", label: { en: "Teaching", es: "Docencia" } }}
      title={course.title}
      term={course.term}
      summary={course.summary}
      about={course.about}
      sections={course.sections}
      empty={{
        title: { en: "Course materials coming soon.", es: "Material del curso próximamente." },
        body: {
          en: "Notes, slides, notebooks and other resources will be linked here.",
          es: "Aquí se enlazarán notas, diapositivas, notebooks y otros recursos.",
        },
      }}
    />
  );
}

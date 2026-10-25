// All page copy lives here. Every string has an English and a Spanish version.
// Edit this file to change what the site says; the components only lay it out.

export type L = { en: string; es: string };

export const profile = {
  name: "Carlos D. Hoyos",
  role: {
    en: "Professor · Atmospheric Sciences",
    es: "Profesor · Ciencias Atmosféricas",
  },
  affiliation: {
    en: "Universidad Nacional de Colombia, Facultad de Minas",
    es: "Universidad Nacional de Colombia, Facultad de Minas",
  },
  tagline: {
    en: "Teaching and research on the atmosphere, climate and the data-driven methods that help us understand them.",
    es: "Docencia e investigación sobre la atmósfera, el clima y los métodos basados en datos que nos ayudan a entenderlos.",
  },
  email: "", // e.g. "name@unal.edu.co" — the Contact button is hidden while empty
  links: [
    // { label: "Google Scholar", href: "https://scholar.google.com/..." },
    { label: "GitHub", href: "https://github.com/carlosdhoyos" },
  ],
};

export const nav: { id: string; label: L }[] = [
  { id: "about", label: { en: "About", es: "Perfil" } },
  { id: "research", label: { en: "Research", es: "Investigación" } },
  { id: "publications", label: { en: "Publications", es: "Publicaciones" } },
  { id: "semillero", label: { en: "Research group", es: "Semillero" } },
  { id: "teaching", label: { en: "Teaching", es: "Docencia" } },
  { id: "contact", label: { en: "Contact", es: "Contacto" } },
];

export const about: L = {
  en: "I teach and do research at the Facultad de Minas of the Universidad Nacional de Colombia, working where atmospheric physics, climate and machine learning meet.",
  es: "Soy docente e investigador en la Facultad de Minas de la Universidad Nacional de Colombia, y trabajo donde se encuentran la física de la atmósfera, el clima y el aprendizaje automático.",
};

export const research: { title: L; body: L }[] = [
  {
    title: { en: "Atmospheric sciences", es: "Ciencias atmosféricas" },
    body: {
      en: "Processes that shape weather, from the boundary layer to deep convection.",
      es: "Procesos que determinan el tiempo, desde la capa límite hasta la convección profunda.",
    },
  },
  {
    title: { en: "Climate", es: "Clima" },
    body: {
      en: "Climate patterns, variability and their impacts on the environment.",
      es: "Patrones climáticos, variabilidad y sus impactos en el ambiente.",
    },
  },
  {
    title: { en: "AI & machine learning", es: "IA y aprendizaje automático" },
    body: {
      en: "Data-driven models applied to atmospheric and climate problems.",
      es: "Modelos basados en datos aplicados a problemas atmosféricos y climáticos.",
    },
  },
  {
    title: { en: "Data science", es: "Ciencia de datos" },
    body: {
      en: "Turning large observational and model datasets into insight: processing, analysis and visualization.",
      es: "Convertir grandes conjuntos de datos observacionales y de modelos en conocimiento: procesamiento, análisis y visualización.",
    },
  },
  {
    title: { en: "Fluid mechanics", es: "Mecánica de fluidos" },
    body: {
      en: "The physical principles behind flows in the atmosphere and beyond.",
      es: "Los principios físicos detrás de los flujos en la atmósfera y más allá.",
    },
  },
];

export type Course = {
  title: L;
  summary: L;
  href: string;
  term?: string;
};

// Leave empty until the new course versions are published.
export const courses: Course[] = [];

export type Publication = {
  title: string;
  authors: string; // e.g. "Hoyos, C. D., Pérez, A."
  venue: string; // journal, conference or book
  year: number;
  url?: string; // DOI link or PDF
  topics?: string[]; // used by the filter chips, e.g. ["Climate", "Data science"]
};

// Newest first is not required; the page sorts by year.
export const publications: Publication[] = [
  // {
  //   title: "Title of the article",
  //   authors: "Hoyos, C. D., Coauthor, A.",
  //   venue: "Journal name",
  //   year: 2025,
  //   url: "https://doi.org/...",
  //   topics: ["Climate", "Data science"],
  // },
];

export const scholarUrl = ""; // e.g. Google Scholar profile; shows a "Full list" link when set

// Fill these in when ready; empty fields are hidden and the section shows
// a "coming soon" message while `intro` is empty.
export const semillero = {
  name: { en: "Research seedbed", es: "Semillero de investigación" } as L,
  intro: { en: "", es: "" } as L,
  lines: [] as L[], // e.g. { en: "Climate", es: "Clima" }
  activities: [] as { title: L; body: L }[],
  members: [] as { name: string; role: L }[],
  join: { en: "", es: "" } as L, // how students can join
};

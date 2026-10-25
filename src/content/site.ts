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
  // Shown as buttons in Contact; the first one is highlighted and used for the semillero.
  emails: ["cdhoyos0@unal.edu.co", "choyos@gmail.com"],
  links: [
    // { label: "Google Scholar", href: "https://scholar.google.com/..." },
    { label: "GitHub", href: "https://github.com/carlosdhoyos" },
  ],
};

export const nav: { id: string; label: L }[] = [
  { id: "about", label: { en: "About", es: "Perfil" } },
  { id: "research", label: { en: "Research", es: "Investigación" } },
  { id: "publications", label: { en: "Publications", es: "Publicaciones" } },
  { id: "semillero", label: { en: "Study Group", es: "Semillero" } },
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
  summary?: L;
  href?: string; // without a link the card shows "Coming soon"
  term?: string;
};

export const courses: Course[] = [
  { title: { en: "Hydrology", es: "Hidrología" } },
];

// Filter chips for the publications list; keys are used in `topics` below.
export const pubTopics = {
  climate: { en: "Climate & oceans", es: "Clima y océanos" },
  hydrology: { en: "Hydrology & floods", es: "Hidrología e inundaciones" },
  forecasting: { en: "Forecasting", es: "Pronóstico" },
  atmosphere: { en: "Boundary layer & air quality", es: "Capa límite y calidad del aire" },
} satisfies Record<string, L>;

export type PubTopic = keyof typeof pubTopics;

export type Publication = {
  title: string;
  authors: string; // "Hoyos, C.D." is highlighted automatically
  venue: string; // journal, conference or book
  year: number;
  url?: string; // DOI link or PDF
  topics?: PubTopic[];
};

// Selected publications (from Google Scholar, most cited plus recent work).
// Order doesn't matter; the page sorts by year.
export const publications: Publication[] = [
  {
    title: "Orographic controls over convection in an inter-Andean valley in northern South America",
    authors: "Gómez-Ríos, S., Zuluaga, M.D., Hoyos, C.D.",
    venue: "Monthly Weather Review",
    year: 2023,
    url: "https://doi.org/10.1175/mwr-d-21-0231.1",
    topics: ["atmosphere"],
  },
  {
    title: "Probabilistic discrimination between large-scale environments of intensifying and decaying African easterly waves",
    authors: "Agudelo, P.A., Hoyos, C.D., Curry, J.A., Webster, P.J.",
    venue: "Climate Dynamics",
    year: 2011,
    url: "https://doi.org/10.1007/s00382-010-0851-x",
    topics: ["climate", "forecasting"],
  },
  {
    title: "Evaluation and Setup of a High-Resolution Regional Coupled Ocean–Atmosphere Model for Hindcasting Tropical Cyclones in the North Atlantic Ocean Basin",
    authors: "Zapata-Henao, M., Hoyos, C.D., Cardona, Y.",
    venue: "Atmosphere",
    year: 2026,
    url: "https://doi.org/10.3390/atmos17040356",
    topics: ["climate", "forecasting"],
  },
  {
    title: "An assessment of the role of surface sensible heat flux and the atmosphere inversion on the breakup time in a highly complex terrain",
    authors: "Herrera-Mejía, L., Hoyos, C.D., Rotach, M.W.",
    venue: "Research Square (preprint)",
    year: 2026,
    url: "https://doi.org/10.21203/rs.3.rs-8961315/v1",
    topics: ["atmosphere"],
  },
  {
    title: "Effects of fireworks on particulate matter concentration in a narrow valley: the case of the Medellín metropolitan area",
    authors: "Hoyos, C.D., Herrera-Mejía, L., Roldán-Henao, N., Isaza, A.",
    venue: "Environmental Monitoring and Assessment",
    year: 2020,
    url: "https://doi.org/10.1007/s10661-019-7838-9",
    topics: ["atmosphere"],
  },
  {
    title: "An investigation of the precipitation net effect on the particulate matter concentration in a narrow valley: role of lower-troposphere stability",
    authors: "Roldán-Henao, N., Hoyos, C.D., Herrera-Mejía, L., Isaza, A.",
    venue: "Journal of Applied Meteorology and Climatology",
    year: 2020,
    url: "https://doi.org/10.1175/jamc-d-18-0313.1",
    topics: ["atmosphere"],
  },
  {
    title: "Characterization of the atmospheric boundary layer in a narrow tropical valley using remote-sensing and radiosonde observations and the WRF model: the Aburrá Valley case-study",
    authors: "Herrera-Mejía, L., Hoyos, C.D.",
    venue: "Quarterly Journal of the Royal Meteorological Society",
    year: 2019,
    url: "https://doi.org/10.1002/qj.3583",
    topics: ["atmosphere"],
  },
  {
    title: "Meteorological conditions leading to the 2015 Salgar flash flood: lessons for vulnerable regions in tropical complex terrain",
    authors: "Hoyos, C.D., Ceballos, L.I., Pérez-Carrasquilla, J.S., Sepúlveda, J., López-Zapata, S.M., Zuluaga, M.D., et al.",
    venue: "Natural Hazards and Earth System Sciences",
    year: 2019,
    url: "https://doi.org/10.5194/nhess-19-2635-2019",
    topics: ["hydrology", "atmosphere"],
  },
  {
    title: "On the location and orientation of the South Pacific Convergence Zone",
    authors: "Widlansky, M.J., Webster, P.J., Hoyos, C.D.",
    venue: "Climate Dynamics",
    year: 2011,
    url: "https://doi.org/10.1007/s00382-010-0871-6",
    topics: ["climate"],
  },
  {
    title: "Extended-range probabilistic forecasts of Ganges and Brahmaputra floods in Bangladesh",
    authors: "Webster, P.J., Jian, J., Hopson, T.M., Hoyos, C.D., Agudelo, P.A., Chang, H.R., et al.",
    venue: "Bulletin of the American Meteorological Society",
    year: 2010,
    url: "https://doi.org/10.1175/2010bams2911.1",
    topics: ["forecasting", "hydrology"],
  },
  {
    title: "Beyond the spring barrier?",
    authors: "Webster, P.J., Hoyos, C.D.",
    venue: "Nature Geoscience",
    year: 2010,
    url: "https://doi.org/10.1038/ngeo800",
    topics: ["forecasting", "climate"],
  },
  {
    title: "North Pacific Gyre Oscillation synchronizes climate fluctuations in the eastern and western boundary systems",
    authors: "Ceballos, L.I., Di Lorenzo, E., Hoyos, C.D., Schneider, N., Taguchi, B.",
    venue: "Journal of Climate",
    year: 2009,
    url: "https://doi.org/10.1175/2009jcli2848.1",
    topics: ["climate"],
  },
  {
    title: "Large-scale controls on Ganges and Brahmaputra river discharge on intraseasonal and seasonal time-scales",
    authors: "Jian, J., Webster, P.J., Hoyos, C.D.",
    venue: "Quarterly Journal of the Royal Meteorological Society",
    year: 2009,
    url: "https://doi.org/10.1002/qj.384",
    topics: ["hydrology", "climate"],
  },
  {
    title: "The role of intraseasonal variability in the nature of Asian monsoon precipitation",
    authors: "Hoyos, C.D., Webster, P.J.",
    venue: "Journal of Climate",
    year: 2007,
    url: "https://doi.org/10.1175/jcli4252.1",
    topics: ["climate"],
  },
  {
    title: "Deconvolution of the factors contributing to the increase in global hurricane intensity",
    authors: "Hoyos, C.D., Agudelo, P.A., Webster, P.J., Curry, J.A.",
    venue: "Science",
    year: 2006,
    url: "https://doi.org/10.1126/science.1123560",
    topics: ["climate"],
  },
  {
    title: "Prediction of monsoon rainfall and river discharge on 15–30-day time scales",
    authors: "Webster, P.J., Hoyos, C.",
    venue: "Bulletin of the American Meteorological Society",
    year: 2004,
    url: "https://doi.org/10.1175/bams-85-11-1745",
    topics: ["forecasting", "hydrology"],
  },
];

// Shown as buttons above the publications list.
export const academicProfiles = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=tWcHH6cAAAAJ" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-9010-9784" },
];

// Fill these in when ready; empty fields are hidden and the section shows
// a "coming soon" message while both `intro` and `groups` are empty.
export const semillero = {
  name: { en: "Study Group", es: "Semillero de investigación" } as L,
  intro: { en: "", es: "" } as L,
  lines: [] as L[], // e.g. { en: "Climate", es: "Clima" }
  activities: [] as { title: L; body: L }[],
  members: [] as { name: string; role: L }[],
  join: { en: "", es: "" } as L, // how students can join
  // Research groups within the semillero. Without a description the card shows "Coming soon".
  groups: [
    {
      name: { en: "AI in Atmospheric and Oceanic Sciences", es: "IA en Ciencias Atmosféricas y Oceánicas" },
    },
  ] as { name: L; description?: L; href?: string }[],
};

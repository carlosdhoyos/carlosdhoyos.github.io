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

// ---------------------------------------------------------------------------
// Courses and study groups each get their own page with linked materials:
// courses at /cursos/<slug>/, study groups at /semillero/<slug>/.
//
// Materials can live anywhere:
//   - in this repository: put the file in public/cursos/<slug>/ (or
//     public/semillero/<slug>/) and link it as "/cursos/<slug>/file.pdf"
//   - in another repository or site: use the full URL, e.g.
//     "https://github.com/carlosdhoyos/some-repo" or a GitHub Pages / Colab /
//     YouTube / Drive link.
// ---------------------------------------------------------------------------

export type MaterialKind = "notes" | "slides" | "interactive" | "notebook" | "pdf" | "video" | "repo" | "data" | "link";

export type Material = {
  title: L;
  href: string;
  kind?: MaterialKind; // picks the icon; defaults to "link"
  description?: L;
};

export type CourseSection = {
  title: L; // e.g. { en: "Unit 1 · Water balance", es: "Unidad 1 · Balance hídrico" }
  description?: L;
  materials: Material[];
};

export type Course = {
  slug: string; // URL segment: lowercase, no spaces or accents
  title: L;
  summary?: L; // one or two lines, shown on the card and the course page
  term?: string; // e.g. "2026-I"
  about?: L; // longer description, shown on the course page only
  sections?: CourseSection[];
};

export const courses: Course[] = [
  {
    slug: "hidrologia",
    title: { en: "Hydrology", es: "Hidrología" },
    sections: [
      {
        title: { en: "Interactive material", es: "Material interactivo" },
        materials: [
          {
            kind: "interactive",
            title: { en: "From the Sun to the trade winds", es: "Del Sol a los alisios" },
            description: {
              en: "Interactive lecture on physical climatology: radiation, energy balance, greenhouse effect, Hadley circulation, ENSO, hurricanes and climate change (in Spanish). Large file (~43 MB), may take a moment to load.",
              es: "Clase interactiva de climatología física: radiación, balance energético, invernadero, circulación de Hadley, ENSO, huracanes y cambio climático. Archivo pesado (~43 MB): puede tardar en cargar.",
            },
            href: "/cursos/hidrologia/del-sol-a-los-alisios.html",
          },
          {
            kind: "interactive",
            title: { en: "Evapotranspiration", es: "Evapotranspiración" },
            description: {
              en: "Interactive lecture: physics of evaporation, surface energy balance, plants, Penman–FAO-56, measurement, satellites and examples from Colombia, with simulators in every section (in Spanish).",
              es: "Clase interactiva: física de la evaporación, balance de energía, plantas, Penman–FAO-56, medición, satélites y ejemplos de Colombia, con simuladores en cada sección.",
            },
            href: "/cursos/hidrologia/evapotranspiracion.html",
          },
        ],
      },
      {
        title: { en: "Problem sets", es: "Talleres" },
        materials: [
          {
            kind: "pdf",
            title: { en: "Practice set — Del Sol a los alisios", es: "Taller de preparación — Del Sol a los alisios" },
            description: {
              en: "Exercises to study for the midterm: energy, greenhouse effect, circulation and weather (in Spanish).",
              es: "Ejercicios para estudiar para el parcial: energía, invernadero, circulación y tiempo.",
            },
            href: "/cursos/hidrologia/taller-del-sol-a-los-alisios.pdf",
          },
        ],
      },
      // {
      //   title: { en: "Unit 1 · The hydrologic cycle", es: "Unidad 1 · El ciclo hidrológico" },
      //   materials: [
      //     { kind: "slides", title: { en: "Lecture slides", es: "Diapositivas" }, href: "/cursos/hidrologia/u1-slides.pdf" },
      //     { kind: "notebook", title: { en: "Lab notebook", es: "Notebook de laboratorio" }, href: "https://github.com/carlosdhoyos/hidrologia/blob/main/u1.ipynb" },
      //   ],
      // },
    ],
  },
];

export function materialCount(sections: CourseSection[] = []) {
  return sections.reduce((n, s) => n + s.materials.length, 0);
}

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
  // Groups within the semillero. Each gets a page at /semillero/<slug>/ with
  // the same structure as a course page (see `courses` above).
  groups: [
    {
      slug: "ia-atmosfera-oceano",
      name: { en: "AI in Atmospheric and Oceanic Sciences", es: "IA en Ciencias Atmosféricas y Oceánicas" },
      sections: [
        {
          title: { en: "Neural networks · class series", es: "Redes neuronales · serie de clases" },
          description: {
            en: "Interactive decks with a “Try it” on every slide. Coming next: Modules 4 (Blocks) and 5 (Architecture families); Module 6 (Optimization) is in progress.",
            es: "Presentaciones interactivas con un ejercicio en cada diapositiva (en inglés). Próximamente: módulos 4 (bloques) y 5 (familias de arquitecturas); el módulo 6 (optimización) está en construcción.",
          },
          materials: [
            {
              kind: "interactive",
              title: { en: "0 · Overview", es: "0 · Panorama general" },
              description: {
                en: "11 slides: the neuron, the levels of a network, data, layers, residuals, data shapes, training one neuron and the error landscape.",
                es: "11 diapositivas: la neurona, los niveles de una red, los datos, las capas, conexiones residuales, formas de los datos, entrenar una neurona y el paisaje del error.",
              },
              href: "/semillero/ia-atmosfera-oceano/slides/",
            },
            {
              kind: "interactive",
              title: { en: "1 · Data foundation", es: "1 · Fundamentos de datos" },
              description: {
                en: "25 slides: acquisition, quality control, encoding, transformations, missing data, splits, leakage, imbalance, labels, bias and governance.",
                es: "25 diapositivas: adquisición, control de calidad, codificación, transformaciones, datos faltantes, particiones, fuga de información, desbalance, etiquetas, sesgo y gobernanza.",
              },
              href: "/semillero/ia-atmosfera-oceano/slides/data-foundation.html",
            },
            {
              kind: "interactive",
              title: { en: "2 · Operations", es: "2 · Operaciones" },
              description: {
                en: "50 slides: thirty operations, one per slide, each with worked numbers and an interactive panel; step-by-step LSTM, self-attention and multi-head attention; a three-slide glossary of what each operation is and what it is for.",
                es: "50 diapositivas: treinta operaciones, una por diapositiva, cada una con un ejemplo numérico y un panel interactivo; LSTM, autoatención y atención multicabeza paso a paso; y un glosario de tres diapositivas con qué es y para qué sirve cada operación.",
              },
              href: "/semillero/ia-atmosfera-oceano/slides/operations.html",
            },
            {
              kind: "interactive",
              title: { en: "3 · Layers", es: "3 · Capas" },
              description: {
                en: "14 slides: layer types, output layers by task, LSTM/GRU gates, width and depth, parameter counts.",
                es: "14 diapositivas: tipos de capas, capas de salida según la tarea, compuertas LSTM/GRU, ancho y profundidad, conteo de parámetros.",
              },
              href: "/semillero/ia-atmosfera-oceano/slides/layers.html",
            },
            {
              kind: "interactive",
              title: { en: "6 · Optimization (in progress)", es: "6 · Optimización (en construcción)" },
              description: {
                en: "5 slides so far: training step by step with backpropagation, training vs held-out error and early stopping, and why random starts give different answers.",
                es: "5 diapositivas por ahora: el entrenamiento paso a paso con retropropagación, error de entrenamiento frente a datos reservados y parada temprana, y por qué distintos inicios aleatorios dan respuestas distintas.",
              },
              href: "/semillero/ia-atmosfera-oceano/slides/optimization.html",
            },
          ],
        },
        {
          title: { en: "Resources", es: "Recursos" },
          materials: [
            {
              kind: "data",
              title: { en: "AI papers catalog", es: "Catálogo de artículos de IA" },
              description: {
                en: "5,784 papers (1980–2026) on machine learning for weather, climate, ocean, sea ice, hydrology, energy and agriculture, ranked by citations, with search, filters, summaries, key reviews and BibTeX.",
                es: "5.784 artículos (1980–2026) de aprendizaje automático para tiempo, clima, océano, hielo marino, hidrología, energía y agricultura, ordenados por citas, con búsqueda, filtros, resúmenes, revisiones clave y BibTeX (en inglés).",
              },
              href: "/semillero/ia-atmosfera-oceano/papers/",
            },
            {
              kind: "interactive",
              title: { en: "How the field is changing", es: "Cómo está cambiando el campo" },
              description: {
                en: "Interactive analysis of the catalog: architectures, goals, training data, limitations and open problems over time.",
                es: "Análisis interactivo del catálogo: arquitecturas, objetivos, datos de entrenamiento, limitaciones y problemas abiertos en el tiempo (en inglés).",
              },
              href: "/semillero/ia-atmosfera-oceano/papers/eda.html",
            },
            {
              kind: "interactive",
              title: { en: "Where the strongest work is published", es: "Dónde se publica el trabajo más influyente" },
              description: {
                en: "Journal and conference assessment: which venues publish the most influential work, how that has changed, and what each one specializes in.",
                es: "Evaluación de revistas y conferencias: qué medios publican el trabajo más influyente, cómo ha cambiado y en qué se especializa cada uno (en inglés).",
              },
              href: "/semillero/ia-atmosfera-oceano/papers/journals.html",
            },
            {
              kind: "repo",
              title: { en: "Catalog source code and data", es: "Código y datos del catálogo" },
              description: {
                en: "Scripts, DuckDB database, BibTeX and the full exploratory analysis.",
                es: "Scripts, base de datos DuckDB, BibTeX y el análisis exploratorio completo.",
              },
              href: "https://github.com/carlosdhoyos/ai-in-atmospheric-and-oceanic-sciences",
            },
          ],
        },
        {
          title: { en: "Previous courses", es: "Cursos anteriores" },
          materials: [
            {
              kind: "notes",
              title: {
                en: "Introduction to AI and Machine Learning in Atmospheric Sciences · 2024-2",
                es: "Introducción a la IA y el aprendizaje automático en ciencias atmosféricas · 2024-2",
              },
              description: {
                en: "Course book from semester 2024-2, including student projects. Archived: not updated since December 2024.",
                es: "Libro del curso del semestre 2024-2, con los proyectos de los estudiantes (en inglés). Archivado: sin actualizar desde diciembre de 2024.",
              },
              href: "https://carlosdhoyos.github.io/intro_2_aiml_in_atmos_sciences/intro.html",
            },
          ],
        },
      ],
    },
  ] as StudyGroup[],
};

export type StudyGroup = {
  slug: string; // URL segment: lowercase, no spaces or accents
  name: L;
  summary?: L; // shown on the card and the group page
  about?: L; // longer description, group page only
  sections?: CourseSection[]; // projects, readings, notebooks... same format as courses
};

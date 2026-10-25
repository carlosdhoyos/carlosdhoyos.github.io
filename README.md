# carlosdhoyos.github.io

Personal site of Carlos D. Hoyos, built with Next.js (App Router), TypeScript and Tailwind CSS, exported as a static site and deployed to GitHub Pages.

## Editing content

All text (English and Spanish) lives in [`src/content/site.ts`](src/content/site.ts).

### Courses

Each entry in `courses` gets its own page at `/cursos/<slug>/` and a card in the Teaching section. Course materials are grouped in `sections`; each material links to:

- **a file in this repo** — put it in `public/cursos/<slug>/` and use `href: "/cursos/<slug>/file.pdf"`
- **anything else** — use the full URL (another GitHub repo, its GitHub Pages site, Colab, YouTube, Drive…). External links open in a new tab.

`kind` (`notes`, `slides`, `notebook`, `pdf`, `video`, `repo`, `data`, `link`) only picks the icon and label. There is a commented example in `site.ts`.

### Study group (semillero)

Each entry in `semillero.groups` works the same way: it gets a page at `/semillero/<slug>/` and uses the same `sections` / materials format. Files in this repo go in `public/semillero/<slug>/`.

Note: other repositories with GitHub Pages enabled are served at `https://carlosdhoyos.github.io/<repo-name>/`, so don't name a repository `cursos` or `semillero`.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in ./out
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `./out`.
In the repository's **Settings → Pages**, the source must be set to **GitHub Actions**.

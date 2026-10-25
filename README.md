# carlosdhoyos.github.io

Personal site of Carlos D. Hoyos, built with Next.js (App Router), TypeScript and Tailwind CSS, exported as a static site and deployed to GitHub Pages.

## Editing content

All text (English and Spanish) lives in [`src/content/site.ts`](src/content/site.ts). To list a course again, add it to the `courses` array there.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in ./out
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `./out`.
In the repository's **Settings → Pages**, the source must be set to **GitHub Actions**.

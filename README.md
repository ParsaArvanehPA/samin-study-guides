# StudyHub

A multi-course study platform. Nx monorepo of Angular apps, statically prerendered (SSG), served on GitHub Pages.

**Live**: https://parsaarvanehpa.github.io/samin-study-guides/ (once GitHub Pages is enabled in repo settings)

## What's here

- **`apps/landing`** — the course-selector homepage.
- **`apps/obgyn`** — the first course: 12 chapters of OB/GYN study material (bilingual Persian/English notes, original textbook figures, and an interactive self-test per chapter — 235 multiple-choice + 60 short-answer questions), plus reference pages (key numbers, glossary).
- **`apps/obgyn-v2`** — a from-scratch OB/GYN rebuild authored directly from the Williams Obstetrics 26th-edition PDF text (`source-material/williams-obstetrics-2022.pdf`) instead of the scanned notes `apps/obgyn` was built from; same structure, no figures, larger self-tests. Raw per-chapter source text lives in `source-material/obgyn-v2/raw/`.
- **`apps/newborn-care`** — a quiz-only course (no narrative chapter text) on critical care of the at-risk newborn, based on the ACoRN program. 8 chapters, 686 questions total, converted from standalone HTML question banks in `source-material/مراقبت بحرانی نوزاد در معرض خطر/` into the shared `ChapterData`/`QuizQuestion` model.
- **`libs/shared/theme`** — design tokens, fonts, dark/light theming, RTL base styles.
- **`libs/shared/ui`** — shared Angular components: course cards, chapter nav, callouts, figures, the quiz engine.
- **`libs/shared/models`** — TypeScript interfaces shared across apps and content files.
- **`scripts/assemble-deploy.mjs`** — builds every app with the right base-href for GitHub Pages and merges them into one deployable `dist-deploy/` tree.
- **`.github/workflows/deploy.yml`** — CI: builds and deploys `dist-deploy/` to GitHub Pages on every push to `main`.

Each `apps/obgyn/src/app/content/*.data.ts` file holds one chapter's full content (study notes + quiz), authored from the source transcripts in the separate `OBGYN/` archive — not duplicated here.

## Quick start

```bash
npm install
npx nx serve landing   # http://localhost:4200
npx nx serve obgyn     # serve separately to view the course app
```

## Build & deploy locally

```bash
npm run deploy:assemble   # builds both apps (prerendered) into dist-deploy/
npx serve dist-deploy     # preview exactly what GitHub Pages will serve
```

## Adding a new course

1. `npx nx g @nx/angular:application apps/<course-name> --style=scss --ssr=true`
2. Wire up its `project.json` build target the same way `apps/obgyn/project.json` is configured (`outputMode: "static"`, `stylePreprocessorOptions.includePaths` pointing at `libs/shared/theme/src/lib`).
3. Add an entry to `apps/landing/src/app/content/courses.ts` with `status: 'live'` and `href: '<course-name>/'`.
4. Add a build step for the new app in `scripts/assemble-deploy.mjs`.

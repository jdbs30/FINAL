# John Drae Santos Portfolio

A responsive portfolio built with Next.js App Router, React, and TypeScript. The homepage uses server components, with client components for navigation, project filters and dialogs, email copying, and scroll reveals.

## Development

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:8080.

## Production

```sh
npm run typecheck
npm run build
npm start
```

## Editing

- `app/page.tsx`: profile, education, skills, and experience.
- `lib/projects.ts`: project descriptions, implementation details, and technology tags.
- `components/`: interactive UI and illustrative project visuals.
- `app/globals.css`: responsive styles and reduced-motion support.
- `public/img/`: portfolio imagery.
- `public/resume/`: downloadable resume.

This Next.js application builds as a static export in `out/`. Its interactive React components work without a server. `npm start` previews that exported folder locally.

## Netlify deployment

Connect this Git repository to Netlify and deploy from the repository root. The included `netlify.toml` sets the build command to `npm run build`, the publish directory to `out`, and Node.js to version 22. The Next.js server adapter is skipped because this portfolio is fully static.

For an existing Netlify site, push these changes and trigger a new deploy. Keep the base directory empty (repository root). Publish `out`, not `.next`, `public`, or the source repository root. The build produces `out/index.html`, JavaScript, CSS, images, and the downloadable resume.

For manual drag-and-drop deployment, run `npm run build` locally, then upload the generated `out` folder. Its `index.html` must be at the root of the uploaded folder. Do not upload the source folder or `.next`. Netlify does not run a build for manual uploads.

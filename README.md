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

Deploy as a Next.js application on a compatible host, including Netlify or Vercel. The root HTML file is no longer the application entry point.

## Netlify deployment

Connect this Git repository to Netlify and deploy from the repository root. The included `netlify.toml` sets the build command to `npm run build`, the publish directory to `.next`, and Node.js to version 22. Netlify automatically applies its Next.js adapter.

For an existing Netlify site previously serving the HTML portfolio, redeploy after pushing the Next.js files and `netlify.toml`. Keep the base directory empty (repository root). Do not use `public` or the repository root as the publish directory.

Uploading this source folder or `.next` through Netlify's drag-and-drop deploy does not run the Next.js build or adapter. Use the Git integration for this configuration; manual static uploads require a separate static-export configuration and the generated `out` folder.

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

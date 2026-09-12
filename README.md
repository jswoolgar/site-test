# Monomedia

The Monomedia marketing site, built with [Astro](https://astro.build).

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Installs dependencies                       |
| `npm run dev`       | Starts local dev server at `localhost:4321` |
| `npm run build`     | Build the production site to `./dist/`      |
| `npm run preview`   | Preview the build locally before deploying  |

## Structure

```text
/
├── public/               static assets served as-is
├── src/
│   ├── components/       Header, Footer, ServiceCard
│   ├── layouts/           shared page shell (Layout.astro)
│   ├── pages/             index.astro, about.astro, contact.astro
│   └── styles/            global.css (design tokens, base styles)
└── netlify.toml           Netlify build config
```

Deploys automatically via Netlify on push to `main`.

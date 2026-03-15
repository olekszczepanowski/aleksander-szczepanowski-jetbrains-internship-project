# Kotlin Homepage — React Router 7 Migration

Migration of the [kotlinlang.org](https://kotlinlang.org) homepage from a legacy React + Flask setup to **React Router 7 Framework Mode** with **Server-Side Rendering (SSR)**.

This project is a solution for the [JetBrains Internship 2026 test assignment](https://github.com/JetBrains/kotlin-web-site-jetsites-internship-2026).

## Running

### Via pnpm

Install the dependencies:

```bash
pnpm i
```

Start the development server:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173`.

### Via docker

```bash
docker compose up
```

Your application will be available at `http://localhost:3000`.

## Implementation

### Project Structure

```
app/
├── components/
│   ├── common/                    # Shared layout primitives (Container, Section)
│   ├── header/
│   ├── header-section/
│   ├── why-kotlin-section/
│   ├── usage-section/
│   ├── latest-from-kotlin-section/
│   ├── start-section/
│   └── footer/
├── hooks/                         # Custom React hooks
├── routes/
│   └── home.tsx                   # Homepage route
├── root.tsx                       # App shell, meta tags, error boundary
├── routes.ts                      # Route configuration
└── app.css                        # Global styles & Tailwind imports
```

### Approach

Looking at the test task repository, I noticed it uses SCSS. After going through the style files, I saw that the styles could be easily migrated to Tailwind, as many of them were utility-like classes for grid layout (e.g. `kto-grid`, `kto-col`, `kto-grid-gap`). I decided to remove SCSS and use Tailwind instead, since it's the default CSS framework provided by `create-react-router@latest`.

After starting the migration, I noticed some issues with the header and footer provided by `@jetbrains/kotlin-web-site-ui`. The library turned out to be incompatible with Vite's SSR and React 19, causing `ReactCurrentOwner` errors during server-side rendering. After several unsuccessful attempts to work around this (via Vite's `ssr.noExternal` and `optimizeDeps`), I decided to rewrite both components from scratch, matching the original design while ensuring full SSR compatibility. I also noticed that in the legacy website from the task repository, the header's nav menu wasn't functional, clicking the menu button had no effect. I added a custom mobile menu implementation, following the UI from kotlinlang.org.

I used the latest versions of `@rescui` components. Some of them have a slightly different appearance compared to the legacy website; for example, the default button has different colour. However, I decided to add custom styling for `<a>` elements specifically, as the difference was quite noticeable. They now behave the same as in the legacy website. For code blocks, I used the latest version of `highlight.js`. I noticed some colour differences, but the legacy project used `highlight.js/styles/github.css` with the Kotlin language module, so I decided to stick with that setup. If matching the legacy styling more closely were needed, we could create a custom theme following the [highlight.js theme guide](https://highlightjs.readthedocs.io/en/latest/theme-guide.html).

I've added ESLint and Prettier configs to the project. These are standard across modern projects, ensuring consistent code style and catching common issues early. I also set up a CI pipeline that runs on every push to `master` and on pull requests — it checks formatting, linting, type-checking, and builds the application to make sure nothing is broken before merging.

Meta tags (title, description, twitter etc.) are handled using React 19's built-in `<meta>` and `<title>` elements directly in components, which is the recommended approach over React Router's `meta` export.

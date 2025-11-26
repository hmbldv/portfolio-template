# Portfolio Template

A fast, minimal portfolio site template built with Astro featuring dark mode, custom certification badges, and a clean design focused on performance and simplicity.

**Template Repository**: [github.com/hmbldv/portfolio-template](https://github.com/hmbldv/portfolio-template)

## Features

- **100/100 Lighthouse performance** - Optimized for speed and SEO
- **Dark mode** - System preference detection with localStorage persistence
- **Responsive design** - Mobile-first with CSS Grid layouts
- **Projects showcase** - Technical writeups with category filtering
- **Blog & Wiki** - Markdown/MDX support with auto-generated table of contents
- **Custom certification badges** - Credly integration without slow iframes
- **RSS feed** - Automatic feed generation for blog subscribers
- **Type-safe content** - Astro Content Collections with TypeScript validation
- **Zero-config deployment** - Vercel/Netlify auto-deploy from GitHub

### New in v2.0

- **Project versioning system** - Archive previous versions of project writeups with version history dropdown
- **Commit history changelog** - Display git commits with GitHub links on project pages
- **Documentation-style layout** - Two-column layout with sticky TOC sidebar
- **Mermaid diagram support** - Render flowcharts and diagrams in Markdown
- **Breadcrumb navigation** - Contextual navigation on project and blog pages

## Tech Stack

- **[Astro](https://astro.build)** 5.16.0 - Static site generator with zero JS by default
- **TypeScript** - Type safety across components and content
- **CSS Grid** - Responsive layouts without frameworks
- **MDX** - Enhanced Markdown with component support

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the template
git clone https://github.com/hmbldv/portfolio-template.git my-portfolio
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Customization Guide

### 1. Site Metadata

**File**: `src/consts.ts`

```typescript
export const SITE_TITLE = 'Your Name | Portfolio';
export const SITE_DESCRIPTION = 'Your professional description here.';
```

### 2. Personal Pages

**Files to update**:
- `src/pages/index.astro` - Homepage with your name, title, and intro
- `src/pages/about.astro` - About page with your bio and education
- `src/components/Header.astro` - Social links (LinkedIn, GitHub, email)
- `src/components/Footer.astro` - Copyright notice

### 3. Content Collections

Replace example content with your own:

```bash
# Create your own content in these directories:
src/content/blog/       # Blog posts (.md)
src/content/projects/   # Project writeups (.md)
src/content/wiki/       # Documentation pages (.md)
```

### 4. Certifications

**File**: `src/data/certifications.ts`

```typescript
export const certifications: Certification[] = [
  {
    name: "Your Certification Name",
    issuer: "Issuing Organization",
    credlyUrl: "https://www.credly.com/badges/your-badge-id",
    dateIssued: "Month Year",
    expirationDate: "Month Year",
    badgeImageUrl: "https://images.credly.com/images/your-badge-id/image.png",
  },
];
```

### 5. Assets

- `public/favicon.svg` - Replace with your own favicon
- Update any images in your content posts

## Content Schemas

### Project Frontmatter

```yaml
---
title: "Project Name"
description: "One-line description"
category: "web-development"
tags: ["tag1", "tag2"]
status: "launched"  # in-development, launched, archived
version: "v2.0"
versionStatus: "current"  # current or previous
startedDate: 2025-01-15
launchedDate: 2025-01-20
techStack: ["Tech1", "Tech2"]
repoUrl: "https://github.com/..."
liveUrl: "https://..."

# Optional: Version history (for projects with archived versions)
majorVersions:
  - version: "v1.0"
    date: 2025-01-15
    summary: "Initial release with core features"
    slug: "project-name/v1-0"

# Optional: Commit history changelog
changelog:
  - commit: "abc1234"
    date: 2025-01-20
    message: "feat: add new feature"
    body: "Optional longer description"
    url: "https://github.com/user/repo/commit/abc1234..."
    repo: "user/repo"
---
```

### Blog Post Frontmatter

```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: "Jan 01 2025"
heroImage: "/blog-placeholder-1.jpg"
---
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Astro components
│   ├── content/         # Markdown content collections
│   │   ├── blog/
│   │   ├── projects/
│   │   └── wiki/
│   ├── data/            # Structured data (certifications)
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   └── styles/          # Global styles
├── astro.config.mjs
└── package.json
```

## Commands

| Command           | Action                                |
|:------------------|:--------------------------------------|
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Start dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`    |
| `npm run preview` | Preview production build locally      |

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel auto-detects Astro and configures build settings
4. Deployments happen automatically on push to `main`

### Netlify

1. Push to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## Customization

### Color Scheme

Edit CSS custom properties in `src/styles/global.css`:

```css
:root {
  --accent: #4a6741;        /* Primary accent color */
  --accent-dark: #3a5231;   /* Darker accent for hover states */
}

:root.dark {
  --bg-primary: #0f1410;    /* Dark mode background */
}
```

### Typography

The site uses **JetBrains Mono** monospace font. Update in `src/styles/global.css`.

## Features Breakdown

### Dark Mode
- System detection with `prefers-color-scheme`
- localStorage persistence
- FOUC prevention with inline script
- Smooth toggle transitions

### Table of Contents
- Auto-generated from H2/H3 headings
- Sticky sidebar on desktop
- Scroll spy with active highlighting

### Certification Badges
- Custom component (no slow Credly iframes)
- Responsive grid layout
- "In Progress" badge support

### Project Versioning (v2.0)
- Archive previous versions as `v1-0.md` files in project folders
- Version history dropdown on project pages
- "Viewing Previous Version" notice with link to current
- Supports semantic versioning display

### Commit History (v2.0)
- Display git commits as changelog entries
- Links to GitHub commits
- Shows commit hash, date, message, and optional body
- Repo name badge for multi-repo projects

### Mermaid Diagrams (v2.0)
- Render flowcharts, sequence diagrams, etc.
- Just use standard Mermaid code blocks in Markdown
- Client-side rendering with lazy loading

## New Components (v2.0)

| Component | Purpose |
|:----------|:--------|
| `Breadcrumbs.astro` | Navigation context (Home > Projects > Name) |
| `Changelog.astro` | Commit history display |
| `Mermaid.astro` | Diagram rendering |
| `VersionHistory.astro` | Version dropdown with history |
| `PreviousVersionBanner.astro` | Archived version notice |

## License

MIT License - Feel free to use this template for your own portfolio.

## Credits

- **Framework**: [Astro](https://astro.build)
- **Fonts**: JetBrains Mono (monospace)

---

**Built with** [Astro](https://astro.build)

*Last synced: 2025-11-26*

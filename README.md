# monabbir.dev // systems_portfolio

```text
  __  __  ___  _   _    _    ____  ____  ___ ____
 |  \/  |/ _ \| \ | |  / \  | __ )| __ )|_ _|  _ \
 | |\/| | | | |  \| | / _ \ |  _ \|  _ \ | || |_) |
 | |  | | |_| | |\  |/ ___ \| |_) | |_) || ||  _ <
 |_|  |_|\___/|_| \_/_/   \_\____/|____/|___|_| \_\
```

High-performance, brutalist personal portfolio and project telemetry engine. Engineered with Next.js (App Router), TypeScript, Tailwind CSS, Prisma ORM, and PostgreSQL.

---

## 01. System Architecture & Tech Stack

Designed with a focus on mechanical sympathy, high-contrast typography, and deterministic UI states:

- **Runtime & Package Manager:** Bun
- **Application Framework:** Next.js (App Router, Server Components & Server Actions)
- **Language:** TypeScript (Strict mode)
- **Styling & Design System:** Tailwind CSS (Monochrome, brutalist grid)
- **Motion & Layout:** Framer Motion (Dynamic layout morphing for project tags)
- **Database & ORM:** PostgreSQL managed via Prisma ORM
- **Typography:** Monospace hierarchy, tabular telemetry, and high-contrast system glyphs

---

## 02. Core Modules & Directory Layout

```text
├── prisma/
│   ├── schema.prisma        # Relational models (Project, Tag, Admin)
│   └── migrations/          # Version-controlled database migrations
├── public/
│   └── assets/              # Static media, icons, and profile imagery
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root shell, font loaders, global scroll-smooth
│   │   ├── page.tsx         # Main entry point (Hero, About, Experience, Footer)
│   │   ├── admin/           # Secured content creation & project manager
│   │   └── projects/
│   │       └── [slug]/      # Dynamic project retrospectives & blog renderer
│   ├── components/
│   │   ├── ProjectShowcase  # Client-side animated tag filter & project grid
│   │   ├── ExperienceList   # Chronological engineering & leadership timeline
│   │   └── MarkdownRenderer # Markdown engine with terminal styling
│   └── lib/
│       └── prisma.ts        # Singleton Prisma client instance
├── package.json
└── tsconfig.json
```

---

## 03. Key Features

### Dynamic Project Repository (`repository()`)

- **State-Driven Tag Filtering:** Smooth multi-tag selection powered by Framer Motion's `layoutId` and `AnimatePresence`.
- **Deep Architectural Logs:** Full Markdown project breakdowns detailing technical stacks, engineering constraints, and system design retrospectives.

### Telemetry & Invariants (`about()`)

- **Engineering Invariants Matrix:** Core technical tenets prioritizing determinism, memory boundaries, and strict type safety.
- **Dual-Track Context:** Intersects software architecture (C11, Java/Spring Boot, Next.js) with physical discipline (Kyokushin Karate 2nd Dan).

### Career Telemetry (`experience()`)

- Comprehensive timeline detailing venture leadership (Suika Soft LTD), technical mentorship (Lassonde BEST Contest), academic representation, and athletic organization.

### Dedicated Management Console (`/admin`)

- Administrative dashboard for creating, modifying, and managing project artifacts directly in PostgreSQL.

---

## 04. Getting Started

### Prerequisites

- Bun (v1.0.0 or higher) or Node.js (v18.17+)
- A running PostgreSQL instance (Neon, Supabase, or Local Docker container)

### 1. Clone & Install

```bash
git clone https://github.com/monabbirbhuiyan/portfolio.git
cd portfolio
bun install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```
# PostgreSQL connection string
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require&uselibpqcompat=true"

# Optional: Admin Authentication Secrets
ADMIN_SECRET="your-secure-passphrase"
```

### 3. Initialize Database Schema

Generate the Prisma Client and apply migrations:

```bash
bun x prisma generate
bun x prisma db push
```

### 4. Start Development Server

```bash
bun dev
```

Open `http://localhost:3000` to inspect the application.

---

## 05. Production Build

To verify type safety, validate schema generation, and compile the static/SSR build artifacts:

```bash
bun run build
```

The build script executes `prisma generate && next build` to guarantee runtime synchronization.

---

## 06. License

Distributed under the MIT License. See `LICENSE` for more information.

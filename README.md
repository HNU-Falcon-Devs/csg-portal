# CSG Portal Concept

An independent, unofficial prototype exploring a clear and accessible public-facing portal for student government information.

> **Unofficial project:** This repository is not an official Holy Name University or Central Student Government service and does not claim institutional affiliation.

## Current status

The project is in its foundation phase. It provides a production-oriented Next.js structure, shared application shell, route placeholders, automated tests, and continuous integration. It does not contain verified institutional content or operational product features.

Search-engine indexing is disabled by default while the project remains an unofficial prototype.

## Goals

- Establish an accessible, responsive foundation for a public information website.
- Keep institutional content traceable and verified before publication.
- Prepare a maintainable path toward a legislation-focused information portal.
- Avoid infrastructure and abstractions until product requirements justify them.

## Technology stack

- Next.js App Router
- React
- TypeScript in strict mode
- Tailwind CSS
- npm
- Vitest and React Testing Library
- ESLint and Prettier
- Node.js 24

## Local setup

Requirements:

- Node.js 24
- npm, included with Node.js

After cloning the repository:

```bash
cd csg-portal
npm ci
npm run dev
```

Open `http://localhost:3000` in a browser.

## Available scripts

| Command                 | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| `npm run dev`           | Start the local development server             |
| `npm run build`         | Create a production build                      |
| `npm run lint`          | Run ESLint                                     |
| `npm run typecheck`     | Check TypeScript without emitting files        |
| `npm test`              | Run the test suite once                        |
| `npm run test:coverage` | Run tests and generate a local coverage report |
| `npm run format`        | Format supported files with Prettier           |
| `npm run format:check`  | Verify formatting without changing files       |

Coverage output is written to `coverage/` and is intentionally excluded from Git.

## Project structure

```text
src/
├── app/                 # Routes, metadata, and global styles
├── components/
│   ├── layout/          # Shared application shell
│   └── ui/              # Small reusable presentation components
├── data/                # Static navigation and future verified content
├── lib/                 # Site-level configuration
├── test/                # Shared test setup
└── types/               # Shared TypeScript contracts
```

The initialized routes are `/`, `/government`, `/legislation`, `/transparency`, `/news`, and `/contact`.

See [Architecture](docs/architecture.md) for design boundaries and [Development](docs/development.md) for the day-to-day workflow.

## Testing

The baseline suite checks homepage rendering, shared navigation, the unofficial-project disclaimer, and the keyboard skip-link contract.

```bash
npm test
npm run test:coverage
```

Tests are intentionally focused on meaningful behavior rather than a target coverage percentage. Browser end-to-end testing is deferred until interactive product flows exist.

## Continuous integration

GitHub Actions runs on pull requests targeting `main` and pushes to `main`. It installs the locked dependencies with `npm ci` on Node.js 24, then checks formatting, lint rules, types, tests, and the production build. The workflow does not deploy the application.

Dependabot checks npm dependencies and GitHub Actions weekly. Dependency updates are reviewed through pull requests and are not automatically merged.

## Roadmap

The intended long-term sections are:

1. Home
2. Government and officials
3. Legislation
4. Transparency
5. News and events
6. Contact and student concerns

The future flagship feature is the legislation portal. It may eventually present verified resolutions, bills, acts, authors, committees, statuses, dates, and associated documents with search and filtering. Its data model, content workflow, and interfaces are intentionally not implemented in this foundation phase.

## Development workflow

1. Create a focused branch from `main`.
2. Make the smallest coherent change and add relevant tests.
3. Run `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
4. Commit using the Conventional Commits format.
5. Open a pull request describing the change, verification, and known limitations.

Do not add institutional facts, contact details, policies, financial information, or official visual assets without an approved and verifiable source.

## Licensing

No license has been selected. Until one is added, no permission to copy, modify, or redistribute the project is granted by this repository.

# Development guide

## Prerequisites

- Node.js 24.15.0 or later within the Node 24 release line
- npm, included with Node.js
- Git

Install exactly from the lockfile:

```bash
npm ci
```

## Local development

Start the development server with:

```bash
npm run dev
```

Routes are implemented under `src/app`. Shared navigation entries live in `src/data/navigation.ts`; add a route and its navigation entry together when both are intended to be public.

## Content safeguards

This project is unofficial. Placeholder content must remain neutral and must not be presented as an institutional fact.

Do not invent or add unverified:

- officials or organizational roles
- legislation or legislative statuses
- announcements or events
- contact details
- statistics or financial information
- school policies

Do not copy official logos, seals, or branding assets into the repository.

## Quality checks

Run the complete local validation sequence before opening a pull request:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

Use `npm run format` to apply formatting. Use `npm run test:coverage` when a coverage report is useful during test review; the project does not enforce an arbitrary coverage threshold.

## Tests

Place focused component tests beside the component or route they exercise. Query rendered output by accessible role or visible text wherever possible. Test user-facing contracts rather than implementation details.

The shared test initialization is in `src/test/setup.ts`, and Vitest configuration is in `vitest.config.ts`.

## Branches and commits

Ordinary contributors should follow the fork-based workflow in [CONTRIBUTING.md](../CONTRIBUTING.md): work on focused branches in a personal fork, based on the current upstream `main`, and submit changes back through pull requests.

Use Conventional Commits, for example:

```text
feat: add legislation search controls
fix: preserve keyboard focus after navigation
test: cover empty legislation results
docs: clarify content verification workflow
```

Keep commits coherent and avoid combining unrelated refactors with product changes.

## Pull requests

A pull request should explain:

- the problem and scope
- the architecture or behavior changed
- tests and manual checks performed
- known limitations and deferred work

Contributor pull requests target `HNU-Falcon-Devs/csg-portal:main` from branches in personal forks. CI must pass before review, and maintainers control merging into `main`. Deployment and automatic merging are not part of the repository workflow.

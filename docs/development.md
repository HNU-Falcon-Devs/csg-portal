# Development guide

## Prerequisites

- Node.js 24
- Corepack
- Git

Enable the package-manager shim once, then install exactly from the lockfile:

```bash
corepack enable
yarn install --immutable
```

The repository pins its Yarn release through the `packageManager` field in `package.json` and uses the `node-modules` linker for broad editor and framework compatibility.

## Local development

Start the development server with:

```bash
yarn dev
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
yarn format:check
yarn lint
yarn typecheck
yarn test
yarn build
```

Use `yarn format` to apply formatting. Use `yarn test:coverage` when a coverage report is useful during test review; the project does not enforce an arbitrary coverage threshold.

## Tests

Place focused component tests beside the component or route they exercise. Query rendered output by accessible role or visible text wherever possible. Test user-facing contracts rather than implementation details.

The shared test initialization is in `src/test/setup.ts`, and Vitest configuration is in `vitest.config.ts`.

## Branches and commits

Create a focused branch from `main` and use Conventional Commits, for example:

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

Pull requests target `main`. CI must pass before review. Deployment and automatic merging are not part of the repository workflow.

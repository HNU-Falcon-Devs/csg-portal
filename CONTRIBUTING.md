# Contributing

Thanks for contributing to the CSG Portal concept. This is an independent, unofficial project and is not an official Holy Name University or Central Student Government service.

## Prerequisites

- Node.js 24.15.0 or later within the Node 24 release line
- npm
- Git

## Contribution workflow

Use a fork-based workflow. Ordinary contributors should not push feature branches directly to the upstream organization repository.

1. Fork `HNU-Falcon-Devs/csg-portal`.
2. Clone your personal fork.
3. Add the upstream repository as a remote if you want an easy way to keep your fork synced.
4. Update from the current upstream `main`, then create a focused branch in your fork.
5. Make the smallest coherent change. Add or update relevant tests when behavior changes.
6. Install dependencies and start development as needed:

   ```bash
   npm ci
   npm run dev
   ```

7. Run the project validation sequence:

   ```bash
   npm run format:check
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```

   Use `npm run test:coverage` when coverage information is useful during review.

8. Commit coherent changes using Conventional Commits.
9. Push the branch to your personal fork.
10. Open a pull request targeting `HNU-Falcon-Devs/csg-portal:main`.
11. GitHub Actions `Verify` must pass.
12. Maintainers review the pull request and control merging into `main`.

## Branches and commits

Keep branches focused and avoid unrelated refactors. Do not bundle independent product, dependency, infrastructure, or architecture changes when they can be reviewed separately.

Use Conventional Commits, for example:

```text
feat: add legislation search controls
fix: preserve keyboard focus after navigation
test: cover empty legislation results
docs: clarify contribution workflow
```

## Content safeguards

Do not fabricate or present unverified institutional information as fact.

Do not add unverified:

- officials or organizational roles
- legislation or legislative status
- announcements or events
- contact details
- statistics
- financial information
- school policies

Do not copy official logos, seals, branding, or other institutional assets without verified authorization.

## Pull requests

Keep each pull request focused and explain what changed, why it changed, how it was verified, and any known limitations or deferred work. Include screenshots when a change affects the UI.

# Architecture

## Purpose

This document records the initial technical boundaries for the CSG Portal Concept. The current application is an infrastructure foundation, not an operational institutional service.

## Application structure

The project uses the Next.js App Router. `src/app` owns routing, route metadata, the root document, and global styles. The root layout delegates its visible structure to `SiteShell`, which keeps the header, navigation, main landmark, skip link, and footer consistent across routes.

Responsibilities are deliberately narrow:

- `src/components/layout` contains components that define the shared page frame.
- `src/components/ui` contains small reusable presentation elements.
- `src/data` contains static, reviewable site data such as navigation.
- `src/lib` contains application-wide configuration without framework-independent service layers.
- `src/types` contains shared TypeScript contracts when a type crosses module boundaries.

Route-specific components should remain beside their routes until reuse is demonstrated. Empty repositories, service objects, and generalized content abstractions should not be introduced speculatively.

## Rendering and content

The initialized pages are statically rendered. They contain neutral route descriptions only; they are not a source of institutional facts.

Any future factual content must have a defined verification and ownership process before it is published. Official logos, seals, and copied branding are outside the scope of the prototype.

## Search indexing

Indexing is disabled in two layers:

1. Root metadata emits `noindex` and `nofollow` directives.
2. `src/app/robots.ts` disallows crawling.

Both behaviors read `searchIndexingEnabled` from `src/lib/site-config.ts`. Formal adoption would require an explicit review before changing that single configuration value, including confirmation that all published content and affiliation language are accurate.

## Accessibility baseline

The shared shell uses native landmarks and a labeled navigation element. It includes a keyboard-visible skip link, a focusable main target, visible focus styles, ordered headings, responsive wrapping, and high-contrast neutral colors. Semantic HTML should remain the default; ARIA should only be added when native elements cannot express the required behavior.

## Testing boundary

Vitest and React Testing Library cover stable user-facing contracts in the shared shell. Unit and component tests should grow alongside real behavior. End-to-end tooling is deferred until the application has interactive flows whose integration risk justifies it.

## Future legislation portal

Legislation is the expected flagship section. Future discovery may define records for resolutions, bills, acts, authors, committees, legislative status, relevant dates, associated documents, search, and filters.

No data model or persistence design has been selected. Those decisions depend on verified content sources, editorial ownership, privacy requirements, and an adoption path. Databases, authentication, administrative interfaces, content management systems, and external APIs are therefore intentionally absent.

## Operational boundaries

The repository currently has no deployment configuration, analytics, authentication, backend service, or external API integration. Continuous integration verifies repository quality but does not publish or deploy the application.

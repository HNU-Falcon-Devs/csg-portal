import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = { title: "Legislation" };

export default function LegislationPage() {
  return (
    <PageIntro
      description="This route is reserved for the future legislation portal. Legislative records, documents, search, and filtering are intentionally deferred."
      title="Legislation"
    />
  );
}

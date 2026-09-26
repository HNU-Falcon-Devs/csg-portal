import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = { title: "Government" };

export default function GovernmentPage() {
  return (
    <PageIntro
      description="This route is reserved for a future overview of government structure and verified officials. No institutional information has been added yet."
      title="Government"
    />
  );
}

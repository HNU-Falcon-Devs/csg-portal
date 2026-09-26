import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = { title: "Transparency" };

export default function TransparencyPage() {
  return (
    <PageIntro
      description="This route is reserved for future verified transparency resources. No financial, policy, or statistical information has been added."
      title="Transparency"
    />
  );
}

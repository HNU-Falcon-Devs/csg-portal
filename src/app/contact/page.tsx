import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageIntro
      description="This route is reserved for a future contact and student concerns experience. No contact details or submission service are available."
      title="Contact and student concerns"
    />
  );
}

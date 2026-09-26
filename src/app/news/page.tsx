import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = { title: "News & Events" };

export default function NewsPage() {
  return (
    <PageIntro
      description="This route is reserved for future verified news and event information. No announcements or events have been published."
      title="News & Events"
    />
  );
}

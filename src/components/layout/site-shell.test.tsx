import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteShell } from "@/components/layout/site-shell";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";

describe("SiteShell", () => {
  it("provides working links for every initialized route", () => {
    render(
      <SiteShell>
        <h1>Test page</h1>
      </SiteShell>,
    );

    const navigation = screen.getByRole("navigation", {
      name: /primary navigation/i,
    });

    for (const item of primaryNavigation) {
      expect(
        within(navigation).getByRole("link", { name: item.label }),
      ).toHaveAttribute("href", item.href);
    }
  });

  it("shows the global disclaimer and a skip link to the focusable main area", () => {
    render(
      <SiteShell>
        <h1>Test page</h1>
      </SiteShell>,
    );

    expect(screen.getByText(siteConfig.disclaimer)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /skip to main content/i }),
    ).toHaveAttribute("href", "#main-content");

    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("id", "main-content");
    expect(main).toHaveAttribute("tabindex", "-1");
  });
});

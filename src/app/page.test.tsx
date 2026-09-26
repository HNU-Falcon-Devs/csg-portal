import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the foundation overview", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /a clear starting point for student government information/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/foundation phase/i)).toBeInTheDocument();
  });
});

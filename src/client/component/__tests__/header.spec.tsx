import Header from "../header";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Test Header", () => {
  it("should render intercom logo in header", () => {
    render(<Header />);
    const intercomLogo = screen.getByRole("img", {
      name: "Intercom Logo",
    });
    expect(intercomLogo).toBeInTheDocument();
  });
});

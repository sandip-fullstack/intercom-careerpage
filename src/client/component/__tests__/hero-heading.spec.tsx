import HeroHeading from "../hero-heading";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Test Hero Banner", () => {
  it("should render correct text and link tag in hero banner", () => {
    render(<HeroHeading />);
    const careersText = screen.getByText(/Careers at Intercom/i);
    const careersLearnText = screen.getByText(/Learn about working at Intercom/i);
    expect(careersText).toBeInTheDocument();
    expect(careersLearnText).toBeInTheDocument();
    expect(screen.getByText("Careers at Intercom").nextElementSibling?.children[0]).toHaveAttribute("href", "/careers/culture");
  });
});

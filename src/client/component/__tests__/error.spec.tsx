import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../../App";


jest.mock("react-query", () => ({
  useQuery: jest.fn(() => ({
    isFetching: false,
    error: "Something wrong",
    data: null
  })),
}));

describe("Error screen", () => {
  it("should render a loader while data is being fetched", async () => {
    render(<App />);
    expect(await screen.findByRole("heading", { name: /Error while loading/i})).toBeInTheDocument()
  });
});


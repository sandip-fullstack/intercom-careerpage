import { render } from "@testing-library/react";
import React from "react";
import App from "../../../App";


jest.mock("react-query", () => ({
  useQuery: jest.fn(() => ({
    isFetching: true,
    error: null,
    data: null
  })),
}));

describe("Loader", () => {
  it("should render a loader while data is being fetched", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName("loader").length).toBe(1);
  });
});


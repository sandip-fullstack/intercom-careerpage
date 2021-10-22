import { render, screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../../../App";
import { mockOffices } from "../mocks/offices-mock";
import useOffices from "../../component/hooks/useOffices";
import useRolesForOffice from "../hooks/useRolesForOffice";
import { QueryClientProvider, QueryClient } from "react-query";
import { chicagoMocks } from "../mocks/chicago-office";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
});

jest.mock("../../component/hooks/useOffices");
jest.mock("../../component/hooks/useRolesForOffice");

describe("loads and displays 5 office locations", () => {
  beforeEach(() => {
    useOffices.mockReturnValue({
      isFetching: false,
      data: mockOffices,
      error: null
    });
    useRolesForOffice.mockReturnValue({
      isFetching: false,
      data: chicagoMocks,
      error: null
    });
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
  })
  it("should render all 5 locations and also correct headings and title/body text", async () => {
    expect(await screen.findByText("Our teams are all over the globe")).toBeInTheDocument();
    expect(await screen.findByText("Check out what each city and office has to offer.")).toBeInTheDocument();
    const listOfOffices = await screen.findByRole("list", {
      name: /location-content/i,
    });
    const { getAllByRole } = within(listOfOffices);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(5);

    const firstItem = items[0];
    const titleText = within(firstItem).getByText("Chicago");
    const bodyText = within(firstItem).getByText("Our Chicago office is home to both Customer Support and Sales.");
    expect(titleText).toBeInTheDocument();
    expect(bodyText).toBeInTheDocument();
  });
  it("should render 5 location filters and select/deselect appropiately", async () => {
    const listOfOffices = await screen.findByRole("list", {
      name: /listing-location/i,
    });
    const { getAllByRole } = within(listOfOffices);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(5);
    expect(items[0]).toHaveClass("active");
    expect(items[1]).not.toHaveClass("active");
    fireEvent.click(items[1]);
    expect(items[1]).toHaveClass("active");
  });

  it("should render a search bar and displays an error when no match", async () => {
    const input = await screen.findByTestId("search-input");
    expect(input).toBeInTheDocument();
    userEvent.type(input, "Some random text");
    const noResultsImage = await screen.findByRole("img", {
      name: "No Results found",
    });
    expect(noResultsImage).toBeInTheDocument();
    expect(await screen.findByText("There were no search results")).toBeInTheDocument();
    expect(await screen.findByText("Please check your spelling or use different keywords.")).toBeInTheDocument();
  });
  it("should only filter out the search result also handle blank input", async () => {
    const inputEl = await screen.findByTestId("search-input");
    userEvent.type(inputEl, "Business Development Representative");
    const listingsSection = await screen.findByTestId("listings");
    expect(listingsSection.children.length).toBe(1);
    fireEvent.change(inputEl, {target: {value: ""}});
    expect(inputEl.textContent).toBe("");
  });
  it("should show error when API call fails for an office", async () => {
    useRolesForOffice.mockReturnValue({
      isFetching: false,
      data: null,
      error: "error"
    });
    render(<App />);
    expect(await screen.findByRole("heading",
      { name: /Something went wrong. Please try again later/i})).toBeInTheDocument()
  });
  it("should show Loader when API call is in progress for an office", async () => {
    useRolesForOffice.mockReturnValue({
      isFetching: true,
      data: null,
      error: null
    });
    const { container } = render(<App />);
    expect(container.getElementsByClassName("loader").length).toBe(1);
  });
});

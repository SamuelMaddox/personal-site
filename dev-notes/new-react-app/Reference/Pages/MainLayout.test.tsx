import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

jest.mock("../Modules", () => ({
  MainHeader: () => <div>Mock MainHeader</div>,
}));

jest.mock("./Common", () => ({
  HomePage: () => <div data-testid="MockHomePage">Mock HomePage</div>,
  NotFoundPage: () => <div data-testid="MockNotFoundPage">Mock HomePage</div>,
}));

describe("=== Pages => MainLayout ===", () => {
  it("Renders <HomePage /> without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByTestId("MockHomePage")).toBeInTheDocument();
    expect(screen.queryByTestId("MockNotFoundPage")).not.toBeInTheDocument();
  });

  it("Renders <NotFoundPage /> without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/not-found"]}>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByTestId("MockNotFoundPage")).toBeInTheDocument();
    expect(screen.queryByTestId("MockHomePage")).not.toBeInTheDocument();
  });
});

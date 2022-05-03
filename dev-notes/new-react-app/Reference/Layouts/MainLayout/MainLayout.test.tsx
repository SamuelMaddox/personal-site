import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { homePageConfig, notFoundPage } from "../../Config/Pages";
import { MainLayout } from "./MainLayout";

describe("=== Layouts => MainLayout ===", () => {
  it("Should render <HomePage /> without crashing when route is '/'", async () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[homePageConfig.route]}>
          <MainLayout />
        </MemoryRouter>
      </HelmetProvider>
    );
    await waitFor(() => expect(document.title).toEqual(homePageConfig.title));
  });

  it("Should render <NotFoundPage /> without crashing when there is no matching route", async () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/not-found"]}>
          <MainLayout />
        </MemoryRouter>
      </HelmetProvider>
    );
    await waitFor(() => expect(document.title).toEqual(notFoundPage.title));
  });
});

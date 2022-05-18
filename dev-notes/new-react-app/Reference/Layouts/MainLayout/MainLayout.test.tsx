import { waitFor } from "@testing-library/react";
import { homePageConfig, notFoundPage } from "../../Config/Pages";
import { renderLayout } from "../../Utils/TestUtils/RenderLayout";
import { MainLayout } from "./MainLayout";

describe("=== MainLayout ===", () => {
  it("Should render <HomePage /> without crashing when route is '/'", async () => {
    renderLayout(<MainLayout />, {
      initialEntries: [homePageConfig.route],
    });
    await waitFor(() => expect(document.title).toEqual(homePageConfig.title));
  });

  it("Should render <NotFoundPage /> without crashing when there is no matching route", async () => {
    renderLayout(<MainLayout />, {
      initialEntries: ["/not-found"],
    });
    await waitFor(() => expect(document.title).toEqual(notFoundPage.title));
  });
});

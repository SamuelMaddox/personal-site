import { waitFor } from "@testing-library/react";
import { homePageConfig } from "../../../Config/Pages";
import { renderPage } from "../../../Utils/TestUtils/RenderPage";
import { HomePage } from "./HomePage";

describe("=== HomePage ===", () => {
  it("Should render without crashing", async () => {
    renderPage(<HomePage />);
  });

  it("Should display the correct page title as the browser title", async () => {
    renderPage(<HomePage />);
    await waitFor(() => expect(document.title).toEqual(homePageConfig.title));
  });
});

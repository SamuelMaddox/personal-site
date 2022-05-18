import { waitFor } from "@testing-library/react";
import { forbiddenPage } from "../../../Config/Pages";
import { renderPage } from "../../../Utils/TestUtils/RenderPage";
import { ForbiddenPage } from "./ForbiddenPage";

describe("=== ForbiddenPage ===", () => {
  it("Should render without crashing", () => {
    renderPage(<ForbiddenPage />);
  });

  it("Should display the correct page title as the browser title", async () => {
    renderPage(<ForbiddenPage />);
    await waitFor(() => expect(document.title).toEqual(forbiddenPage.title));
  });
});

import { waitFor } from "@testing-library/react";
import { notFoundPage } from "../../../Config/Pages";
import { renderPage } from "../../../Utils/TestUtils/RenderPage";
import { NotFoundPage } from "./NotFoundPage";

describe("=== NotFoundPage ===", () => {
  it("Should Render without crashing", () => {
    renderPage(<NotFoundPage />);
  });

  it("Should display the correct page title as the browser title", async () => {
    renderPage(<NotFoundPage />);
    await waitFor(() => expect(document.title).toEqual(notFoundPage.title));
  });
});

import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import ForbiddenPage from "./ForbiddenPage";

describe("=== Pages => Common => ForbiddenPage ===", () => {
  it("Renders without crashing", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <ForbiddenPage />
        </MemoryRouter>
      </HelmetProvider>
    );
  });
});

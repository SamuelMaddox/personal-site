import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./HomePage";

describe("=== Pages => Common => HomePage ===", () => {
  it("Renders without crashing", () => {
    render(
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    );
  });
});

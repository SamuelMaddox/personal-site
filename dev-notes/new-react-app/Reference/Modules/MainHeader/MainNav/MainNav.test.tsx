import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainNav from "./MainNav";

describe("=== Modules => MainHeader => MainNav ===", () => {
  it("Renders without crashing", () => {
    render(
      <MemoryRouter>
        <MainNav />
      </MemoryRouter>
    );
  });
});

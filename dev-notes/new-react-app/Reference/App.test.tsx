import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./Pages", () => ({
  MainLayout: () => <div>Mock Main</div>,
}));

describe("=== App ===", () => {
  it("Renders without crashing", () => {
    render(<App />);
  });
});

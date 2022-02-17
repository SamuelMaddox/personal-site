import { render } from "@testing-library/react";
import MainHeader from "./MainHeader";

jest.mock(
  "./MainNav",
  () =>
    function MainNav() {
      return <div>Mock MainNav</div>;
    }
);

describe("=== Modules => MainHeader ===", () => {
  it("Renders without crashing", () => {
    render(<MainHeader />);
  });
});

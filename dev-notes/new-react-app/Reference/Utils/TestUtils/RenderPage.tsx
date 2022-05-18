import { render, RenderOptions } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";

export function renderPage(ui: JSX.Element, options?: RenderOptions) {
  return render(ui, {
    wrapper: ({ children }) => (
      <HelmetProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </HelmetProvider>
    ),
    ...options,
  });
}

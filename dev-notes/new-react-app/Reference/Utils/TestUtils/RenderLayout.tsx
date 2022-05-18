import { render, RenderOptions } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";

interface Options extends RenderOptions {
  initialEntries?: string[];
}

export function renderLayout(
  ui: JSX.Element,
  { initialEntries, ...options }: Options
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <HelmetProvider>
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      </HelmetProvider>
    ),
    ...options,
  });
}

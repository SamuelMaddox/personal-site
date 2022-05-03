import { Page } from "../../Types/Config/Pages/Interfaces/Page";

// === Export Page Configs ===
export const homePageConfig: Page = {
  route: "/",
  title: "Home Page",
};
export const notFoundPage: Page = {
  route: "*",
  title: "Page Not Found",
};
export const forbiddenPage: Page = {
  route: "*",
  title: "Forbidden",
};

import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { homePageConfig, notFoundPage } from "../../Config/Pages";
import { HomePage } from "../../Pages/Core/HomePage";
import { NotFoundPage } from "../../Pages/Core/NotFoundPage";

export function MainLayout(): ReactElement {
  return (
    <Routes>
      <Route path={homePageConfig.route} element={<HomePage />} />
      <Route path={notFoundPage.route} element={<NotFoundPage />} />
    </Routes>
  );
}

import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { MainHeader } from "../Modules";
import { HomePage, NotFoundPage } from "./Common";

export default function MainLayout(): ReactElement {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

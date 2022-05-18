import { ReactElement } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layouts/MainLayout";

export function App(): ReactElement {
  return (
    <CssBaseline>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<MainLayout />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </CssBaseline>
  );
}

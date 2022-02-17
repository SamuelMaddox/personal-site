import { ReactElement } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Pages";
import "./App.css";

function App(): ReactElement {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

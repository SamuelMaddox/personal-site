import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { forbiddenPage } from "../../../Config/Pages";

export function ForbiddenPage(): ReactElement {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{forbiddenPage.title}</title>
      </Helmet>
      <h1>403 Forbidden</h1>
      <h2>
        You are not authorized to view <code>{location.pathname}</code>
      </h2>
    </>
  );
}

import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { notFoundPage } from "../../../Config/Pages";

export function NotFoundPage(): ReactElement {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{notFoundPage.title}</title>
      </Helmet>
      <h1>404 Page Not Found</h1>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </>
  );
}

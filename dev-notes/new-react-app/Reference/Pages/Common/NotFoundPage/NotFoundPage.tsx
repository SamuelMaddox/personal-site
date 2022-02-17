import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFoundPage(): ReactElement {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <h1>404 Page Not Found</h1>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </>
  );
}

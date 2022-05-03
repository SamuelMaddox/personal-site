import { ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import { homePageConfig } from "../../../Config/Pages";

export function HomePage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>{homePageConfig.title}</title>
      </Helmet>
      <h1>Home</h1>
    </>
  );
}

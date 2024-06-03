import React from "react";
import { Helmet } from "react-helmet-async";

function HelmetConfig({ title }) {
  return (
    <Helmet>
      <title>Arpit Jangir - {title}</title>
      <link rel="canonical" href="https://arpit.dev/" />
    </Helmet>
  );
}

export default HelmetConfig;

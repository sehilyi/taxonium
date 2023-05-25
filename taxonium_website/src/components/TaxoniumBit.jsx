import React, { lazy, Suspense } from "react";

const Taxonium = lazy(() => import("taxonium-component"));

const TaxoniumBit = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Taxonium {...props} />
    </Suspense>
  );
};

export default TaxoniumBit;

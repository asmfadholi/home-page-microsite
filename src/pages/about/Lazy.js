import React, { Suspense } from "react";

const AboutLazy = React.lazy(() => import("."));

function AboutLazyLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutLazy />
    </Suspense>
  );
}

export default AboutLazyLoader;

import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const AboutLazy = React.lazy(() => import("."));

function AboutLazyLoader() {
  return (
    <Suspense fallback={<Skeleton height={350} />}>
      <AboutLazy />
    </Suspense>
  );
}

export default AboutLazyLoader;

import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const HomeLazy = React.lazy(() => import("."));

function HomeLazyLoader() {
  return (
    <Suspense fallback={<Skeleton height={300} />}>
      <HomeLazy />
    </Suspense>
  );
}

export default HomeLazyLoader;

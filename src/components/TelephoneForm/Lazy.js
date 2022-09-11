import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const TelephoneFormLazy = React.lazy(() => import("."));

function TelephoneFormLazyLoader() {
  return (
    <Suspense fallback={<Skeleton height={150} />}>
      <TelephoneFormLazy />
    </Suspense>
  );
}

export default TelephoneFormLazyLoader;

import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const NotFoundLazy = React.lazy(() => import("."));

function NotFoundLazyLoader() {
  return (
    <Suspense fallback={<Skeleton height="500px" />}>
      <NotFoundLazy />
    </Suspense>
  );
}

export default NotFoundLazyLoader;

import React, { Suspense } from "react";

const NotFoundLazy = React.lazy(() => import("."));

function NotFoundLazyLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundLazy />
    </Suspense>
  );
}

export default NotFoundLazyLoader;

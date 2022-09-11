import React, { Suspense } from "react";

const HomeLazy = React.lazy(() => import("."));

function HomeLazyLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeLazy />
    </Suspense>
  );
}

export default HomeLazyLoader;

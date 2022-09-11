import React, { Suspense } from "react";

const TelephoneFormLazy = React.lazy(() => import("."));

function TelephoneFormLazyLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TelephoneFormLazy />
    </Suspense>
  );
}

export default TelephoneFormLazyLoader;

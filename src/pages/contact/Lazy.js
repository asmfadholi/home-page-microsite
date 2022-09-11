import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const ContactLazy = React.lazy(() => import("."));

function ContactLazyLoader() {
  return (
    <Suspense fallback={<Skeleton height={200} />}>
      <ContactLazy />
    </Suspense>
  );
}

export default ContactLazyLoader;

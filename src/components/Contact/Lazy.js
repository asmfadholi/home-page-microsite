import React, { Suspense } from "react";

const ContactLazy = React.lazy(() => import("."));

function ContactLazyLoader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactLazy />
    </Suspense>
  );
}

export default ContactLazyLoader;

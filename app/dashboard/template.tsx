"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    console.log(
      "This will be logged each time we navigate to dashboard, because templates do not persists their states across page navigation"
    );
  }, []);
  return <div>Template{children}</div>;
}

"use client";

import * as React from "react";

/**
 * A guard that prevents rendering of a component until the data is ready.
 * This is useful for server-side rendering, where the data may not be available immediately.
 * @param data The data to wait for.
 * @param fallback The component to render while waiting for the data.
 * @param children The component to render once the data is ready.
 * @returns The component to render.
 */
export const SSRHydrationGuard = ({
  data,
  fallback,
  children,
}: {
  data: unknown;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    if (data) {
      setIsReady(true);
    }
  }, [data]);

  if (isReady) {
    return <>{children}</>;
  }

  return fallback || null;
};

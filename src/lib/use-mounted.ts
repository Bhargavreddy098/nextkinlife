"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns false during SSR and initial client hydration.
 * Returns true immediately after hydration is complete.
 * Prevents any hydration mismatch when rendering client-only UI.
 */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

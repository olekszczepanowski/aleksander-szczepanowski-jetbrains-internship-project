import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => localStorage.getItem("kotlin-testimonials-order") === "name";

export function useSortOrder() {
  const sortByName = useSyncExternalStore(subscribe, getSnapshot, () => false);

  const toggle = () => {
    localStorage.setItem("kotlin-testimonials-order", sortByName ? "default" : "name");
    window.dispatchEvent(new Event("storage"));
  };

  return [sortByName, toggle] as const;
}

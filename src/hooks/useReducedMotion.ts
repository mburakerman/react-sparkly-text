import { useEffect, useState } from "react";

export const useReducedMotion = () => {
  const [isReducedMotionEnabled, setIsReducedMotionEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsReducedMotionEnabled(event.matches);
    };

    prefersReducedMotionMedia.addEventListener("change", handleChange);

    return () => {
      prefersReducedMotionMedia.removeEventListener("change", handleChange);
    };
  }, []);

  return { isReducedMotionEnabled };
};

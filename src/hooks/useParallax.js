import { useState, useEffect, useRef, useCallback } from "react";

const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const ticking = useRef(false);

  const updateOffset = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate how far the element is from the center of the viewport
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const distanceFromCenter = elementCenter - viewportCenter;

    // Apply parallax offset (negative to move opposite direction)
    setOffset(distanceFromCenter * speed);
    ticking.current = false;
  }, [speed]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateOffset);
      ticking.current = true;
    }
  }, [updateOffset]);

  useEffect(() => {
    // Initial calculation
    updateOffset();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateOffset, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOffset);
    };
  }, [handleScroll, updateOffset]);

  const style = {
    transform: `translateY(${offset}px)`,
    willChange: "transform",
  };

  return { ref, style };
};

export default useParallax;

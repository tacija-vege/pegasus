"use client";
import { useEffect, useState, useRef } from "react";

export function useInView(options = { threshold: 0.2 }, config = {}) {
  const { once = true } = config;

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) io.disconnect();
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [options, once]);

  return { ref, inView };
}
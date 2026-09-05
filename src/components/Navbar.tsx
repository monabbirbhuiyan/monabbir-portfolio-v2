"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setScrollPercent(100);
        return;
      }

      const percent = Math.min(
        100,
        Math.max(0, Math.round((scrollY / docHeight) * 100)),
      );
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial computation on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navOffset = 48;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Formats to fixed 3-character display (e.g. 000%, 042%, 100%)
  const formattedPercent = String(scrollPercent).padStart(3, "0");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-xs px-6 py-3 flex justify-between items-center text-xs">
      <button
        onClick={() => scrollTo("hero")}
        className="text-blue-600 font-medium hover:underline text-left cursor-pointer"
      >
        $ cd ~/root
      </button>

      <nav className="flex items-center gap-6 text-neutral-500 text-[11px]">
        <button
          onClick={() => scrollTo("hero")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          00 index
        </button>
        <button
          onClick={() => scrollTo("about")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          01 about
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          02 projects
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="hover:text-black transition-colors cursor-pointer"
        >
          03 contact
        </button>
        <span className="text-blue-600 font-semibold pl-2 tabular-nums">
          {formattedPercent}% LOADED
        </span>
      </nav>
    </header>
  );
}

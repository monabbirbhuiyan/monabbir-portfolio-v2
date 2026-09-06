"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "00 index" },
  { id: "about", label: "01 about" },
  { id: "projects", label: "02 projects" },
  { id: "experience", label: "03 experience" },
  { id: "contact", label: "04 contact" },
];

export default function Navbar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
    handleScroll();

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

    setIsOpen(false);
  };

  const formattedPercent = String(scrollPercent).padStart(3, "0");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-xs font-mono text-xs">
      <div className="px-6 py-3 flex justify-between items-center">
        <button
          onClick={() => scrollTo("hero")}
          className="text-blue-600 font-medium hover:underline text-left cursor-pointer"
        >
          $ cd ~/root
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-neutral-500 text-[11px]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <span className="text-blue-600 font-semibold pl-2 tabular-nums">
            {formattedPercent}% LOADED
          </span>
        </nav>

        {/* Mobile Telemetry & Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <span className="text-blue-600 font-semibold tabular-nums text-[11px]">
            {formattedPercent}%
          </span>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="px-2 py-1 border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors text-[11px] cursor-pointer"
          >
            {isOpen ? "[close]" : "[menu]"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 flex flex-col space-y-3 text-[11px] text-neutral-600">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-1.5 hover:text-black border-b border-neutral-100 last:border-0 flex justify-between items-center cursor-pointer transition-colors"
            >
              <span>{item.label}</span>
              <span className="text-neutral-400">→</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

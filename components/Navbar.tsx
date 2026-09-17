"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { brand } from "@/lib/content";
import DiamondMark from "./DiamondMark";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#menu", label: "Menu" },
  { href: "#availability", label: "Availability" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 md:py-4 ${
        scrolled
          ? "bg-linen/95 backdrop-blur-md shadow-md border-b border-sage-light/30"
          : "bg-gradient-to-b from-forest-deep/80 via-forest-deep/40 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <DiamondMark size={36} animate={false} />
          <span className="font-display text-lg leading-none">
            <span className={scrolled ? "text-ink" : "text-linen"}>Elite Group</span>
            <span className="block text-[9px] tracking-widest2 uppercase text-sage font-semibold mt-0.5">
              Catering &amp; Events
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-wider font-semibold transition-colors hover:text-sage ${
                scrolled ? "text-ink/80" : "text-linen/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={brand.phoneHref}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
              scrolled
                ? "border-sage text-ink hover:bg-sage/10"
                : "border-linen/30 text-linen hover:bg-linen/10"
            }`}
          >
            📞 {brand.phone}
          </a>
          <a
            href={brand.waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-5 py-2.5 bg-sage text-linen font-bold rounded-full hover:bg-sage-deep transition-all shadow-md hover:scale-[1.02] border border-sage-light/30"
          >
            💬 WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] bg-ink transition-all duration-300 ${
              open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-ink transition-all duration-300 ${
              open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-4"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-linen border-b border-sage-light/40 px-6 py-6 space-y-4 shadow-xl"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-wider font-semibold text-ink hover:text-sage"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-sage-light/30 flex flex-col gap-3">
            <a
              href={brand.phoneHref}
              className="text-xs font-semibold py-2 text-center rounded-full border border-sage text-ink"
            >
              📞 Call {brand.phone}
            </a>
            <a
              href={brand.waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs py-2.5 text-center bg-sage text-linen font-bold rounded-full shadow-md"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

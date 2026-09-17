"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "@/lib/content";
import WhatsAppIcon from "./WhatsAppIcon";

export default function QuickActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show only AFTER hero section (past 75% of viewport height)
      // and hide before the footer (when within 450px of document bottom)
      const pastHero = scrollY > windowHeight * 0.75;
      const beforeFooter = scrollY + windowHeight < documentHeight - 450;

      setVisible(pastHero && beforeFooter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          aria-label="Quick Actions"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed bottom-5 left-4 right-4 md:hidden z-40"
        >
          <div className="bg-forest-deep/95 backdrop-blur-xl border border-sage/40 rounded-full p-2 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-between gap-2 text-linen">
            <a
              href="#availability"
              className="flex items-center gap-1.5 text-xs text-linen/90 font-medium py-1.5 px-2.5 rounded-full hover:bg-forest/50 transition-colors"
            >
              <span>📅</span>
              <span>Check Dates</span>
            </a>

            <div className="h-4 w-px bg-linen/20" />

            <a
              href={brand.phoneHref}
              className="flex items-center gap-1.5 text-xs text-sage-light font-medium py-1.5 px-2.5 rounded-full hover:bg-forest/50 transition-colors"
            >
              <span>📞</span>
              <span>Call Us</span>
            </a>

            <a
              href={brand.waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold py-2 px-4 rounded-full bg-sage text-linen shadow-md border border-sage-light/30 hover:bg-sage-deep transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

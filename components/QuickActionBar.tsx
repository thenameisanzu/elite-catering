"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/content";
import WhatsAppIcon from "./WhatsAppIcon";

export default function QuickActionBar() {
  return (
    <motion.aside
      aria-label="Quick Actions"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed bottom-4 left-4 right-4 md:hidden z-40"
    >
      <div className="bg-forest-deep/95 backdrop-blur-lg border border-sage/40 rounded-full p-2 px-4 shadow-2xl flex items-center justify-between gap-3 text-linen">
        <a
          href="#availability"
          className="flex items-center gap-1.5 text-xs text-linen/90 font-medium py-1 px-2.5 rounded-full hover:bg-forest/50 transition-colors"
        >
          <span>📅</span>
          <span>Check Dates</span>
        </a>

        <div className="h-4 w-px bg-linen/20" />

        <a
          href={brand.phoneHref}
          className="flex items-center gap-1.5 text-xs text-sage-light font-medium py-1 px-2.5 rounded-full hover:bg-forest/50 transition-colors"
        >
          <span>📞</span>
          <span>Call Us</span>
        </a>

        <a
          href={brand.waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold py-1.5 px-4 rounded-full bg-sage text-linen shadow-md"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </motion.aside>
  );
}

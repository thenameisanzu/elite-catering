"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/content";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative py-24 md:py-36 px-6 md:px-10 bg-sand overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <span>💬 Common Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl text-ink leading-tight mb-3"
          >
            Planning with Elite Group.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-base text-ink/75 font-light max-w-xl mx-auto"
          >
            Everything you need to know about our menus, tasting sessions, and event day execution.
          </motion.p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-linen/95 border border-sage-light/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-sage/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 font-display text-base sm:text-lg text-ink font-semibold"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`w-7 h-7 rounded-full bg-sand flex items-center justify-center text-xs shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-sage text-linen shadow-sm" : "text-ink/60"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-7 sm:pb-7 text-xs sm:text-sm text-ink/80 leading-relaxed font-light border-t border-sage-light/20 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

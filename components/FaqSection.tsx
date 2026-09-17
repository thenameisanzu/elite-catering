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
    <section id="faq" className="relative py-28 md:py-36 px-6 md:px-10 bg-sand">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest2 uppercase text-sage font-semibold mb-3">
            Common Questions
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-5xl text-ink leading-tight"
          >
            Planning with Elite Group.
          </motion.h2>
          <p className="mt-4 text-ink/70 font-light text-sm md:text-base">
            Everything you need to know about our menus, tasting sessions, and event day execution.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="bg-linen/90 border border-sage-light/50 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 font-display text-base md:text-lg text-ink font-semibold"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`w-7 h-7 rounded-full bg-sand flex items-center justify-center text-xs shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-sage text-linen" : "text-ink/60"
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
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 text-xs md:text-sm text-ink/75 leading-relaxed font-light border-t border-sage-light/20 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

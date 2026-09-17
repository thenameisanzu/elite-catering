"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 md:py-36 bg-forest-deep text-linen overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linen/10 border border-sage-light/30 text-sage-light text-xs font-semibold uppercase tracking-widest mb-4">
          <span>⭐ Verified Family Feedback</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-normal text-linen tracking-tight mb-3">
          Cherished Words from <br />
          <span className="font-script text-4xl sm:text-6xl text-sage-light inline-block mt-1 font-normal">
            Our Hosts &amp; Families
          </span>
        </h2>
        <p className="text-sm text-linen/70 max-w-md mx-auto font-light">
          Real experiences shared by brides, grooms, and milestone hosts across Kerala.
        </p>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: -560, right: 0 }}
        className="flex gap-6 px-6 md:px-10 cursor-grab active:cursor-grabbing max-w-7xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="shrink-0 w-[85vw] sm:w-[440px] border border-sage-light/30 bg-forest/35 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex text-sm text-brass tracking-widest">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-linen/10 text-sage-light border border-sage-light/20">
                  Verified Event
                </span>
              </div>

              <p className="font-display text-lg sm:text-xl md:text-2xl leading-snug text-linen/95 mb-8 font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-linen/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-linen">{t.name}</p>
                <p className="text-xs text-sage-light font-light mt-0.5">📍 {t.context}</p>
              </div>
              <span className="text-xl">🥂</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        <p className="text-xs text-sage-light/60 tracking-wider">← Drag left / right to browse reviews →</p>
      </div>
    </section>
  );
}

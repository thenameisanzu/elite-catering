"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/content";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-10 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="overflow-hidden mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <span>✨ Seamless Coordination</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl leading-tight text-ink mb-3"
          >
            How booking works.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm text-ink/70 font-light"
          >
            Four effortless steps from choosing your date to savoring your wedding feast.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div ref={ref} className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-sage/20" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-sage origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative bg-white/60 md:bg-transparent p-6 md:p-0 rounded-2xl border md:border-0 border-sand-dark/30 shadow-sm md:shadow-none hover:translate-y-[-4px] transition-transform duration-300"
              >
                <div className="w-4 h-4 rounded-full bg-sage mb-6 hidden md:block ring-4 ring-sand shadow-sm" />
                <span className="font-display text-xs text-sage font-bold block mb-2 px-2.5 py-0.5 rounded-full bg-sage/15 w-fit">
                  STEP {p.step}
                </span>
                <h3 className="font-display text-lg sm:text-xl text-ink font-bold mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-ink/75 font-light leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

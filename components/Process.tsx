"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/content";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden mb-16 md:mb-24">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="font-display text-3xl md:text-5xl leading-tight text-ink"
          >
            How booking works.
          </motion.h2>
        </div>

        <div ref={ref} className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-sage/20" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-sage origin-left"
          />

          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="w-3 h-3 rounded-full bg-sage mb-6 hidden md:block ring-4 ring-sand" />
                <span className="font-display text-xs text-sage font-semibold block mb-3">{p.step}</span>
                <h3 className="font-display text-xl text-ink mb-3">{p.title}</h3>
                <p className="text-sm text-ink/70 font-light leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

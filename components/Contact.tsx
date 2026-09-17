"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { contact, brand } from "@/lib/content";

function MagneticButton({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.3,
          y: (e.clientY - rect.top - rect.height / 2) * 0.3,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      className="inline-flex items-center justify-center px-10 py-5 bg-sage text-linen font-display text-lg tracking-wide hover:bg-sage-deep transition-colors shadow-md rounded-sm"
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44 px-6 md:px-10 bg-sand text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-widest2 uppercase text-sage font-medium mb-6">{contact.eyebrow}</p>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="font-display text-4xl md:text-6xl leading-tight text-ink text-balance mb-6"
          >
            {contact.headline}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-ink/75 font-light mb-12 max-w-md mx-auto"
        >
          {contact.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <MagneticButton href={brand.phoneHref}>Call {brand.phone}</MagneticButton>
          <a
            href={brand.waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sage font-medium underline underline-offset-4 decoration-sage/40 hover:decoration-sage transition-all"
          >
            or message us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

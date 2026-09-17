"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { services } from "@/lib/content";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentService = services[activeIdx];

  return (
    <section id="services" className="py-28 md:py-36 bg-forest-deep text-linen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sage/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-ink/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linen/10 border border-sage-light/30 text-sage-light text-xs font-semibold uppercase tracking-widest mb-4">
            <span>👑 Signature Expertise</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-normal text-linen tracking-tight mb-4">
            Curated Services for <br />
            <span className="font-script text-4xl sm:text-6xl text-sage-light inline-block mt-1 font-normal">
              Regal Celebrations
            </span>
          </h2>

          <p className="text-sm sm:text-base text-linen/75 leading-relaxed font-light">
            Every dish and table setting is meticulously crafted in-house to create an enchanting culinary ambiance from the moment your guests arrive.
          </p>
        </div>

        {/* Interactive Split Grid (Inspired by St. Antony's) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Numbered Service Switchers */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((s, idx) => {
              const active = activeIdx === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                    active
                      ? "bg-gradient-to-r from-sage to-forest border-sage-light shadow-xl text-linen"
                      : "bg-linen/5 hover:bg-linen/10 border-linen/10 text-linen/80"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-colors ${
                        active
                          ? "bg-linen text-forest-deep"
                          : "bg-linen/10 text-linen/60 group-hover:text-linen"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-base sm:text-lg font-bold transition-colors ${
                          active ? "text-linen" : "text-linen/90 group-hover:text-sage-light"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p className="text-xs text-linen/60 line-clamp-1 mt-0.5 font-light">
                        {s.shortDesc}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-base transition-transform duration-300 ${
                      active ? "text-linen translate-x-1" : "text-linen/30 group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-3xl bg-linen/5 border border-sage/40 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden shadow-2xl"
              >
                <div>
                  {/* Stock Photo Banner */}
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-linen/15 group">
                    <Image
                      src={currentService.image}
                      alt={currentService.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-forest-deep/85 backdrop-blur-md border border-sage-light/40 text-sage-light text-xs font-semibold uppercase tracking-wider shadow-lg">
                        ✨ {currentService.specialty}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-linen">
                      <h3 className="font-display text-xl sm:text-2xl font-bold mb-1">
                        {currentService.title}
                      </h3>
                      <p className="text-xs text-linen/80 font-light line-clamp-1">
                        {currentService.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-sm text-linen/85 leading-relaxed font-light mb-6">
                    {currentService.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {currentService.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-linen/90">
                        <span className="w-4 h-4 rounded-full bg-sage/30 text-sage-light flex items-center justify-center text-xs shrink-0 font-bold">
                          ✓
                        </span>
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom WhatsApp CTA Bar */}
                <div className="pt-5 border-t border-linen/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-linen/60 text-center sm:text-left font-light">
                    Customized according to your venue, guest count &amp; theme.
                  </span>
                  <a
                    href={`https://wa.me/919778368993?text=${encodeURIComponent(
                      `Hello Elite Group! 🍽️ I am interested in your "${currentService.title}" service for my upcoming event. Could you please share more details and availability?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sage text-linen font-bold text-xs sm:text-sm hover:bg-sage-deep hover:scale-[1.02] shadow-lg transition-all"
                  >
                    <span>💬 Inquire About This Service</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

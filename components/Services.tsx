"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { services } from "@/lib/content";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentService = services[activeIdx];

  return (
    <section id="services" className="py-20 md:py-36 bg-forest-deep text-linen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sage/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-ink/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linen/10 border border-sage-light/30 text-sage-light text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            <span>✨ Complete Wedding &amp; Event Solutions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal text-linen tracking-tight mb-2 sm:mb-3">
            WHAT WE OFFER
          </h2>

          <p className="font-script text-2xl sm:text-4xl md:text-5xl text-sage-light mb-3 sm:mb-4 font-normal">
            Bespoke Celebration Artistry
          </p>

          <p className="text-xs sm:text-base text-linen/75 leading-relaxed font-light text-balance max-w-xl mx-auto">
            From regal stage architecture and chauffeured luxury bridal cars to cinematic 4K photography and turnkey event coordination across Kerala.
          </p>
        </div>

        {/* Mobile-First Tab Switcher Bar (Horizontal scroll on mobile, vertical list on desktop) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar select-none">
          {services.map((s, idx) => {
            const active = activeIdx === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 border flex items-center gap-2 ${
                  active
                    ? "bg-sage text-linen border-sage-light shadow-lg font-bold"
                    : "bg-linen/5 text-linen/75 border-linen/10 hover:bg-linen/10"
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${active ? "bg-forest-deep text-linen" : "bg-linen/10 text-linen/60"}`}>
                  0{idx + 1}
                </span>
                <span>{s.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Split Grid for Desktop & Unified Card on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Desktop Left Column: Numbered Vertical Service Switchers */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
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

          {/* Right Column / Mobile Active Card Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-linen/5 border border-sage/40 p-5 sm:p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden shadow-2xl"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-5 border border-linen/15 group">
                    <Image
                      src={currentService.image}
                      alt={currentService.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-forest-deep/90 backdrop-blur-md border border-sage-light/40 text-sage-light text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-lg">
                        ✨ {currentService.specialty}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-linen">
                      <h3 className="font-display text-lg sm:text-2xl font-bold mb-1">
                        {currentService.title}
                      </h3>
                      <p className="text-xs text-linen/80 font-light line-clamp-1">
                        {currentService.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-linen/85 leading-relaxed font-light mb-5">
                    {currentService.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                    {currentService.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-linen/90">
                        <span className="w-4 h-4 rounded-full bg-sage/30 text-sage-light flex items-center justify-center text-[10px] sm:text-xs shrink-0 font-bold">
                          ✓
                        </span>
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="pt-4 border-t border-linen/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] sm:text-xs text-linen/60 text-center sm:text-left font-light">
                    Customized according to your venue &amp; event theme.
                  </span>
                  <a
                    href="#date-checker"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-sage text-linen font-bold text-xs sm:text-sm hover:bg-sage-deep hover:scale-[1.02] shadow-lg transition-all"
                  >
                    <span>Check Service Availability →</span>
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

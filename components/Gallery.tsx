"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { gallery, galleryCategories, instagramHighlights, brand } from "@/lib/content";

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const filtered = gallery.filter((g) => filter === "All" || g.category === filter);

  return (
    <section id="work" className="relative py-28 md:py-36 px-6 md:px-10 bg-linen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Instagram Profile Callout */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-xs font-semibold uppercase tracking-widest mb-4">
            <span>📸 Live from @elite._group._</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-normal text-ink tracking-tight mb-4">
            Recent Celebrations &amp; <br />
            <span className="font-script text-4xl sm:text-6xl text-sage inline-block mt-1 font-normal">
              Signature Feasts
            </span>
          </h2>

          <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-light">
            Tap our Instagram Story Highlights below to filter recent wedding setups, live food counters, and floral wedding fleet styling.
          </p>
        </div>

        {/* Instagram Story Highlights Bar (Exact replica from their real profile) */}
        <div className="flex items-center justify-center gap-5 sm:gap-8 overflow-x-auto pb-6 mb-12 select-none no-scrollbar">
          {/* "All" Story Circle */}
          <button
            type="button"
            onClick={() => setFilter("All")}
            className="flex flex-col items-center gap-2 group shrink-0 focus:outline-none"
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 transition-all duration-300 ${
                filter === "All"
                  ? "bg-gradient-to-tr from-sage to-emerald-600 scale-105 shadow-lg"
                  : "bg-sage-light/40 group-hover:bg-sage/50"
              }`}
            >
              <div className="w-full h-full rounded-full bg-linen flex items-center justify-center text-xl sm:text-2xl shadow-inner border border-sage-light/40">
                ✨
              </div>
            </div>
            <span
              className={`text-xs font-medium tracking-wide transition-colors ${
                filter === "All" ? "text-sage font-bold" : "text-ink/80 group-hover:text-sage"
              }`}
            >
              All Feasts
            </span>
          </button>

          {/* 5 Real Story Highlights */}
          {instagramHighlights.map((hl) => {
            const active = filter === hl.filterCategory;
            return (
              <button
                key={hl.id}
                type="button"
                onClick={() => setFilter(hl.filterCategory as (typeof galleryCategories)[number])}
                className="flex flex-col items-center gap-2 group shrink-0 focus:outline-none"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-tr from-sage via-forest to-emerald-600 scale-105 shadow-lg"
                      : "bg-sage-light/40 group-hover:bg-sage/60"
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-linen flex items-center justify-center text-xl sm:text-2xl shadow-inner border border-sage-light/40">
                    {hl.icon}
                  </div>
                </div>
                <span
                  className={`text-xs font-medium tracking-wide transition-colors ${
                    active ? "text-sage font-bold" : "text-ink/80 group-hover:text-sage"
                  }`}
                >
                  {hl.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masterpieces Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-3xl overflow-hidden bg-sand/35 border border-sage-light/40 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-forest-deep/80 backdrop-blur-md border border-sage-light/30 text-sage-light text-[11px] font-semibold uppercase tracking-wider shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-linen">
                    <div className="flex items-center gap-1 text-xs text-sage-light font-medium mb-1">
                      <span>📍 Kerala • {item.location}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-linen group-hover:text-sage-light transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-linen/80 mt-0.5 font-light line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Card Footer Tag Bar */}
                <div className="p-4 bg-sand/40 flex items-center justify-between gap-2 border-t border-sage-light/30">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-linen text-ink/85 border border-sage-light/40"
                      >
                        🏷️ {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/919778368993?text=${encodeURIComponent(
                      `Hello Elite Group! 🍽️ I saw your "${item.title}" post and would love to inquire about catering for our event.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sage font-semibold hover:text-forest flex items-center gap-1 shrink-0"
                  >
                    <span>Inquire</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Real Instagram Follow Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl bg-forest-deep text-linen border border-sage/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sage bg-white shrink-0 p-0.5 shadow-md hidden sm:flex items-center justify-center">
              <Image src="/images/logo.png" alt="Elite Group Logo" width={56} height={56} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h4 className="font-display text-lg font-bold text-linen">@elite._group._</h4>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sage/20 text-sage-light font-semibold">5,829 Followers</span>
              </div>
              <p className="text-xs text-linen/70 font-light mt-1">
                💍 Wedding Caterers in Kottayam · 🍽️ Premium Event Catering Kerala · Since 2015
              </p>
            </div>
          </div>

          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-sage text-linen text-xs sm:text-sm font-bold hover:bg-sage-deep hover:scale-[1.02] transition-all shadow-md shrink-0 flex items-center gap-2 border border-sage-light/30"
          >
            <span>Follow on Instagram</span>
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

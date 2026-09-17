"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { eventStories } from "@/lib/content";

export default function EventStories() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const activeStory = eventStories[activeStoryIdx];

  return (
    <section id="stories" className="relative py-28 md:py-36 px-6 md:px-10 bg-linen overflow-hidden">
      {/* Subtle ambient botanical gradient blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sand rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header with animated story selector */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-widest2 uppercase text-sage font-semibold mb-3"
            >
              Real Celebrations in Kerala
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-4xl md:text-6xl text-ink leading-tight"
            >
              Stories from our tables.
            </motion.h2>
          </div>

          {/* Interactive Story Switcher Pill Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-sand/60 rounded-full border border-sage-light/40 backdrop-blur-sm self-start lg:self-auto shadow-inner">
            {eventStories.map((story, i) => {
              const active = activeStoryIdx === i;
              return (
                <button
                  key={story.id}
                  onClick={() => setActiveStoryIdx(i)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-300 z-10 ${
                    active ? "text-linen" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="storyActivePill"
                      className="absolute inset-0 bg-sage rounded-full shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{story.title.split("'")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Story Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-sand/35 p-6 sm:p-8 md:p-12 rounded-3xl border border-sage-light/45 shadow-xl backdrop-blur-sm relative overflow-hidden"
          >
            {/* Left: Cinematic Image Frame with Interactive Zoom & Floating Badges */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-sage-light/40 group"
            >
              <Image
                src={activeStory.image}
                alt={activeStory.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-80" />

              {/* Floating Glass Meta Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-forest-deep/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-linen font-medium border border-sage-light/25 shadow-lg">
                  👥 {activeStory.guests}
                </span>
                <span className="bg-forest-deep/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-sage-light font-medium border border-sage-light/25 shadow-lg">
                  📅 {activeStory.date}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-linen/70 text-xs tracking-wider uppercase font-medium">
                  {activeStory.type}
                </p>
                <p className="text-linen text-sm font-semibold mt-0.5">
                  📍 {activeStory.location}
                </p>
              </div>
            </motion.div>

            {/* Right: Rich Narrative & Curated Menu Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest2 text-sage font-bold">
                    {activeStory.cuisineStyle}
                  </span>
                  <span className="text-xs text-brass">{activeStory.rating}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
                  {activeStory.title}
                </h3>
              </div>

              {/* Curated Menu Badges */}
              <div>
                <span className="text-xs font-semibold text-ink/75 uppercase tracking-wider block mb-3">
                  Signature Menu Served on the Day:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStory.highlights.map((dish, i) => (
                    <motion.span
                      key={dish}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      whileHover={{ y: -2, backgroundColor: "#88AB8E", color: "#F2F1EB" }}
                      className="px-3.5 py-2 bg-linen rounded-xl border border-sage-light/60 text-xs text-ink/85 font-medium shadow-sm transition-all cursor-default"
                    >
                      ✨ {dish}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Client Quote Card */}
              <div className="p-5 bg-linen/80 rounded-2xl border-l-4 border-sage border-t border-r border-b border-sage-light/30 shadow-sm">
                <p className="font-display text-base md:text-lg text-ink/90 italic leading-snug">
                  &ldquo;{activeStory.quote}&rdquo;
                </p>
                <p className="text-xs text-sage font-medium mt-3 uppercase tracking-wider">
                  — Verified Host Feedback · {activeStory.location}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`https://wa.me/919778368993?text=${encodeURIComponent(
                    `Hello Elite Group! 🍽️ I loved reading about "${activeStory.title}" in ${activeStory.location}. I would like to plan a similar menu & catering experience for my upcoming celebration!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-sage text-linen text-xs sm:text-sm font-semibold rounded-xl hover:bg-sage-deep transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>💬 Plan This Experience on WhatsApp</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-10 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Split Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Real Stock Image with Quote Overlay & Verified Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sand bg-forest-deep aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] group">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
                alt="Elite Group Culinary Craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-linen">
                <p className="font-script text-3xl sm:text-4xl text-sage-light mb-1 leading-snug">
                  “A wedding feast is not an event, it is an emotion.”
                </p>
                <p className="text-[11px] tracking-widest2 text-linen/70 uppercase font-semibold">
                  — The Elite Group Principle
                </p>
              </div>
            </div>

            {/* Verified Excellence Emblem Card */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-8 bg-forest-deep text-linen p-5 rounded-2xl shadow-2xl border border-sage/40 max-w-[240px] flex items-center gap-3.5 backdrop-blur-md">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-sage bg-white shrink-0 p-0.5 shadow-md flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Elite Group Emblem"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-sage-light font-semibold">
                  Verified Heritage
                </p>
                <p className="font-display text-xl font-bold text-linen leading-tight">
                  500+ Feasts
                </p>
                <p className="text-[11px] text-linen/75 leading-snug">Served across Kerala.</p>
              </div>
            </div>
          </div>

          {/* Right: Narrative, Checklist & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-xs font-semibold uppercase tracking-widest">
              <span>✨ The Elite Group Touch</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-normal text-ink tracking-tight leading-[1.15]">
              Feeding Kerala&apos;s Most <br />
              <span className="font-script text-4xl sm:text-6xl text-sage font-normal inline-block mt-1">
                Cherished Celebrations
              </span>
            </h2>

            <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-light">
              Elite Group began with a sacred promise in Kottayam: every dish made fresh with pristine ingredients, every table dressed with intention, and every guest received with royal hospitality.
            </p>

            <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-light">
              Whether curating a 1,500-guest traditional sadya with four payasams or orchestrating a modern destination reception with live tandoor and cold-stone ice cream bars, we design every flavor around your family.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "100% Dedicated Pure-Veg Sadya Kitchen",
                "Certified Uniformed Hospitality Staff",
                "Mobile Refrigerated Transport Fleet",
                "Direct Executive Chef Consultation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-ink/85">
                  <span className="w-4 h-4 rounded-full bg-sage/20 text-sage flex items-center justify-center text-xs shrink-0 font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#stories"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-sage text-linen text-xs sm:text-sm font-semibold hover:bg-sage-deep transition-all shadow-md"
              >
                Explore Masterpieces
              </a>
              <a
                href="https://wa.me/919778368993?text=Hi%20Elite%20Group%2C%20I%20would%20like%20to%20discuss%20our%20upcoming%20event%20catering."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-sage text-sage text-xs sm:text-sm font-semibold hover:bg-sage/10 transition-colors"
              >
                Speak with Executive Chef
              </a>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars Grid (Inspired by St. Antony's) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🌱",
              title: "Dedicated Veg Facility",
              desc: "Independent kitchen infrastructure & copper vessels for 100% pure traditional vegetarian sadya preparations.",
            },
            {
              icon: "🛡️",
              title: "Zero-Stress Execution",
              desc: "Complete setup, premium porcelain crockery, glassware, linen dressing, and attentive butler service included.",
            },
            {
              icon: "🔥",
              title: "Theatrical Live Stations",
              desc: "Appam & stew, charcoal tandoor, Karimeen pollichathu tawas, and cold-stone rolled ice cream live counters.",
            },
            {
              icon: "🤝",
              title: "Tasting & Collaboration",
              desc: "Sample your tailored menu in our tasting suite before finalizing, with transparent per-plate pricing.",
            },
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-sand/45 border border-sage-light/50 shadow-sm hover:shadow-xl hover:border-sage transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-linen border border-sage-light flex items-center justify-center text-xl mb-4 group-hover:bg-sage group-hover:text-linen transition-colors shadow-sm">
                {pillar.icon}
              </div>
              <h4 className="font-display text-lg font-bold text-ink mb-2 group-hover:text-sage transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-ink/70 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

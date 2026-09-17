"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const marqueeDishes = [
  "🍌 ROYAL 26-COURSE HERITAGE SADYA",
  "🔥 LIVE HOPPER APPAM & MUTTON STEW",
  "👑 SYRIAN CHRISTIAN SLOW-ROAST BEEF & POROTTA",
  "🍤 PAN-SEARED LIVE KARIMEEN POLLICHATHU",
  "🍨 COLD-STONE ROLLED ICE CREAM & DESSERT WHEEL",
  "🥥 SPICED KULUKKI & ELANEER WELCOME BAR",
  "🍢 CHARCOAL TANDOORI KEBAB PAVILION",
  "🌱 100% INDEPENDENT PURE-VEG VESSELS",
  "🚗 LUXURY FLORAL DECORATED WEDDING FLEET",
];

const feastTabs = [
  {
    id: "sadya",
    title: "Heritage Sadya",
    icon: "🍌",
    tagline: "26-Course Royal Feast on Plantain Leaf",
    badge: "100% Pure-Veg Kitchen",
    description:
      "Traditional feast cooked in strictly separate pure-veg vessels. Parippu, Sambar, Avial, Olan, Kalan, Erissery, Inji Puli, and 4 slow-cooked payasams.",
    specialties: ["Palada & Parippu Pradhaman", "Independent Pure-Veg Vessels", "Trained Traditional Servers"],
    waQuery: "Hi Elite Group, I'm inquiring about your Grand 26-Course Royal Sadya catering.",
  },
  {
    id: "live",
    title: "Live Food Theatres",
    icon: "🔥",
    tagline: "Theatrical Live Counters & Tawas",
    badge: "Interactive Dining",
    description:
      "Lacy hot appams made fresh with rich mutton stew, charcoal tandoori skewers, hot Karimeen pollichathu tawas, and street chaat pani-puri bars.",
    specialties: ["Appam & Syrian Bone-in Stew", "Live Fish Pollichathu Tawa", "Charcoal BBQ Pavilion"],
    waQuery: "Hi Elite Group, I want to know more about setting up Live Food Counters for our wedding reception.",
  },
  {
    id: "reception",
    title: "Wedding Banquets",
    icon: "👑",
    tagline: "Syrian Christian & Malabar Feasts",
    badge: "Signature Wedding Menu",
    description:
      "Slow-roasted beef with fresh coconut slivers, flaky multi-layered porottas, aromatic Thalassery mutton dum biryani, and duck mappas.",
    specialties: ["Slow-Roast Beef & Porotta", "Thalassery Dum Biryani", "Plated VIP Butler Service"],
    waQuery: "Hi Elite Group, I would like to explore your Wedding Reception Banquet & Biryani menus.",
  },
  {
    id: "dessert",
    title: "Dessert & Fleet",
    icon: "🍨",
    tagline: "Dessert Ferris Wheel & Wedding Cars",
    badge: "Royal Finale & Arrival",
    description:
      "Rotating gold ferris wheel dessert cups, live cold stone rolled ice cream, tender coconut welcome bars, and floral coordinated bridal cars.",
    specialties: ["Artisanal Dessert Ferris Wheel", "Cold Stone Ice Cream Rolls", "Exotic Floral Wedding Cars"],
    waQuery: "Hi Elite Group, I'm interested in the Dessert Ferris Wheel and Wedding Car decor packages.",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const currentFeast = feastTabs[activeTab];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-forest-deep text-linen pt-28 md:pt-32 pb-6"
    >
      {/* 1. Cinematic Full-Screen Video Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.15] scale-105"
        >
          <source src="/videos/hero-video.mov" type="video/quicktime" />
          <source src="/videos/hero-video.mov" type="video/mp4" />
          <source src="/videos/videoplayback%20(1).mov" type="video/mp4" />
        </video>

        {/* Cinematic Multi-Tone Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sage/20 via-transparent to-transparent opacity-75" />
      </div>

      {/* 2. Interactive Video Audio & Playback Controls Floating Widget */}
      <div className="absolute top-28 right-6 md:right-10 z-20 flex items-center gap-2">
        <button
          onClick={toggleMute}
          title={isMuted ? "Unmute Video Sound" : "Mute Video"}
          className="px-3 py-1.5 rounded-full bg-forest-deep/75 backdrop-blur-xl border border-sage-light/30 text-xs font-semibold text-linen/90 hover:bg-forest-deep hover:text-sage-light transition-all flex items-center gap-2 shadow-lg"
        >
          <span>{isMuted ? "🔇 Sound Off" : "🔊 Sound On"}</span>
        </button>
        <button
          onClick={togglePlay}
          title={isPlaying ? "Pause Video" : "Play Video"}
          className="w-8 h-8 rounded-full bg-forest-deep/75 backdrop-blur-xl border border-sage-light/30 text-xs text-linen/90 hover:bg-forest-deep hover:text-sage-light transition-all flex items-center justify-center shadow-lg"
        >
          <span>{isPlaying ? "⏸" : "▶"}</span>
        </button>
      </div>

      {/* 3. Main Hero Two-Column Showcase Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Brand Statement & Primary Actions */}
          <div className="lg:col-span-7 text-left">
            {/* Verified Brand Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-deep/85 backdrop-blur-xl border border-sage-light/35 shadow-xl mb-5"
            >
              <div className="relative w-5 h-5 rounded-full overflow-hidden border border-sage bg-white flex items-center justify-center shrink-0">
                <Image src="/images/logo.png" alt="Elite Group Logo" width={20} height={20} className="object-contain" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-linen/90">
                ELITE CATERERS &amp; EVENTS™ · KOTTAYAM
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Monumental Serif & Script Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-5"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-linen tracking-tight leading-[1.08]">
                Where Royal Flavors Create <br />
                <span className="font-script text-5xl sm:text-7xl md:text-8xl text-sage-light font-normal inline-block drop-shadow-[0_4px_25px_rgba(175,200,173,0.5)] mt-1">
                  Unforgettable Feasts
                </span>
              </h1>
            </motion.div>

            {/* Narrative Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-linen/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mb-8"
            >
              Crafting authentic 26-course banana leaf sadyas, theatrical live cooking pavilions, and luxury Syrian Christian wedding banquets across Kerala since 2015.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8"
            >
              {/* WhatsApp Booking CTA */}
              <a
                href="https://wa.me/919778368993?text=Hi%20Elite%20Group%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20catering%20and%20schedule%20a%20menu%20tasting."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-sage hover:bg-sage-deep text-linen transition-all flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(136,171,142,0.4)] group font-bold border border-sage-light/40"
              >
                <span className="text-xl">💬</span>
                <span className="text-sm font-semibold tracking-wide">Inquire on WhatsApp</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-forest-deep/40 text-linen font-mono">
                  Online
                </span>
              </a>

              {/* Check Date / Private Tasting CTA */}
              <a
                href="#date-checker"
                className="px-6 py-3.5 rounded-2xl bg-linen/10 hover:bg-linen/20 border border-linen/20 backdrop-blur-xl text-linen transition-all flex items-center justify-center gap-2 text-sm font-semibold group"
              >
                <span>📅 Check Date Availability</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Direct Phone Dial */}
              <a
                href="tel:+919778368993"
                className="px-4 py-3.5 rounded-2xl bg-forest-deep/80 hover:bg-forest-deep border border-sage-light/30 backdrop-blur-xl text-linen/90 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
                title="Call Elite Group"
              >
                <span>📞</span>
                <span className="hidden xl:inline">+91 97783 68993</span>
                <span className="xl:hidden">Call</span>
              </a>
            </motion.div>

            {/* Proof Metric Pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="grid grid-cols-3 gap-3 max-w-lg border-t border-sage-light/20 pt-5"
            >
              <div>
                <p className="text-lg sm:text-xl font-bold font-display text-sage-light">500+</p>
                <p className="text-[11px] sm:text-xs text-linen/70 font-light">Weddings Served</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-display text-sage-light">4.9 ★</p>
                <p className="text-[11px] sm:text-xs text-linen/70 font-light">Google Rating</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-display text-sage-light">100%</p>
                <p className="text-[11px] sm:text-xs text-linen/70 font-light">Pure-Veg Vessels</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Culinary Experience Showpiece Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="rounded-3xl bg-forest-deep/90 backdrop-blur-2xl border border-sage-light/30 p-5 sm:p-6 shadow-[0_15px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Header Title inside Card */}
              <div className="flex items-center justify-between mb-4 border-b border-linen/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🍽️</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-linen/90">
                    Signature Feasts &amp; Counters
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sage/30 text-sage-light font-medium border border-sage/40">
                  Chef Curated
                </span>
              </div>

              {/* Feast Interactive Navigation Tabs */}
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-linen/5 border border-linen/10 mb-4">
                {feastTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-1 rounded-xl text-center transition-all flex flex-col items-center gap-1 ${
                      activeTab === idx
                        ? "bg-sage text-linen font-bold shadow-md"
                        : "text-linen/70 hover:text-linen hover:bg-linen/10 font-medium"
                    }`}
                  >
                    <span className="text-base">{tab.icon}</span>
                    <span className="text-[9px] sm:text-[10px] truncate max-w-[65px] tracking-tight">
                      {tab.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic Feast Details Container with Smooth Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeast.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg sm:text-xl font-medium text-linen">
                      {currentFeast.tagline}
                    </h3>
                    <span className="text-[10px] font-semibold text-sage-light bg-sage/20 px-2 py-0.5 rounded-md border border-sage-light/20">
                      {currentFeast.badge}
                    </span>
                  </div>

                  <p className="text-xs text-linen/80 leading-relaxed font-light">
                    {currentFeast.description}
                  </p>

                  {/* Specialty Bullet Badges */}
                  <div className="space-y-1.5 pt-1">
                    {currentFeast.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-linen/90">
                        <span className="text-sage-light text-xs">✦</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom WhatsApp Trigger for Selected Menu */}
                  <div className="pt-3 border-t border-linen/10 flex items-center justify-between gap-3">
                    <a
                      href={`https://wa.me/919778368993?text=${encodeURIComponent(currentFeast.waQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-linen/10 hover:bg-linen/20 border border-linen/20 text-linen transition-all flex items-center justify-center gap-2 text-xs font-semibold group"
                    >
                      <span>Inquire {currentFeast.title} on WhatsApp</span>
                      <span className="text-sage-light group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Chef Tasting Note Pill */}
              <div className="mt-4 p-2.5 rounded-xl bg-sage/15 border border-sage/25 flex items-center gap-2.5 text-[11px] text-linen/85">
                <span className="text-base shrink-0">👨‍🍳</span>
                <span>
                  <strong className="text-sage-light font-semibold">Private Tasting:</strong> Sample dishes at our kitchen before finalizing your reception menu.
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 4. Bottom Continuous Marquee Culinary Ribbon Strip */}
      <div className="relative z-10 w-full bg-forest-deep/95 backdrop-blur-md border-t border-sage-light/20 py-2.5 overflow-hidden select-none mt-4">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-linen/90"
        >
          {marqueeDishes.concat(marqueeDishes).map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-sage-light opacity-60">◆</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

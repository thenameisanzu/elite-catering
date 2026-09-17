"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
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

export default function Hero() {
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

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-forest-deep text-linen pt-28 md:pt-36 pb-6"
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sage/20 via-transparent to-transparent opacity-80" />
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

      {/* 3. Centered Monumental Hero Stage */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full flex-1 flex flex-col items-center justify-center text-center my-auto">
        
        {/* Verified Brand Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-deep/85 backdrop-blur-xl border border-sage-light/35 shadow-xl mb-6"
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
          className="mb-6 max-w-4xl"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-linen tracking-tight leading-[1.08] text-balance">
            Where Royal Flavors Create <br />
            <span className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-sage-light font-normal inline-block drop-shadow-[0_4px_30px_rgba(175,200,173,0.5)] mt-1">
              Unforgettable Feasts
            </span>
          </h1>
        </motion.div>

        {/* Narrative Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-linen/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mb-10 text-balance"
        >
          Crafting authentic 26-course banana leaf sadyas, theatrical live cooking pavilions, and luxury Syrian Christian wedding banquets across Kerala since 2015.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full max-w-md"
        >
          {/* WhatsApp Booking CTA */}
          <a
            href="https://wa.me/919778368993?text=Hi%20Elite%20Group%20Catering%2C%20I%20would%20like%20to%20inquire%20about%20catering%20and%20schedule%20a%20menu%20tasting."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-sage hover:bg-sage-deep text-linen transition-all flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(136,171,142,0.4)] group font-bold border border-sage-light/40"
          >
            <span className="text-xl">💬</span>
            <span className="text-sm font-semibold tracking-wide">Inquire on WhatsApp</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-forest-deep/40 text-linen font-mono">
              Online
            </span>
          </a>

          {/* Check Date Availability */}
          <a
            href="#availability"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-linen/10 hover:bg-linen/20 border border-linen/20 backdrop-blur-xl text-linen transition-all flex items-center justify-center gap-2 text-sm font-semibold group"
          >
            <span>📅 Check Availability</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* Direct Phone Dial */}
          <a
            href="tel:+919778368993"
            className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-forest-deep/80 hover:bg-forest-deep border border-sage-light/30 backdrop-blur-xl text-linen/90 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
            title="Call Elite Group"
          >
            <span>📞</span>
            <span>+91 97783 68993</span>
          </a>
        </motion.div>

        {/* Proof Metric Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-linen/80 font-light border-t border-sage-light/20 pt-6 max-w-xl w-full"
        >
          <div className="flex items-center gap-2">
            <span className="text-sage-light font-bold">🏆</span>
            <span className="font-semibold text-linen">500+ Feasts</span>
            <span>Served</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-linen/30" />
          <div className="flex items-center gap-2">
            <span className="text-sage-light font-bold">⭐</span>
            <span className="font-semibold text-linen">4.9 / 5.0 Rating</span>
            <span>Google &amp; Socials</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-linen/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-sage-light font-bold">🌱</span>
            <span className="font-semibold text-linen">100% Pure-Veg</span>
            <span>Separate Kitchen</span>
          </div>
        </motion.div>
      </div>

      {/* 4. Bottom Continuous Marquee Culinary Ribbon Strip */}
      <div className="relative z-10 w-full bg-forest-deep/95 backdrop-blur-md border-t border-sage-light/20 py-2.5 overflow-hidden select-none mt-6">
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

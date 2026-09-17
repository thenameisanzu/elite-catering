"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VenueTransformation() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95));
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-widest2 uppercase text-sage font-semibold mb-3">
            Venue Magic
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-5xl text-ink leading-tight"
          >
            See the transformation.
          </motion.h2>
          <p className="mt-4 text-ink/70 font-light text-sm md:text-base">
            Drag the slider to see how Elite Group turns empty convention halls and open lawns into illuminated dining experiences.
          </p>
        </div>

        {/* Before / After Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative aspect-[16/9] md:aspect-[21/9] max-w-5xl mx-auto rounded-2xl overflow-hidden border border-sage-light/50 shadow-2xl select-none cursor-ew-resize group"
        >
          {/* AFTER (Full background) */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop"
              alt="After: Dressed wedding banquet with luxury table settings and warm lighting"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-forest-deep/20" />
            <div className="absolute bottom-6 right-6 bg-forest-deep/85 backdrop-blur-md px-4 py-2 rounded-full border border-sage-light/30 text-xs text-linen font-medium shadow-lg">
              ✨ Dressed Event
            </div>
          </div>

          {/* BEFORE (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div
              className="relative w-full h-full min-w-[300px]"
              style={{ width: containerRef.current ? containerRef.current.clientWidth : "100%" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop"
                alt="Before: Raw empty venue hall prior to event styling"
                fill
                className="object-cover filter grayscale-[25%]"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 bg-ink/85 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs text-linen font-medium shadow-lg">
                🏗️ Raw Venue
              </div>
            </div>
          </div>

          {/* Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-linen shadow-lg z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-forest-deep border-2 border-linen shadow-xl flex items-center justify-center text-linen text-xs font-bold">
              ↔
            </div>
          </div>
        </div>

        {/* Caption & Instructions */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto mt-6 text-xs text-ink/60 font-light gap-2">
          <span>👈 Drag left/right to compare details</span>
          <span>Includes custom table runners, chafing stands, lighting &amp; live counters</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/content";

const reviews = [
  {
    author: "Anjali & Rahul Mathew",
    event: "Destination Wedding (1,200 Guests)",
    location: "Kumarakom Lake Resort, Kottayam",
    time: "2 months ago",
    quote:
      "The food was the most talked-about part of our wedding! The 26-item traditional banana leaf sadya was executed flawlessly, and the live Karimeen pollichathu tawa in the evening was unbelievable. Every single relative praised the quality.",
    rating: 5,
    verified: true,
  },
  {
    author: "Dr. Thomas Abraham",
    event: "Silver Jubilee Celebration (450 Guests)",
    location: "Windsor Castle Convention Centre, Kottayam",
    time: "3 months ago",
    quote:
      "Elite Group managed everything with total professionalism. Their live appam with bone-in mutton stew and Syrian beef roast were exceptional. No delays, spotless presentation, and extremely courteous staff.",
    rating: 5,
    verified: true,
  },
  {
    author: "Rhea & Vivek Nair",
    event: "Open Lawn Wedding Reception (600 Guests)",
    location: "Estate Lawns, Pala",
    time: "4 months ago",
    quote:
      "We've been using Elite Group for 6 years across all our family celebrations. The consistency and taste are unmatched in Central Kerala. The dessert ferris wheel and live cold-stone ice cream counter were huge hits!",
    rating: 5,
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 md:py-36 bg-forest-deep text-linen overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linen/10 border border-sage-light/30 text-sage-light text-xs font-semibold uppercase tracking-widest mb-4">
          <span>⭐ Verified Google Reviews</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-linen tracking-tight mb-3">
          Cherished Words from <br />
          <span className="font-script text-4xl sm:text-6xl text-sage-light inline-block mt-1 font-normal">
            Our Hosts &amp; Families
          </span>
        </h2>
        <p className="text-sm sm:text-base text-linen/75 max-w-lg mx-auto font-light mb-6">
          Real Google Reviews shared by brides, grooms, and milestone celebration hosts across Kerala.
        </p>

        {/* Google 4.9 Score Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-forest/60 border border-sage-light/30 shadow-lg">
          <div className="flex text-amber-400 text-sm">★★★★★</div>
          <span className="text-xs font-bold text-linen">4.9 out of 5.0</span>
          <span className="text-linen/40 text-xs">•</span>
          <span className="text-xs text-sage-light font-medium">202+ Google Reviews</span>
          <a
            href={brand.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] underline underline-offset-2 text-linen/80 hover:text-linen font-semibold ml-1"
          >
            View on Google →
          </a>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-3xl border border-sage-light/25 bg-forest/40 backdrop-blur-md p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:border-sage transition-all duration-300 group"
          >
            <div>
              {/* Card Header: Google 'G' icon & Stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-slate-800 shadow-sm">
                    G
                  </div>
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                </div>
                <span className="text-[10px] text-linen/50 font-light">{r.time}</span>
              </div>

              {/* Quote Content */}
              <p className="text-xs sm:text-sm leading-relaxed text-linen/90 font-light mb-6">
                &ldquo;{r.quote}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-linen/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-linen group-hover:text-sage-light transition-colors">
                  {r.author}
                </p>
                <p className="text-[11px] text-sage-light font-medium mt-0.5">{r.event}</p>
                <p className="text-[10px] text-linen/50 font-light">📍 {r.location}</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
                Verified ✓
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

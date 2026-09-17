"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-canvas text-ink">
      <div className="max-w-4xl mx-auto">
        
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest text-sage bg-sage/15 px-3 py-1 rounded-full border border-sage/30 inline-block mb-2">
            📍 Central Facility &amp; Tasting Suite
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-ink tracking-tight">
            VISIT OUR CENTRAL KITCHEN
          </h2>
          <p className="text-xs sm:text-sm text-ink/70 font-light mt-1">
            Pulikamala Road, Anicadu, Kottayam • Statewide fleet dispatch across Kerala
          </p>
        </motion.div>

        {/* Compact 2-Column Luxury Location Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-sand-dark/40 bg-white shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch"
        >
          {/* Left Column: Mini Interactive Map */}
          <div className="md:col-span-7 relative min-h-[240px] sm:min-h-[280px] bg-sand/30 border-b md:border-b-0 md:border-r border-sand">
            <iframe
              title="Elite Group Catering Services Google Map"
              src="https://maps.google.com/maps?q=Elite+group+catering+services+Pulikamala+road+Anicadu+Kerala+689589&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[240px] sm:min-h-[280px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Subtle Overlay Pin Badge */}
            <div className="absolute top-3 left-3 bg-forest-deep/90 text-linen backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono border border-sage-light/20 flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Anicadu, Kottayam</span>
            </div>
          </div>

          {/* Right Column: Compact Location Details & Actions */}
          <div className="md:col-span-5 p-5 sm:p-6 flex flex-col justify-between bg-sand/15">
            <div>
              {/* Google Verified Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-ink leading-tight">
                    Elite group catering
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5 text-xs text-ink/70">
                    <span className="text-amber-500 font-bold">4.9 ★★★★★</span>
                    <span>(202 reviews)</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-bold border border-emerald-300 uppercase tracking-wider shrink-0">
                  Verified ✓
                </span>
              </div>

              {/* Address */}
              <div className="text-xs text-ink/80 space-y-1 mb-4 pb-3 border-b border-sand">
                <p className="font-medium text-ink">🏢 Facility Address:</p>
                <p className="text-[11px] text-ink/70 leading-relaxed">
                  Pulikamala road, Anicadu, Kerala 689589
                </p>
                <p className="text-[10px] text-sage font-medium">
                  🕒 Open 24 Hours • Tasting by Appointment
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href={brand.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-forest-deep hover:bg-sage text-linen font-bold text-xs transition-all shadow flex items-center justify-center gap-2 hover:scale-[1.02] text-center"
              >
                <span>🧭 Get Driving Directions</span>
              </a>
              <a
                href={brand.phoneHref}
                className="w-full py-2 px-4 rounded-xl bg-white hover:bg-sand/40 border border-sand-dark/40 text-ink font-semibold text-xs transition-all flex items-center justify-center gap-1.5 text-center"
              >
                <span>📞 Call Kitchen Concierge</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

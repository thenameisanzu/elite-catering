"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { brand } from "@/lib/content";

interface CityProximity {
  city: string;
  time: string;
  dist: string;
  route: string;
  desc: string;
}

const cities: CityProximity[] = [
  {
    city: "Pala",
    time: "25 mins",
    dist: "18 km",
    route: "Via Pala - Ponkunnam Rd",
    desc: "Direct delivery corridor for Pala & Meenachil wedding venues.",
  },
  {
    city: "Kottayam Town",
    time: "35 mins",
    dist: "24 km",
    route: "Via KK Road / NH 183",
    desc: "Regular catering fleets dispatched to Kottayam club & auditorium banquets.",
  },
  {
    city: "Thiruvalla",
    time: "28 mins",
    dist: "20 km",
    route: "Via Mallappally - Thiruvalla Rd",
    desc: "Prime service area for Syrian Christian wedding feasts & receptions.",
  },
  {
    city: "Changanassery",
    time: "30 mins",
    dist: "22 km",
    route: "Via Vazhoor - Changanassery Rd",
    desc: "Dedicated temperature-controlled food transport for church & hall events.",
  },
  {
    city: "Pathanamthitta",
    time: "40 mins",
    dist: "32 km",
    route: "Via Kozhencherry - Mallappally Rd",
    desc: "Complete catering fleet with live chef pavilions and dessert stations.",
  },
  {
    city: "Kochi / Ernakulam",
    time: "90 mins",
    dist: "75 km",
    route: "Via MC Road / Tripunithura",
    desc: "Luxury destination wedding catering with mobile live kitchens across Cochin.",
  },
];

export default function Contact() {
  const [selectedCity, setSelectedCity] = useState<CityProximity>(cities[0]);

  return (
    <section id="contact" className="relative py-20 md:py-36 px-4 sm:px-6 md:px-10 bg-canvas text-ink overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-sage/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-sand/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            <span>📍 Central Kitchen &amp; Tasting Suite</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal text-ink tracking-tight mb-2 sm:mb-3">
            VISIT OUR CENTRAL FACILITY
          </h2>

          <p className="font-script text-2xl sm:text-4xl text-sage mb-3 sm:mb-4 font-normal">
            Located in Anicadu, Kottayam
          </p>

          <p className="text-xs sm:text-base text-ink/75 leading-relaxed font-light text-balance max-w-2xl mx-auto">
            Experience our private menu tasting suite or visit our state-of-the-art pure-veg and non-veg kitchen setups. We dispatch temperature-controlled refrigerated fleets across all 14 districts in Kerala.
          </p>
        </motion.div>

        {/* Master Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Google Map Master Frame (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col rounded-3xl border border-sand-dark/40 bg-white shadow-xl overflow-hidden min-h-[460px] lg:min-h-[600px] relative"
          >
            {/* Map Top Bar */}
            <div className="p-4 sm:p-5 bg-forest-deep text-linen border-b border-sage-light/20 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <span className="text-xs font-bold tracking-wide block">LIVE GPS PINPOINT</span>
                  <span className="text-[10px] text-linen/70 font-mono">9.4975° N, 76.6718° E • Pulikamala Rd, Anicadu</span>
                </div>
              </div>

              <a
                href={brand.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-sage hover:bg-sage-deep text-linen font-bold text-[11px] transition-all shadow flex items-center gap-1.5 hover:scale-105"
              >
                <span>🚗 Start Navigation</span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative flex-1 w-full min-h-[380px] bg-sand/30">
              <iframe
                title="Elite Group Catering Services Google Map"
                src="https://maps.google.com/maps?q=Elite+group+catering+services+Pulikamala+road+Anicadu+Kerala+689589&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Quick Action Overlay at Bottom of Map */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2.5 items-center justify-between pointer-events-none">
                <div className="pointer-events-auto flex flex-wrap gap-2">
                  <a
                    href={brand.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-forest-deep/95 hover:bg-forest-deep text-linen backdrop-blur-md shadow-2xl border border-sage-light/30 text-xs font-bold transition-all flex items-center gap-2 hover:scale-105"
                  >
                    <span>🧭 Open in Google Maps</span>
                  </a>
                  <a
                    href={brand.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-white/95 hover:bg-white text-ink backdrop-blur-md shadow-xl border border-sand-dark/30 text-xs font-bold transition-all flex items-center gap-1.5 hover:scale-105"
                  >
                    <span>⭐ 202 Reviews</span>
                  </a>
                </div>

                <div className="pointer-events-auto hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-deep/90 text-linen/90 backdrop-blur-md border border-sage-light/20 text-[10px] font-mono">
                  <span>📍 Mallappally / Kottayam</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bento Information Cards Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            
            {/* Bento Card 1: Verified Google Place Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-5 sm:p-6 rounded-3xl bg-forest-deep text-linen border border-sage-light/20 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-md">
                    <span className="font-display text-2xl font-black text-forest-deep">G</span>
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-linen leading-snug">
                      Elite group catering services
                    </h3>
                    <p className="text-[11px] text-sage-light font-medium">
                      Event Caterer &amp; Hospitality
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 uppercase tracking-wider shrink-0">
                  Verified ✓
                </span>
              </div>

              {/* Rating & Highlights Bar */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-linen/5 border border-linen/10 text-center mb-4">
                <div>
                  <span className="text-amber-400 font-bold text-sm block">4.9 ★</span>
                  <span className="text-[10px] text-linen/60">Rating</span>
                </div>
                <div className="border-x border-linen/10">
                  <span className="text-linen font-bold text-sm block">202+</span>
                  <span className="text-[10px] text-linen/60">Google Reviews</span>
                </div>
                <div>
                  <span className="text-emerald-300 font-bold text-sm block">24 Hours</span>
                  <span className="text-[10px] text-linen/60">Kitchen Active</span>
                </div>
              </div>

              {/* Full Address */}
              <div className="text-xs text-linen/80 space-y-1 font-light">
                <p className="font-semibold text-linen flex items-center gap-1.5">
                  <span>🏢 Facility Address:</span>
                </p>
                <p className="text-linen/75 leading-relaxed pl-5">
                  Pulikamala road, Anicadu, Kerala 689589
                </p>
              </div>
            </motion.div>

            {/* Bento Card 2: Interactive Kerala Hub Distance & Route Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-sand-dark/40 shadow-xl flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sage block">
                    Travel Time &amp; Dispatch Radius
                  </span>
                  <span className="text-[10px] text-ink/50 font-mono">Select your city</span>
                </div>

                {/* City Selector Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cities.map((c) => {
                    const isActive = selectedCity.city === c.city;
                    return (
                      <button
                        key={c.city}
                        onClick={() => setSelectedCity(c)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-forest-deep text-linen shadow-md scale-105"
                            : "bg-sand/40 text-ink/70 hover:bg-sand hover:text-ink"
                        }`}
                      >
                        {c.city}
                      </button>
                    );
                  })}
                </div>

                {/* Selected City Details Highlight Box */}
                <div className="p-3.5 rounded-2xl bg-sand/30 border border-sand-dark/30 mb-4">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-display text-sm font-bold text-ink">
                      From {selectedCity.city}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-sage bg-sage/15 px-2.5 py-0.5 rounded-full">
                        {selectedCity.time}
                      </span>
                      <span className="text-xs text-ink/60">({selectedCity.dist})</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-ink/60 font-mono mb-1.5">
                    🛣️ {selectedCity.route}
                  </p>
                  <p className="text-xs text-ink/80 leading-relaxed font-light">
                    {selectedCity.desc}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
                    selectedCity.city + ", Kerala"
                  )}&destination=Elite+group+catering+services+Pulikamala+road+Anicadu+Kerala+689589`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-forest-deep hover:bg-sage text-linen font-bold text-xs transition-all shadow flex items-center justify-center gap-2 hover:scale-[1.02] text-center"
                >
                  <span>🧭 Route from {selectedCity.city}</span>
                </a>

                <a
                  href={brand.phoneHref}
                  className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-sand/50 hover:bg-sand border border-sand-dark/40 text-ink font-semibold text-xs transition-all flex items-center justify-center gap-1.5 text-center"
                >
                  <span>📞 Call Concierge</span>
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

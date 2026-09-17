"use client";

import { brand } from "@/lib/content";
import WhatsAppIcon from "./WhatsAppIcon";

const travelDistances = [
  { city: "Pala", time: "25 mins", dist: "18 km" },
  { city: "Kottayam Town", time: "35 mins", dist: "24 km" },
  { city: "Changanassery", time: "30 mins", dist: "22 km" },
  { city: "Thiruvalla", time: "28 mins", dist: "20 km" },
  { city: "Kochi / Kakkanad", time: "90 mins", dist: "75 km" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 px-4 sm:px-6 md:px-10 bg-canvas text-ink overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-sage/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-80 h-80 bg-sand/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            <span>📍 Central Kitchen &amp; Tasting Suite</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal text-ink tracking-tight mb-2 sm:mb-3">
            VISIT OUR CENTRAL FACILITY
          </h2>

          <p className="font-script text-2xl sm:text-4xl text-sage mb-3 sm:mb-4 font-normal">
            Located in Anicadu, Kottayam
          </p>

          <p className="text-xs sm:text-base text-ink/75 leading-relaxed font-light text-balance max-w-xl mx-auto">
            Schedule a private menu tasting session with our executive chef or visit our state-of-the-art kitchen facility. We dispatch refrigerated fleets to all 14 districts across Kerala.
          </p>
        </div>

        {/* Master Google Map & Profile Showcase Box */}
        <div className="rounded-3xl border border-sand-dark/40 bg-white shadow-2xl overflow-hidden">
          
          {/* Top Google Profile Header Ribbon */}
          <div className="p-6 sm:p-8 bg-forest-deep text-linen border-b border-sage-light/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-md border border-sage">
                <span className="font-display text-2xl font-bold text-forest-deep">G</span>
              </div>
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-linen">
                    Elite group catering services
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 uppercase tracking-wider">
                    Verified Google Business ✓
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-linen/80 flex-wrap">
                  <span className="text-amber-400 font-bold">4.9 ★★★★★</span>
                  <span className="text-linen/40">•</span>
                  <span className="font-medium text-sage-light">202 Google reviews</span>
                  <span className="text-linen/40">•</span>
                  <span>Caterer &amp; Event Host</span>
                </div>
              </div>
            </div>

            {/* Quick Live Status & Actions */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="px-4 py-2 rounded-xl bg-linen/10 border border-linen/15 text-xs text-linen flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-emerald-300">Open 24 Hours</span>
              </div>
              <a
                href={brand.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-sage hover:bg-sage-deep text-linen font-bold text-xs transition-all shadow-md flex items-center gap-2 hover:scale-105 border border-sage-light/30"
              >
                <span>🧭 Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map & Details Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Map Canvas Frame */}
            <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[460px] bg-sand/30 border-b lg:border-b-0 lg:border-r border-sand">
              <iframe
                title="Elite Group Catering Services Google Map"
                src="https://maps.google.com/maps?q=Elite+group+catering+services+Pulikamala+road+Anicadu+Kerala+689589&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Quick Action Overlay on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 flex flex-wrap gap-2">
                <a
                  href={brand.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-forest-deep/90 hover:bg-forest-deep text-linen backdrop-blur-md shadow-xl border border-sage-light/30 text-xs font-bold transition-all flex items-center gap-2 hover:scale-105"
                >
                  <span>🧭 Open in Google Maps</span>
                </a>
                <a
                  href={brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/95 hover:bg-white text-ink backdrop-blur-md shadow-xl border border-sand-dark/30 text-xs font-bold transition-all flex items-center gap-2 hover:scale-105"
                >
                  <span>⭐ 202 Reviews</span>
                </a>
              </div>
            </div>

            {/* Right Information & Booking Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-sand/15">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sage block mb-1">
                    Facility Location
                  </span>
                  <p className="font-display text-lg font-bold text-ink mb-1">
                    Pulikamala Road, Anicadu
                  </p>
                  <p className="text-xs text-ink/75 leading-relaxed">
                    Pulikamala road, Anicadu, Mallappally / Kottayam border, Kerala 689589
                  </p>
                </div>

                {/* Quick Travel Proximity Estimates */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-ink/60 block mb-2">
                    Estimated Drive Time
                  </span>
                  <div className="space-y-1.5">
                    {travelDistances.map((dist, dIdx) => (
                      <div key={dIdx} className="flex items-center justify-between text-xs py-1 border-b border-sand">
                        <span className="font-medium text-ink/85">{dist.city}</span>
                        <div className="flex items-center gap-2 text-ink/60">
                          <span className="font-semibold text-sage">{dist.time}</span>
                          <span className="text-[10px]">({dist.dist})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tasting Suite Notice */}
                <div className="p-3.5 rounded-2xl bg-sage/15 border border-sage/30 text-xs text-ink/85 flex items-start gap-2.5">
                  <span className="text-base shrink-0">👨‍🍳</span>
                  <p className="leading-snug">
                    <strong className="text-ink font-semibold">Tasting Appointments:</strong> Private family tasting sessions can be scheduled Monday to Sunday with prior notice.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-sand space-y-2.5">
                <a
                  href="https://wa.me/919778368993?text=Hi%20Elite%20Group%2C%20please%20send%20me%20your%20Google%20Maps%20location%20pin%20and%20directions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-sage hover:bg-sage-deep text-linen font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  <span>Send Location Pin to WhatsApp</span>
                </a>

                <a
                  href={brand.phoneHref}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-sand/40 border border-sand-dark/40 text-ink font-semibold text-xs transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>📞 Call Kitchen Concierge</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

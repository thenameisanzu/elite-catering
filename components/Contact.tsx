"use client";

import { brand } from "@/lib/content";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-xs font-semibold uppercase tracking-widest mb-4">
            <span>📍 Visit Our Central Kitchen &amp; Tasting Facility</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-normal text-ink tracking-tight mb-4">
            FIND US ON GOOGLE MAPS
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-sage mb-4 font-normal">
            Visit us in Anicadu, Kottayam
          </p>

          <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-light">
            Plan your event in person or schedule a private menu tasting session at our kitchen facility. We cater to celebrations across all districts of Kerala.
          </p>
        </div>

        {/* 2-Column Split: Google Profile Card + Live Google Maps Iframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Google Business Profile Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-sand-dark/40 shadow-xl overflow-hidden flex flex-col justify-between">
            {/* Top Photo Strip Header */}
            <div className="grid grid-cols-2 gap-1 h-36 bg-forest-deep relative overflow-hidden">
              <div
                className="h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop')`,
                }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-2 left-2 text-[10px] bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded-md font-medium">
                  See photos
                </span>
              </div>
              <div
                className="h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop')`,
                }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-2 right-2 text-[10px] bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded-md font-medium">
                  Central Kitchen
                </span>
              </div>
            </div>

            {/* Profile Content Body */}
            <div className="p-6 sm:p-7 flex-1">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight">
                    Elite group catering services
                  </h3>
                  <p className="text-xs text-ink/60 font-medium mt-0.5">Premier Caterer &amp; Event Host</p>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Verified ✓
                </span>
              </div>

              {/* Rating & Review Counter */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-amber-500 font-bold text-sm">4.9</span>
                <div className="flex text-amber-400 text-xs">
                  {"★★★★★"}
                </div>
                <span className="text-xs text-ink/60 font-medium">
                  (202 Google reviews)
                </span>
              </div>

              {/* Google Actions Pill Bar */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                <a
                  href={brand.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-sand/60 hover:bg-sage/20 border border-sand-dark/30 flex flex-col items-center justify-center gap-1 transition-all text-center group"
                >
                  <span className="text-base group-hover:scale-110 transition-transform">🧭</span>
                  <span className="text-[10px] font-semibold text-ink">Directions</span>
                </a>

                <a
                  href={brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-sand/60 hover:bg-sage/20 border border-sand-dark/30 flex flex-col items-center justify-center gap-1 transition-all text-center group"
                >
                  <span className="text-base group-hover:scale-110 transition-transform">⭐</span>
                  <span className="text-[10px] font-semibold text-ink">Reviews</span>
                </a>

                <a
                  href={brand.phoneHref}
                  className="p-2 rounded-xl bg-sand/60 hover:bg-sage/20 border border-sand-dark/30 flex flex-col items-center justify-center gap-1 transition-all text-center group"
                >
                  <span className="text-base group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-[10px] font-semibold text-ink">Call</span>
                </a>

                <a
                  href={brand.waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex flex-col items-center justify-center gap-1 transition-all text-center group"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-600 fill-current group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-emerald-800">WhatsApp</span>
                </a>
              </div>

              {/* Location & Info Rows */}
              <div className="space-y-3.5 text-xs text-ink/80 border-t border-sand pt-4">
                <div className="flex items-start gap-3">
                  <span className="text-base text-sage shrink-0">📍</span>
                  <div>
                    <strong className="font-semibold text-ink block">Address:</strong>
                    <span>{brand.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-sage shrink-0">🕒</span>
                  <div>
                    <strong className="font-semibold text-ink block">Hours &amp; Status:</strong>
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Open 24 hours · Central Kitchen Active Now
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-sage shrink-0">📱</span>
                  <div>
                    <strong className="font-semibold text-ink block">Phone:</strong>
                    <a href={brand.phoneHref} className="hover:text-sage transition-colors font-medium">
                      {brand.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Bottom Direct Navigation Trigger */}
            <div className="p-4 bg-sand/40 border-t border-sand flex items-center justify-between">
              <a
                href="https://wa.me/919778368993?text=Hi%20Elite%20Group%2C%20please%20send%20me%20your%20Google%20Maps%20location%20pin."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Send Pin to WhatsApp</span>
              </a>
              <a
                href={brand.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sage hover:text-sage-deep transition-colors flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Live Interactive Google Map Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-sand-dark/40 shadow-xl relative min-h-[420px] bg-sand">
            <iframe
              title="Elite Group Catering Services Google Map"
              src="https://maps.google.com/maps?q=Elite+group+catering+services+Pulikamala+road+Anicadu+Kerala+689589&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Quick Direction Pill on Map */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto z-10">
              <a
                href={brand.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-forest-deep/90 hover:bg-forest-deep text-linen backdrop-blur-md shadow-2xl border border-sage-light/30 flex items-center justify-center sm:justify-start gap-3 text-xs font-bold transition-all hover:scale-105"
              >
                <span className="text-lg">🧭</span>
                <span>Get Driving Directions to Kitchen</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

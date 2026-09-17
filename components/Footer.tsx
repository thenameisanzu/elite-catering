import { brand } from "@/lib/content";
import DiamondMark from "./DiamondMark";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-linen px-6 md:px-10 pt-16 pb-12 border-t border-sage-light/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-linen/15">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <DiamondMark size={32} animate={false} />
              <div className="font-display text-xl leading-none text-linen">
                Elite Group
                <span className="block text-[10px] tracking-widest2 uppercase text-sage-light font-medium mt-1">
                  Catering &amp; Events · Est. 2015
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-linen/75 font-light leading-relaxed max-w-sm">
              Kerala&apos;s premier wedding and milestone catering service. Specializing in royal 26-course banana leaf sadyas, theatrical live food counters, and luxury event hospitality.
            </p>

            <p className="text-xs text-sage-light font-medium">
              📍 Central Kitchen: {brand.address}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-sage-light font-bold">
              Explore
            </p>
            <ul className="space-y-2 text-xs text-linen/80 font-light">
              <li>
                <a href="#about" className="hover:text-sage-light transition-colors">
                  About Our Kitchen
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sage-light transition-colors">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-sage-light transition-colors">
                  Food Menu Packages
                </a>
              </li>
              <li>
                <a href="#availability" className="hover:text-sage-light transition-colors">
                  Check Date Availability
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sage-light transition-colors">
                  Verified Google Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Direct Connect */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-widest text-sage-light font-bold">
              Connect &amp; Follow
            </p>
            <p className="text-xs text-linen/75 font-light">
              Follow our daily wedding setups, live food counters, and behind-the-scenes on Instagram.
            </p>

            {/* Social Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* Instagram Button */}
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-linen/10 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 border border-linen/20 text-linen text-xs font-semibold transition-all flex items-center gap-2 group shadow-sm hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={brand.waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/40 text-linen text-xs font-semibold transition-all flex items-center gap-2 shadow-sm hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-300" />
                <span>WhatsApp</span>
              </a>

              {/* Google Maps Pin Button */}
              <a
                href={brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-linen/10 hover:bg-sage/40 border border-linen/20 text-linen text-xs font-semibold transition-all flex items-center gap-2 shadow-sm hover:scale-105"
              >
                <span>📍 Google Map</span>
              </a>

              {/* Direct Call Button */}
              <a
                href={brand.phoneHref}
                className="px-4 py-2 rounded-xl bg-linen/10 hover:bg-sage/40 border border-linen/20 text-linen text-xs font-semibold transition-all flex items-center gap-2 shadow-sm hover:scale-105"
              >
                <span>📞 Call Us</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits Strip */}
        <div className="pt-8 text-xs text-linen/50 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>© {new Date().getFullYear()} Elite Group Catering and Events. All Rights Reserved.</p>
          <p className="flex items-center gap-3">
            <span>Kottayam · Kochi · All Kerala</span>
            <span>•</span>
            <span>Site by Aethra Digital Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

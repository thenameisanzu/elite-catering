import { brand } from "@/lib/content";
import DiamondMark from "./DiamondMark";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-linen/70 px-6 md:px-10 py-12 border-t border-forest">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
        <div className="flex items-center gap-3 text-linen">
          <DiamondMark size={28} animate={false} />
          <div className="font-display text-base leading-none">
            Elite Group
            <span className="block text-[9px] tracking-widest2 uppercase text-sage-light font-medium mt-1">
              Catering &amp; Events
            </span>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-1 text-sm font-light text-center md:text-right">
          <p>{brand.location}</p>
          <a href={brand.phoneHref} className="hover:text-sage-light transition-colors">
            {brand.phone}
          </a>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sage-light transition-colors"
          >
            {brand.instagramHandle}
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-linen/15 text-xs text-linen/50 flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Elite Group Catering and Events. Since 2015.</p>
        <p>Site by Aethra Digital Solutions</p>
      </div>
    </footer>
  );
}

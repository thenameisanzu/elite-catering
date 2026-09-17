"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories, menuItems, MenuItem, MenuCategory } from "@/lib/content";

export default function MenuExplorer() {
  const [selectedCat, setSelectedCat] = useState<MenuCategory>("All");
  const [dietaryFilter, setDietaryFilter] = useState<string>("All");
  const [wishlist, setWishlist] = useState<MenuItem[]>([]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCat = selectedCat === "All" || item.category === selectedCat;
      const matchDiet =
        dietaryFilter === "All" ||
        (dietaryFilter === "Veg" && item.tags.includes("Pure Veg")) ||
        (dietaryFilter === "NonVeg" && item.tags.includes("Non-Veg")) ||
        (dietaryFilter === "ChefSpecial" && item.tags.includes("Chef Special"));
      return matchCat && matchDiet;
    });
  }, [selectedCat, dietaryFilter]);

  const toggleWishlist = (item: MenuItem) => {
    setWishlist((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  const tastingWhatsAppUrl = useMemo(() => {
    const list = wishlist.map((item, idx) => `${idx + 1}. ${item.name} (${item.category})`).join("\n");
    const text = `Hello Elite Group Catering! 🍽️\n\nI have created a custom menu wishlist for my upcoming event:\n\n${list}\n\nPlease share detailed pricing and tasting scheduling options for these dishes!`;
    return `https://wa.me/919778368993?text=${encodeURIComponent(text)}`;
  }, [wishlist]);

  return (
    <section id="menu" className="relative py-28 md:py-36 px-6 md:px-10 bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-widest2 uppercase text-sage font-semibold mb-3">
              Culinary Repertoire
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl md:text-5xl text-ink leading-tight"
            >
              Explore our signature menus.
            </motion.h2>
          </div>

          {/* Dietary pill quick-toggles */}
          <div className="flex items-center gap-2 bg-sand/60 p-1.5 rounded-full border border-sage-light/40 self-start md:self-auto">
            {[
              { id: "All", label: "All Items" },
              { id: "Veg", label: "🌱 Pure Veg" },
              { id: "NonVeg", label: "🍗 Non-Veg / Halal" },
              { id: "ChefSpecial", label: "⭐ Chef Specials" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setDietaryFilter(tab.id)}
                className={`px-3 py-1.5 text-xs rounded-full transition-all duration-200 ${
                  dietaryFilter === tab.id
                    ? "bg-sage text-linen font-medium shadow-sm"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all border ${
                selectedCat === cat
                  ? "bg-forest-deep text-linen border-forest-deep shadow-sm"
                  : "bg-sand/30 border-sage-light/40 text-ink/70 hover:border-sage hover:text-sage"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dish Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const inWishlist = wishlist.some((i) => i.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-sand/35 rounded-2xl p-6 border border-sage-light/40 flex flex-col justify-between hover:border-sage/70 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${
                              tag === "Pure Veg"
                                ? "bg-sage/20 text-forest-deep"
                                : tag === "Chef Special"
                                ? "bg-brass/20 text-brass font-bold"
                                : tag === "Signature"
                                ? "bg-forest-deep text-linen"
                                : "bg-sage-light/40 text-ink"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-sage font-medium whitespace-nowrap">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl text-ink font-semibold group-hover:text-forest transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-ink/70 leading-relaxed font-light mb-6">
                      {item.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(item)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-2 border ${
                      inWishlist
                        ? "bg-sage text-linen border-sage shadow-sm"
                        : "bg-linen border-sage-light/60 text-ink/80 hover:bg-sage/10 hover:border-sage"
                    }`}
                  >
                    <span>{inWishlist ? "✓ In Tasting Wishlist" : "+ Add to Tasting Wishlist"}</span>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Tasting Wishlist Tray */}
        {wishlist.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 p-6 bg-forest-deep text-linen rounded-2xl border border-sage/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div>
              <span className="text-xs uppercase tracking-widest2 text-sage-light font-semibold block mb-1">
                Curated Menu Wishlist ({wishlist.length} Dishes Selected)
              </span>
              <p className="text-xs text-linen/75 font-light">
                Ready to sample these dishes? Send your tasting selection directly to our executive chef team.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setWishlist([])}
                className="text-xs text-linen/60 hover:text-linen underline underline-offset-4"
              >
                Clear
              </button>
              <a
                href={tastingWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-sage text-linen font-medium rounded-xl hover:bg-sage-deep transition-colors text-xs flex items-center gap-2 shadow-md"
              >
                <span>💬 Request Tasting on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

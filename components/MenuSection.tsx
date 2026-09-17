"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

interface MenuPackage {
  id: string;
  name: string;
  badge?: string;
  priceRange: string;
  taxNote: string;
  welcomeDrinks: string;
  welcomeNote?: string;
  salads: string;
  saladsNote?: string;
  starters?: {
    count: string;
    details: string;
  };
  soups?: {
    count: string;
    details: string;
  };
  firstCourse: {
    breads: string;
    breadsNote?: string;
    nonVegItems: string;
    optionalNote: string;
  };
  mainCourse: {
    riceOrNoodles: string;
    riceNote?: string;
    vegItems: string;
    nonVegItems: string;
    pickles: string;
    desserts: string;
    dessertNote?: string;
  };
  liveCounters?: string;
}

const packages: MenuPackage[] = [
  {
    id: "standard",
    name: "STANDARD MENU",
    priceRange: "₹450 - ₹600",
    taxNote: "+ 5% GST",
    welcomeDrinks: "4",
    salads: "4",
    firstCourse: {
      breads: "2",
      nonVegItems: "1",
      optionalNote: "Rice & Curries (Optional)",
    },
    mainCourse: {
      riceOrNoodles: "Rice — 1",
      vegItems: "2",
      nonVegItems: "2",
      pickles: "3",
      desserts: "3",
    },
  },
  {
    id: "classy",
    name: "CLASSY MENU",
    badge: "Popular Choice",
    priceRange: "₹600 - ₹800",
    taxNote: "+ 5% GST",
    welcomeDrinks: "5",
    salads: "6",
    starters: {
      count: "2",
      details: "1 Non-Veg & 1 Veg",
    },
    firstCourse: {
      breads: "3",
      nonVegItems: "2",
      optionalNote: "Rice & Curries (Optional)",
    },
    mainCourse: {
      riceOrNoodles: "Rice & Noodles — 2",
      vegItems: "2",
      nonVegItems: "2",
      pickles: "4",
      desserts: "4",
    },
    liveCounters: "Live Counters Available",
  },
  {
    id: "elegant",
    name: "ELEGANT MENU",
    badge: "Most Recommended",
    priceRange: "₹800 - ₹1000",
    taxNote: "+ 5% GST",
    welcomeDrinks: "6",
    welcomeNote: "Fresh Juice Included",
    salads: "7",
    saladsNote: "Whole Fish And Chicken Display",
    starters: {
      count: "3",
      details: "2 Non-Veg & 1 Veg",
    },
    soups: {
      count: "2",
      details: "1 Non-Veg & 1 Veg",
    },
    firstCourse: {
      breads: "4",
      breadsNote: "Live For Selected Items",
      nonVegItems: "2",
      optionalNote: "Rice & Curries (Optional)",
    },
    mainCourse: {
      riceOrNoodles: "Rice & Noodles — 3",
      riceNote: "Pulao Available",
      vegItems: "3",
      nonVegItems: "3",
      pickles: "5",
      desserts: "5",
      dessertNote: "Live Desserts",
    },
    liveCounters: "Live Counters Available",
  },
  {
    id: "executive",
    name: "EXECUTIVE MENU",
    badge: "Premium Banquets",
    priceRange: "₹1000 - ₹1300",
    taxNote: "+ 5% GST",
    welcomeDrinks: "6",
    welcomeNote: "Mocktails & Fresh Juice Included",
    salads: "8",
    saladsNote: "Whole Fish & Chicken Display, Veg Carvings",
    starters: {
      count: "4",
      details: "3 Non-Veg & 1 Veg",
    },
    soups: {
      count: "3",
      details: "2 Non-Veg & 1 Veg",
    },
    firstCourse: {
      breads: "4",
      breadsNote: "Live",
      nonVegItems: "3",
      optionalNote: "Rice & Curries (Optional)",
    },
    mainCourse: {
      riceOrNoodles: "Rice & Noodles — 4",
      riceNote: "Pulao & Live Pasta Available",
      vegItems: "3",
      nonVegItems: "3",
      pickles: "6",
      desserts: "6",
      dessertNote: "Live Desserts",
    },
    liveCounters: "Live Counters & Themes Available",
  },
  {
    id: "grand",
    name: "GRAND MENU",
    badge: "Imperial Luxury Spread",
    priceRange: "₹1300 & above",
    taxNote: "+ 5% GST",
    welcomeDrinks: "Any",
    welcomeNote: "Live Mojito, Mocktails, Fresh Juice Included",
    salads: "Any",
    saladsNote: "Cheese Platter, Live Salad, Fruit Display, Meat Display, Fish Display, Veg Carvings, Etc.",
    starters: {
      count: "6",
      details: "4 Non-Veg & 2 Veg",
    },
    soups: {
      count: "3",
      details: "2 Non-Veg & 1 Veg",
    },
    firstCourse: {
      breads: "4",
      breadsNote: "Live",
      nonVegItems: "3",
      optionalNote: "Rice & Curries (Optional)",
    },
    mainCourse: {
      riceOrNoodles: "Rice & Noodles — 5",
      riceNote: "Pulao, Live Pasta, Italian, Continental Dishes Available",
      vegItems: "3",
      nonVegItems: "4",
      pickles: "Extravagant Varieties",
      desserts: "Extravagant Varieties",
      dessertNote: "Including Live Display",
    },
    liveCounters: "Live Counters & Themes Available",
  },
];

const cuisinesList = [
  "South Indian",
  "Kerala",
  "Travancore",
  "Continental",
  "Malabari",
  "Chinese",
  "Thai",
  "Korean",
  "Caribbean",
  "Mediterranean",
  "Italian",
  "Moroccan",
  "Spanish",
  "Arabian",
  "Vegan",
  "Multicuisine",
  "Gluten free",
  "Organic",
  "Something Else",
];

const artisanalDesserts = [
  { name: "Live Kunafa", tag: "Live Theatre", icon: "✨", desc: "Crispy shredded pastry with molten cheese & warm rose syrup" },
  { name: "Yellow Jilebi with Rabdi", tag: "Chef Specialty", icon: "🍯", desc: "Piping hot saffron spirals dipped in rich cardamom rabdi" },
  { name: "Um-Ali Pudding", tag: "Middle Eastern", icon: "🍨", desc: "Egyptian layered puff pastry soaked in sweetened spiced milk & nuts" },
  { name: "Ferrero Rocher Pudding", tag: "Gourmet", icon: "🍫", desc: "Rich hazelnut chocolate mousse with crushed wafers & praline" },
  { name: "Sticky Toffee Pudding", tag: "Signature", icon: "🍮", desc: "Warm date sponge drenched in velvety salted caramel toffee sauce" },
  { name: "Exotic Cut Fruits", tag: "Fresh Carved", icon: "🍉", desc: "Artisanal floral carved watermelon, dragon fruit & imported berries" },
  { name: "Mexican Brownie", tag: "Decadent", icon: "🍫", desc: "Fudgy dark chocolate brownie with cinnamon hint & warm ganache" },
  { name: "Biscuit-Pineapple Pudding", tag: "Classic", icon: "🍍", desc: "Chilled caramelized pineapple cream with butter biscuit crumb" },
  { name: "Elite Special Ice Cream", tag: "House Craft", icon: "🍦", desc: "Live cold-stone churned seasonal rolls with roasted nuts" },
];

export default function MenuSection() {
  const [activePackageId, setActivePackageId] = useState<string>("classy");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(["Kerala", "Travancore"]);
  const [showAllCuisines, setShowAllCuisines] = useState(false);

  const toggleCuisine = (c: string) => {
    if (selectedCuisines.includes(c)) {
      setSelectedCuisines(selectedCuisines.filter((item) => item !== c));
    } else {
      setSelectedCuisines([...selectedCuisines, c]);
    }
  };


  const displayedPackages =
    activePackageId === "all"
      ? packages
      : packages.filter((p) => p.id === activePackageId);

  return (
    <section id="menu" className="relative py-20 md:py-36 px-4 sm:px-6 md:px-10 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            <span>🍽️ Curated Culinary Packages</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal text-ink tracking-tight mb-2 sm:mb-3">
            OUR FOOD MENU
          </h2>

          <p className="font-script text-2xl sm:text-4xl text-sage mb-3 sm:mb-4 font-normal">
            Welcome to a feast of flavors!
          </p>

          <p className="text-xs sm:text-base text-ink/75 leading-relaxed font-light text-balance max-w-xl mx-auto">
            A great meal is more than just food, it&apos;s an experience. At Elite Group, we bring you a menu designed to suit every occasion.
          </p>
        </div>

        {/* 1. Sleek Mobile-Friendly Package Tier Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar select-none">
          <button
            onClick={() => setActivePackageId("all")}
            className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 border whitespace-nowrap ${
              activePackageId === "all"
                ? "bg-sage text-linen border-sage shadow-md"
                : "bg-white text-ink/70 border-sand-dark/40 hover:border-sage hover:bg-sand/30"
            }`}
          >
            All 5 Packages
          </button>
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActivePackageId(pkg.id)}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 border whitespace-nowrap ${
                activePackageId === pkg.id
                  ? "bg-sage text-linen border-sage shadow-md"
                  : "bg-white text-ink/70 border-sand-dark/40 hover:border-sage hover:bg-sand/30"
              }`}
            >
              {pkg.name.replace(" MENU", "")} ({pkg.priceRange})
            </button>
          ))}
        </div>

        {/* 2. Menu Cards Grid */}
        <div className={`grid gap-6 sm:gap-8 mb-12 items-stretch ${activePackageId === "all" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-2xl mx-auto"}`}>
          <AnimatePresence mode="popLayout">
            {displayedPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.badge
                    ? "bg-white border-2 border-sage shadow-2xl ring-4 ring-sage/15"
                    : "bg-white/95 border border-sand-dark/40 shadow-lg hover:shadow-xl hover:border-sage/40"
                }`}
              >
                {/* Badge if present */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-forest-deep text-sage-light text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-md border border-sage/30 flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                    <span>✨</span>
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  {/* Header: Title & Rate */}
                  <div className="flex items-start justify-between border-b border-sand pb-4 mb-4">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink">
                        {pkg.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-widest text-ink/60 font-semibold block">
                        RATE
                      </span>
                      <span className="font-display text-base sm:text-xl font-bold text-sage">
                        {pkg.priceRange}
                      </span>
                      <span className="text-[10px] text-ink/50 block font-medium">
                        {pkg.taxNote}
                      </span>
                    </div>
                  </div>

                  {/* Course Breakdown Items */}
                  <div className="space-y-3.5 text-xs text-ink/85">
                    
                    {/* Welcome Drinks & Salads */}
                    <div className="space-y-2 pb-3 border-b border-sand/60">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-sage font-bold">◎</span> Welcome Drink
                          {pkg.welcomeNote && (
                            <span className="text-[10px] text-ink/60 italic hidden sm:inline">({pkg.welcomeNote})</span>
                          )}
                        </span>
                        <span className="font-mono text-ink/70 font-semibold">---- {pkg.welcomeDrinks}</span>
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <span className="flex items-start gap-1.5">
                          <span className="text-sage font-bold shrink-0">◎</span>
                          <span>
                            Salads
                            {pkg.saladsNote && (
                              <span className="text-[10px] text-ink/60 italic block leading-snug">
                                ({pkg.saladsNote})
                              </span>
                            )}
                          </span>
                        </span>
                        <span className="font-mono text-ink/70 font-semibold shrink-0">---- {pkg.salads}</span>
                      </div>

                      {pkg.starters && (
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="flex items-center gap-1.5">
                            <span className="text-sage font-bold">◎</span> Starters
                            <span className="text-[10px] text-ink/60 italic">({pkg.starters.details})</span>
                          </span>
                          <span className="font-mono text-ink/70 font-semibold">---- {pkg.starters.count}</span>
                        </div>
                      )}

                      {pkg.soups && (
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="flex items-center gap-1.5">
                            <span className="text-sage font-bold">◎</span> Soups
                            <span className="text-[10px] text-ink/60 italic">({pkg.soups.details})</span>
                          </span>
                          <span className="font-mono text-ink/70 font-semibold">---- {pkg.soups.count}</span>
                        </div>
                      )}
                    </div>

                    {/* First Course */}
                    <div className="space-y-2 pb-3 border-b border-sand/60">
                      <span className="font-bold text-ink text-[10px] uppercase tracking-wider block text-sage">
                        First Course
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-sage font-bold">◎</span> Breads
                          {pkg.firstCourse.breadsNote && (
                            <span className="text-[10px] text-ink/60 italic">({pkg.firstCourse.breadsNote})</span>
                          )}
                        </span>
                        <span className="font-mono text-ink/70 font-semibold">---- {pkg.firstCourse.breads}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-sage font-bold">◎</span> Non-Veg Items
                        </span>
                        <span className="font-mono text-ink/70 font-semibold">---- {pkg.firstCourse.nonVegItems}</span>
                      </div>
                      <div className="text-ink/65 italic text-[10px] pt-0.5">
                        <span className="flex items-center gap-1.5">
                          <span className="text-sage font-bold">◎</span> {pkg.firstCourse.optionalNote}
                        </span>
                      </div>
                    </div>

                    {/* Main Course */}
                    <div className="space-y-2 pb-3 border-b border-sand/60">
                      <span className="font-bold text-ink text-[10px] uppercase tracking-wider block text-sage">
                        Main Course
                      </span>
                      <div className="flex items-start justify-between gap-2">
                        <span className="flex items-start gap-1.5">
                          <span className="text-sage font-bold shrink-0">◎</span>
                          <span>
                            {pkg.mainCourse.riceOrNoodles}
                            {pkg.mainCourse.riceNote && (
                              <span className="text-[10px] text-ink/60 italic block leading-snug">
                                ({pkg.mainCourse.riceNote})
                              </span>
                            )}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-sage font-bold">◎</span> Veg Items
                        </span>
                        <span className="font-mono text-ink/70 font-semibold">---- {pkg.mainCourse.vegItems}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-sage font-bold">◎</span> Non-Veg Items
                        </span>
                        <span className="font-mono text-ink/70 font-semibold">---- {pkg.mainCourse.nonVegItems}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-sage font-bold">◎</span> Pickles
                        </span>
                        <span className="font-mono text-ink/70 font-semibold">{pkg.mainCourse.pickles}</span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="flex items-start gap-1.5">
                          <span className="text-sage font-bold shrink-0">◎</span>
                          <span>
                            Desserts {pkg.mainCourse.desserts !== "Extravagant Varieties" && `---- ${pkg.mainCourse.desserts}`}
                            {pkg.mainCourse.dessertNote && (
                              <span className="text-[10px] text-ink/60 italic block leading-snug">
                                ({pkg.mainCourse.dessertNote})
                              </span>
                            )}
                          </span>
                        </span>
                        {pkg.mainCourse.desserts === "Extravagant Varieties" && (
                          <span className="font-mono text-ink/70 font-semibold text-[11px]">Extravagant</span>
                        )}
                      </div>
                    </div>

                    {/* Live Counters Indicator */}
                    {pkg.liveCounters && (
                      <div className="pt-1.5 flex items-center gap-2 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                        <span>✨</span>
                        <span>{pkg.liveCounters}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Footer & CTA */}
                <div className="mt-5 pt-3 border-t border-sand flex items-center justify-between gap-3">
                  <span className="text-[9px] text-ink/50 italic">
                    * Conditions Apply
                  </span>

                  <a
                    href="#date-checker"
                    className="px-5 py-2.5 rounded-xl bg-forest-deep text-linen hover:bg-sage hover:text-linen font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 group hover:scale-105"
                  >
                    <span>Book Package</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 3. Compact "WHAT MENU WOULD YOU PREFER?" Cuisine Selector Strip */}
        <div className="mb-12 p-5 sm:p-8 rounded-3xl bg-white border border-sand-dark/40 shadow-xl text-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink/60 block mb-1">
            WHAT MENU
          </span>
          <h3 className="font-display text-xl sm:text-3xl font-normal text-ink tracking-tight mb-3">
            WOULD YOU PREFER?
          </h3>

          <p className="text-xs text-ink/60 font-light mb-4 max-w-lg mx-auto">
            Tap your favorite cuisine styles to attach them to your WhatsApp menu inquiry:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-3xl mx-auto">
            {(showAllCuisines ? cuisinesList : cuisinesList.slice(0, 10)).map((cuisine) => {
              const isSelected = selectedCuisines.includes(cuisine);
              return (
                <button
                  key={cuisine}
                  onClick={() => toggleCuisine(cuisine)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-200 border flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-forest-deep text-linen border-forest-deep shadow-md scale-105"
                      : "bg-sand/30 text-ink/80 border-sand-dark/30 hover:border-sage hover:bg-sand/60"
                  }`}
                >
                  {isSelected && <span className="text-sage-light text-[9px]">✓</span>}
                  <span>{cuisine}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setShowAllCuisines(!showAllCuisines)}
              className="text-xs font-semibold text-sage hover:text-sage-deep transition-colors"
            >
              {showAllCuisines ? "Show less cuisines ↑" : `+ View all ${cuisinesList.length} cuisines ↓`}
            </button>
          </div>

          {/* Active WhatsApp Inquiry Action Panel for Selected Cuisines */}
          <AnimatePresence>
            {selectedCuisines.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-5 border-t border-sand flex flex-col sm:flex-row items-center justify-between gap-4 bg-sand/25 p-4 rounded-2xl"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sage/20 text-sage">
                      {selectedCuisines.length} {selectedCuisines.length === 1 ? "Cuisine" : "Cuisines"} Selected
                    </span>
                  </div>
                  <p className="text-xs text-ink/80 font-medium line-clamp-1">
                    {selectedCuisines.join(", ")}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedCuisines([])}
                    className="text-xs text-ink/50 hover:text-ink transition-colors px-2 py-1"
                  >
                    Clear
                  </button>
                  <a
                    href={`https://wa.me/919778368993?text=${encodeURIComponent(
                      `Hello Elite Group Catering! 👋\n\nI would like to inquire about a customized catering menu for our upcoming event.\n\n🍽️ Preferred Cuisines:\n- ${selectedCuisines.join("\n- ")}\n\nPlease share your signature menu options and pricing!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sage hover:bg-sage-deep text-linen font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                    <span>Inquire with Selected Cuisines →</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4. Download Menu Brochure CTA Strip */}
        <div className="mb-12 p-5 sm:p-6 rounded-3xl bg-sand/60 border border-sand-dark/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">📑</span>
            <div>
              <p className="font-display text-sm sm:text-base font-bold text-ink">
                Need the complete printable PDF menu?
              </p>
              <p className="text-[11px] sm:text-xs text-ink/70 font-light">
                Explore our full selection of dishes, live counters, and catering packages.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-forest-deep text-linen hover:bg-sage text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 shrink-0 hover:scale-105"
          >
            <span>Request Menu Catalogue →</span>
          </a>
        </div>

        {/* 5. Artisanal Desserts & Live Counter Showcase Banner */}
        <div className="rounded-3xl bg-forest-deep text-linen p-6 sm:p-12 relative overflow-hidden border border-sage-light/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-sage-light mb-2 block">
              ✦ Signature Confectionery &amp; Live Theatres
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-linen mb-2 sm:mb-3 font-normal">
              Handcrafted Artisanal Desserts
            </h3>
            <p className="text-xs sm:text-sm text-linen/80 max-w-2xl mx-auto font-light leading-relaxed">
              Included across our Elegant, Executive &amp; Grand packages. Elevate your feast with live kunafa stations, yellow jilebi with rabdi, and exquisite layered dessert puddings.
            </p>
          </div>

          {/* Dessert Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
            {artisanalDesserts.map((dessert, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-2xl bg-linen/5 hover:bg-linen/10 border border-linen/10 transition-all flex items-start gap-3 group hover:scale-[1.02]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sage/20 text-sage-light flex items-center justify-center text-lg sm:text-xl shrink-0 group-hover:scale-110 transition-transform">
                  {dessert.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold text-linen">{dessert.name}</h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-linen/70 leading-snug">{dessert.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Consultation Callout */}
          <div className="relative z-10 text-center pt-4 border-t border-linen/10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs text-linen/80">
              Need custom dietary arrangements or pure-veg sweet stations?
            </span>
            <a
              href="#date-checker"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-sage hover:bg-sage-deep text-linen font-bold text-xs transition-all shadow-md border border-sage-light/30 flex items-center justify-center gap-1.5 hover:scale-105"
            >
              <span>Explore Custom Menus →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

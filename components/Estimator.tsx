"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { estimatorPackages, estimatorAddOns, brand } from "@/lib/content";

export default function Estimator() {
  const [selectedPackageId, setSelectedPackageId] = useState(estimatorPackages[1].id);
  const [guestCount, setGuestCount] = useState(350);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["live_appam", "dessert_wheel"]);

  const currentPackage = useMemo(() => {
    return (
      estimatorPackages.find((p) => p.id === selectedPackageId) ||
      estimatorPackages[0]
    );
  }, [selectedPackageId]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const { perPlateTotal, fixedTotal, minRange, maxRange } = useMemo(() => {
    let perPlate = currentPackage.basePerPlate;
    let fixed = 0;

    estimatorAddOns.forEach((addon) => {
      if (selectedAddOns.includes(addon.id)) {
        if (addon.pricePerPlate) perPlate += addon.pricePerPlate;
        if (addon.fixedPrice) fixed += addon.fixedPrice;
      }
    });

    const total = perPlate * guestCount + fixed;
    const min = Math.round(total * 0.95);
    const max = Math.round(total * 1.08);

    return {
      perPlateTotal: perPlate,
      fixedTotal: fixed,
      grandTotal: total,
      minRange: min,
      maxRange: max,
    };
  }, [currentPackage, guestCount, selectedAddOns]);

  const whatsappMessage = useMemo(() => {
    const addOnNames = estimatorAddOns
      .filter((a) => selectedAddOns.includes(a.id))
      .map((a) => a.name)
      .join(", ");

    const text = `Hello Elite Group Catering! 🍽️\n\nI would like an inquiry based on my estimated event plan:\n- Package: ${currentPackage.name} (${currentPackage.type})\n- Estimated Guests: ${guestCount} people\n- Selected Add-ons: ${addOnNames || "None"}\n- Estimated Budget Range: ₹${minRange.toLocaleString("en-IN")} - ₹${maxRange.toLocaleString("en-IN")}\n\nPlease let me know your availability and detailed menu customization options!`;

    return `https://wa.me/919778368993?text=${encodeURIComponent(text)}`;
  }, [currentPackage, guestCount, selectedAddOns, minRange, maxRange]);

  return (
    <section id="estimator" className="relative py-28 md:py-36 px-6 md:px-10 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-widest2 uppercase text-sage font-semibold mb-3">
            Instant Cost Planner
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-5xl text-ink leading-tight"
          >
            Estimate your event budget.
          </motion.h2>
          <p className="mt-4 text-ink/70 font-light text-sm md:text-base">
            Select your event style, choose your guest count, and explore live station add-ons with immediate pricing clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-linen/90 p-6 md:p-8 rounded-2xl border border-sage-light/40 shadow-sm backdrop-blur-sm">
            {/* Step 1: Package Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/80 mb-4">
                1. Select Catering Experience
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {estimatorPackages.map((pkg) => {
                  const active = pkg.id === selectedPackageId;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        active
                          ? "bg-sage/10 border-sage shadow-sm ring-1 ring-sage"
                          : "bg-sand/40 border-sage-light/40 hover:border-sage/60"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-display text-sm font-semibold text-ink">
                          {pkg.name}
                        </span>
                        <span className="text-xs font-semibold text-sage">
                          ₹{pkg.basePerPlate}/plate
                        </span>
                      </div>
                      <span className="text-[11px] text-sage font-medium block mb-1">
                        {pkg.type}
                      </span>
                      <p className="text-xs text-ink/65 line-clamp-2 leading-relaxed">
                        {pkg.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink/80">
                  2. Number of Guests
                </label>
                <span className="font-display text-2xl font-bold text-sage">
                  {guestCount.toLocaleString("en-IN")}{" "}
                  <span className="text-xs font-body font-normal text-ink/60">Guests</span>
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={1500}
                step={25}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2.5 bg-sand rounded-lg appearance-none cursor-pointer accent-sage"
              />
              <div className="flex justify-between text-[11px] text-ink/50 mt-2 font-medium">
                <span>50 Guests</span>
                <span>500 Guests</span>
                <span>1,000 Guests</span>
                <span>1,500+ Guests</span>
              </div>
            </div>

            {/* Step 3: Add-Ons */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/80 mb-3">
                3. Live Stations &amp; Luxury Add-Ons
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {estimatorAddOns.map((addon) => {
                  const checked = selectedAddOns.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                        checked
                          ? "bg-sage text-linen border-sage shadow-sm"
                          : "bg-sand/30 border-sage-light/40 text-ink/80 hover:border-sage/60"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                            checked ? "bg-linen text-sage border-linen" : "border-sage/40"
                          }`}
                        >
                          {checked ? "✓" : ""}
                        </span>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className={`text-xs ${checked ? "text-linen/90" : "text-sage font-semibold"}`}>
                        {addon.pricePerPlate
                          ? `+₹${addon.pricePerPlate}/p`
                          : `+₹${addon.fixedPrice?.toLocaleString("en-IN")}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-5 bg-forest-deep text-linen p-7 md:p-9 rounded-2xl border border-sage/30 shadow-xl sticky top-28">
            <div className="border-b border-linen/15 pb-5 mb-5">
              <span className="text-[10px] tracking-widest2 uppercase text-sage-light font-semibold block mb-1">
                Estimated Summary
              </span>
              <h3 className="font-display text-2xl text-linen">{currentPackage.name}</h3>
              <p className="text-xs text-linen/60 mt-1">{guestCount} Guests · {selectedAddOns.length} Add-on Services</p>
            </div>

            <div className="space-y-3 text-xs border-b border-linen/15 pb-5 mb-6 text-linen/75">
              <div className="flex justify-between">
                <span>Base Package Rate:</span>
                <span className="text-linen font-medium">₹{currentPackage.basePerPlate} / plate</span>
              </div>
              <div className="flex justify-between">
                <span>Effective Per Plate (incl. Addons):</span>
                <span className="text-linen font-medium">₹{perPlateTotal} / plate</span>
              </div>
              {fixedTotal > 0 && (
                <div className="flex justify-between">
                  <span>Fixed Luxury Services:</span>
                  <span className="text-linen font-medium">₹{fixedTotal.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between text-sage-light font-medium pt-2 border-t border-linen/10">
                <span>Estimated Price Range:</span>
                <span>±8% buffer</span>
              </div>
            </div>

            <div className="mb-7">
              <span className="text-[11px] text-linen/60 uppercase tracking-wider block mb-1">
                Estimated Budget Bracket
              </span>
              <div className="font-display text-3xl sm:text-4xl text-sage-light font-bold">
                ₹{minRange.toLocaleString("en-IN")}{" "}
                <span className="text-lg font-light text-linen/60">– ₹{maxRange.toLocaleString("en-IN")}</span>
              </div>
              <p className="text-[11px] text-linen/50 mt-2 font-light">
                *Final rates depend on specific venue kitchen access, distance from Kottayam, and custom dish choices.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-sage text-linen font-medium rounded-xl hover:bg-sage-deep transition-all shadow-md text-sm"
              >
                <span>💬 Send Estimate to WhatsApp</span>
              </a>
              <a
                href={brand.phoneHref}
                className="w-full flex items-center justify-center py-3 px-6 border border-sage-light/40 text-sage-light font-medium rounded-xl hover:bg-linen/5 transition-colors text-xs text-center"
              >
                Call Chef Team Directly ({brand.phoneDisplay})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

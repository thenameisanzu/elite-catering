"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function DateChecker() {
  const [selectedDate, setSelectedDate] = useState("");
  const [location, setLocation] = useState("Kottayam");
  const [guestCount, setGuestCount] = useState("300-500");

  const checkAvailabilityWhatsAppUrl = () => {
    const text = `Hello Elite Group Catering! 📅\n\nI would like to check date availability for my event:\n- Proposed Date: ${selectedDate || "Upcoming weekend"}\n- Venue / City: ${location}\n- Approximate Guest Count: ${guestCount}\n\nPlease confirm if your catering team is available on this date!`;
    return `https://wa.me/919778368993?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="availability" className="relative py-24 md:py-32 px-6 md:px-10 bg-forest-deep text-linen">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/20 border border-sage/40 text-sage-light text-[11px] font-semibold uppercase tracking-wider">
              <span>🔒 Executive Chef Availability</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-linen leading-tight">
              Check calendar availability for your celebration.
            </h2>

            <p className="text-xs sm:text-sm text-linen/75 font-light leading-relaxed">
              To guarantee master chef oversight, pristine table presentations, and seamless butler service, we limit bookings to a maximum of 2 major wedding banquets per calendar date.
            </p>

            <div className="p-4 rounded-2xl bg-linen/5 border border-linen/10 space-y-2 text-xs text-linen/85">
              <div className="flex items-center gap-2 text-sage-light font-medium">
                <span>✓</span>
                <span>Mobile Refrigerated Food Trucks across all 14 Kerala districts</span>
              </div>
              <div className="flex items-center gap-2 text-sage-light font-medium">
                <span>✓</span>
                <span>Separate pure-veg copper vessels for Sadya feasts</span>
              </div>
              <div className="flex items-center gap-2 text-sage-light font-medium">
                <span>✓</span>
                <span>Complimentary private tasting for confirmed bookings</span>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Checker Form */}
          <div className="lg:col-span-6 bg-forest/50 p-6 sm:p-8 rounded-3xl border border-sage-light/25 backdrop-blur-xl shadow-2xl">
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-sage-light mb-1.5 font-medium">
                  Proposed Event Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-forest-deep border border-sage-light/30 rounded-xl px-4 py-3 text-sm text-linen focus:outline-none focus:border-sage transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-sage-light mb-1.5 font-medium">
                    District / Venue
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-forest-deep border border-sage-light/30 rounded-xl px-3 py-3 text-xs text-linen focus:outline-none focus:border-sage transition-colors"
                  >
                    <option value="Kottayam">Kottayam</option>
                    <option value="Kochi / Ernakulam">Kochi / Ernakulam</option>
                    <option value="Alappuzha">Alappuzha</option>
                    <option value="Pathanamthitta">Pathanamthitta</option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Trivandrum">Trivandrum</option>
                    <option value="Other Kerala Location">Other Kerala Location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-sage-light mb-1.5 font-medium">
                    Guest Count
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-forest-deep border border-sage-light/30 rounded-xl px-3 py-3 text-xs text-linen focus:outline-none focus:border-sage transition-colors"
                  >
                    <option value="Under 150">Under 150</option>
                    <option value="150 - 300">150 - 300</option>
                    <option value="300 - 600">300 - 600</option>
                    <option value="600 - 1,000">600 - 1,000</option>
                    <option value="1,000+">1,000+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={checkAvailabilityWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-sage hover:bg-sage-deep text-linen font-bold rounded-xl transition-all shadow-lg text-xs sm:text-sm hover:scale-[1.02] border border-sage-light/30"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  <span>Check Availability on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

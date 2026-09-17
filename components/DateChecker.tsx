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
    <section id="availability" className="relative py-20 px-6 md:px-10 bg-forest-deep text-linen">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] tracking-widest2 uppercase text-sage-light font-semibold block">
              Reserve Your Date
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-linen leading-tight">
              Check calendar availability for your celebration.
            </h2>
            <p className="text-xs md:text-sm text-linen/70 font-light leading-relaxed">
              We cater a limited number of events per date to guarantee executive chef oversight and white-glove service standards.
            </p>
            <div className="flex items-center gap-4 text-xs text-sage-light pt-2">
              <span>✓ Mobile Kitchen Fleet</span>
              <span>✓ Separate Veg Sadya Setup</span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-forest/40 p-6 sm:p-8 rounded-2xl border border-sage-light/20 backdrop-blur-md">
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-sage-light mb-1.5 font-medium">
                  Event Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-forest-deep border border-sage-light/30 rounded-xl px-4 py-3 text-sm text-linen focus:outline-none focus:border-sage"
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
                    className="w-full bg-forest-deep border border-sage-light/30 rounded-xl px-3 py-3 text-xs text-linen focus:outline-none focus:border-sage"
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
                    Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-forest-deep border border-sage-light/30 rounded-xl px-3 py-3 text-xs text-linen focus:outline-none focus:border-sage"
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-sage text-linen font-medium rounded-xl hover:bg-sage-deep transition-all shadow-md text-xs sm:text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  <span>Check Date Availability on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

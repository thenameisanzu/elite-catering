"use client";

interface MenuPackage {
  id: string;
  name: string;
  badge?: string;
  priceRange: string;
  taxNote: string;
  welcomeDrinks: number;
  salads: number;
  starters?: string;
  firstCourse: {
    breads: number;
    nonVegItems: number;
    optionalNote: string;
  };
  mainCourse: {
    riceOrNoodles: string;
    vegItems: number;
    nonVegItems: number;
    pickles: number;
    desserts: number;
  };
  liveCounters?: string;
  highlight?: boolean;
}

const packages: MenuPackage[] = [
  {
    id: "standard",
    name: "STANDARD MENU",
    priceRange: "₹450 - ₹600",
    taxNote: "+ 5% GST",
    welcomeDrinks: 4,
    salads: 4,
    firstCourse: {
      breads: 2,
      nonVegItems: 1,
      optionalNote: "Rice & Curries (Optional)",
    },
    mainCourse: {
      riceOrNoodles: "Rice — 1",
      vegItems: 2,
      nonVegItems: 2,
      pickles: 3,
      desserts: 3,
    },
    highlight: false,
  },
  {
    id: "classy",
    name: "CLASSY MENU",
    badge: "Most Popular",
    priceRange: "₹600 - ₹800",
    taxNote: "+ 5% GST",
    welcomeDrinks: 5,
    salads: 6,
    starters: "2 (1 Non-Veg & 1 Veg)",
    firstCourse: {
      breads: 3,
      nonVegItems: 2,
      optionalNote: "Rice & Curries (Optional)",
    },
    mainCourse: {
      riceOrNoodles: "Rice & Noodles — 2",
      vegItems: 2,
      nonVegItems: 2,
      pickles: 4,
      desserts: 4,
    },
    liveCounters: "Live Counters Available",
    highlight: true,
  },
  {
    id: "grand-spread",
    name: "GRAND EXECUTIVE",
    badge: "Royal Luxury",
    priceRange: "₹850 - ₹1100+",
    taxNote: "+ 5% GST",
    welcomeDrinks: 6,
    salads: 8,
    starters: "4 (2 Non-Veg & 2 Veg Gourmet)",
    firstCourse: {
      breads: 4,
      nonVegItems: 3,
      optionalNote: "Gourmet Rice, Tawa & Curries",
    },
    mainCourse: {
      riceOrNoodles: "Biryani & Specialty Breads — 3",
      vegItems: 3,
      nonVegItems: 3,
      pickles: 5,
      desserts: 6,
    },
    liveCounters: "Multiple Theatrical Live Counters & Dessert Bar",
    highlight: false,
  },
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
  const getWhatsAppLink = (packageName: string, price: string) => {
    const text = `Hi Elite Group Catering! 👋\n\nI am interested in your *${packageName}* (${price}).\nCould you please share the detailed dish options and discuss availability for our upcoming event?`;
    return `https://wa.me/919778368993?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="relative py-28 md:py-36 px-6 md:px-10 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 border border-sage/30 text-sage text-xs font-semibold uppercase tracking-widest mb-4">
            <span>🍽️ Curated Culinary Packages</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-ink tracking-tight mb-4">
            OUR FOOD MENU
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-sage mb-4 font-normal">
            Welcome to a feast of flavors!
          </p>

          <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-light text-balance">
            A great meal is more than just food, it&apos;s an experience. At Elite Group, we bring you a menu designed to suit every occasion. Whether you prefer something Standard, a Classy touch, an Elegant affair, an Executive selection, or a Grand spread — your perfect feast starts here.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? "bg-white border-2 border-sage shadow-2xl scale-[1.02] ring-4 ring-sage/15"
                  : "bg-white/90 border border-sand-dark/40 shadow-lg hover:shadow-xl hover:border-sage/40"
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-forest-deep text-sage-light text-[11px] font-bold tracking-wider uppercase shadow-md border border-sage/30">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Header: Title & Rate */}
                <div className="flex items-start justify-between border-b border-sand pb-5 mb-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
                      {pkg.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-widest text-ink/60 font-semibold block">
                      RATE
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-bold text-sage">
                      {pkg.priceRange}
                    </span>
                    <span className="text-[11px] text-ink/50 block font-medium">
                      {pkg.taxNote}
                    </span>
                  </div>
                </div>

                {/* Course Breakdown List */}
                <div className="space-y-4 text-xs sm:text-sm text-ink/85">
                  {/* Drinks & Salads */}
                  <div className="space-y-2 pb-3 border-b border-sand/60">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> Welcome Drink
                      </span>
                      <span className="font-mono text-ink/60">---- {pkg.welcomeDrinks}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> Salads
                      </span>
                      <span className="font-mono text-ink/60">---- {pkg.salads}</span>
                    </div>
                    {pkg.starters && (
                      <div className="flex items-center justify-between pt-1">
                        <span className="flex items-center gap-2">
                          <span className="text-sage font-bold">◎</span> Starters
                          <span className="text-[11px] text-ink/60 italic block sm:inline">({pkg.starters})</span>
                        </span>
                        <span className="font-mono text-ink/60">---- 2</span>
                      </div>
                    )}
                  </div>

                  {/* First Course */}
                  <div className="space-y-2 pb-3 border-b border-sand/60">
                    <span className="font-semibold text-ink text-xs uppercase tracking-wider block text-sage">
                      First Course
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> Breads
                      </span>
                      <span className="font-mono text-ink/60">---- {pkg.firstCourse.breads}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> Non-Veg Items
                      </span>
                      <span className="font-mono text-ink/60">---- {pkg.firstCourse.nonVegItems}</span>
                    </div>
                    <div className="flex items-center justify-between text-ink/70 italic text-[11px]">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> {pkg.firstCourse.optionalNote}
                      </span>
                    </div>
                  </div>

                  {/* Main Course */}
                  <div className="space-y-2 pb-3 border-b border-sand/60">
                    <span className="font-semibold text-ink text-xs uppercase tracking-wider block text-sage">
                      Main Course
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> {pkg.mainCourse.riceOrNoodles}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> Veg Items
                      </span>
                      <span className="font-mono text-ink/60">---- {pkg.mainCourse.vegItems}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> Non-Veg Items
                      </span>
                      <span className="font-mono text-ink/60">---- {pkg.mainCourse.nonVegItems}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> Pickles
                      </span>
                      <span className="font-mono text-ink/60">---- {pkg.mainCourse.pickles}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-sage font-bold">◎</span> Desserts
                      </span>
                      <span className="font-mono text-ink/60">---- {pkg.mainCourse.desserts}</span>
                    </div>
                  </div>

                  {/* Live Counters Indicator if present */}
                  {pkg.liveCounters && (
                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                      <span>✨</span>
                      <span>{pkg.liveCounters}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Footer & CTA */}
              <div className="mt-8 pt-4 border-t border-sand flex items-center justify-between gap-4">
                <span className="text-[10px] text-ink/50 italic">
                  * Conditions Apply
                </span>

                <a
                  href={getWhatsAppLink(pkg.name, pkg.priceRange)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-forest-deep text-linen hover:bg-sage hover:text-linen font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 group"
                >
                  <span>TALK TO US</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Artisanal Desserts & Live Counter Showcase Banner */}
        <div className="rounded-3xl bg-forest-deep text-linen p-8 sm:p-12 relative overflow-hidden border border-sage-light/30 shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-sage-light mb-2 block">
              ✦ Signature Confectionery &amp; Live Theatres
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-linen mb-3 font-normal">
              Handcrafted Artisanal Desserts
            </h3>
            <p className="text-xs sm:text-sm text-linen/80 max-w-2xl mx-auto font-light leading-relaxed">
              Included in our Classy &amp; Grand packages. Elevate your event with live kunafa stations, saffron jilebi with rabdi, and exquisite layered dessert puddings.
            </p>
          </div>

          {/* Dessert Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {artisanalDesserts.map((dessert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-linen/5 hover:bg-linen/10 border border-linen/10 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sage/20 text-sage-light flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                  {dessert.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-linen">{dessert.name}</h4>
                  </div>
                  <p className="text-[11px] text-linen/70 leading-snug">{dessert.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Consultation Callout */}
          <div className="relative z-10 text-center pt-4 border-t border-linen/10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xs text-linen/80">
              Need custom dietary arrangements or pure-veg sweet stations?
            </span>
            <a
              href="https://wa.me/919778368993?text=Hi%20Elite%20Group%20Catering%2C%20I%20would%20like%20to%20customize%20our%20dessert%20and%20live%20counter%20menu."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-sage hover:bg-sage-deep text-linen font-bold text-xs transition-all shadow-md border border-sage-light/30"
            >
              Customize Menu on WhatsApp →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

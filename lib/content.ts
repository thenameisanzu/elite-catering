export const brand = {
  name: "Elite Group",
  tagline: "Catering and Events",
  since: "2015",
  location: "Kottayam, Kerala",
  phone: "+91 97783 68993",
  phoneDisplay: "+91 97783 68993",
  phoneHref: "tel:+919778368993",
  instagram: "https://www.instagram.com/elite._group._/",
  instagramHandle: "@elite._group._",
  waHref: "https://wa.me/919778368993",
};

export const hero = {
  eyebrow: "Premium Event Catering · Kerala",
  headline: "Every celebration, catered to remember.",
  sub: "Weddings, birthdays and premium events across Kerala — customised menus and luxury service, since 2015.",
  cta: "Reserve Your Date",
  ctaSecondary: "Explore Stories",
};

export const about = {
  eyebrow: "Since 2015",
  headline: "A decade of feeding Kerala's biggest days.",
  body: "Elite Group began as a small family kitchen in Kottayam and has grown into one of Kerala's most trusted names in event catering. What hasn't changed is the standard: every dish made fresh, every table dressed with intention, every guest treated like family. From intimate house functions to fifteen-hundred-guest wedding receptions, we build the menu, the setting and the service around the two people whose day it actually is.",
  stats: [
    { value: "10+", label: "Years catering Kerala's celebrations" },
    { value: "500+", label: "Weddings & events hosted" },
    { value: "6,000+", label: "Happy family guests" },
  ],
};

export const menuCategories = [
  "All",
  "Heritage Sadya",
  "Live Counters",
  "Main Courses",
  "Dessert & Drinks",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  tags: ("Pure Veg" | "Non-Veg" | "Halal" | "Chef Special" | "Signature")[];
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Grand Royal 26-Item Sadya",
    category: "Heritage Sadya",
    description: "Traditional feast with Parippu, Sambar, Avial, Thoran, Olan, Kalan, Erissery, Inji Puli, 4 Payasams on banana leaf.",
    tags: ["Pure Veg", "Signature"],
    popular: true,
  },
  {
    id: "m2",
    name: "Parippu Pradhaman & Palada Combo",
    category: "Heritage Sadya",
    description: "Slow-cooked jaggery coconut milk pradhaman and rich slow-condensed milk palada with roasted cashew & raisins.",
    tags: ["Pure Veg", "Chef Special"],
    popular: true,
  },
  {
    id: "m3",
    name: "Live Appam & Mutton Stew Counter",
    category: "Live Counters",
    description: "Lacy hot hopper appams made fresh with tender Kerala bone-in mutton stew cooked in velvety coconut milk.",
    tags: ["Non-Veg", "Signature"],
    popular: true,
  },
  {
    id: "m4",
    name: "Live Tandoor & Barbecue Kebab Station",
    category: "Live Counters",
    description: "Charcoal-grilled Malai Chicken Tikka, Fish Pollichathu skewers, and Paneer Hariyali with mint relish.",
    tags: ["Halal", "Non-Veg", "Chef Special"],
    popular: true,
  },
  {
    id: "m5",
    name: "Live Street Chaat & Pani Puri Bar",
    category: "Live Counters",
    description: "Crisp puris filled with spiced potato, sprout stuffing, three artisanal flavored waters, and sweet yogurt papdi.",
    tags: ["Pure Veg"],
    popular: false,
  },
  {
    id: "m6",
    name: "Thalassery Dum Biryani (Chicken & Mutton)",
    category: "Main Courses",
    description: "Fragrant Jeerakasala rice layered with ghee-fried onions, Malabar spices, accompanied by date pickle and coconut chammanthi.",
    tags: ["Halal", "Non-Veg", "Signature"],
    popular: true,
  },
  {
    id: "m7",
    name: "Syrian Christian Beef Roast & Porotta",
    category: "Main Courses",
    description: "Slow-roasted beef with fresh coconut slivers and crushed pepper paired with multi-layered flaky Kerala porottas.",
    tags: ["Non-Veg", "Chef Special"],
    popular: true,
  },
  {
    id: "m8",
    name: "Pan-Seared Karimeen Pollichathu",
    category: "Main Courses",
    description: "Fresh pearl spot fish marinated in shallots, ginger, chili, and wrapped in banana leaves grilled on iron tawas.",
    tags: ["Non-Veg", "Signature"],
    popular: true,
  },
  {
    id: "m9",
    name: "Artisanal Dessert Ferris Wheel & Ice Cream Rolls",
    category: "Dessert & Drinks",
    description: "Rotating mini pastry ferris wheel, live cold stone ice cream rolls with tropical toppings, and hot Gulab Jamun fondue.",
    tags: ["Pure Veg", "Chef Special"],
    popular: true,
  },
  {
    id: "m10",
    name: "Kerala Welcome Mocktail & Elaneer Bar",
    category: "Dessert & Drinks",
    description: "Fresh tender coconut (Elaneer) cooler, passion fruit mint fizz, and spiced kulukki sarbath welcome station.",
    tags: ["Pure Veg", "Signature"],
    popular: false,
  },
];

export const estimatorPackages = [
  {
    id: "heritage-sadya",
    name: "Traditional Grand Sadya",
    type: "Wedding / Housewarming",
    basePerPlate: 450,
    desc: "Complete 26-course banana leaf sadya with 3 artisanal payasams, welcome drinks & full service staff.",
  },
  {
    id: "royal-reception",
    name: "Royal Multi-Cuisine Feast",
    type: "Wedding Reception",
    basePerPlate: 750,
    desc: "Welcome mocktails, 2 live food counters, Thalassery Biryani / Syrian specialties, and dessert buffet.",
  },
  {
    id: "grand-gala",
    name: "Imperial Luxury Experience",
    type: "VIP & Destination Weddings",
    basePerPlate: 1100,
    desc: "4 live stations (Appam/Tandoor/Chaat/Sushi), seafood live tawa, chef specialty entrees, luxury plating & butler service.",
  },
  {
    id: "birthday-corporate",
    name: "Celebration & Milestone Buffet",
    type: "Birthdays & Corporate Events",
    basePerPlate: 550,
    desc: "Custom themed appetizer stations, continental & Indian buffet, mocktails, and customized dessert spread.",
  },
];

export const estimatorAddOns = [
  { id: "live_appam", name: "Live Appam & Stew Counter", pricePerPlate: 90 },
  { id: "live_chaat", name: "Street Chaat & Pani Puri Bar", pricePerPlate: 60 },
  { id: "live_bbq", name: "Live Charcoal BBQ & Tandoor", pricePerPlate: 140 },
  { id: "dessert_wheel", name: "Dessert Ferris Wheel & Live Roll Ice Cream", pricePerPlate: 80 },
  { id: "wedding_car", name: "Decorated Luxury Wedding Car", fixedPrice: 12000 },
  { id: "premium_service", name: "Uniformed Butler & Hospitality Team", fixedPrice: 15000 },
];

export const services = [
  {
    id: "wedding",
    title: "Grand Wedding Catering & Royal Sadya",
    shortDesc: "Complete 26-course banana leaf sadya & evening reception live stations.",
    description:
      "From morning traditional sadya feasts served on fresh plantain leaves to magnificent evening reception buffets with interactive live cooking pavilions. Tailored for 100 to 2,000+ guests with dedicated pure-veg cooking facilities.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    specialty: "Flagship Specialty",
    features: [
      "Authentic 26-Item Kerala Sadya with 4 Payasams",
      "Live Theatrical Food Pavilions & Seafood Tawas",
      "Uniformed Hospitality & Silver Chafing Service",
      "Dedicated Pure-Veg Independent Kitchen Vessels",
    ],
  },
  {
    id: "live-stations",
    title: "Theatrical Live Counters & Food Theatres",
    shortDesc: "Interactive live appam, tandoor, chaat, & dessert wheel counters.",
    description:
      "Transforming mealtime into an immersive culinary performance. Fresh hopper appams with stew, charcoal-grilled tandoori kebabs, live street chaat pani-puri bars, and rotating dessert ferris wheels.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop",
    specialty: "Interactive Gastronomy",
    features: [
      "Hot Appam & Syrian Bone-in Mutton Stew Bar",
      "Charcoal BBQ, Seekh Kebabs & Fish Pollichathu",
      "Cold-Stone Rolled Ice Cream & Dessert Wheels",
      "Tender Coconut (Elaneer) Welcome Cooler Bar",
    ],
  },
  {
    id: "premium-events",
    title: "Corporate Galas & VIP Milestone Banquets",
    shortDesc: "Executive hospitality, multi-cuisine luxury buffets & curated service.",
    description:
      "Silver jubilees, corporate award banquets, engagements, and VIP milestone gatherings across Kerala. Plated multi-course menus and continental selections paired with seamless event management.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop",
    specialty: "Corporate & VIP Luxury",
    features: [
      "Multi-Cuisine Continental & Indian Curated Menus",
      "Fine China Crockery & Lead-Crystal Glassware",
      "Punctual Timelines & Dedicated Floor Managers",
      "Customized Menu Cards & Monogram Table Styling",
    ],
  },
  {
    id: "wedding-cars",
    title: "Luxury Decorated Wedding Fleet",
    shortDesc: "Floral coordinated premium wedding car arrangements.",
    description:
      "Complete your grand arrival with our luxury wedding car arrangements, customized with natural exotic florals that match your stage and bouquet aesthetic.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
    specialty: "Royal Arrival",
    features: [
      "Exotic Floral Bouquets & Bonnet Styling",
      "Chauffeured Luxury Sedans & Vintage Convertibles",
      "Coordinated with Ceremony & Reception Timelines",
      "Pristine Interior Grooming & Air Conditioning",
    ],
  },
];

export const eventStories = [
  {
    id: "story-1",
    title: "Anjali & Rahul's Waterfront Wedding",
    location: "Kumarakom Lake Resort, Kottayam",
    type: "Destination Wedding & Grand Reception",
    guests: "1,200 Guests",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    date: "January 2024",
    highlights: ["26-Item Sadya Lunch", "Live Karimeen Tawa", "4 Evening Live Stations", "Dessert Ferris Wheel"],
    quote: "Elite Group managed lunch and dinner for 1,200 guests with clockwork precision. The live Karimeen counter was the talk of the evening.",
    rating: "⭐⭐⭐⭐⭐",
    cuisineStyle: "Traditional Sadya + Multi-Cuisine Live Stations",
    tone: "sage" as const,
  },
  {
    id: "story-2",
    title: "Dr. Mathew's Silver Jubilee Celebration",
    location: "Windsor Castle Convention Centre, Kottayam",
    type: "Milestone Anniversary & Gala Dinner",
    guests: "450 Guests",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop",
    date: "November 2023",
    highlights: ["Live Appam & Mutton Stew", "Syrian Christian Beef Roast", "Cold Stone Ice Cream Rolls", "Welcome Elaneer Bar"],
    quote: "Every guest felt personally looked after. The food quality and presentation were exceptional.",
    rating: "⭐⭐⭐⭐⭐",
    cuisineStyle: "Syrian Christian Heritage + Live Dessert Bar",
    tone: "brass" as const,
  },
  {
    id: "story-3",
    title: "Rhea & Vivek's Sunset Lawn Reception",
    location: "Open Lawn Estate, Pala",
    type: "Cocktail & Grand Reception",
    guests: "600 Guests",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1600&auto=format&fit=crop",
    date: "December 2023",
    highlights: ["Live Tandoor & Charcoal BBQ", "Thalassery Dum Biryani", "Street Chaat Counter", "Spiced Kulukki Bar"],
    quote: "The interactive stations created such a lively atmosphere. Truly a 5-star catering experience.",
    rating: "⭐⭐⭐⭐⭐",
    cuisineStyle: "Fusion BBQ + Malabar Biryani Feast",
    tone: "forest" as const,
  },
];

export const process = [
  {
    step: "01",
    title: "Tell us the date",
    description: "Share your event date, guest count and venue — we check availability and get back within a day.",
  },
  {
    step: "02",
    title: "Build the menu",
    description: "We plan a customised menu around your families' preferences, from traditional sadya to live counters.",
  },
  {
    step: "03",
    title: "Tasting & confirmation",
    description: "Sample the menu, confirm the details, and lock in your date with the team.",
  },
  {
    step: "04",
    title: "We handle the day",
    description: "Our team arrives early, sets up, serves and clears — so you're free to enjoy the celebration.",
  },
];

export const instagramHighlights = [
  { id: "cars", label: "Wedding cars", icon: "🚗", filterCategory: "Wedding cars" },
  { id: "wedding", label: "Wedding", icon: "💍", filterCategory: "Wedding" },
  { id: "review", label: "Review", icon: "🌟", filterCategory: "Review" },
  { id: "food", label: "Food", icon: "🍽️", filterCategory: "Food" },
  { id: "birthday", label: "Birthday", icon: "🎂", filterCategory: "Birthday" },
];

export const galleryCategories = ["All", "Wedding cars", "Wedding", "Review", "Food", "Birthday"] as const;

export const gallery = [
  {
    id: "g1",
    category: "Wedding",
    title: "Fairy-Light Canopy & Tree Lantern Dining",
    location: "Kottayam",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    caption: "Hanging rattan lanterns & illuminated tree dining for evening weddings",
    tags: ["Evening Wedding", "Outdoor Dining"],
  },
  {
    id: "g2",
    category: "Food",
    title: "Signature Gold Ferris Wheel Dessert Display",
    location: "Kochi",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1600&auto=format&fit=crop",
    caption: "Rotating geometric gold ferris wheel with floral artisanal dessert cups",
    tags: ["Dessert Wheel", "Signature Specialty"],
  },
  {
    id: "g3",
    category: "Food",
    title: "Warm Fluted Wood Live Counter Pavilion",
    location: "Kumarakom",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop",
    caption: "Architectural vertical-lit wooden live cooking stations under Kerala roof",
    tags: ["Live Pavilion", "Architectural"],
  },
  {
    id: "g4",
    category: "Food",
    title: "Royal 26-Item Kerala Sadya on Banana Leaf",
    location: "Pala",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1600&auto=format&fit=crop",
    caption: "100% pure traditional vegetarian feast with 4 artisanal payasams",
    tags: ["Pure Veg", "Sadya Feast"],
  },
  {
    id: "g5",
    category: "Wedding cars",
    title: "Luxury Floral Decorated Wedding Fleet",
    location: "Kottayam",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
    caption: "Bespoke fresh exotic flower styling for luxury bridal arrival cars",
    tags: ["Wedding Car", "Floral Styling"],
  },
  {
    id: "g6",
    category: "Birthday",
    title: "Themed Milestone Celebration Banquet",
    location: "Changanassery",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop",
    caption: "Interactive appetizer stations, continental buffet & custom mocktails",
    tags: ["Birthday", "Milestone Gala"],
  },
];

export const testimonials = [
  {
    quote:
      "The food was the most talked-about part of our wedding. Every relative asked who catered it.",
    name: "Wedding client",
    context: "Reception, Kottayam",
  },
  {
    quote:
      "They understood exactly what we wanted without us having to explain twice. Calm, professional, on time.",
    name: "Wedding client",
    context: "House function",
  },
  {
    quote:
      "Six years of using them for every family event. The consistency is what keeps us coming back.",
    name: "Repeat client",
    context: "Birthday & anniversary events",
  },
];

export const faqs = [
  {
    question: "Do you provide a food tasting session before confirming?",
    answer: "Yes, absolutely! Once we have aligned on your draft menu, we invite you and your family for a tasting session at our kitchen facility to sample key dishes and fine-tune flavors according to your exact preference.",
  },
  {
    question: "Do you supply the service staff, cutlery, and banquet linens?",
    answer: "Yes, our packages are all-inclusive. We provide trained, uniformed hospitality staff, chafing dishes, premium ceramic crockery, glassware, cutlery, banana leaves, and buffet table linens.",
  },
  {
    question: "Which locations across Kerala do you cater to?",
    answer: "While we are headquartered in Kottayam, our mobile catering kitchens and refrigerated transport regularly cater events across Kochi/Ernakulam, Alappuzha, Pathanamthitta, Idukki, Thrissur, and Thiruvananthapuram.",
  },
  {
    question: "How far in advance should we book for peak wedding season?",
    answer: "For prime Kerala wedding dates (specifically Chingam/Onam, November–January, and Easter/May season), we recommend locking in your date 3 to 6 months in advance as popular weekends book out quickly.",
  },
  {
    question: "Can you cater both traditional Kerala Vegetarian Sadya and Non-Veg menus?",
    answer: "Yes! We maintain dedicated, independent cooking facilities and separate vessels for 100% pure vegetarian traditional Sadya preparations, strictly adhering to community customs.",
  },
];

export const contact = {
  eyebrow: "Book Now",
  headline: "Let's plan your celebration.",
  body: "Tell us your date and guest count — we'll confirm availability and start building your menu.",
};


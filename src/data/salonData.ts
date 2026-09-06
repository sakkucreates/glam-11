export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  features?: string[];
  popular?: boolean;
}

export interface ServiceGroup {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  services: ServiceItem[];
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date?: string;
  comment: string;
  serviceMentioned?: string;
  stylistMentioned?: string;
  label: "Google Customer Review";
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "Hair" | "Colour" | "Beauty" | "Bridal" | "Ambience";
  description: string;
}

export const SALON_INFO = {
  fullName: "Green Trends Unisex Hair & Style Salon And Makeup Studio- Aliganj",
  displayName: "GREEN TRENDS",
  subTitle: "Unisex Hair & Style Salon And Makeup Studio",
  cityArea: "Aliganj, Lucknow",
  address: "B/1/1, Purania Rd, near Kendriya Bhawan, Sector E, Aliganj, Lucknow, Uttar Pradesh 226020, India",
  phone: "+91 87389 15843",
  phoneRaw: "tel:+918738915843",
  rating: 4.8,
  reviewsCount: "1,364",
  hours: "Monday – Sunday: 10:00 AM – 9:00 PM",
  bookingUrl: "https://appointments.mygreentrends.in/",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Green%20Trends%20Unisex%20Hair%20%26%20Style%20Salon%20And%20Makeup%20Studio-%20Aliganj&query_place_id=ChIJlSXrvt9XmTkRj0Ni3KXyB-M",
  verifiedDescription: "Green Trends offers trendy haircuts and color services, complete skin care solutions and bridal packages, at affordable rates. The salon is equipped with professional hair and skin care products and trained professional stylists who provide friendly service.",
  professionalBrands: [
    { name: "L'Oréal", note: "Professional Hair Care & Colour" },
    { name: "Matrix", note: "Advanced Hair Transformation" },
    { name: "Wella", note: "Premium Styling & Care" },
    { name: "Schwarzkopf", note: "Professional Hair Expertise" }
  ]
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "hair",
    title: "HAIR SERVICES",
    subtitle: "Precision haircuts, custom colouring & restorative hair care treatments for men & women.",
    iconName: "Scissors",
    services: [
      {
        id: "hair-cut",
        name: "Haircuts & Precision Styling",
        description: "Tailored haircuts designed by trained stylists to match your face shape, style, and personal preference.",
        features: ["Style Consultation", "Precision Cut", "Wash & Blowout Finish"],
        popular: true
      },
      {
        id: "hair-colour",
        name: "Hair Colouring & Highlights",
        description: "Vibrant global colouring, root touch-ups, highlights, and balayage using professional hair colour solutions.",
        features: ["L'Oreal & Matrix Formulations", "Ammonia-Free Options", "Long-Lasting Shine"],
        popular: true
      },
      {
        id: "hair-spa",
        name: "Deep Hair Spa & Treatments",
        description: "Intense conditioning, scalp nourishing spas, and anti-hairfall treatments for soft, healthy hair.",
        features: ["Scalp Massage", "Deep Moisture Lock", "Keratin & Protein Care"]
      },
      {
        id: "hair-styling",
        name: "Blowdry, Ironing & Event Styling",
        description: "Professional blow-drys, curls, straightening, and sleek event styling for every occasion.",
        features: ["Heat Protection", "Long-Hold Finish", "Custom Styling"]
      }
    ]
  },
  {
    id: "skin",
    title: "SKIN & BEAUTY",
    subtitle: "Rejuvenating facials, skin care solutions, waxing, and eyelash services in a hygienic space.",
    iconName: "Sparkles",
    services: [
      {
        id: "skin-care",
        name: "Skin Care & Glow Facials",
        description: "Deep cleansing, hydrating, and brightening facials tailored for different skin types.",
        features: ["Dermatologically Safe Products", "Deep Pore Cleansing", "Radiant Glow Finish"],
        popular: true
      },
      {
        id: "facial-services",
        name: "Facial Spa & Cleanup",
        description: "Quick cleanups and relaxing facial massages to remove tan, pollutants, and tiredness.",
        features: ["Exfoliation", "Relaxing Face Massage", "Soothing Mask"]
      },
      {
        id: "waxing",
        name: "Waxing & Hair Removal",
        description: "Gentle and hygienic waxing services for full body, arms, legs, and facial hair removal.",
        features: ["Hygienic Disposable Strips", "Post-Wax Soothing Care", "Smooth Finish"]
      },
      {
        id: "eyelash",
        name: "Eyelash & Brow Grooming",
        description: "Precision eyebrow shaping, threading, and eyelash care services.",
        features: ["Gentle Threading", "Precision Brow Shaping", "Neat Finish"]
      }
    ]
  },
  {
    id: "bridal",
    title: "BRIDAL & MAKEOVER",
    subtitle: "Complete bridal makeover packages, engagement makeup, and event styling for your special days.",
    iconName: "Crown",
    services: [
      {
        id: "bridal-packages",
        name: "Bridal Makeover Packages",
        description: "Curated bridal makeup and skin prep packages designed to give you a flawless look for your wedding events.",
        features: ["Pre-Bridal Skin Care", "HD / Airbrush Makeup", "Saree / Dupatta Draping & Hair Styling"],
        popular: true
      },
      {
        id: "makeup-studio",
        name: "Party & Engagement Makeup",
        description: "Elegant makeup services for sangeet, reception, engagement, and special festive occasions.",
        features: ["Custom Skin Match", "Professional Cosmetics", "Long-Wearing Finish"]
      },
      {
        id: "groom-makeover",
        name: "Groom & Festive Grooming",
        description: "Specialized grooming packages for grooms including hair styling, beard shaping, and skin prep.",
        features: ["Beard Sculpting", "Skin Hydration", "Hair Styling"]
      }
    ]
  },
  {
    id: "mens-grooming",
    title: "MEN'S GROOMING",
    subtitle: "Expert haircuts, beard sculpting, head massages, and skin refreshing for men.",
    iconName: "User",
    services: [
      {
        id: "mens-haircut",
        name: "Men's Haircut & Styling",
        description: "Classic cuts, modern fades, and trendsetting styles by experienced barbers.",
        features: ["Hair Wash", "Precision Cut", "Styling Product Finish"],
        popular: true
      },
      {
        id: "beard-styling",
        name: "Beard Sculpting & Trim",
        description: "Clean beard shaping, sharp line-ups, and hot towel beard care.",
        features: ["Precision Lineup", "Beard Oil Conditioning", "Razor Sharp Edges"]
      },
      {
        id: "head-massage",
        name: "Scalp Massage & Hair Spa",
        description: "Relaxing head massage and hair spa to relieve stress and nourish hair roots.",
        features: ["Nourishing Oils", "Stress Release", "Scalp Stimulation"]
      }
    ]
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Arpit Pandey",
    rating: 5,
    comment: "It was the first time that I visited Green trends salon for Hair cut and Hair spa. I don't reside in Lucknow and therefore I checked Google reviews where I found extraordinary reviews for Green trends Aliganj. I had a great experience and totally loved their services. The staff is very professional and trained. They have wide variety of services with different options. I would highly recommend the Green Trends Salon Aliganj. My special thanks to my hair dresser Babloo Ji for his polite and professional approach and excellent hair cut.",
    serviceMentioned: "Hair Cut & Hair Spa",
    stylistMentioned: "Babloo Ji",
    label: "Google Customer Review"
  },
  {
    id: "rev-2",
    author: "Shobhit Srivastava",
    rating: 5,
    comment: "Recommended for great service, hygiene, hospitality and management in the area. Being an old customer of Green trends from Bengaluru, I can say this Lucknow outlet in Aliganj is on similar levels in terms of quality of service. Using multiple services here before my wedding events for which they curated a decent package. Good management and handling of queries and issues by Amulya. Highly recommend Avinash for skin care services and Salman for haircuts/styling.",
    serviceMentioned: "Wedding Event Package & Skin Care",
    stylistMentioned: "Avinash & Salman",
    label: "Google Customer Review"
  },
  {
    id: "rev-3",
    author: "Supriya Choudhary",
    rating: 5,
    comment: "The service was quick, professional, and consistent. The salon is clean and the staff is very welcoming and courteous.",
    serviceMentioned: "Professional Salon Services",
    label: "Google Customer Review"
  },
  {
    id: "rev-4",
    author: "Manav Srivastava",
    rating: 5,
    comment: "I’ve been visiting GreenTrends, Aliganj (Lucknow) for over two years now, and it truly stands out as the best salon in the city. Having tried almost every major salon in Lucknow, none have matched the consistent quality and professionalism I’ve experienced here. The salon maintains high hygiene standards, offers a relaxing ambience, and the staff is always courteous.",
    serviceMentioned: "Hair Styling & Salon Services",
    stylistMentioned: "Sanjeet Ji",
    label: "Google Customer Review"
  },
  {
    id: "rev-5",
    author: "Divyansh Shukla",
    rating: 5,
    comment: "Excellent service and cooperative staff. Babluji is one of the best hair dressers for men's hairstyling. Highly recommend Green Trends Aliganj.",
    serviceMentioned: "Men's Hairstyling",
    stylistMentioned: "Babloo Ji",
    label: "Google Customer Review"
  },
  {
    id: "rev-6",
    author: "Richa Verma",
    rating: 5,
    comment: "Visiting Green Trends Aliganj is always a soothing experience. The staff is polite, the cleanliness standards are exceptional, and my hair colouring turned out even better than expected!",
    serviceMentioned: "Hair Colouring & Care",
    label: "Google Customer Review"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/salon/hero-reception.jpg",
    title: "Reception & Welcome Desk",
    category: "Ambience",
    description: "Our welcoming reception counter at Green Trends Aliganj, Lucknow."
  },
  {
    id: "g2",
    src: "/images/salon/interior-styling.jpg",
    title: "Styling & Mirror Stations",
    category: "Ambience",
    description: "Modern, hygienic hair styling stations with dedicated mirror lights."
  },
  {
    id: "g3",
    src: "/images/salon/mirror-glow.jpg",
    title: "Illuminated Vanity Mirrors",
    category: "Ambience",
    description: "High-definition lit mirrors ensuring precision cutting & makeup application."
  },
  {
    id: "g4",
    src: "/images/salon/main-floor.jpg",
    title: "Spacious Main Salon Floor",
    category: "Ambience",
    description: "Comfortable and sanitized salon environment for men and women."
  },
  {
    id: "g5",
    src: "/images/salon/styling-section.jpg",
    title: "Hair Cutting & Styling Zone",
    category: "Hair",
    description: "Professional hairdressers crafting trendy haircuts and styles."
  },
  {
    id: "g6",
    src: "/images/salon/grooming-chairs.jpg",
    title: "Ergonomic Salon Chairs",
    category: "Hair",
    description: "Premium plush chairs ensuring maximum comfort during long styling sessions."
  },
  {
    id: "g7",
    src: "/images/salon/salon-view.jpg",
    title: "Hair Workstations",
    category: "Hair",
    description: "Equipped with professional tools and premium hair care products."
  },
  {
    id: "g8",
    src: "/images/salon/facial-room.jpg",
    title: "Skin Care & Facial Room",
    category: "Beauty",
    description: "Quiet private room for relaxing facials and skin rejuvenation."
  },
  {
    id: "g9",
    src: "/images/salon/hair-wash-spa.jpg",
    title: "Hair Spa Wash Chairs",
    category: "Hair",
    description: "Ergonomic reclining wash units for soothing hair spa massages."
  },
  {
    id: "g10",
    src: "/images/salon/hair-care-zone.jpg",
    title: "Hair Colouring & Treatment Area",
    category: "Colour",
    description: "Dedicated space for custom hair colouring, highlights, and keratin care."
  },
  {
    id: "g11",
    src: "/images/salon/makeup-studio.jpg",
    title: "Bridal & Makeup Studio",
    category: "Bridal",
    description: "Specialized bridal makeover suite for brides and bridal parties."
  },
  {
    id: "g12",
    src: "/images/salon/hair-cut-styling.jpg",
    title: "Precision Haircut Service",
    category: "Hair",
    description: "Tailored hair cutting and styling by our expert hairdressers."
  },
  {
    id: "g13",
    src: "/images/salon/colour-treatment.jpg",
    title: "Professional Hair Colouring",
    category: "Colour",
    description: "Using top global brands like L'Oreal, Matrix, Wella, and Schwarzkopf."
  },
  {
    id: "g14",
    src: "/images/salon/beauty-spa.jpg",
    title: "Relaxing Facial Spa",
    category: "Beauty",
    description: "Dermatologically tested facial treatments for a natural glow."
  },
  {
    id: "g15",
    src: "/images/salon/salon-ambience.jpg",
    title: "Clean & Comfortable Ambience",
    category: "Ambience",
    description: "Regularly sanitized stations maintaining strict hygiene standards."
  },
  {
    id: "g16",
    src: "/images/salon/bridal-corner.jpg",
    title: "Bridal Suite Setup",
    category: "Bridal",
    description: "Curated space for bridal dressing, makeup prep, and event styling."
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    title: "Trained Professional Stylists",
    description: "Experienced hairdressers and beauticians committed to friendly, attentive, and high-quality service.",
    iconName: "Award"
  },
  {
    title: "Hair & Skin Expertise",
    description: "Comprehensive solutions across haircuts, vibrant colouring, hair spa, glowing facials, and bridal makeovers.",
    iconName: "Sparkles"
  },
  {
    title: "Professional Brand Products",
    description: "We use trusted professional products from L'Oreal, Matrix, Wella, Schwarzkopf, and leading skin care brands.",
    iconName: "ShieldCheck"
  },
  {
    title: "Clean & Comfortable Environment",
    description: "Consistently commended by 1,300+ customers for superior hygiene, warm hospitality, and a soothing ambience.",
    iconName: "Smile"
  }
];

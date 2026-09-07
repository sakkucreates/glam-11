export interface BusinessInfo {
  name: string;
  tagline: string;
  leadArtist: string;
  leadTitle: string;
  rating: number;
  reviewsCount: number;
  fiveStarCount: number;
  phone: string;
  phoneFormatted: string;
  phoneLink: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  hours: string;
  days: string;
  googleMapsUrl: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface ServiceDetail {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  label: string; // "Google Customer Review"
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Makeup' | 'Hair' | 'Nails' | 'Studio';
  src: string;
  alt: string;
}

export const GLAM11_INFO: BusinessInfo = {
  name: "Glam 11",
  tagline: "Beauty, Designed for Your Moment",
  leadArtist: "Pooja Jaiswal",
  leadTitle: "Certified International Makeup Artist & Educator",
  rating: 4.8,
  reviewsCount: 534,
  fiveStarCount: 487,
  phone: "+917007722764",
  phoneFormatted: "+91 70077 22764",
  phoneLink: "tel:+917007722764",
  address: "Rajendra prasad dwar, Naka Hindola, Lucknow, Uttar Pradesh 226004, India",
  landmark: "Rajendra Prasad Dwar",
  city: "Lucknow",
  state: "Uttar Pradesh",
  pincode: "226004",
  hours: "10:30 AM - 8:00 PM",
  days: "Monday - Sunday",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=glam%2011&query_place_id=ChIJQaF9N2f9mzkRxHhghKPJPdE",
};

export const SIGNATURE_SERVICES: ServiceCategory[] = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    subtitle: "High Definition & Airbrush Artistry",
    description: "Flawless, long-lasting bridal looks customized to accentuate your natural elegance for your special day.",
    image: "/images/bridal_main.jpg",
    features: ["HD & Airbrush Makeup", "Party & Engagement Makeup", "Dupatta & Jewelry Draping", "Pre-Bridal Skincare Packages"]
  },
  {
    id: "hair",
    title: "Hair Styling & Care",
    subtitle: "Couture Cuts, Colors & Treatments",
    description: "From precision haircutting to advance hair nano plastia, keratin treatments, and global highlights.",
    image: "/images/hair_main.jpg",
    features: ["Haircuts & Blow-dry Setting", "Global Highlights & Balayage", "Keratin & Hair Botox", "Loreal Deep Hair Spa"]
  },
  {
    id: "nails",
    title: "Nail Art & Extensions",
    subtitle: "Designer Nail Artistry",
    description: "Custom acrylic extensions, French ombre, bridal nail designs, and durable gel polishes crafted with precision.",
    image: "/images/nail_main.jpg",
    features: ["Acrylic & Gel Extensions", "Bridal & 3D Nail Art", "Deluxe Manicure & Pedicure", "French Ombre Designs"]
  },
  {
    id: "beauty",
    title: "Beauty & Skin Care",
    subtitle: "Radiance & Rejuvenation",
    description: "Specialized facials, skin cleanups, and soothing grooming services using high-performance beauty formulations.",
    image: "/images/about_reception.jpg",
    features: ["O3+ & Hydra Facials", "D-Tan & Skin Radiance", "Rica Waxing Services", "Threading & Piercing"]
  }
];

export const BRIDAL_PACKAGES = [
  {
    name: "Luxe HD Bridal Experience",
    type: "HD Bridal Artistry",
    highlights: [
      "Custom HD Bridal Makeup with Premium Formulations",
      "Signature Eye Makeup & High-grade Lashes",
      "Lenses & Custom Bridal Hairstyle",
      "Lehenga & Dupatta Draping with Jewelry Placement",
      "Pre-Bridal Care: Hydra Facial, Manicure, Pedicure & Waxing"
    ],
    image: "/images/bridal_detail.jpg"
  },
  {
    name: "Premium Airbrush Bridal Experience",
    type: "Airbrush Perfection",
    highlights: [
      "Waterproof Airbrush Finish using International Cosmetics",
      "Advanced Sculpting & Radiant Glow",
      "Customized Bridal Hairstyle & Lash Extensions",
      "Complete Jewelry & Lehenga Draping",
      "Full Pre-Bridal Pampering: Premium Facial, Rica Body Wax & Hands D-Tan"
    ],
    image: "/images/hero.jpg"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "1",
    author: "Sakhi Gupta",
    rating: 5,
    label: "Google Customer Review",
    highlight: "Face-Flattering Haircut & Professional Service",
    text: "I had a great experience at this salon! The hairstylist understood exactly what I wanted and gave me a haircut that suits my face perfectly. The staff was friendly, the salon was clean, and the service was professional. I'm very happy with the result and will definitely visit again. Highly recommended! ♥️"
  },
  {
    id: "2",
    author: "Ritu Jaiswal",
    rating: 5,
    label: "Google Customer Review",
    highlight: "Ultimate Glow-up & Relaxing Pampering",
    text: "The ultimate glow-up package! Got a facial, hair spa, pedicure, makeup, and nails done here. The service was highly professional, hygienic, and relaxing. My skin feels radiant, my hair feels great, and the makeup and nail look turned out beautiful. Will definitely visit again!"
  },
  {
    id: "3",
    author: "Vartika Sharma",
    rating: 5,
    label: "Google Customer Review",
    highlight: "Bridal Nails & Sweet Comforting Staff",
    text: "Got my bridal nails done from Ms. Pooja. Had an amazing experience and the nails were perfect the way I wanted them to be. Also got a haircut from Shiba, she's sweet and makes a customer very comfortable and gives you exactly what one wants. Overall the team was sweet and comforting!"
  },
  {
    id: "4",
    author: "Sakshi Garg",
    rating: 5,
    label: "Google Customer Review",
    highlight: "Top-Notch Makeup & Hair Styling",
    text: "Amazing job done. Makeup and hair styling was top notch. Very friendly staff, open to feedback. Loved the service. Thank you!"
  },
  {
    id: "5",
    author: "Nazia Khatoon",
    rating: 5,
    label: "Google Customer Review",
    highlight: "Fabulous Bridal Makeup Transformation",
    text: "Thanks a lot.. I could not imagine this fabulous bridal makeup which I got from Glam 11 salon in Naka Hindola Lucknow. Recommended you all to come.. thank u all so much!"
  },
  {
    id: "6",
    author: "Shilpi Srivastava",
    rating: 5,
    label: "Google Customer Review",
    highlight: "Awesome Hair Nano Plastia & Highlights",
    text: "I am very happy to have my awesome hair nano plastia and highlights. Also I must say that once you visit Glam 11 you will feel better."
  },
  {
    id: "7",
    author: "Tanya Bharti",
    rating: 5,
    label: "Google Customer Review",
    highlight: "Beautiful Nail Art & Bridal Makeup",
    text: "Very nice nail art and bridal makeup done by Glam 11 beauty salon in Naka Hindola. Thank you so much, everyone must visit!"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "HD Bridal Makeup", category: "Bridal", src: "/images/hero.jpg", alt: "Glam 11 HD Bridal Makeup portrait with lotus logo" },
  { id: "g2", title: "Royal Bridal Photoshoot", category: "Bridal", src: "/images/bridal_main.jpg", alt: "Glam 11 brides in traditional red and maroon lehengas" },
  { id: "g3", title: "Bridal Makeup Close-up", category: "Makeup", src: "/images/bridal_detail.jpg", alt: "Bridal makeup close-up with matha patti" },
  { id: "g4", title: "Almond French Ombre Nails", category: "Nails", src: "/images/nail_extensions.jpg", alt: "Almond french ombre nail extensions with gold glitter" },
  { id: "g5", title: "Red & Bow Designer Nail Art", category: "Nails", src: "/images/nail_main.jpg", alt: "Glam 11 red bow and glitter nail art" },
  { id: "g6", title: "Intricate Bridal Hair Styling", category: "Hair", src: "/images/hair_main.jpg", alt: "Hair styling and crystal accessory in salon mirror" },
  { id: "g7", title: "International Certification Award", category: "Studio", src: "/images/about_pooja.jpg", alt: "Pooja Jaiswal receiving International Masterclass Award" },
  { id: "g8", title: "Salon Vanity Station", category: "Studio", src: "/images/studio_interior.jpg", alt: "Glam 11 clean salon interior and styling chairs" },
  { id: "g9", title: "Bridal Portrait Duo", category: "Bridal", src: "/images/gallery_1.jpg", alt: "Glam 11 bridal look duo portrait" },
  { id: "g10", title: "Classic Red Bridal Elegance", category: "Bridal", src: "/images/gallery_2.jpg", alt: "Radiant bride in red lehenga with silver jewelry" },
  { id: "g11", title: "Nail Extensions Before & After", category: "Nails", src: "/images/gallery_6.jpg", alt: "Glam 11 custom towel nail extension before and after" },
  { id: "g12", title: "Hairstyle Transformation", category: "Hair", src: "/images/hair_styling.jpg", alt: "Hair styling transformation at vanity mirror" },
  { id: "g13", title: "Full Length Bridal Photoshoot", category: "Bridal", src: "/images/gallery_7.jpg", alt: "Full length bridal lehenga photoshoot" },
  { id: "g14", title: "Macro Lip Makeup Detail", category: "Makeup", src: "/images/gallery_4.jpg", alt: "Macro lipstick application by makeup artist" },
  { id: "g15", title: "Glam 11 Reception Desk", category: "Studio", src: "/images/about_reception.jpg", alt: "Glam 11 reception counter and studio branding" }
];

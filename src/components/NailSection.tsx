import Image from "next/image";
import { Sparkles, Phone } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

interface NailSectionProps {
  onOpenInquiry: () => void;
}

export default function NailSection({ onOpenInquiry }: NailSectionProps) {
  const nailHighlights = [
    { title: "Custom Acrylic Extensions", desc: "Durable length enhancement shaped to stiletto, almond, square, or coffin profiles." },
    { title: "Designer Bridal Nail Art", desc: "Intricate 3D embellishments, bow accents, glitter dust, and Swarovski crystals." },
    { title: "French Ombre & Chrome", desc: "Elegant gradients, classic French tips, and metallic chrome finishes." },
    { title: "Deluxe Gel Manicure", desc: "Long-wearing gel polish, cuticle care, and nourishing hand massage." }
  ];

  return (
    <section id="nails" className="py-20 bg-white border-t border-[#E8C8C8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8C8C8]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nail Studio & Artistry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#262222]">
            Couture Nail Art & Extensions
          </h2>
          <p className="text-sm sm:text-base text-[#756E6E] font-light">
            Turn your fingertips into works of art with precision nail extension sculpting, custom bridal art, and premium gel finishes.
          </p>
        </div>

        {/* 3 Featured Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="group rounded-2xl overflow-hidden bg-[#FBF8F6] border border-[#E8C8C8]/40 shadow-soft">
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src="/images/nail_main.jpg"
                alt="Glam 11 Red & Bow Glitter Nail Art"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#262222]">3D Bow & Glitter Art</h3>
              <p className="text-xs text-[#756E6E] font-light">
                Vibrant crimson base paired with sparkling champagne glitter and custom stone bows.
              </p>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden bg-[#FBF8F6] border border-[#E8C8C8]/40 shadow-soft">
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src="/images/nail_art.jpg"
                alt="Glam 11 French Ombre Gel Nails"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#262222]">French Ombre Gradient</h3>
              <p className="text-xs text-[#756E6E] font-light">
                Soft blush fade transitioning into milky white tips with subtle iridescent shimmer.
              </p>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden bg-[#FBF8F6] border border-[#E8C8C8]/40 shadow-soft">
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src="/images/nail_extensions.jpg"
                alt="Glam 11 Almond Gold Glitter Extensions"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#262222]">Almond Gold Accent Extensions</h3>
              <p className="text-xs text-[#756E6E] font-light">
                Sophisticated almond shape featuring gold leaf accents and high-gloss top coat.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="bg-[#FBF8F6] rounded-2xl p-8 border border-[#E8C8C8]/50 shadow-soft grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {nailHighlights.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="font-serif text-base font-bold text-[#262222]">{item.title}</h4>
              <p className="text-xs text-[#756E6E] font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="mt-10 text-center flex items-center justify-center gap-4">
          <a
            href={GLAM11_INFO.phoneLink}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B87882] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-soft hover:bg-[#a2646e] transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Book Nail Art Appointment</span>
          </a>
        </div>
      </div>
    </section>
  );
}

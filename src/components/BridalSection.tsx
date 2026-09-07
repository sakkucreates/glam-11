import Image from "next/image";
import { Phone, Sparkles, CheckCircle2, Heart } from "lucide-react";
import { GLAM11_INFO, BRIDAL_PACKAGES } from "@/data/glam11Data";

interface BridalSectionProps {
  onOpenInquiry: () => void;
}

export default function BridalSection({ onOpenInquiry }: BridalSectionProps) {
  return (
    <section id="bridal" className="py-20 bg-white border-y border-[#E8C8C8]/40 relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8C8C8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8C8C8]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Bridal Artistry Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#262222]">
            Timeless Elegance for Your Wedding Day
          </h2>
          <p className="text-base text-[#756E6E] font-light leading-relaxed">
            From subtle glowing engagement looks to grand royal wedding HD & Airbrush makeup, Glam 11 specializes in crafting photogenic bridal perfection tailored to your personal style.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Imagery */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden shadow-soft border-2 border-[#E8C8C8]/50">
                <Image
                  src="/images/bridal_main.jpg"
                  alt="Glam 11 Royal Bridal Makeup Look"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#FBF8F6] rounded-2xl border border-[#E8C8C8]/40 text-center">
                <p className="font-serif text-base font-bold text-[#262222]">HD & Airbrush Artistry</p>
                <p className="text-xs text-[#756E6E]">Waterproof 18-Hour Finish</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 bg-[#FBF8F6] rounded-2xl border border-[#E8C8C8]/40 text-center">
                <p className="font-serif text-base font-bold text-[#262222]">Complete Draping</p>
                <p className="text-xs text-[#756E6E]">Lehenga, Chunni & Dupatta</p>
              </div>
              <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden shadow-soft border-2 border-[#E8C8C8]/50">
                <Image
                  src="/images/bridal_detail.jpg"
                  alt="Glam 11 Close-up Bridal Makeup Detail"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Highlights & Content */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B87882]">
                Crafted by Certified International Artist
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#262222] mt-1 mb-4">
                The Glam 11 Bridal Promise
              </h3>
              <p className="text-sm text-[#756E6E] leading-relaxed font-light">
                Every bride receives a private consultation to select lip palettes, lashes, and hair textures that align with their outfit design, venue lighting, and wedding theme.
              </p>
            </div>

            {/* Packages Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRIDAL_PACKAGES.map((pkg, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#FBF8F6] border border-[#E8C8C8]/40 space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#E8C8C8]/40 text-[#B87882] text-[10px] font-semibold uppercase tracking-wider">
                    {pkg.type}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#262222]">{pkg.name}</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#756E6E] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B87882] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={GLAM11_INFO.phoneLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#B87882] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-soft hover:bg-[#a2646e] transition-all min-h-[48px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Book Bridal Slot</span>
              </a>
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#B87882]/40 text-[#B87882] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-[#E8C8C8]/20 transition-all min-h-[48px]"
              >
                <span>Inquire Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

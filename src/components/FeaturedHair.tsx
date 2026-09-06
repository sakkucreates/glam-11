"use client";

import React from "react";
import Image from "next/image";
import { Scissors, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SALON_INFO } from "../data/salonData";

interface FeaturedHairProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const FeaturedHair: React.FC<FeaturedHairProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#EAE4DC] shadow-sm">
                <Image
                  src="/images/salon/colour-treatment.jpg"
                  alt="Professional Hair Colouring at Green Trends Aliganj"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EAE4DC] text-center">
                <span className="text-2xl font-serif font-bold text-[#B77B83] block">
                  Vibrant
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#756D6D]">
                  Hair Colour & Highlights
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EAE4DC] text-center">
                <span className="text-2xl font-serif font-bold text-[#C9A66B] block">
                  Custom Cut
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#756D6D]">
                  Precision Styling & Care
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#EAE4DC] shadow-sm">
                <Image
                  src="/images/salon/hair-care-zone.jpg"
                  alt="Hair Spa & Care Station at Green Trends Aliganj"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Brands */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83]">
                Hair Styling & Colour Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292525] mt-2 mb-4">
                Trendy Haircuts & Custom Colour Solutions
              </h2>
              <p className="text-base text-[#756D6D] leading-relaxed">
                Green Trends offers trendy haircuts and colour services, complete skin care solutions and bridal packages, at affordable rates. Equipped with professional hair and skin care products and trained professional stylists who provide friendly service.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B77B83] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292525]">
                    Personalized Style Consultations
                  </h4>
                  <p className="text-xs text-[#756D6D]">
                    Our hairdressers evaluate your hair texture, face shape, and daily routine to craft the perfect look.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B77B83] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292525]">
                    Professional Brand Formulations
                  </h4>
                  <p className="text-xs text-[#756D6D]">
                    We use professional products from leading brands like L&apos;Oréal, Matrix, Wella, and Schwarzkopf for soft, healthy results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B77B83] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292525]">
                    Deep Conditioning & Scalp Care
                  </h4>
                  <p className="text-xs text-[#756D6D]">
                    Nourishing hair spa treatments designed to restore shine and strength after colouring or styling.
                  </p>
                </div>
              </div>
            </div>

            {/* Brands Strip */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE4DC]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#756D6D] block mb-2">
                Professional Brands Used:
              </span>
              <div className="flex flex-wrap gap-2">
                {SALON_INFO.professionalBrands.map((brand, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-[#EAE4DC] rounded-md text-xs font-semibold text-[#292525]"
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking("Hair Cut & Colour")}
                className="px-6 py-3.5 bg-[#292525] hover:bg-[#B77B83] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <Scissors className="w-4 h-4 text-[#E8C7C7]" />
                BOOK HAIR SESSION
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

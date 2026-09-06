"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { SALON_INFO } from "../data/salonData";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#services");
    if (element) {
      const navHeight = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#EAE4DC] rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C9A66B] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#756D6D]">
                Unisex Hair & Style Salon • Aliganj, Lucknow
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#292525] leading-[1.12]">
              STYLE THAT <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B77B83]">FEELS LIKE YOU.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#756D6D] max-w-xl leading-relaxed">
              Professional hair, beauty, skin care and bridal services at Green Trends Aliganj, Lucknow. Crafted by trained stylists in a hygienic & relaxing environment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 bg-[#B77B83] hover:bg-[#A36971] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4" />
                BOOK AN APPOINTMENT
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                onClick={handleScrollToServices}
                className="px-7 py-4 bg-white hover:bg-[#FAF8F5] text-[#292525] border border-[#EAE4DC] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-colors shadow-2xs flex items-center justify-center text-center"
              >
                EXPLORE SERVICES
              </a>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-6 border-t border-[#EAE4DC] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center text-[#C9A66B] shrink-0 shadow-2xs">
                  <Star className="w-4 h-4 fill-[#C9A66B]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#292525] leading-none">
                    4.8 ★
                  </div>
                  <div className="text-[11px] text-[#756D6D] mt-0.5">
                    1,364 Reviews
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center text-[#B77B83] shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#292525] leading-none">
                    10 AM – 9 PM
                  </div>
                  <div className="text-[11px] text-[#756D6D] mt-0.5">
                    Open Daily
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center text-[#B77B83] shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#292525] leading-none">
                    Aliganj
                  </div>
                  <div className="text-[11px] text-[#756D6D] mt-0.5">
                    Lucknow, UP
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center text-[#B77B83] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#292525] leading-none">
                    Unisex
                  </div>
                  <div className="text-[11px] text-[#756D6D] mt-0.5">
                    Men & Women
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Real Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#EAE4DC] bg-white aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/images/salon/hero-reception.jpg"
                  alt="Green Trends Aliganj Salon Interior & Reception"
                  fill
                  priority
                  className="object-cover object-center"
                />
                
                {/* Floating Rating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#EAE4DC] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#EAE4DC] flex items-center justify-center font-serif font-bold text-[#B77B83] text-base">
                      GT
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#292525]">
                        Green Trends Aliganj
                      </div>
                      <div className="text-[11px] text-[#756D6D] flex items-center gap-1">
                        <span className="font-semibold text-[#292525]">4.8</span>
                        <span className="flex text-[#C9A66B]">★★★★★</span>
                        <span>(1,364)</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#B77B83] hover:underline shrink-0"
                  >
                    View Map →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

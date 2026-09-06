"use client";

import React from "react";
import Image from "next/image";
import { Crown, Sparkles, Heart, Calendar, ArrowRight } from "lucide-react";

interface BridalSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="bridal" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE4DC] shadow-sm relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#E8C7C7]/20 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FAF8F5] border border-[#EAE4DC] rounded-full text-xs font-semibold text-[#B77B83] uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5" />
                Bridal & Special Occasions
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#292525] leading-tight">
                Bridal Packages & <br />
                <span className="italic text-[#B77B83]">Event Makeovers</span>
              </h2>

              <p className="text-base text-[#756D6D] leading-relaxed">
                Green Trends Aliganj provides tailored bridal packages and makeover services designed to celebrate your special moments. From pre-bridal skin preparations to hair styling, draping, and event makeup.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EAE4DC]">
                  <div className="text-sm font-bold text-[#292525] mb-1">
                    Pre-Bridal Care
                  </div>
                  <div className="text-xs text-[#756D6D]">
                    Skin prep, facials, hair spa, and grooming prior to wedding events.
                  </div>
                </div>

                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EAE4DC]">
                  <div className="text-sm font-bold text-[#292525] mb-1">
                    Occasion Makeovers
                  </div>
                  <div className="text-xs text-[#756D6D]">
                    Sangeet, engagement, reception, and festive makeup & styling.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenBooking("Bridal Package")}
                  className="px-7 py-3.5 bg-[#B77B83] hover:bg-[#A36971] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  BOOK BRIDAL CONSULTATION
                </button>

                <a
                  href="#gallery"
                  className="px-6 py-3.5 bg-[#FAF8F5] hover:bg-white text-[#292525] border border-[#EAE4DC] text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors text-center"
                >
                  VIEW STUDIO GALLERY
                </a>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] border border-[#EAE4DC] shadow-md">
                <Image
                  src="/images/salon/image132.jpg"
                  alt="Green Trends Aliganj Bridal & Makeup Studio"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292525]/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E8C7C7] font-semibold">
                    Dedicated Studio Suite
                  </span>
                  <span className="text-xl font-serif font-bold mt-1">
                    Green Trends Makeup & Bridal Studio — Aliganj
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { SALON_INFO } from "../data/salonData";
import { CheckCircle2, MapPin, Users, Sparkles, ShieldCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#EAE4DC] shadow-md">
                <Image
                  src="/images/salon/main-floor.jpg"
                  alt="Green Trends Aliganj Salon Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
                <Image
                  src="/images/salon/mirror-glow.jpg"
                  alt="Lighted mirror workstations at Green Trends Aliganj"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83]">
                About Our Salon
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292525] mt-2 mb-4">
                Professional Unisex Styling & Skin Care in Aliganj
              </h2>
              <p className="text-base text-[#756D6D] leading-relaxed">
                {SALON_INFO.verifiedDescription}
              </p>
            </div>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE4DC]">
                <Users className="w-5 h-5 text-[#B77B83] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292525]">
                    Trained Stylists & Staff
                  </h4>
                  <p className="text-xs text-[#756D6D] mt-0.5">
                    Friendly, skilled hairdressers and skin therapists providing attentive care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE4DC]">
                <Sparkles className="w-5 h-5 text-[#B77B83] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292525]">
                    Hair & Skin Care Solutions
                  </h4>
                  <p className="text-xs text-[#756D6D] mt-0.5">
                    Complete services across haircuts, colour, facials, waxing, and bridal packages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE4DC]">
                <ShieldCheck className="w-5 h-5 text-[#B77B83] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292525]">
                    Clean & Hygienic Space
                  </h4>
                  <p className="text-xs text-[#756D6D] mt-0.5">
                    Sanitized stations, fresh capes, and comfortable environment for every visit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE4DC]">
                <MapPin className="w-5 h-5 text-[#B77B83] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292525]">
                    Convenient Location
                  </h4>
                  <p className="text-xs text-[#756D6D] mt-0.5">
                    Situated on Purania Rd near Kendriya Bhawan in Sector E, Aliganj.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE4DC] text-xs text-[#756D6D] flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#292525]">Address: </span>
                <span>B/1/1, Purania Rd, near Kendriya Bhawan, Sector E, Aliganj, Lucknow</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

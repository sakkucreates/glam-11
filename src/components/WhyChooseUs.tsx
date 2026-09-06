"use client";

import React from "react";
import { WHY_CHOOSE_POINTS } from "../data/salonData";
import { Award, Sparkles, ShieldCheck, Smile } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Award":
        return <Award className="w-6 h-6 text-[#B77B83]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#C9A66B]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#B77B83]" />;
      case "Smile":
        return <Smile className="w-6 h-6 text-[#C9A66B]" />;
      default:
        return <Award className="w-6 h-6 text-[#B77B83]" />;
    }
  };

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83]">
            The Green Trends Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292525] mt-2 mb-4">
            Why Choose Green Trends Aliganj
          </h2>
          <p className="text-sm sm:text-base text-[#756D6D]">
            Committed to quality care, professional products, and a friendly unisex salon experience in Lucknow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#EAE4DC] shadow-2xs hover:border-[#B77B83]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-center justify-center mb-4">
                  {getIcon(point.iconName)}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#292525] mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#756D6D] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAE4DC]/60 text-[11px] font-semibold text-[#B77B83]">
                0{idx + 1} • Verified Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

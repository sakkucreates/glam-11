"use client";

import React from "react";
import { SALON_INFO } from "../data/salonData";

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#FAF8F5] border-b border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#756D6D]">
          Professional Hair & Skin Care Products
        </span>
        <h3 className="text-lg font-serif font-bold text-[#292525] mt-1 mb-6">
          Formulated with Trusted Salon Brands
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {SALON_INFO.professionalBrands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-[#EAE4DC] shadow-2xs hover:border-[#B77B83] transition-colors text-center"
            >
              <div className="text-xl font-serif font-bold tracking-tight text-[#292525] mb-1">
                {brand.name}
              </div>
              <div className="text-[11px] text-[#756D6D]">
                {brand.note}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-[#756D6D] mt-4">
          Equipped with professional hair and skin care products for consistent quality & care.
        </p>
      </div>
    </section>
  );
};

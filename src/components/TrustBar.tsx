"use client";

import React from "react";
import { Star, MessageSquare, Clock, MapPin } from "lucide-react";
import { SALON_INFO } from "../data/salonData";

export const TrustBar: React.FC = () => {
  const stats = [
    {
      value: "4.8",
      label: "Google Rating",
      icon: Star,
      iconColor: "text-[#C9A66B]"
    },
    {
      value: SALON_INFO.reviewsCount,
      label: "Customer Reviews",
      icon: MessageSquare,
      iconColor: "text-[#B77B83]"
    },
    {
      value: "10 AM – 9 PM",
      label: "Open Daily",
      icon: Clock,
      iconColor: "text-[#B77B83]"
    },
    {
      value: "Aliganj",
      label: "Lucknow, UP",
      icon: MapPin,
      iconColor: "text-[#B77B83]"
    }
  ];

  return (
    <section className="py-8 bg-white border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE4DC]/60">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex items-center justify-center gap-4 text-center sm:text-left ${
                  idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-center justify-center shrink-0">
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#292525]">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#756D6D] font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

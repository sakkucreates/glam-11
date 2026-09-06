"use client";

import React, { useState } from "react";
import { SERVICE_GROUPS, ServiceGroup } from "../data/salonData";
import { Scissors, Sparkles, Crown, User, Check, ArrowRight, Calendar } from "lucide-react";

interface ServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_GROUPS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Crown":
        return <Crown className="w-5 h-5" />;
      case "User":
        return <User className="w-5 h-5" />;
      default:
        return <Scissors className="w-5 h-5" />;
    }
  };

  const currentGroup = SERVICE_GROUPS.find((g) => g.id === activeTab) || SERVICE_GROUPS[0];

  return (
    <section id="services" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83]">
            Curated Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#292525] mt-2 mb-4">
            Professional Hair & Beauty Care
          </h2>
          <p className="text-sm sm:text-base text-[#756D6D] leading-relaxed">
            Delivering precision hair styling, radiant skin care, bridal makeovers, and specialized men&apos;s grooming using top-grade salon products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SERVICE_GROUPS.map((group) => {
            const isActive = group.id === activeTab;
            return (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all border ${
                  isActive
                    ? "bg-[#292525] text-white border-[#292525] shadow-md"
                    : "bg-white text-[#292525] border-[#EAE4DC] hover:border-[#B77B83] hover:text-[#B77B83]"
                }`}
              >
                <span className={isActive ? "text-[#E8C7C7]" : "text-[#B77B83]"}>
                  {getIcon(group.iconName)}
                </span>
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE4DC] shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EAE4DC] pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B77B83] uppercase tracking-wider mb-1">
                {getIcon(currentGroup.iconName)}
                <span>{currentGroup.title}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#292525]">
                {currentGroup.title} at Green Trends Aliganj
              </h3>
              <p className="text-sm text-[#756D6D] mt-1 max-w-2xl">
                {currentGroup.subtitle}
              </p>
            </div>

            <button
              onClick={() => onOpenBooking(currentGroup.title)}
              className="px-6 py-3 bg-[#B77B83] hover:bg-[#A36971] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 shrink-0"
            >
              <Calendar className="w-4 h-4" />
              Book {currentGroup.title}
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentGroup.services.map((service) => (
              <div
                key={service.id}
                className="relative bg-[#FAF8F5] p-6 rounded-xl border border-[#EAE4DC] hover:border-[#B77B83]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg font-serif font-bold text-[#292525] group-hover:text-[#B77B83] transition-colors">
                      {service.name}
                    </h4>
                    {service.popular && (
                      <span className="px-2.5 py-0.5 bg-[#E8C7C7]/40 text-[#B77B83] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#B77B83]/30">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#756D6D] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {service.features && (
                    <ul className="space-y-1.5 mb-6">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#292525]/80">
                          <Check className="w-3.5 h-3.5 text-[#B77B83] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-[#EAE4DC]/60 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#756D6D] font-medium">
                    Professional Care
                  </span>
                  <button
                    onClick={() => onOpenBooking(service.name)}
                    className="text-xs font-semibold text-[#B77B83] hover:text-[#292525] flex items-center gap-1 group/btn"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

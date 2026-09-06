"use client";

import React from "react";
import { SALON_INFO } from "../data/salonData";
import { Phone, MapPin, Calendar, Clock, ChevronRight } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Bridal", href: "#bridal" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#292525] text-white pt-16 pb-8 border-t border-[#292525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#756D6D]/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-2xl sm:text-3xl font-serif font-bold tracking-wider text-white block">
                {SALON_INFO.displayName}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#E8C7C7] font-medium block mt-1">
                {SALON_INFO.subTitle}
              </span>
            </div>

            <p className="text-xs text-[#EAE4DC]/80 leading-relaxed max-w-md">
              {SALON_INFO.verifiedDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#B77B83] hover:bg-[#A36971] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <a
                href={SALON_INFO.phoneRaw}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors border border-white/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E8C7C7]" />
                {SALON_INFO.phone}
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A66B] border-b border-[#756D6D]/40 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs text-[#EAE4DC]/80 hover:text-[#E8C7C7] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#B77B83]" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A66B] border-b border-[#756D6D]/40 pb-2">
              Aliganj Studio Details
            </h4>

            <div className="space-y-3 text-xs text-[#EAE4DC]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8C7C7] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8C7C7] shrink-0" />
                <a href={SALON_INFO.phoneRaw} className="hover:text-white">
                  {SALON_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E8C7C7] shrink-0" />
                <span>Monday – Sunday: 10:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SALON_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#E8C7C7] hover:underline block"
              >
                Official Online Booking Portal →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#756D6D]">
          <div>
            © {new Date().getFullYear()} Green Trends Aliganj. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0">
            Client-Facing Demo Website • Aliganj, Lucknow
          </div>
        </div>

      </div>
    </footer>
  );
};

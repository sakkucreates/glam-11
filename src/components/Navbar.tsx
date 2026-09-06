"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Calendar, MapPin } from "lucide-react";
import { SALON_INFO } from "../data/salonData";

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE4DC] py-3"
            : "bg-[#FAF8F5]/90 backdrop-blur-xs border-b border-[#EAE4DC]/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group flex flex-col"
            >
              <span className="text-xl sm:text-2xl font-serif font-black tracking-widest text-[#292525] group-hover:text-[#B77B83] transition-colors">
                {SALON_INFO.displayName}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-[#756D6D]">
                Aliganj • Lucknow
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-semibold uppercase tracking-widest text-[#292525]/80 hover:text-[#B77B83] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B77B83] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={SALON_INFO.phoneRaw}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#292525] hover:text-[#B77B83] bg-white border border-[#EAE4DC] rounded-xl transition-colors shadow-2xs"
                title="Call Green Trends Aliganj"
              >
                <Phone className="w-3.5 h-3.5 text-[#B77B83]" />
                <span className="hidden lg:inline">{SALON_INFO.phone}</span>
                <span className="lg:hidden">Call</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2 bg-[#B77B83] hover:bg-[#A36971] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 bg-[#B77B83] text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                aria-label="Book"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#292525] hover:bg-[#EAE4DC]/50 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 sm:hidden bg-[#FAF8F5] pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#EAE4DC] pb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83]">
                Green Trends Navigation
              </span>
              <span className="text-[11px] text-[#756D6D]">Aliganj, Lucknow</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-serif font-semibold text-[#292525] hover:text-[#B77B83] py-2.5 border-b border-[#EAE4DC]/40 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#B77B83]">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#EAE4DC]">
            <a
              href={SALON_INFO.phoneRaw}
              className="w-full py-3 bg-white text-[#292525] border border-[#EAE4DC] text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-2xs"
            >
              <Phone className="w-4 h-4 text-[#B77B83]" />
              Call {SALON_INFO.phone}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#B77B83] text-white text-sm font-semibold uppercase tracking-wider rounded-xl shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment Now
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-[#756D6D] pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#B77B83]" />
              <span>Purania Rd, Sector E, Aliganj, Lucknow</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

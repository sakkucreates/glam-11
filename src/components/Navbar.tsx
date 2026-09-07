"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
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
    { name: "Hair", href: "#hair" },
    { name: "Nails", href: "#nails" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBF8F6]/95 backdrop-blur-md shadow-soft py-3 border-b border-[#E8C8C8]/40"
          : "bg-[#FBF8F6]/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Authentic Lotus Symbol */}
        <Link href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-[#E8C8C8]/30 flex items-center justify-center border border-[#B87882]/30 group-hover:border-[#B87882] transition-colors">
            {/* Lotus SVG Emblem */}
            <svg className="w-6 h-6 text-[#B87882]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 4C10 7 7 9 4 10C4 14 7 18 12 20C17 18 20 14 20 10C17 9 14 7 12 4Z" />
              <path d="M12 9C10.5 11.5 8.5 13 6 13.5C7 16.5 9.5 18.5 12 19C14.5 18.5 17 16.5 18 13.5C15.5 13 13.5 11.5 12 9Z" fill="#B87882" fillOpacity="0.2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#262222]">
              GLAM 11
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#756E6E] font-medium -mt-1">
              Studio & Salon
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#262222]/80 hover:text-[#B87882] transition-colors uppercase tracking-widest relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B87882] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#B87882] border border-[#B87882]/40 rounded-full hover:bg-[#E8C8C8]/30 transition-all min-h-[40px]"
          >
            Inquire
          </button>
          <a
            href={GLAM11_INFO.phoneLink}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B87882] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#a2646e] transition-all shadow-sm hover:shadow-md min-h-[40px]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Us</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#262222] hover:text-[#B87882] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF8F6] border-b border-[#E8C8C8]/60 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#262222] hover:text-[#B87882] py-2.5 px-2 border-b border-[#E8C8C8]/20 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-[#B87882] border border-[#B87882] rounded-full hover:bg-[#E8C8C8]/20 min-h-[44px]"
            >
              Inquire Availability
            </button>
            <a
              href={GLAM11_INFO.phoneLink}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#B87882] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 70077 22764</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

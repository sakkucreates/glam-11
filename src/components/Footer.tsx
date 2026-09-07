import Link from "next/link";
import { Sparkles, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

export default function Footer() {
  return (
    <footer className="bg-[#262222] text-white pt-16 pb-12 border-t border-[#3a3434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3a3434]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#B87882]/30 flex items-center justify-center border border-[#B87882]/40">
                <Sparkles className="w-4 h-4 text-[#E8C8C8]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                GLAM 11
              </span>
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              Top-rated beauty salon and makeup studio in Naka Hindola, Lucknow specializing in HD bridal makeup, designer nail art, and advanced hair treatments.
            </p>
            <p className="text-[11px] text-[#C8A36A] font-medium">
              Led by Certified International Makeup Artist & Educator
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Studio Navigation
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <Link href="#hero" className="hover:text-[#E8C8C8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#E8C8C8] transition-colors">
                  Signature Services
                </Link>
              </li>
              <li>
                <Link href="#bridal" className="hover:text-[#E8C8C8] transition-colors">
                  Bridal Makeup Packages
                </Link>
              </li>
              <li>
                <Link href="#hair" className="hover:text-[#E8C8C8] transition-colors">
                  Hair Styling & Treatments
                </Link>
              </li>
              <li>
                <Link href="#nails" className="hover:text-[#E8C8C8] transition-colors">
                  Nail Extensions & Art
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#E8C8C8] transition-colors">
                  About Glam 11 & Educator
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#E8C8C8] transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-[#E8C8C8] transition-colors">
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Details */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-xs text-white/70 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B87882] shrink-0 mt-0.5" />
                <span>{GLAM11_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B87882] shrink-0" />
                <a href={GLAM11_INFO.phoneLink} className="hover:text-[#E8C8C8] transition-colors">
                  {GLAM11_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B87882] shrink-0" />
                <span>{GLAM11_INFO.days}: {GLAM11_INFO.hours}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={GLAM11_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E8C8C8] hover:text-white font-medium transition-colors"
              >
                <span>View Glam 11 on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© {new Date().getFullYear()} Glam 11 Studio & Salon. All rights reserved.</p>
          <p>Naka Hindola, Lucknow, Uttar Pradesh 226004</p>
        </div>
      </div>
    </footer>
  );
}

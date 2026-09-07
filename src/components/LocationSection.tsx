import { MapPin, Phone, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-[#FBF8F6] border-t border-[#E8C8C8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Contact Card */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8C8C8]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Our Studio</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#262222]">
                Location & Studio Hours
              </h2>
              <p className="text-sm text-[#756E6E] font-light">
                Conveniently located at Rajendra Prasad Dwar in Naka Hindola, Lucknow. Visit us or call to inquire about appointment availability.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-5 bg-white rounded-2xl border border-[#E8C8C8]/40 shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8C8C8]/30 text-[#B87882] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#262222]">Exact Studio Address</h3>
                  <p className="text-xs text-[#756E6E] mt-1 font-light leading-relaxed">
                    {GLAM11_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 bg-white rounded-2xl border border-[#E8C8C8]/40 shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8C8C8]/30 text-[#B87882] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#262222]">Direct Phone Contact</h3>
                  <a
                    href={GLAM11_INFO.phoneLink}
                    className="text-sm font-semibold text-[#B87882] hover:underline mt-0.5 inline-block"
                  >
                    {GLAM11_INFO.phoneFormatted}
                  </a>
                  <p className="text-[11px] text-[#756E6E] font-light">Call for immediate inquiries & consultations</p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 bg-white rounded-2xl border border-[#E8C8C8]/40 shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8C8C8]/30 text-[#B87882] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#262222]">Opening Hours</h3>
                  <p className="text-xs text-[#262222] font-semibold mt-1">
                    {GLAM11_INFO.days}
                  </p>
                  <p className="text-xs text-[#756E6E] font-light">
                    {GLAM11_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={GLAM11_INFO.phoneLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#B87882] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-soft hover:bg-[#a2646e] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Glam 11</span>
              </a>

              <a
                href={GLAM11_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#262222]/20 text-[#262222] text-xs font-semibold uppercase tracking-wider rounded-full hover:border-[#B87882] hover:text-[#B87882] transition-all"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4 text-[#B87882]" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map / Directions Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-[#E8C8C8]/60 shadow-soft-lg space-y-6 text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#E8C8C8]/30 text-[#B87882] flex items-center justify-center mx-auto lg:mx-0">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#262222]">
                  Visiting Naka Hindola, Lucknow
                </h3>
                <p className="text-xs text-[#756E6E] font-light leading-relaxed">
                  Our salon studio is positioned right at <strong className="font-semibold text-[#262222]">Rajendra Prasad Dwar</strong> in Naka Hindola. We welcome walk-in consultations during business hours.
                </p>
              </div>

              <div className="p-4 bg-[#FBF8F6] rounded-xl border border-[#E8C8C8]/40 space-y-2 text-left">
                <p className="text-xs font-semibold text-[#262222]">📍 Landmark Reference:</p>
                <p className="text-xs text-[#756E6E] font-light">
                  Rajendra Prasad Dwar, Naka Hindola, Lucknow, UP 226004
                </p>
              </div>

              <a
                href={GLAM11_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#262222] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#B87882] transition-colors"
              >
                <span>Get Directions via Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

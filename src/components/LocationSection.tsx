"use client";

import React from "react";
import { SALON_INFO } from "../data/salonData";
import { MapPin, Phone, Clock, Navigation, Calendar, ExternalLink } from "lucide-react";

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="py-20 bg-white border-b border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83]">
            Visit Us in Aliganj
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#292525] mt-2 mb-4">
            Location & Operating Hours
          </h2>
          <p className="text-sm sm:text-base text-[#756D6D]">
            Conveniently located near Kendriya Bhawan on Purania Road in Sector E, Aliganj, Lucknow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] p-8 rounded-3xl border border-[#EAE4DC] flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#292525] mb-2">
                  Green Trends Aliganj
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-[#B77B83]">
                  Unisex Hair & Style Salon And Makeup Studio
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center shrink-0 text-[#B77B83]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#292525] mb-1">
                    Exact Address
                  </div>
                  <div className="text-xs sm:text-sm text-[#756D6D] leading-relaxed">
                    {SALON_INFO.address}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center shrink-0 text-[#B77B83]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#292525] mb-1">
                    Phone Number
                  </div>
                  <a
                    href={SALON_INFO.phoneRaw}
                    className="text-sm font-semibold text-[#292525] hover:text-[#B77B83] transition-colors"
                  >
                    {SALON_INFO.phone}
                  </a>
                  <div className="text-[11px] text-[#756D6D]">
                    Call for appointments & inquiries
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center shrink-0 text-[#B77B83]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#292525] mb-1">
                    Operating Hours
                  </div>
                  <div className="text-xs sm:text-sm text-[#292525] font-semibold">
                    Monday – Sunday
                  </div>
                  <div className="text-xs text-[#756D6D]">
                    10:00 AM – 9:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#EAE4DC] space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={SALON_INFO.phoneRaw}
                  className="py-3 px-4 bg-white border border-[#EAE4DC] hover:border-[#B77B83] text-[#292525] text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B77B83]" />
                  CALL NOW
                </a>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-white border border-[#EAE4DC] hover:border-[#B77B83] text-[#292525] text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#B77B83]" />
                  DIRECTIONS
                </a>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#B77B83] hover:bg-[#A36971] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                BOOK AN APPOINTMENT
              </button>
            </div>

          </div>

          {/* Right Map Embed Card */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#EAE4DC] relative min-h-[350px] lg:min-h-[450px] shadow-sm flex flex-col">
            <iframe
              title="Green Trends Aliganj Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8471241852086!2d80.94191!3d26.87652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf1dfbeebd795%3A0xe207f2a5dcddc38f!2sGreen%20Trends%20Unisex%20Hair%20%26%20Style%20Salon%20And%20Makeup%20Studio-%20Aliganj!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[350px] border-0 flex-1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="bg-white p-4 border-t border-[#EAE4DC] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9A66B] animate-ping"></span>
                <span className="text-xs font-semibold text-[#292525]">
                  Purania Rd, near Kendriya Bhawan, Sector E, Aliganj
                </span>
              </div>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#B77B83] hover:underline flex items-center gap-1"
              >
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

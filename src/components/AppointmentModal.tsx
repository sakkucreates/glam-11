"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Phone, CheckCircle, Sparkles } from "lucide-react";
import { SALON_INFO } from "../data/salonData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Haircut & Styling"
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: defaultService,
    date: "",
    time: "11:00 AM",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292525]/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#EAE4DC] max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#FAF8F5] px-6 py-4 sm:py-5 border-b border-[#EAE4DC] flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B77B83]">
              Green Trends Aliganj Demo
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#292525] mt-0.5">
              Book an Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#756D6D] hover:text-[#292525] hover:bg-[#EAE4DC]/50 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-[#E8C7C7]/30 text-[#B77B83] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#292525] mb-2">
                Demo Request Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-[#756D6D] mb-4 leading-relaxed max-w-sm mx-auto">
                Thank you <span className="font-semibold text-[#292525]">{formData.name || "Valued Guest"}</span>! Your request for <span className="font-semibold text-[#292525]">{formData.service}</span> on {formData.date || "your selected date"} at {formData.time} has been recorded in this demo modal.
              </p>
              <div className="bg-[#FAF8F5] p-3 rounded-lg border border-[#EAE4DC] text-xs text-[#756D6D] mb-6">
                💡 <span className="font-medium text-[#292525]">Demonstration Note:</span> For real bookings, click the direct official booking link below.
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={SALON_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#B77B83] text-white text-xs font-semibold rounded-xl hover:bg-[#A36971] transition-colors shadow-sm text-center"
                >
                  Go to Official Booking Portal
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#FAF8F5] text-[#292525] text-xs font-medium rounded-xl border border-[#EAE4DC] hover:bg-[#EAE4DC]/50 transition-colors"
                >
                  Close Demo
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#292525] uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#756D6D] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl text-sm text-[#292525] focus:outline-none focus:border-[#B77B83] focus:ring-1 focus:ring-[#B77B83]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292525] uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#756D6D] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl text-sm text-[#292525] focus:outline-none focus:border-[#B77B83] focus:ring-1 focus:ring-[#B77B83]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#292525] uppercase tracking-wider mb-1.5">
                  Service Category
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl text-sm text-[#292525] focus:outline-none focus:border-[#B77B83] focus:ring-1 focus:ring-[#B77B83]"
                >
                  <option value="Haircut & Styling">Haircut & Styling</option>
                  <option value="Hair Colouring & Highlights">Hair Colouring & Highlights</option>
                  <option value="Hair Spa & Scalp Care">Hair Spa & Scalp Care</option>
                  <option value="Skin Care & Glow Facial">Skin Care & Glow Facial</option>
                  <option value="Bridal Makeover Package">Bridal Makeover Package</option>
                  <option value="Men's Grooming & Beard Trim">Men's Grooming & Beard Trim</option>
                  <option value="Waxing & Hair Removal">Waxing & Hair Removal</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#292525] uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#756D6D] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl text-xs text-[#292525] focus:outline-none focus:border-[#B77B83]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#292525] uppercase tracking-wider mb-1.5">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#756D6D] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-2 py-2.5 bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl text-xs text-[#292525] focus:outline-none focus:border-[#B77B83]"
                    >
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="07:30 PM">07:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#B77B83] text-white font-semibold rounded-xl hover:bg-[#A36971] transition-all shadow-md flex items-center justify-center gap-2 group text-xs uppercase tracking-wider"
                >
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  REQUEST APPOINTMENT
                </button>
              </div>

              <p className="text-[11px] text-[#756D6D] text-center pt-1">
                Demo interaction only. Hours: 10:00 AM – 9:00 PM Daily.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

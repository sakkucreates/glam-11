"use client";

import { useState, useEffect } from "react";
import { X, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Bridal Makeup",
    date: "",
    notes: ""
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#FBF8F6] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E8C8C8]/60 shadow-soft-lg relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-[#756E6E] hover:text-[#262222] rounded-full hover:bg-[#E8C8C8]/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          /* Form View */
          <div className="space-y-5">
            <div className="space-y-1 text-center sm:text-left pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E8C8C8]/40 text-[#B87882] text-[11px] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Appointment Inquiry</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#262222]">
                Inquire About Availability
              </h3>
              <p className="text-xs text-[#756E6E] font-light">
                Fill out your service preferences below to prepare your inquiry details before calling.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#262222] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anjali Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8C8C8] text-xs text-[#262222] focus:outline-none focus:border-[#B87882]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#262222] mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8C8C8] text-xs text-[#262222] focus:outline-none focus:border-[#B87882]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#262222] mb-1">
                    Service Focus
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8C8C8] text-xs text-[#262222] focus:outline-none focus:border-[#B87882]"
                  >
                    <option value="Bridal Makeup">Bridal Makeup (HD / Airbrush)</option>
                    <option value="Party Makeup">Party / Engagement Makeup</option>
                    <option value="Hair Styling">Hair Styling & Cuts</option>
                    <option value="Hair Treatments">Hair Botox / Nano Plastia</option>
                    <option value="Nail Extensions">Acrylic / Gel Nail Extensions</option>
                    <option value="Nail Art">Custom Designer Nail Art</option>
                    <option value="Beauty Care">Facial & Skincare</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#262222] mb-1">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8C8C8] text-xs text-[#262222] focus:outline-none focus:border-[#B87882]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#262222] mb-1">
                  Specific Requests / Event Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any specific requirements (e.g. event time, outfit color, hair length)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8C8C8] text-xs text-[#262222] focus:outline-none focus:border-[#B87882]"
                />
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#B87882] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#a2646e] transition-colors shadow-soft min-h-[44px]"
                >
                  Prepare Inquiry Details
                </button>
                
                <a
                  href={GLAM11_INFO.phoneLink}
                  className="w-full text-center py-3 border border-[#262222]/20 text-[#262222] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#E8C8C8]/20 transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Or Call Direct: +91 70077 22764
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Inquiry Feedback View - Explicitly NOT implying instant online booking completion */
          <div className="text-center py-4 space-y-5">
            <div className="w-12 h-12 rounded-full bg-[#E8C8C8]/40 text-[#B87882] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#262222]">
                Inquiry Details Prepared
              </h3>
              <p className="text-xs text-[#756E6E] font-light leading-relaxed max-w-sm mx-auto">
                Thank you for your interest, <strong className="font-semibold text-[#262222]">{formData.name || "valued client"}</strong>! Since Glam 11 operates on direct phone confirmations, please place a quick call to verify immediate slot availability.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#E8C8C8]/40 text-left space-y-1.5 text-xs text-[#262222]">
              <p><strong className="font-semibold">Selected Service:</strong> {formData.service}</p>
              {formData.date && <p><strong className="font-semibold">Preferred Date:</strong> {formData.date}</p>}
              <p><strong className="font-semibold">Studio Location:</strong> Naka Hindola, Lucknow</p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={GLAM11_INFO.phoneLink}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#B87882] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-soft hover:bg-[#a2646e] transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 70077 22764 Now</span>
              </a>

              <button
                onClick={handleReset}
                className="text-xs text-[#756E6E] hover:text-[#262222] underline pt-1 block mx-auto py-2"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

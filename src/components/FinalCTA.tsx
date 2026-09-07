import { Phone, Sparkles, MapPin } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export default function FinalCTA({ onOpenInquiry }: FinalCTAProps) {
  return (
    <section className="py-20 bg-white border-t border-[#E8C8C8]/40 relative overflow-hidden text-center">
      {/* Soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E8C8C8]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8C8C8]/30 border border-[#B87882]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Book Your Experience</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#262222]">
          READY FOR YOUR GLAM MOMENT?
        </h2>

        <p className="text-base sm:text-lg text-[#756E6E] font-light max-w-2xl mx-auto leading-relaxed">
          Bridal beauty, luxury hair styling and couture nail artistry in Naka Hindola, Lucknow. Let our team craft your dream look.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GLAM11_INFO.phoneLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-[#B87882] text-white text-sm font-semibold uppercase tracking-wider rounded-full shadow-soft hover:bg-[#a2646e] hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 70077 22764</span>
          </a>

          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#262222]/20 text-[#262222] text-sm font-semibold uppercase tracking-wider rounded-full hover:border-[#B87882] hover:text-[#B87882] transition-all"
          >
            <span>Inquire Slot Availability</span>
          </button>
        </div>
      </div>
    </section>
  );
}

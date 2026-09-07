import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { SIGNATURE_SERVICES } from "@/data/glam11Data";

interface SignatureServicesProps {
  onOpenInquiry: () => void;
}

export default function SignatureServices({ onOpenInquiry }: SignatureServicesProps) {
  return (
    <section id="services" className="py-20 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8C8C8]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#262222]">
            Signature Beauty Services
          </h2>
          <p className="text-sm sm:text-base text-[#756E6E] font-light">
            Tailored makeup, hair styling, and nail artistry designed to bring your vision to life with precision and refinement.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SIGNATURE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8C8C8]/40 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B87882]">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#262222]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#756E6E] leading-relaxed font-light">
                    {service.description}
                  </p>

                  <ul className="pt-3 space-y-2 border-t border-[#E8C8C8]/30">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-[#262222]/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B87882]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenInquiry}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FBF8F6] border border-[#E8C8C8] text-xs font-semibold text-[#262222] hover:bg-[#B87882] hover:text-white hover:border-[#B87882] transition-all group/btn min-h-[44px]"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

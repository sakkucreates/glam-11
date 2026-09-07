import Image from "next/image";
import { Scissors, Sparkles, Phone } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

interface HairSectionProps {
  onOpenInquiry: () => void;
}

export default function HairSection({ onOpenInquiry }: HairSectionProps) {
  const hairServices = [
    { title: "Haircut & Blow-Dry", desc: "Precision face-flattering cuts and custom styling." },
    { title: "Global Hair Color", desc: "Vibrant global shades, seamless mehendi color removal & gray coverage." },
    { title: "Highlights & Balayage", desc: "Dimensional balayage highlights for radiance and depth." },
    { title: "Hair Nano Plastia", desc: "Advanced formaldehyde-free smoothing and restorative shine." },
    { title: "Hair Botox & Protein", desc: "Deep reconstruction for damaged, frizzy, or bleached hair." },
    { title: "Keratin Treatment", desc: "Long-lasting frizz control and mirror-like silkiness." },
    { title: "Hair Spa by Loreal", desc: "Nourishing scalp therapy and stress-relieving head massage." },
    { title: "Hair Rebonding & Smoothening", desc: "Sleek straight texture tailored to hair porosity." }
  ];

  return (
    <section id="hair" className="py-20 bg-[#FBF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Hair Service Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8C8C8]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
              <Scissors className="w-3.5 h-3.5" />
              <span>Hair Couture & Treatments</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#262222]">
              Transformative Hair Care & Couture Styling
            </h2>

            <p className="text-sm sm:text-base text-[#756E6E] font-light leading-relaxed">
              Whether you are looking for a face-flattering haircut, global color correction, or advanced restorative hair botox & nano plastia, our expert stylists use high-grade formulations to restore health and shine.
            </p>

            {/* Hair Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {hairServices.map((service, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-xl border border-[#E8C8C8]/40 shadow-soft">
                  <p className="font-serif text-sm font-bold text-[#262222]">{service.title}</p>
                  <p className="text-[11px] text-[#756E6E] mt-0.5 font-light">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={GLAM11_INFO.phoneLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B87882] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-soft hover:bg-[#a2646e] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call for Hair Consultation</span>
              </a>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#B87882]/40 text-[#B87882] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#E8C8C8]/20 transition-all"
              >
                <span>Inquire Service</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Hair Gallery Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-soft border-2 border-white">
                <Image
                  src="/images/hair_main.jpg"
                  alt="Glam 11 Hairstyling & Crystal Hair Accessory"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-soft border-2 border-white">
                <Image
                  src="/images/hair_model.jpg"
                  alt="Glam 11 Hair Model in Salon Interior"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-soft border-2 border-white">
                <Image
                  src="/images/hair_styling.jpg"
                  alt="Glam 11 Hair Styling Transformation"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white rounded-2xl border border-[#E8C8C8]/50 shadow-soft text-center flex flex-col justify-center h-64 sm:h-72">
                <Sparkles className="w-8 h-8 text-[#B87882] mx-auto mb-2" />
                <h4 className="font-serif text-lg font-bold text-[#262222]">Nano Plastia & Botox</h4>
                <p className="text-xs text-[#756E6E] mt-2 font-light">
                  Smooth frizz, add protein strength, and enhance shine with custom hair therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

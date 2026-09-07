import Image from "next/image";
import { Star, Phone, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

interface HeroProps {
  onOpenInquiry: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FBF8F6]">
      {/* Decorative ambient elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E8C8C8]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#C8A36A]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8C8C8]/30 border border-[#B87882]/20 text-[#B87882] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Naka Hindola, Lucknow&apos;s Premier Beauty Studio</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#262222] leading-[1.12]">
              YOUR LOOK. <br className="hidden sm:inline" />
              YOUR MOMENT. <br />
              <span className="italic font-normal text-[#B87882]">YOUR GLAM.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#756E6E] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Experience professional bridal makeup, luxury hair styling, and couture nail artistry crafted by a Certified International Makeup Artist & Educator in Naka Hindola, Lucknow.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={GLAM11_INFO.phoneLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#B87882] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-soft hover:bg-[#a2646e] hover:shadow-lg transition-all min-h-[48px]"
              >
                <Phone className="w-4 h-4" />
                <span>Book Your Appointment</span>
              </a>

              <a
                href={GLAM11_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#262222]/20 text-[#262222] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full hover:border-[#B87882] hover:text-[#B87882] transition-all min-h-[48px]"
              >
                <MapPin className="w-4 h-4 text-[#B87882]" />
                <span>View Location</span>
              </a>
            </div>

            {/* Trust Details Bar */}
            <div className="pt-6 border-t border-[#E8C8C8]/50 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#C8A36A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-serif text-lg font-bold text-[#262222]">{GLAM11_INFO.rating}</span>
                <span className="text-xs text-[#756E6E] font-medium">({GLAM11_INFO.reviewsCount} Google Reviews)</span>
              </div>

              <div className="h-4 w-[1px] bg-[#E8C8C8] hidden sm:block" />

              <div className="flex items-center gap-2 text-xs text-[#756E6E] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#B87882]" />
                <span>Led by Certified Educator</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Image with Editorial Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer champagne accent frame */}
              <div className="absolute -inset-3 rounded-3xl border border-[#C8A36A]/40 transform rotate-1 pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-white">
                <Image
                  src="/images/hero.jpg"
                  alt="Glam 11 HD Bridal Makeup portrait with lotus watermark logo"
                  width={600}
                  height={750}
                  priority
                  className="w-full h-[420px] sm:h-[520px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8C8C8]/50 shadow-soft flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-bold text-[#262222]">Signature HD Bridal Makeup</p>
                    <p className="text-[11px] text-[#756E6E]">Glam 11 Studio & Academy</p>
                  </div>
                  <button
                    onClick={onOpenInquiry}
                    className="px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider bg-[#E8C8C8]/30 text-[#B87882] rounded-lg hover:bg-[#E8C8C8]/60 transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

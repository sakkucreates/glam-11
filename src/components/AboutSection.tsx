import Image from "next/image";
import { Award, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#FBF8F6] border-t border-[#E8C8C8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Studio & Award Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-soft border-2 border-white">
                <Image
                  src="/images/about_pooja.jpg"
                  alt="Pooja Jaiswal Certified International Makeup Masterclass Award"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#E8C8C8]/40 shadow-soft text-center">
                <p className="font-serif text-base font-bold text-[#262222]">Certified Educator</p>
                <p className="text-xs text-[#756E6E]">International Makeup Masterclasses</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 bg-white rounded-2xl border border-[#E8C8C8]/40 shadow-soft text-center">
                <p className="font-serif text-base font-bold text-[#262222]">Naka Hindola Studio</p>
                <p className="text-xs text-[#756E6E]">Lucknow, Uttar Pradesh</p>
              </div>
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-soft border-2 border-white">
                <Image
                  src="/images/about_reception.jpg"
                  alt="Glam 11 Reception Desk and Studio Branding"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8C8C8]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Glam 11 Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#262222] leading-tight">
              Where International Artistry Meets Personalized Beauty
            </h2>

            <p className="text-sm sm:text-base text-[#756E6E] font-light leading-relaxed">
              Located at Rajendra Prasad Dwar in Naka Hindola, Lucknow, <strong className="font-semibold text-[#262222]">Glam 11</strong> is a premier beauty salon and makeup studio dedicated to crafting flawless bridal looks, designer nail extensions, and luxury hair treatments.
            </p>

            <p className="text-sm text-[#756E6E] font-light leading-relaxed">
              Led by <strong className="font-semibold text-[#262222]">Ms. Pooja Jaiswal</strong>, a Certified International Makeup Artist & Educator, Glam 11 brings advanced techniques in NARS HD makeup, airbrush finishes, and professional hair nano plastia to clients across Lucknow.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#E8C8C8]/40 shadow-soft flex items-start gap-3">
                <div className="p-2 bg-[#E8C8C8]/30 rounded-lg text-[#B87882] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#262222]">International Certification</h4>
                  <p className="text-xs text-[#756E6E] font-light">Trained under global masters in HD & airbrush makeup.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E8C8C8]/40 shadow-soft flex items-start gap-3">
                <div className="p-2 bg-[#E8C8C8]/30 rounded-lg text-[#B87882] shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#262222]">Beauty & Makeup Education</h4>
                  <p className="text-xs text-[#756E6E] font-light">Professional courses in hair styling, draping, and makeup theory.</p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="pt-2 border-t border-[#E8C8C8]/40 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#262222]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B87882]" />
                <span>100% Hygienic Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B87882]" />
                <span>Premium Formulations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B87882]" />
                <span>Private Consultations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

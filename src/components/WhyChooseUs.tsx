import { Sparkles, Award, Heart, Shield, Clock, Phone } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: "Certified International Expertise",
      description: "Led by Ms. Pooja Jaiswal, certified in advanced international makeup masterclasses and hair techniques."
    },
    {
      icon: Heart,
      title: "Personalized Consultation",
      description: "Every bridal and party makeup session is tailored to your outfit colors, face shape, and event lighting."
    },
    {
      icon: Sparkles,
      title: "Couture Hair & Nail Artistry",
      description: "Specialized hair nano plastia, hair botox, and custom 3D acrylic nail extensions under one roof."
    },
    {
      icon: Shield,
      title: "Hygienic & Welcoming Studio",
      description: "Clean stations, disinfected tools, and a comforting staff dedicated to making your salon visit relaxing."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-[#E8C8C8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8C8C8]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Glam 11 Difference</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#262222]">
              Why Clients Choose Glam 11
            </h2>

            <p className="text-sm text-[#756E6E] font-light leading-relaxed">
              We combine professional expertise, premium cosmetics, and a warm, customer-first culture to ensure every client leaves feeling confident and radiant.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href={GLAM11_INFO.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#B87882] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-soft hover:bg-[#a2646e] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 70077 22764</span>
              </a>
            </div>
          </div>

          {/* Right 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#FBF8F6] border border-[#E8C8C8]/40 space-y-3 hover:border-[#B87882]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8C8C8]/30 text-[#B87882] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#262222]">{b.title}</h3>
                  <p className="text-xs text-[#756E6E] font-light leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

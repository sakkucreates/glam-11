import { Star, Clock, MapPin, Award } from "lucide-react";
import { GLAM11_INFO } from "@/data/glam11Data";

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-[#E8C8C8]/40 py-6 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#E8C8C8]/30">
          {/* Point 1 */}
          <div className="flex items-center justify-center md:justify-start gap-3.5 pt-4 md:pt-0 md:px-4">
            <div className="w-10 h-10 rounded-full bg-[#E8C8C8]/20 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#C8A36A] fill-current" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#262222]">{GLAM11_INFO.rating} Rating</p>
              <p className="text-xs text-[#756E6E]">Across {GLAM11_INFO.reviewsCount} Google Reviews</p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex items-center justify-center md:justify-start gap-3.5 pt-4 md:pt-0 md:px-4">
            <div className="w-10 h-10 rounded-full bg-[#E8C8C8]/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#B87882]" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#262222]">Certified Lead</p>
              <p className="text-xs text-[#756E6E]">International Artist & Educator</p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex items-center justify-center md:justify-start gap-3.5 pt-4 md:pt-0 md:px-4">
            <div className="w-10 h-10 rounded-full bg-[#E8C8C8]/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#B87882]" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#262222]">Mon - Sun</p>
              <p className="text-xs text-[#756E6E]">{GLAM11_INFO.hours}</p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="flex items-center justify-center md:justify-start gap-3.5 pt-4 md:pt-0 md:px-4">
            <div className="w-10 h-10 rounded-full bg-[#E8C8C8]/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#B87882]" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#262222]">Prime Studio</p>
              <p className="text-xs text-[#756E6E]">Naka Hindola, Lucknow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

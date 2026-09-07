import { Star, Sparkles, Quote } from "lucide-react";
import { REVIEWS_DATA, GLAM11_INFO } from "@/data/glam11Data";

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 bg-[#FBF8F6] border-t border-[#E8C8C8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8C8C8]/30 text-[#B87882] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#262222]">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-[#756E6E] font-light">
            Read real feedback from clients who experienced our bridal makeup, hair treatments, and designer nail extensions.
          </p>

          {/* Rating Summary Pill */}
          <div className="pt-3 flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center text-[#C8A36A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-serif text-lg font-bold text-[#262222]">{GLAM11_INFO.rating} Out of 5 Stars</span>
            <span className="text-xs text-[#756E6E]">({GLAM11_INFO.fiveStarCount} Five-Star Google Reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-7 border border-[#E8C8C8]/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#E8C8C8]/30" />

              <div className="space-y-4">
                {/* Rating & Label */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center text-[#C8A36A]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {/* Strict rule: "Google Customer Review" ONLY */}
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#756E6E] bg-[#FBF8F6] px-2.5 py-1 rounded-md border border-[#E8C8C8]/40">
                    {review.label}
                  </span>
                </div>

                {/* Review Highlight Title */}
                <h3 className="font-serif text-base font-bold text-[#262222] leading-snug">
                  &ldquo;{review.highlight}&rdquo;
                </h3>

                {/* Review Body */}
                <p className="text-xs text-[#756E6E] leading-relaxed font-light italic">
                  {review.text}
                </p>
              </div>

              {/* Reviewer Name */}
              <div className="pt-6 mt-6 border-t border-[#E8C8C8]/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E8C8C8]/40 text-[#B87882] font-serif text-sm font-bold flex items-center justify-center uppercase">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-serif text-sm font-bold text-[#262222] capitalize">
                    {review.author}
                  </p>
                  <p className="text-[10px] text-[#756E6E]">Google Reviewer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

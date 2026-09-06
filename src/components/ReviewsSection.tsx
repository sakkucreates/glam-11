"use client";

import React from "react";
import { REVIEWS, SALON_INFO } from "../data/salonData";
import { Star, Quote, UserCheck, MessageSquare } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FAF8F5] border border-[#EAE4DC] rounded-full mb-3">
            <div className="flex text-[#C9A66B] text-xs">★★★★★</div>
            <span className="text-xs font-semibold text-[#292525]">
              4.8 Rating from 1,364 Google Reviews
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#292525] mb-4">
            Loved by Lucknow Residents
          </h2>
          <p className="text-sm sm:text-base text-[#756D6D]">
            Read authentic reviews from guests who experienced our haircuts, hair spa, skin care, and hospitality at Green Trends Aliganj.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EAE4DC] hover:border-[#B77B83]/50 transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B77B83] bg-white px-2.5 py-1 rounded-md border border-[#EAE4DC]">
                    {rev.label}
                  </span>
                  <div className="flex text-[#C9A66B] text-sm">
                    {"★".repeat(rev.rating)}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#292525]/90 leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between">
                <div>
                  <div className="text-sm font-serif font-bold text-[#292525]">
                    {rev.author}
                  </div>
                  {rev.serviceMentioned && (
                    <div className="text-[11px] text-[#756D6D]">
                      Service: {rev.serviceMentioned}
                    </div>
                  )}
                </div>

                {rev.stylistMentioned && (
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#756D6D] block">
                      Stylist Appreciated
                    </span>
                    <span className="text-xs font-semibold text-[#B77B83]">
                      {rev.stylistMentioned}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA strip */}
        <div className="mt-12 text-center p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE4DC] max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-lg font-serif font-bold text-[#292525]">
              Read more reviews on Google Maps
            </span>
          </div>
          <p className="text-xs text-[#756D6D] mb-4">
            Over 1,364 verified Google reviews with an average rating of 4.8 stars.
          </p>
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#EAE4DC] hover:border-[#B77B83] text-[#292525] text-xs font-semibold rounded-xl transition-colors shadow-2xs"
          >
            <MessageSquare className="w-4 h-4 text-[#B77B83]" />
            View Google Maps Page →
          </a>
        </div>

      </div>
    </section>
  );
};

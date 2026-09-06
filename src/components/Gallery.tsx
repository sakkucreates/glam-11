"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "../data/salonData";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ["All", "Hair", "Colour", "Beauty", "Bridal", "Ambience"];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const currentItem: GalleryItem | null = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83]">
            Curated Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#292525] mt-2 mb-4">
            Inside Green Trends Aliganj
          </h2>
          <p className="text-sm sm:text-base text-[#756D6D]">
            Explore authentic photographs of our salon floor, hair styling stations, facial rooms, and makeup studio.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                  isActive
                    ? "bg-[#292525] text-white border-[#292525] shadow-xs"
                    : "bg-white text-[#292525] border-[#EAE4DC] hover:border-[#B77B83] hover:text-[#B77B83]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#EAE4DC] shadow-2xs hover:shadow-lg transition-all cursor-pointer aspect-[4/3] sm:aspect-[3/4]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#292525]/80 via-[#292525]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div className="self-end p-2 bg-white/90 rounded-full text-[#292525] shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8C7C7]">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-serif font-bold text-white mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 bg-[#292525]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 hidden sm:flex"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 hidden sm:flex"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#EAE4DC]">
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-[#FAF8F5]">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="p-5 bg-white border-t border-[#EAE4DC] flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83]">
                  {currentItem.category} • Green Trends Aliganj
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#292525] mt-0.5">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-[#756D6D] mt-1">
                  {currentItem.description}
                </p>
              </div>

              <div className="text-xs text-[#756D6D] font-mono shrink-0 ml-4">
                {selectedIndex! + 1} / {filteredItems.length}
              </div>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};

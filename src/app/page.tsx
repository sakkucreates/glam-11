"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { Services } from "../components/Services";
import { FeaturedHair } from "../components/FeaturedHair";
import { BridalSection } from "../components/BridalSection";
import { AboutSection } from "../components/AboutSection";
import { BrandsSection } from "../components/BrandsSection";
import { Gallery } from "../components/Gallery";
import { ReviewsSection } from "../components/ReviewsSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { LocationSection } from "../components/LocationSection";
import { Footer } from "../components/Footer";
import { AppointmentModal } from "../components/AppointmentModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Haircut & Styling");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Sticky Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking("Hero Consultation")} />

        {/* Trust & Stats Bar */}
        <TrustBar />

        {/* Services Group Section */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Featured Hair Styling & Colour */}
        <FeaturedHair onOpenBooking={handleOpenBooking} />

        {/* Bridal & Makeover Showcase */}
        <BridalSection onOpenBooking={handleOpenBooking} />

        {/* Concise About Section */}
        <AboutSection />

        {/* Professional Products Brands */}
        <BrandsSection />

        {/* Curated Gallery & Interactive Lightbox */}
        <Gallery />

        {/* Verified Google Customer Reviews */}
        <ReviewsSection />

        {/* Why Choose Green Trends */}
        <WhyChooseUs />

        {/* Location, Contact & Operating Hours */}
        <LocationSection onOpenBooking={() => handleOpenBooking("Location Inquiry")} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking("Footer Booking")} />

      {/* Appointment Demo Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
      />
    </div>
  );
}

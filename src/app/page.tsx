"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SignatureServices from "@/components/SignatureServices";
import BridalSection from "@/components/BridalSection";
import HairSection from "@/components/HairSection";
import NailSection from "@/components/NailSection";
import AboutSection from "@/components/AboutSection";
import VisualGallery from "@/components/VisualGallery";
import CustomerReviews from "@/components/CustomerReviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleOpenInquiry = () => {
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FBF8F6] text-[#262222] font-sans selection:bg-[#E8C8C8] selection:text-[#262222] overflow-x-hidden">
      {/* Sticky Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. Signature Services */}
        <SignatureServices onOpenInquiry={handleOpenInquiry} />

        {/* 5. Bridal Makeup Feature */}
        <BridalSection onOpenInquiry={handleOpenInquiry} />

        {/* 6. Hair & Styling */}
        <HairSection onOpenInquiry={handleOpenInquiry} />

        {/* 7. Nail Art / Nail Extensions */}
        <NailSection onOpenInquiry={handleOpenInquiry} />

        {/* 8. About Glam 11 */}
        <AboutSection />

        {/* 9. Visual Gallery */}
        <VisualGallery />

        {/* 10. Customer Reviews */}
        <CustomerReviews />

        {/* 11. Why Choose Glam 11 */}
        <WhyChooseUs />

        {/* 12. Location + Opening Hours */}
        <LocationSection />

        {/* 13. Final CTA */}
        <FinalCTA onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Appointment Inquiry Modal */}
      <AppointmentModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
    </div>
  );
}

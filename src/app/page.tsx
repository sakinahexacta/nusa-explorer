import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import HighlightBox from "@/components/HighlightBox";
import SubjectsSection from "@/components/SubjectsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-purple-600 selection:text-white">
      {/* 1. Navigation Bar (Top Bar) */}
      <Navbar />

      {/* 2. Hero Section with Pixel Title, Buttons & Wave Divider */}
      <Hero />

      {/* 3. 4 Rounded Purple Feature Cards floating over the wave */}
      <FeatureCards />

      {/* 4. About / Overview Section with Pixel Title and Game Map Frame */}
      <AboutSection />

      {/* 5. Highlight Box with Indonesian SD Student Pixel Character */}
      <HighlightBox />

      {/* 6. Subjects Section ("Apa yang dipelajari?") with 3 Subject Cards */}
      <SubjectsSection />

      {/* 7. Call To Action (CTA) Banner with dark pixel map & Play button */}
      <CtaBanner />

      {/* 8. Deep Dark Purple Footer */}
      <Footer />
    </main>
  );
}

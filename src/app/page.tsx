import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import BrandMarquee from './components/BrandMarquee';
import FeaturedWatches from './components/FeaturedWatches';
import FeaturedPerfumes from './components/FeaturedPerfumes';
import FeaturedShoes from './components/FeaturedShoes';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BrandMarquee />
        <FeaturedWatches />
        <FeaturedPerfumes />
        <FeaturedShoes />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

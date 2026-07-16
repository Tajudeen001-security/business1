import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

const perfumes = [
{ brand: 'Creed', name: 'Aventus EDP 100ml', price: '₦85,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1936999ae-1770044287274.png", alt: 'Creed Aventus premium fragrance bottle on dark marble surface with moody lighting' },
{ brand: 'Tom Ford', name: 'Black Orchid EDP', price: '₦65,000', image: "https://images.unsplash.com/photo-1618261325334-3ffdc3ed95f4", alt: 'Tom Ford luxury perfume bottle with dark glass on black background with atmospheric lighting' },
{ brand: 'Dior', name: 'Sauvage EDT 100ml', price: '₦45,000', image: "https://images.unsplash.com/photo-1732247610025-8059b8edd39a", alt: 'Dior Sauvage blue fragrance bottle on dark rocky surface with dramatic lighting' },
{ brand: 'Chanel', name: 'No. 5 EDP 100ml', price: '₦55,000', image: "https://images.unsplash.com/photo-1600427328626-3d7f947278b9", alt: 'Chanel No 5 iconic perfume bottle on dark background with soft elegant lighting' },
{ brand: 'Versace', name: 'Eros EDT 100ml', price: '₦35,000', image: "https://images.unsplash.com/photo-1588680500419-e221b3c15dd6", alt: 'Versace Eros blue perfume bottle with metallic cap on dark background' },
{ brand: 'Armani', name: 'Code Absolu EDP', price: '₦30,000', image: "https://images.unsplash.com/photo-1704403749538-793bc38c0380", alt: 'Giorgio Armani Code dark fragrance bottle on black surface with ambient glow' }];


export default function FeaturedPerfumes() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              Luxury Fragrances
            </span>
            <h2 className="font-display text-section-xl font-bold text-foreground">
              Exclusive Perfumes
            </h2>
          </div>
          <Link
            href="/perfumes"
            className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300 group">
            
            View All Perfumes
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 3-col grid: 6 cards */}
        {/* Row 1: Creed, Tom Ford, Dior */}
        {/* Row 2: Chanel, Versace, Armani */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {perfumes?.map((p, i) =>
          <ProductCard key={i} {...p} />
          )}
        </div>
      </div>
    </section>);

}

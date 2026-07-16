import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

const shoes = [
{ brand: 'Nike', name: 'Air Force 1 Low', price: '₦45,000', image: "https://images.unsplash.com/photo-1628146286632-09a9d4867cd3", alt: 'Nike Air Force 1 white sneaker on dark background with dramatic side lighting' },
{ brand: 'Adidas', name: 'Ultraboost 23', price: '₦55,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0604d49-1780507078488.png", alt: 'Adidas Ultraboost running shoe with Boost sole on dark surface' },
{ brand: 'Gucci', name: 'Princetown Loafer', price: '₦180,000', image: "https://images.unsplash.com/photo-1677203232939-f5c8a2e1c1e3", alt: 'Gucci luxury loafer with horsebit detail on dark marble surface' },
{ brand: 'Prada', name: 'Derby Lace-Up', price: '₦220,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15e6123d0-1772157658238.png", alt: 'Prada formal derby shoe in black leather on dark studio background' },
{ brand: 'Timberland', name: '6-Inch Premium Boot', price: '₦65,000', image: "https://images.unsplash.com/photo-1542834759-4db91f2574d8", alt: 'Timberland wheat nubuck boots on dark textured surface with moody lighting' },
{ brand: 'Converse', name: 'Chuck Taylor All Star', price: '₦25,000', image: "https://images.unsplash.com/photo-1703193445496-909b5729fc7c", alt: 'Converse Chuck Taylor classic canvas sneaker on dark background' }];


export default function FeaturedShoes() {
  return (
    <section className="py-16 sm:py-20 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              Designer Footwear
            </span>
            <h2 className="font-display text-section-xl font-bold text-foreground">
              Premium Shoes
            </h2>
          </div>
          <Link
            href="/shoes"
            className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300 group">
            
            View All Shoes
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 3-col grid: 6 cards */}
        {/* Row 1: Nike, Adidas, Gucci */}
        {/* Row 2: Prada, Timberland, Converse */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {shoes?.map((s, i) =>
          <ProductCard key={i} {...s} />
          )}
        </div>
      </div>
    </section>);

}

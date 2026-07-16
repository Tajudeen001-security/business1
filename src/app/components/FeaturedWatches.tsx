import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

const watches = [
{ brand: 'Rolex', name: 'Submariner Date', price: '₦850,000', image: "https://images.unsplash.com/photo-1698801426372-ba3628ad034b", alt: 'Rolex Submariner luxury diving watch on dark background with dramatic lighting' },
{ brand: 'Omega', name: 'Seamaster 300M', price: '₦420,000', image: "https://images.unsplash.com/photo-1691865179028-1729b766a5cd", alt: 'Omega Seamaster professional watch with blue dial on dark surface' },
{ brand: 'TAG Heuer', name: 'Carrera Chronograph', price: '₦280,000', image: "https://images.unsplash.com/photo-1561038320-8d32ac5541c0", alt: 'TAG Heuer Carrera chronograph sports watch with dark dial' },
{ brand: 'Hublot', name: 'Big Bang Unico', price: '₦650,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2e1b8fb-1779377626646.png", alt: 'Hublot Big Bang luxury watch with rubber strap on dark background' },
{ brand: 'Casio', name: 'G-Shock GA-2100', price: '₦45,000', image: "https://images.unsplash.com/photo-1734776579769-4fbfcdd12b6a", alt: 'Casio G-Shock digital sports watch with black case on dark surface' },
{ brand: 'Seiko', name: 'Presage Cocktail', price: '₦85,000', image: "https://images.unsplash.com/photo-1705468529750-6b6800e1ba1a", alt: 'Seiko Presage dress watch with iridescent dial on dark background' },
{ brand: 'Daniel Wellington', name: 'Classic Sheffield', price: '₦35,000', image: "https://images.unsplash.com/photo-1531939130334-23dcf689f429", alt: 'Daniel Wellington minimalist watch with leather strap on dark surface' },
{ brand: 'Michael Kors', name: 'Runway Slim', price: '₦28,000', image: "https://images.unsplash.com/photo-1709101051601-5cee6a1ff5fe", alt: 'Michael Kors fashion watch with gold tone case on dark background' },
{ brand: 'Tissot', name: 'PRX Powermatic 80', price: '₦95,000', image: "https://images.unsplash.com/photo-1669964306667-e88cb64e1578", alt: 'Tissot PRX integrated bracelet watch with silver dial on dark surface' },
{ brand: 'Breitling', name: 'Navitimer B01', price: '₦380,000', image: "https://images.unsplash.com/photo-1600003014608-c2ccc1570a65", alt: 'Breitling Navitimer aviation chronograph watch with black dial' },
{ brand: 'Citizen', name: 'Eco-Drive Promaster', price: '₦55,000', image: "https://images.unsplash.com/photo-1607850479301-790333f2e4cd", alt: 'Citizen Eco-Drive diver watch with blue dial on dark background' },
{ brand: 'MVMT', name: 'Chrono 45mm', price: '₦22,000', image: "https://images.unsplash.com/photo-1575845321082-53eb3a76db9e", alt: 'MVMT minimalist chronograph watch with brown leather strap on dark surface' }];


export default function FeaturedWatches() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              Featured Collection
            </span>
            <h2 className="font-display text-section-xl font-bold text-foreground">
              Premium Watches
            </h2>
          </div>
          <Link
            href="/watches"
            className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300 group">
            
            View All Watches
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 4-col grid: 12 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Row 1: Rolex, Omega, TAG Heuer, Hublot */}
          {/* Row 2: G-Shock, Seiko, Daniel Wellington, Michael Kors */}
          {/* Row 3: Tissot, Breitling, Citizen, MVMT */}
          {watches?.map((w, i) =>
          <ProductCard key={i} {...w} />
          )}
        </div>
      </div>
    </section>);

}

'use client';

import React, { useState } from 'react';
import ProductCard from '@/app/components/ProductCard';

const allPerfumes = [
{ brand: 'Creed', name: 'Aventus EDP 100ml', price: '₦85,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1936999ae-1770044287274.png", alt: 'Creed Aventus premium fragrance bottle on dark marble with moody lighting', category: 'Woody' },
{ brand: 'Tom Ford', name: 'Black Orchid EDP 100ml', price: '₦65,000', image: "https://images.unsplash.com/photo-1723828003236-b80954d19eec", alt: 'Tom Ford Black Orchid luxury perfume bottle with dark glass on black background', category: 'Oriental' },
{ brand: 'Dior', name: 'Sauvage EDT 100ml', price: '₦45,000', image: "https://images.unsplash.com/photo-1732247610025-8059b8edd39a", alt: 'Dior Sauvage blue fragrance bottle on dark rocky surface with dramatic lighting', category: 'Fresh' },
{ brand: 'Chanel', name: 'No. 5 EDP 100ml', price: '₦55,000', image: "https://images.unsplash.com/photo-1600427328626-3d7f947278b9", alt: 'Chanel No 5 iconic perfume bottle on dark background with soft elegant lighting', category: 'Floral' },
{ brand: 'Versace', name: 'Eros EDT 100ml', price: '₦35,000', image: "https://images.unsplash.com/photo-1588680500419-e221b3c15dd6", alt: 'Versace Eros blue perfume bottle with metallic cap on dark background', category: 'Fresh' },
{ brand: 'Armani', name: 'Code Absolu EDP 75ml', price: '₦30,000', image: "https://images.unsplash.com/photo-1704403749538-793bc38c0380", alt: 'Giorgio Armani Code dark fragrance bottle on black surface with ambient glow', category: 'Oriental' },
{ brand: 'Yves Saint Laurent', name: 'La Nuit de L\'Homme EDT', price: '₦38,000', image: "https://images.unsplash.com/photo-1676924873855-a77e7fe40791", alt: 'YSL La Nuit de L Homme dark blue fragrance bottle on black marble', category: 'Oriental' },
{ brand: 'Paco Rabanne', name: '1 Million EDT 100ml', price: '₦32,000', image: "https://images.unsplash.com/photo-1617656517548-ff6e6654386b", alt: 'Paco Rabanne 1 Million gold ingot shaped perfume bottle on dark surface', category: 'Oriental' },
{ brand: 'Bleu de Chanel', name: 'EDP 100ml', price: '₦58,000', image: "https://images.unsplash.com/photo-1704169416769-e7306f310170", alt: 'Bleu de Chanel dark blue fragrance bottle with minimalist design', category: 'Woody' },
{ brand: 'Hugo Boss', name: 'Boss Bottled EDT 100ml', price: '₦25,000', image: "https://images.unsplash.com/photo-1700524033466-9fecd40087ce", alt: 'Hugo Boss Bottled classic masculine fragrance bottle on dark background', category: 'Woody' },
{ brand: 'Burberry', name: 'Her EDP 100ml', price: '₦28,000', image: "https://images.unsplash.com/photo-1618778890589-c8876239fbee", alt: 'Burberry Her floral fragrance bottle with plaid pattern label', category: 'Floral' },
{ brand: 'Gucci', name: 'Guilty Pour Homme EDT', price: '₦42,000', image: "https://images.unsplash.com/photo-1629916632850-213a87957b50", alt: 'Gucci Guilty masculine fragrance bottle with gold lettering on dark background', category: 'Oriental' },
{ brand: 'Dolce & Gabbana', name: 'Light Blue EDT 100ml', price: '₦30,000', image: "https://images.unsplash.com/photo-1675734027187-722a8a3ba0a5", alt: 'Dolce Gabbana Light Blue fresh citrus fragrance bottle on dark marble', category: 'Fresh' },
{ brand: 'Calvin Klein', name: 'CK One EDT 200ml', price: '₦22,000', image: "https://images.unsplash.com/photo-1614003151344-c3a493e9fb0c", alt: 'Calvin Klein CK One unisex minimalist fragrance bottle on dark surface', category: 'Fresh' },
{ brand: 'Lancôme', name: 'La Vie Est Belle EDP', price: '₦45,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15afdfb76-1766473531697.png", alt: 'Lancome La Vie Est Belle floral gourmand fragrance with unique bottle shape', category: 'Floral' },
{ brand: 'Viktor & Rolf', name: 'Flowerbomb EDP 100ml', price: '₦52,000', image: "https://images.unsplash.com/photo-1550427053-c196f62333df", alt: 'Viktor and Rolf Flowerbomb grenade shaped floral fragrance bottle', category: 'Floral' },
{ brand: 'Thierry Mugler', name: 'Angel EDP 100ml', price: '₦40,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f948fb7c-1773159131611.png", alt: 'Thierry Mugler Angel star shaped blue fragrance bottle on dark background', category: 'Oriental' },
{ brand: 'Carolina Herrera', name: 'Good Girl EDP 80ml', price: '₦38,000', image: "https://images.unsplash.com/photo-1720573833444-4c850475dc3a", alt: 'Carolina Herrera Good Girl stiletto heel shaped fragrance bottle', category: 'Oriental' },
{ brand: 'Narciso Rodriguez', name: 'For Her EDP 100ml', price: '₦35,000', image: "https://images.unsplash.com/photo-1643696206473-c0ba81eb5f57", alt: 'Narciso Rodriguez For Her minimalist white fragrance bottle on dark surface', category: 'Floral' },
{ brand: 'Jo Malone', name: 'Wood Sage & Sea Salt', price: '₦55,000', image: "https://images.unsplash.com/photo-1688413580186-fdec38c39553", alt: 'Jo Malone London cream and black cologne bottle with ribbon bow', category: 'Fresh' },
{ brand: 'Maison Margiela', name: 'Replica Jazz Club EDT', price: '₦62,000', image: "https://images.unsplash.com/photo-1677665677775-b249cb633a99", alt: 'Maison Margiela Replica Jazz Club apothecary style fragrance bottle', category: 'Woody' },
{ brand: 'Byredo', name: 'Bal d\'Afrique EDP 100ml', price: '₦75,000', image: "https://images.unsplash.com/photo-1675261977106-3a0566c631df", alt: 'Byredo Bal d Afrique minimalist white fragrance bottle on dark marble', category: 'Floral' },
{ brand: 'Diptyque', name: 'Philosykos EDT 75ml', price: '₦68,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_102244cab-1765962323063.png", alt: 'Diptyque Philosykos oval shaped fragrance bottle with fig leaf illustration', category: 'Woody' },
{ brand: 'Penhaligon\'s', name: 'Halfeti EDP 100ml', price: '₦72,000', image: "https://images.unsplash.com/photo-1673547983806-543b3b8f4e62", alt: 'Penhaligons Halfeti dark rose oud fragrance in bell jar bottle', category: 'Oriental' }];


const categories = ['All', 'Fresh', 'Woody', 'Oriental', 'Floral'];

export default function PerfumesClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allPerfumes?.filter((p) => {
    const matchCat = activeCategory === 'All' || p?.category === activeCategory;
    const matchSearch =
    searchQuery === '' ||
    p?.brand?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    p?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Search */}
      <div className="relative mb-6">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search perfumes or brands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          className="w-full glass-card rounded-xl pl-11 pr-4 py-3.5 text-sm text-foreground placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors duration-300" />
        
      </div>
      {/* Fragrance family filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories?.map((cat) =>
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px] ${
          activeCategory === cat ?
          'bg-primary text-primary-foreground shadow-lg' :
          'glass-card text-muted-foreground hover:text-primary hover:border-primary border border-border'}`
          }
          style={activeCategory === cat ? { boxShadow: '0 0 20px rgba(212,175,55,0.3)' } : {}}>
          
            {cat}
            <span className="ml-1.5 text-xs opacity-70">
              ({cat === 'All' ? allPerfumes?.length : allPerfumes?.filter((p) => p?.category === cat)?.length})
            </span>
          </button>
        )}
      </div>
      {/* Results */}
      <p className="text-muted-foreground text-sm mb-6">
        Showing <span className="text-primary font-semibold">{filtered?.length}</span> fragrances
      </p>
      {filtered?.length === 0 ?
      <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No perfumes found.</p>
          <button
          onClick={() => {setSearchQuery('');setActiveCategory('All');}}
          className="mt-4 text-primary text-sm font-medium hover:underline">
          
            Clear filters
          </button>
        </div> :

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered?.map((p, i) =>
        <div key={i} className="opacity-100">
              <ProductCard {...p} />
            </div>
        )}
        </div>
      }
    </div>);

}

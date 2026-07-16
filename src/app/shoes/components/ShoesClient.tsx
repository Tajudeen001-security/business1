'use client';

import React, { useState } from 'react';
import ProductCard from '@/app/components/ProductCard';

const allShoes = [
{ brand: 'Nike', name: 'Air Force 1 Low', price: '₦45,000', image: "https://images.unsplash.com/photo-1628146286632-09a9d4867cd3", alt: 'Nike Air Force 1 white sneaker on dark background with dramatic side lighting', category: 'Sneakers' },
{ brand: 'Nike', name: 'Air Jordan 1 Retro High', price: '₦65,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_16b15cefd-1772151201773.png", alt: 'Nike Air Jordan 1 Retro High basketball sneaker with colorful leather panels', category: 'Sneakers' },
{ brand: 'Nike', name: 'Air Max 90', price: '₦52,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9d376a4-1772151203101.png", alt: 'Nike Air Max 90 classic running sneaker with visible air unit on dark background', category: 'Sneakers' },
{ brand: 'Adidas', name: 'Ultraboost 23', price: '₦55,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0604d49-1780507078488.png", alt: 'Adidas Ultraboost running shoe with Boost sole on dark surface', category: 'Sneakers' },
{ brand: 'Adidas', name: 'Yeezy Boost 350 V2', price: '₦95,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b73dba6d-1772089505653.png", alt: 'Adidas Yeezy Boost 350 V2 Zebra colorway on dark studio background', category: 'Sneakers' },
{ brand: 'Adidas', name: 'Stan Smith Classic', price: '₦28,000', image: "https://images.unsplash.com/photo-1522764253486-c699f75d8975", alt: 'Adidas Stan Smith classic white leather tennis shoe on dark surface', category: 'Sneakers' },
{ brand: 'Puma', name: 'Suede Classic XXI', price: '₦22,000', image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5", alt: 'Puma Suede Classic sneaker with velvet upper on dark background', category: 'Sneakers' },
{ brand: 'New Balance', name: '990v5 Made in USA', price: '₦78,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1812022c1-1772597270317.png", alt: 'New Balance 990v5 premium grey suede running shoe on dark surface', category: 'Sneakers' },
{ brand: 'Vans', name: 'Old Skool Classic', price: '₦18,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_16636a869-1772107875484.png", alt: 'Vans Old Skool black and white canvas skate shoe on dark background', category: 'Sneakers' },
{ brand: 'Converse', name: 'Chuck Taylor All Star', price: '₦25,000', image: "https://images.unsplash.com/photo-1703193445496-909b5729fc7c", alt: 'Converse Chuck Taylor classic canvas sneaker on dark background', category: 'Sneakers' },
{ brand: 'Converse', name: 'Run Star Hike Platform', price: '₦32,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_16db9dc16-1784195634796.png", alt: 'Converse Run Star Hike platform sneaker with chunky sole on dark surface', category: 'Sneakers' },
{ brand: 'Gucci', name: 'Princetown Leather Loafer', price: '₦180,000', image: "https://images.unsplash.com/photo-1677203232939-f5c8a2e1c1e3", alt: 'Gucci luxury leather loafer with horsebit detail on dark marble surface', category: 'Formal' },
{ brand: 'Gucci', name: 'Ace Embroidered Sneaker', price: '₦145,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1df31ef8f-1783536312705.png", alt: 'Gucci Ace white leather sneaker with embroidered bee and flowers', category: 'Sneakers' },
{ brand: 'Prada', name: 'Derby Lace-Up Brogue', price: '₦220,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15fa41355-1772614918066.png", alt: 'Prada formal derby shoe in black leather with brogue detailing', category: 'Formal' },
{ brand: 'Prada', name: 'Monolith Lug-Sole Boot', price: '₦280,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1480f9f42-1768675131979.png", alt: 'Prada Monolith chunky lug sole leather boot on dark background', category: 'Boots' },
{ brand: 'Louis Vuitton', name: 'Trainer Sneaker', price: '₦320,000', image: "https://images.unsplash.com/photo-1580611519215-e5b704997e2b", alt: 'Louis Vuitton Trainer luxury sneaker with monogram pattern on dark surface', category: 'Sneakers' },
{ brand: 'Balenciaga', name: 'Triple S Sneaker', price: '₦185,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d55774e-1769534501594.png", alt: 'Balenciaga Triple S chunky oversized sneaker with multi-layer sole', category: 'Sneakers' },
{ brand: 'Off-White', name: 'Out Of Office OOO', price: '₦160,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_16864759f-1767139482632.png", alt: 'Off-White Out Of Office sneaker with industrial strap and arrow logo', category: 'Sneakers' },
{ brand: 'Timberland', name: '6-Inch Premium Boot', price: '₦65,000', image: "https://images.unsplash.com/photo-1542834759-4db91f2574d8", alt: 'Timberland wheat nubuck 6-inch waterproof boots on dark textured surface', category: 'Boots' },
{ brand: 'Dr. Martens', name: '1460 Pascal Boot', price: '₦58,000', image: "https://images.unsplash.com/photo-1551111293-20c9c0ae923c", alt: 'Dr Martens 1460 classic black leather lace-up boot with yellow stitching', category: 'Boots' },
{ brand: 'Chelsea Boot', name: 'Zara Premium Suede', price: '₦28,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_154a78944-1772352615685.png", alt: 'Chelsea boot in premium tan suede with elastic side panels on dark background', category: 'Boots' },
{ brand: 'Allen Edmonds', name: 'Park Avenue Oxford', price: '₦95,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc7d79c2-1772221443779.png", alt: 'Allen Edmonds Park Avenue cap-toe oxford in black calf leather', category: 'Formal' },
{ brand: 'Cole Haan', name: 'Grand Atlantic Oxford', price: '₦55,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_13ac44b19-1772221444438.png", alt: 'Cole Haan Grand Atlantic wingtip oxford in tan leather on dark surface', category: 'Formal' },
{ brand: 'Clarks', name: 'Desert Boot', price: '₦35,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9c70439-1765088799335.png", alt: 'Clarks Desert Boot classic chukka in sand suede on dark background', category: 'Casual' },
{ brand: 'ECCO', name: 'Soft 7 Sneaker', price: '₦42,000', image: "https://images.unsplash.com/photo-1617991696989-148892be4164", alt: 'ECCO Soft 7 leather sneaker in white with comfort footbed on dark surface', category: 'Casual' },
{ brand: 'Birkenstock', name: 'Arizona Sandal', price: '₦32,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c44fc414-1774899993968.png", alt: 'Birkenstock Arizona two-strap sandal in tan leather on dark background', category: 'Casual' },
{ brand: 'Salvatore Ferragamo', name: 'Gancini Loafer', price: '₦195,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_13b0bdb51-1772902430172.png", alt: 'Salvatore Ferragamo Gancini bit loafer in black calf leather', category: 'Formal' },
{ brand: 'Tod\'s', name: 'Gommino Driving Shoe', price: '₦148,000', image: "https://images.unsplash.com/photo-1677203232799-90a8fc4ed47f", alt: "Tod\'s Gommino pebble sole driving shoe in tan leather on dark marble", category: 'Casual' },
{ brand: 'Berluti', name: 'Scritto Venezia Loafer', price: '₦380,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e256ac88-1784195635044.png", alt: 'Berluti Scritto hand-patinated leather loafer with calligraphy engravings', category: 'Formal' },
{ brand: 'Church\'s', name: 'Consul Oxford', price: '₦165,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2114a33-1772264617034.png", alt: "Church\'s Consul classic cap-toe oxford in black calf leather", category: 'Formal' }];


const categories = ['All', 'Sneakers', 'Formal', 'Boots', 'Casual'];

export default function ShoesClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allShoes?.filter((s) => {
    const matchCat = activeCategory === 'All' || s?.category === activeCategory;
    const matchSearch =
    searchQuery === '' ||
    s?.brand?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    s?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase());
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
          placeholder="Search shoes or brands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          className="w-full glass-card rounded-xl pl-11 pr-4 py-3.5 text-sm text-foreground placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors duration-300" />
        
      </div>
      {/* Style filters */}
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
              ({cat === 'All' ? allShoes?.length : allShoes?.filter((s) => s?.category === cat)?.length})
            </span>
          </button>
        )}
      </div>
      {/* Results */}
      <p className="text-muted-foreground text-sm mb-6">
        Showing <span className="text-primary font-semibold">{filtered?.length}</span> shoes
      </p>
      {filtered?.length === 0 ?
      <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No shoes found.</p>
          <button
          onClick={() => {setSearchQuery('');setActiveCategory('All');}}
          className="mt-4 text-primary text-sm font-medium hover:underline">
          
            Clear filters
          </button>
        </div> :

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered?.map((s, i) =>
        <div key={i} className="opacity-100">
              <ProductCard {...s} />
            </div>
        )}
        </div>
      }
    </div>);

}

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const categories = [
{
  id: 'watches',
  label: 'Wristwatches',
  emoji: '⌚',
  sublabel: '100+ Premium Brands',
  description: 'From Rolex to Casio — every iconic timepiece brand in one place.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19cea0445-1772795838565.png",
  alt: 'Collection of luxury wristwatches on dark velvet surface, dramatic spotlight lighting, deep shadows',
  href: '/watches',
  count: '100+'
},
{
  id: 'perfumes',
  label: 'Perfumes',
  emoji: '🌸',
  sublabel: 'Luxury Fragrances',
  description: 'Creed, Tom Ford, Dior and the world\'s finest perfume houses.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16a8087b6-1767519450202.png",
  alt: 'Luxury perfume bottles arranged on dark marble, low-key moody studio lighting, deep shadows',
  href: '/perfumes',
  count: '50+'
},
{
  id: 'shoes',
  label: 'Designer Shoes',
  emoji: '👟',
  sublabel: 'Premium Footwear',
  description: 'Nike, Gucci, Prada and top designer shoes for every occasion.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2637a13-1772158027539.png",
  alt: 'Premium designer sneaker on dark studio background with dramatic side lighting and deep shadows',
  href: '/shoes',
  count: '30+'
}];


export default function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-3">
            Browse by Category
          </span>
          <h2 className="font-display text-section-xl font-bold text-foreground">
            What We Carry
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {categories?.map((cat) =>
          <Link
            key={cat?.id}
            href={cat?.href}
            className="group relative overflow-hidden rounded-2xl cursor-pointer category-card-bg glass-card"
            style={{ minHeight: '380px' }}>
            
              <AppImage
              src={cat?.image}
              alt={cat?.alt}
              fill
              className="object-cover opacity-40 group-hover:opacity-60 product-card-img"
              sizes="(max-width: 640px) 100vw, 33vw" />
            
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />

              <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-7" style={{ minHeight: '380px' }}>
                <div className="mb-3">
                  <span className="text-3xl">{cat?.emoji}</span>
                </div>
                <div className="glass-card inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3 w-fit">
                  <span className="text-primary text-xs font-bold">{cat?.count}</span>
                  <span className="text-muted-foreground text-xs">{cat?.sublabel?.replace(/\d+\+\s/, '')}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {cat?.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cat?.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <span>Explore</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="shine-effect" />
            </Link>
          )}
        </div>
      </div>
    </section>);

}

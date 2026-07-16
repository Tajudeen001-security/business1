'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const WHATSAPP_URL = 'https://wa.me/2347019297333';

const heroCards = [
{
  id: 1,
  label: 'Wristwatches',
  sublabel: 'Masa Madre & Fermentation',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa375207-1772227847026.png",
  alt: 'Luxury wristwatch on dark surface with dramatic side lighting, deep shadows, metallic gleam',
  href: '/watches'
},
{
  id: 2,
  label: 'Perfumes',
  sublabel: 'Exclusive Fragrances',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a91a486c-1772984708354.png",
  alt: 'Premium perfume bottle on dark reflective surface, atmospheric low-key lighting, dark moody background',
  href: '/perfumes'
},
{
  id: 3,
  label: 'Shoes',
  sublabel: 'Designer Footwear',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2637a13-1772158027539.png",
  alt: 'Premium designer sneaker on dark studio background with dramatic shadow lighting',
  href: '/shoes'
}];


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const blob1 = hero.querySelector<HTMLElement>('.blob-1');
      const blob2 = hero.querySelector<HTMLElement>('.blob-2');
      if (blob1) {
        blob1.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
      }
      if (blob2) {
        blob2.style.transform = `translate(${x * -20}px, ${y * -15}px)`;
      }
    };
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden noise-overlay">
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Ambient blobs */}
      <div
        className="blob-1 ambient-blob absolute top-[-10%] right-[-5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)', filter: 'blur(60px)', transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)' }} />
      
      <div
        className="blob-2 ambient-blob-2 absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,134,11,0.1) 0%, transparent 70%)', filter: 'blur(80px)', transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)' }} />
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="glass-card inline-flex items-center gap-2.5 px-4 py-2 rounded-full fade-in">
            <span className="w-2 h-2 rounded-full bg-primary shadow-lg" style={{ boxShadow: '0 0 8px rgba(212,175,55,0.8)' }} />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Nigeria's Premier Watch Marketplace
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h1 className="font-display text-hero-xl font-bold text-foreground leading-none mb-4 fade-up">
            Luxury Timepieces
            <br />
            <span className="text-gradient-gold">&amp; More</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed fade-up stagger-2">
            Discover 100+ Premium Watch Brands, Exclusive Perfumes &amp; Designer Shoes — delivered to your doorstep.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 fade-up stagger-3">
          <Link
            href="/watches"
            className="group relative overflow-hidden bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            style={{ boxShadow: '0 0 0 rgba(212,175,55,0)' }}
            onMouseEnter={(e) => {(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(212,175,55,0.5)';}}
            onMouseLeave={(e) => {(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 rgba(212,175,55,0)';}}>
            
            <span className="shine-effect" />
            Shop Watches
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg shadow-green-900/30">
            
            <span className="shine-effect" />
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact on WhatsApp
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-14 fade-up stagger-4">
          {[
          { value: '100+', label: 'Brands' },
          { value: '500+', label: 'Products' },
          { value: 'Fast', label: 'Delivery' },
          { value: '100%', label: 'Authentic' }].
          map((stat, i) =>
          <div key={i} className="flex items-center gap-2 sm:gap-3">
              {i > 0 && <span className="hidden sm:block w-px h-6 bg-border" />}
              <div className="text-center">
                <span className="font-display font-bold text-primary text-lg sm:text-xl">{stat.value}</span>
                <span className="text-muted-foreground text-xs sm:text-sm ml-1.5">{stat.label}</span>
              </div>
            </div>
          )}
        </div>

        {/* Hero Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full">
          {heroCards.map((card, i) =>
          <Link
            key={card.id}
            href={card.href}
            className={`group relative overflow-hidden rounded-2xl glass-card transition-all duration-700 hover:-translate-y-4 cursor-pointer fade-up ${
            i === 1 ? 'sm:-mt-8 sm:h-80' : 'h-64 sm:h-72'}`
            }
            style={{
              animationDelay: `${0.4 + i * 0.15}s`,
              boxShadow: '0 4px 30px rgba(0,0,0,0.4)'
            }}
            onMouseEnter={(e) => {(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.2)';}}
            onMouseLeave={(e) => {(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';}}>
            
              <AppImage
              src={card.image}
              alt={card.alt}
              fill
              className="object-cover opacity-60 group-hover:opacity-90 product-card-img"
              sizes="(max-width: 640px) 100vw, 33vw" />
            
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="gold-line-reveal w-10 h-px bg-primary mb-3" />
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {card.label}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {card.sublabel}
                </p>
              </div>
              <div className="shine-effect" />
            </Link>
          )}
        </div>
      </div>
    </section>);

}

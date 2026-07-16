'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 100, suffix: '+', label: 'Watch Brands' },
  { value: 500, suffix: '+', label: 'Happy Customers' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: 'h', label: 'Fast Delivery' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1800, active);
  return (
    <div className="text-center">
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-gold mb-1">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-xs sm:text-sm uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 relative overflow-hidden border-t border-border">
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-4">
              About Us
            </span>
            <h2 className="font-display text-section-xl font-bold text-foreground mb-6">
              About{' '}
              <span className="text-gradient-gold">Bomatimepieces</span>
            </h2>
            <div
              className="w-16 h-0.5 mb-6"
              style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
            />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              We are Nigeria's premier destination for luxury wristwatches, exclusive perfumes, and designer shoes. With over 100 watch brands in our catalog, we bring the world's finest timepieces to your doorstep.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              Quality, authenticity, and style — that's the Bomatimepieces promise. From Rolex to Casio, from Creed to Armani, every product we carry is carefully sourced and verified for authenticity.
            </p>
            <a
              href="https://wa.me/2347019297333"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm"
            >
              <span className="shine-effect" />
              Get in Touch
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="glass-card rounded-3xl p-8 sm:p-10">
            <div className="grid grid-cols-2 gap-8 sm:gap-10">
              {stats.map((stat, i) => (
                <StatItem key={i} {...stat} active={active} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

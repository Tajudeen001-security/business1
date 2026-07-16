import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import WatchesClient from './components/WatchesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watches — Bomatimepieces | 100+ Premium Watch Brands',
  description: 'Browse 100+ luxury and casual watch brands at Bomatimepieces. Rolex, Omega, Casio, Seiko and more. Order on WhatsApp.',
};

export default function WatchesPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Page Header */}
        <section className="relative py-14 sm:py-20 overflow-hidden border-b border-border">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)' }}
          />
          <div className="absolute inset-0 grid-bg opacity-100" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-3" aria-label="Breadcrumb">
                  <a href="/" className="hover:text-primary transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-foreground">Watches</span>
                </nav>
                <h1 className="font-display text-section-xl font-bold text-foreground mb-2">
                  <span className="text-gradient-gold">Wristwatches</span>
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
                  100+ premium watch brands — from Rolex to Casio. Every iconic timepiece, one destination.
                </p>
              </div>
              <div className="glass-card rounded-2xl px-6 py-4 text-center flex-shrink-0">
                <div className="font-display text-3xl font-bold text-gradient-gold">100+</div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest mt-1">Watch Brands</div>
              </div>
            </div>
          </div>
        </section>

        <WatchesClient />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

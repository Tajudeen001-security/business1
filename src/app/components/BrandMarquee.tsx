import React from 'react';

const brandsRow1 = [
  'Rolex', 'Omega', 'Patek Philippe', 'Audemars Piguet', 'Richard Mille',
  'Cartier', 'IWC', 'Jaeger-LeCoultre', 'Vacheron Constantin', 'Breguet',
  'Blancpain', 'Panerai', 'Breitling', 'TAG Heuer', 'Hublot',
  'Zenith', 'Chopard', 'Girard-Perregaux', 'Ulysse Nardin', 'Longines',
  'Tissot', 'Seiko', 'Citizen', 'Casio', 'G-Shock',
  'Orient', 'Fossil', 'Michael Kors', 'Guess', 'Armani Exchange',
  'Calvin Klein', 'DKNY', 'Diesel', 'Emporio Armani', 'Hugo Boss',
  'Tommy Hilfiger', 'Lacoste', 'Versace', 'Dolce & Gabbana', 'Burberry',
  'Coach', 'Kate Spade', 'Marc Jacobs', 'Movado', 'Bulova',
  'Invicta', 'Stuhrling', 'Vincero', 'MVMT', 'Daniel Wellington',
];

const brandsRow2 = [
  'Cluse', 'Skagen', 'Nordgreen', 'Komono', 'Withings',
  'Garmin', 'Fitbit', 'Apple Watch', 'Samsung Galaxy Watch', 'Huawei Watch',
  'Xiaomi', 'Amazfit', 'Rado', 'Mido', 'Hamilton',
  'Certina', 'Frederique Constant', 'Alpina', 'Ball Watch', 'Oris',
  'Nomos', 'Junghans', 'Sinn', 'Stowa', 'Laco',
  'Archimede', 'Damasko', 'Fortis', 'Hanhart', 'Tutima',
  'Union Glashütte', 'Glashütte Original', 'Moritz Grossmann', 'Wempe', 'Chronoswiss',
  'Eterna', 'Corum', 'Ebel', 'Baume & Mercier', 'Raymond Weil',
  'Perrelet', 'Vulcain', 'Cyma', 'Doxa', 'Milus',
  'Titoni', 'Edox', 'Candino', 'Festina', 'Lotus',
];

export default function BrandMarquee() {
  return (
    <section className="py-12 sm:py-16 overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
          Our Brands
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
          100+ Watch Brands
        </h2>
      </div>
      {/* Row 1 — scrolls left */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex gap-6 brand-scroll" style={{ width: 'max-content' }}>
          {[...brandsRow1, ...brandsRow1]?.map((brand, i) => (
            <div
              key={i}
              className="glass-card flex-shrink-0 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300 whitespace-nowrap cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 brand-scroll-reverse" style={{ width: 'max-content' }}>
          {[...brandsRow2, ...brandsRow2]?.map((brand, i) => (
            <div
              key={i}
              className="glass-card flex-shrink-0 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300 whitespace-nowrap cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

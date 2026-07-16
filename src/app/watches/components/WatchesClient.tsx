'use client';

import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '@/app/components/ProductCard';

const allWatches = [
{ brand: 'Rolex', name: 'Submariner Date', price: '₦850,000', image: "https://images.unsplash.com/photo-1698801426372-ba3628ad034b", alt: 'Rolex Submariner luxury diving watch on dark background with dramatic lighting', category: 'Luxury' },
{ brand: 'Omega', name: 'Seamaster 300M', price: '₦420,000', image: "https://images.unsplash.com/photo-1691865179028-1729b766a5cd", alt: 'Omega Seamaster professional watch with blue dial on dark surface', category: 'Luxury' },
{ brand: 'Patek Philippe', name: 'Calatrava 5196', price: '₦1,200,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1080daceb-1772938929051.png", alt: 'Patek Philippe Calatrava dress watch with white dial on dark background', category: 'Luxury' },
{ brand: 'Audemars Piguet', name: 'Royal Oak 15500', price: '₦1,500,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd4fd344-1764701993476.png", alt: 'Audemars Piguet Royal Oak iconic octagonal case sports watch', category: 'Luxury' },
{ brand: 'Hublot', name: 'Big Bang Unico', price: '₦650,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2e1b8fb-1779377626646.png", alt: 'Hublot Big Bang luxury watch with rubber strap on dark background', category: 'Luxury' },
{ brand: 'TAG Heuer', name: 'Carrera Chronograph', price: '₦280,000', image: "https://images.unsplash.com/photo-1561038320-8d32ac5541c0", alt: 'TAG Heuer Carrera chronograph sports watch with dark dial', category: 'Sport' },
{ brand: 'Breitling', name: 'Navitimer B01', price: '₦380,000', image: "https://images.unsplash.com/photo-1600003014608-c2ccc1570a65", alt: 'Breitling Navitimer aviation chronograph watch with black dial', category: 'Sport' },
{ brand: 'IWC', name: 'Pilot Chronograph', price: '₦320,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cae9fffc-1772166044397.png", alt: 'IWC Pilot watch with black dial and leather strap on dark surface', category: 'Sport' },
{ brand: 'Panerai', name: 'Luminor Marina', price: '₦350,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8d56250-1782513163828.png", alt: 'Panerai Luminor Marina cushion case diving watch on dark background', category: 'Sport' },
{ brand: 'Longines', name: 'Master Collection', price: '₦120,000', image: "https://images.unsplash.com/photo-1539016865795-f4ea82ee856c", alt: 'Longines Master Collection elegant dress watch with silver dial', category: 'Classic' },
{ brand: 'Tissot', name: 'PRX Powermatic 80', price: '₦95,000', image: "https://images.unsplash.com/photo-1669964306667-e88cb64e1578", alt: 'Tissot PRX integrated bracelet watch with silver dial on dark surface', category: 'Classic' },
{ brand: 'Seiko', name: 'Presage Cocktail', price: '₦85,000', image: "https://images.unsplash.com/photo-1705468529750-6b6800e1ba1a", alt: 'Seiko Presage dress watch with iridescent dial on dark background', category: 'Classic' },
{ brand: 'Hamilton', name: 'Khaki Field Auto', price: '₦75,000', image: "https://images.unsplash.com/photo-1539771433462-611c875fae35", alt: 'Hamilton Khaki Field military style watch with green dial on dark surface', category: 'Classic' },
{ brand: 'Citizen', name: 'Eco-Drive Promaster', price: '₦55,000', image: "https://images.unsplash.com/photo-1607850479301-790333f2e4cd", alt: 'Citizen Eco-Drive diver watch with blue dial on dark background', category: 'Classic' },
{ brand: 'Casio', name: 'G-Shock GA-2100', price: '₦45,000', image: "https://images.unsplash.com/photo-1734776579769-4fbfcdd12b6a", alt: 'Casio G-Shock digital sports watch with black case on dark surface', category: 'Casual' },
{ brand: 'Casio', name: 'Edifice EFR-556', price: '₦35,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15ec9883b-1768227499655.png", alt: 'Casio Edifice solar powered sports chronograph watch', category: 'Casual' },
{ brand: 'Fossil', name: 'Grant Chronograph', price: '₦32,000', image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6", alt: 'Fossil Grant vintage style chronograph watch with brown leather strap', category: 'Casual' },
{ brand: 'Michael Kors', name: 'Runway Slim', price: '₦28,000', image: "https://images.unsplash.com/photo-1709101051601-5cee6a1ff5fe", alt: 'Michael Kors fashion watch with gold tone case on dark background', category: 'Casual' },
{ brand: 'Daniel Wellington', name: 'Classic Sheffield', price: '₦35,000', image: "https://images.unsplash.com/photo-1531939130334-23dcf689f429", alt: 'Daniel Wellington minimalist watch with leather strap on dark surface', category: 'Casual' },
{ brand: 'MVMT', name: 'Chrono 45mm', price: '₦22,000', image: "https://images.unsplash.com/photo-1575845321082-53eb3a76db9e", alt: 'MVMT minimalist chronograph watch with brown leather strap on dark surface', category: 'Casual' },
{ brand: 'Emporio Armani', name: 'AR11338', price: '₦38,000', image: "https://images.unsplash.com/photo-1602753058882-b88b42be1cc7", alt: 'Emporio Armani fashion watch with black dial and stainless steel bracelet', category: 'Casual' },
{ brand: 'Hugo Boss', name: 'Champion Chrono', price: '₦42,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_192325532-1764906506041.png", alt: 'Hugo Boss Champion chronograph watch with dark dial on dark background', category: 'Casual' },
{ brand: 'Tommy Hilfiger', name: 'Blake Multifunction', price: '₦26,000', image: "https://images.unsplash.com/photo-1598640877587-bd8f35df4021", alt: 'Tommy Hilfiger Blake multifunction watch with blue dial and leather strap', category: 'Casual' },
{ brand: 'Versace', name: 'V-Palazzo', price: '₦65,000', image: "https://images.unsplash.com/photo-1633120527309-4afa7eb661f6", alt: 'Versace V-Palazzo luxury fashion watch with gold and black design', category: 'Casual' },
{ brand: 'Guess', name: 'Frontier GW0496G1', price: '₦18,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2fdd95d-1772808745086.png", alt: 'Guess Frontier sports watch with black dial and rubber strap', category: 'Casual' },
{ brand: 'Calvin Klein', name: 'Minimal K3M211', price: '₦20,000', image: "https://images.unsplash.com/photo-1582121757128-252a7f88f7a2", alt: 'Calvin Klein minimalist watch with white dial and leather strap', category: 'Casual' },
{ brand: 'Armani Exchange', name: 'AX2702', price: '₦22,000', image: "https://images.unsplash.com/photo-1602753058882-b88b42be1cc7", alt: 'Armani Exchange fashion watch with black dial and stainless steel case', category: 'Casual' },
{ brand: 'Lacoste', name: 'Cannes 2011199', price: '₦19,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_18706df96-1772612190143.png", alt: 'Lacoste Cannes sport watch with green and white silicone strap', category: 'Casual' },
{ brand: 'Diesel', name: 'Mega Chief DZ4318', price: '₦24,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e35df1ae-1783849448548.png", alt: 'Diesel Mega Chief oversized chronograph watch with black dial', category: 'Casual' },
{ brand: 'DKNY', name: 'Soho NY2788', price: '₦21,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1463ccfe3-1783515724874.png", alt: 'DKNY Soho fashion watch with rose gold case and white dial', category: 'Casual' },
{ brand: 'Movado', name: 'Museum Classic', price: '₦85,000', image: "https://images.unsplash.com/photo-1587920347544-899378dd7506", alt: 'Movado Museum Classic minimalist watch with black dial and single gold dot', category: 'Classic' },
{ brand: 'Bulova', name: 'Precisionist 98B229', price: '₦45,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_19999371a-1784195636549.png", alt: 'Bulova Precisionist high frequency quartz watch with blue dial', category: 'Classic' },
{ brand: 'Invicta', name: 'Pro Diver 8926OB', price: '₦15,000', image: "https://images.unsplash.com/photo-1476118337194-9fe0db375830", alt: 'Invicta Pro Diver automatic watch with gold case and black dial', category: 'Sport' },
{ brand: 'Orient', name: 'Mako II Diver', price: '₦28,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b85155d3-1772558450014.png", alt: 'Orient Mako II automatic diving watch with blue dial and bracelet', category: 'Sport' },
{ brand: 'Rado', name: 'True Thinline', price: '₦180,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac6e5978-1772819152859.png", alt: 'Rado True Thinline ultra-thin ceramic watch with white dial', category: 'Luxury' },
{ brand: 'Mido', name: 'Commander Gradient', price: '₦65,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_146a71ef3-1784195636617.png", alt: 'Mido Commander Gradient automatic watch with gradient blue dial', category: 'Classic' },
{ brand: 'Frederique Constant', name: 'Classics Auto', price: '₦95,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_104e79f5c-1778566781513.png", alt: 'Frederique Constant Classics automatic dress watch with silver dial', category: 'Classic' },
{ brand: 'Oris', name: 'Aquis Date 43.5', price: '₦120,000', image: "https://images.unsplash.com/photo-1561087700-3989ca63b6ca", alt: 'Oris Aquis diving watch with blue dial and rubber strap', category: 'Sport' },
{ brand: 'Ball Watch', name: 'Engineer III', price: '₦150,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_136542f7c-1784195636527.png", alt: 'Ball Watch Engineer III robust automatic watch with tritium illumination', category: 'Sport' },
{ brand: 'Nomos', name: 'Tangente 38', price: '₦140,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c5ec8e9-1784195636578.png", alt: 'Nomos Tangente minimalist Bauhaus design watch with white dial', category: 'Classic' },
{ brand: 'Junghans', name: 'Max Bill Automatic', price: '₦85,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_19a201f69-1784195636502.png", alt: 'Junghans Max Bill Bauhaus design automatic watch with white dial', category: 'Classic' },
{ brand: 'Sinn', name: 'EZM 1.1', price: '₦160,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1508cba2b-1777626040080.png", alt: 'Sinn EZM professional diving watch with black dial and rubber strap', category: 'Sport' },
{ brand: 'Glashütte Original', name: 'Senator Excellence', price: '₦650,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_19ec32429-1784195636635.png", alt: 'Glashutte Original Senator Excellence luxury German dress watch', category: 'Luxury' },
{ brand: 'Zenith', name: 'El Primero Chrono', price: '₦280,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1debf678a-1772224499048.png", alt: 'Zenith El Primero high-frequency chronograph watch with tri-color dial', category: 'Luxury' },
{ brand: 'Chopard', name: 'Happy Sport 36', price: '₦420,000', image: "https://images.unsplash.com/photo-1539016865795-f4ea82ee856c", alt: 'Chopard Happy Sport watch with floating diamonds on white dial', category: 'Luxury' },
{ brand: 'Girard-Perregaux', name: 'Laureato 38', price: '₦380,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_132256b64-1772431997714.png", alt: 'Girard-Perregaux Laureato integrated bracelet luxury watch', category: 'Luxury' },
{ brand: 'Ulysse Nardin', name: 'Marine Chronometer', price: '₦450,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc92aa0f-1784195636508.png", alt: 'Ulysse Nardin Marine Chronometer nautical inspired luxury watch', category: 'Luxury' },
{ brand: 'Baume & Mercier', name: 'Clifton Baumatic', price: '₦120,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_112420ccc-1784195636533.png", alt: 'Baume Mercier Clifton Baumatic classic dress watch with silver dial', category: 'Classic' },
{ brand: 'Raymond Weil', name: 'Freelancer Auto', price: '₦75,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_19cb4fab8-1766828227762.png", alt: 'Raymond Weil Freelancer automatic watch with skeleton dial', category: 'Classic' },
{ brand: 'Ebel', name: 'Sport Wave', price: '₦65,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_18220d2da-1767875093187.png", alt: 'Ebel Sport Wave watch with wave-pattern bracelet and blue dial', category: 'Sport' },
{ brand: 'Corum', name: 'Admiral 45', price: '₦180,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f43ebc35-1784195636457.png", alt: 'Corum Admiral nautical design watch with porthole case', category: 'Luxury' },
{ brand: 'Fortis', name: 'Official Cosmonauts', price: '₦95,000', image: "https://images.unsplash.com/photo-1704782709398-b41f86135e4a", alt: 'Fortis Official Cosmonauts automatic watch with black dial', category: 'Sport' },
{ brand: 'Doxa', name: 'SUB 300 Caribbean', price: '₦85,000', image: "https://images.unsplash.com/photo-1637587510635-aef372f5e576", alt: 'Doxa Sub 300 diving watch with orange dial and rubber strap', category: 'Sport' },
{ brand: 'Eterna', name: 'KonTiki Diver', price: '₦70,000', image: "https://images.unsplash.com/photo-1561087700-3989ca63b6ca", alt: 'Eterna KonTiki diving watch with blue dial and bracelet', category: 'Sport' },
{ brand: 'Edox', name: 'Chronoffshore-1', price: '₦55,000', image: "https://images.unsplash.com/photo-1605896998884-8c4e48284a02", alt: 'Edox Chronoffshore-1 diving chronograph watch with dark dial', category: 'Sport' },
{ brand: 'Festina', name: 'Chrono Bike', price: '₦15,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_16b3b3a7b-1784195636602.png", alt: 'Festina Chrono Bike sports chronograph watch with rubber strap', category: 'Casual' },
{ brand: 'Candino', name: 'C4615 Elegance', price: '₦18,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_192548563-1784195636648.png", alt: 'Candino Elegance quartz watch with white dial and leather strap', category: 'Casual' },
{ brand: 'Skagen', name: 'Ancher SKW6007', price: '₦16,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_13744ec60-1784195636619.png", alt: 'Skagen Ancher slim minimalist Danish design watch with mesh bracelet', category: 'Casual' },
{ brand: 'Nordgreen', name: 'Pioneer Chrono', price: '₦22,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_17d834542-1784195636549.png", alt: 'Nordgreen Pioneer Scandinavian design chronograph watch with white dial', category: 'Casual' },
{ brand: 'Vincero', name: 'Chrono S 40mm', price: '₦25,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be97161c-1784135740294.png", alt: 'Vincero Chrono S chronograph watch with marble dial and leather strap', category: 'Casual' },
{ brand: 'Cluse', name: 'La Bohème CW0101201', price: '₦14,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_14d88bd0d-1778855069945.png", alt: 'Cluse La Boheme rose gold minimalist watch with leather strap', category: 'Casual' },
{ brand: 'Komono', name: 'Winston Royale', price: '₦12,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1377e7f1a-1784195636606.png", alt: 'Komono Winston Royale Belgian design watch with colorful dial', category: 'Casual' },
{ brand: 'Garmin', name: 'Fenix 7 Pro', price: '₦180,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc52244a-1772282555800.png", alt: 'Garmin Fenix 7 Pro multisport GPS smartwatch with sapphire lens', category: 'Smart' },
{ brand: 'Apple Watch', name: 'Series 9 45mm', price: '₦220,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd51548c-1764641911784.png", alt: 'Apple Watch Series 9 smartwatch with always-on display on dark background', category: 'Smart' },
{ brand: 'Samsung', name: 'Galaxy Watch 6 Classic', price: '₦160,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_134dd0637-1764767387111.png", alt: 'Samsung Galaxy Watch 6 Classic smartwatch with rotating bezel on dark surface', category: 'Smart' },
{ brand: 'Huawei', name: 'Watch GT 4 Pro', price: '₦85,000', image: "https://images.unsplash.com/photo-1680810897121-2134caa3bda2", alt: 'Huawei Watch GT 4 Pro smartwatch with titanium case on dark background', category: 'Smart' },
{ brand: 'Amazfit', name: 'GTR 4 Smartwatch', price: '₦45,000', image: "https://images.unsplash.com/photo-1683714152903-a17197c2347c", alt: 'Amazfit GTR 4 smartwatch with AMOLED display on dark surface', category: 'Smart' },
{ brand: 'Xiaomi', name: 'Watch S3 Pro', price: '₦35,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc52244a-1772282555800.png", alt: 'Xiaomi Watch S3 Pro smartwatch with sapphire glass on dark background', category: 'Smart' },
{ brand: 'Withings', name: 'ScanWatch 2', price: '₦95,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f3357f6-1784195636533.png", alt: 'Withings ScanWatch hybrid smartwatch with analog hands and health sensors', category: 'Smart' },
{ brand: 'Stuhrling', name: 'Legacy 127', price: '₦18,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_132c3c219-1780558131623.png", alt: 'Stuhrling Legacy skeleton automatic watch with exposed movement', category: 'Classic' },
{ brand: 'Alpina', name: 'Startimer Pilot Auto', price: '₦110,000', image: "https://images.unsplash.com/photo-1629551233896-f119552a5011", alt: 'Alpina Startimer Pilot automatic watch with black dial and leather strap', category: 'Sport' },
{ brand: 'Certina', name: 'DS Action Diver', price: '₦58,000', image: "https://images.unsplash.com/photo-1605896998884-8c4e48284a02", alt: 'Certina DS Action Diver watch with blue dial and rubber strap', category: 'Sport' },
{ brand: 'Titoni', name: 'Airmaster Automatic', price: '₦48,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_14445dd6f-1784195636415.png", alt: 'Titoni Airmaster automatic watch with silver dial and bracelet', category: 'Classic' },
{ brand: 'Perrelet', name: 'Turbine Pilot', price: '₦220,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1e6a879-1784195636605.png", alt: 'Perrelet Turbine Pilot watch with rotating turbine visible through dial', category: 'Luxury' },
{ brand: 'Vulcain', name: 'Cricket Alarm', price: '₦180,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c7003219-1765095013564.png", alt: 'Vulcain Cricket mechanical alarm watch with gold case', category: 'Luxury' },
{ brand: 'Chronoswiss', name: 'Open Gear ReSec', price: '₦240,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac128b60-1767391004754.png", alt: 'Chronoswiss Open Gear skeleton watch with visible movement', category: 'Luxury' },
{ brand: 'Hanhart', name: 'Pioneer TachyTele', price: '₦130,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_130f4bc2f-1772166043337.png", alt: 'Hanhart Pioneer TachyTele pilot chronograph watch with black dial', category: 'Sport' },
{ brand: 'Kate Spade', name: 'Metro KSW1156', price: '₦16,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1da4d90b3-1784195636630.png", alt: 'Kate Spade Metro fashion watch with blush dial and leather strap', category: 'Casual' },
{ brand: 'Marc Jacobs', name: 'Henry MJ1561', price: '₦18,500', image: "https://images.unsplash.com/photo-1546118729-b9a3e4812724", alt: 'Marc Jacobs Henry minimal watch with silver case and leather strap', category: 'Casual' },
{ brand: 'Dolce & Gabbana', name: 'DW0144', price: '₦55,000', image: "https://images.unsplash.com/photo-1587304947051-13e7825a0f89", alt: 'Dolce and Gabbana luxury fashion watch with gold tone case', category: 'Casual' },
{ brand: 'Burberry', name: 'The City BU9001', price: '₦48,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1393d2dfb-1771324279213.png", alt: 'Burberry The City classic watch with check pattern dial and leather strap', category: 'Classic' },
{ brand: 'Coach', name: 'Delancey 14502394', price: '₦22,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f459bd53-1766852584565.png", alt: 'Coach Delancey fashion watch with gold case and leather strap', category: 'Casual' },
{ brand: 'Lotus', name: 'Lotus Sport 15778', price: '₦12,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c5cd005-1772282083634.png", alt: 'Lotus Sport casual watch with colorful dial and rubber strap', category: 'Casual' },
{ brand: 'Calypso', name: 'Digital K5740', price: '₦9,000', image: "https://img.rocket.new/generatedImages/rocket_gen_img_124d1adb3-1771884023417.png", alt: 'Calypso digital sport watch with LCD display and rubber strap', category: 'Casual' }];


const categories = ['All', 'Luxury', 'Sport', 'Classic', 'Casual', 'Smart'];

export default function WatchesClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(24);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = document.querySelectorAll('.watch-card-animate');
    cards?.forEach((card) => observer?.observe(card));
    return () => observer?.disconnect();
  }, [activeCategory, searchQuery]);

  const filtered = allWatches?.filter((w) => {
    const matchCat = activeCategory === 'All' || w?.category === activeCategory;
    const matchSearch =
    searchQuery === '' ||
    w?.brand?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    w?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    return matchCat && matchSearch;
  });

  const visible = filtered?.slice(0, visibleCount);

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
          placeholder="Search brands or models..."
          value={searchQuery}
          onChange={(e) => {setSearchQuery(e?.target?.value);setVisibleCount(24);}}
          className="w-full glass-card rounded-xl pl-11 pr-4 py-3.5 text-sm text-foreground placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors duration-300" />
        
      </div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories?.map((cat) =>
        <button
          key={cat}
          onClick={() => {setActiveCategory(cat);setVisibleCount(24);}}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px] ${
          activeCategory === cat ?
          'bg-primary text-primary-foreground shadow-lg' :
          'glass-card text-muted-foreground hover:text-primary hover:border-primary border border-border'}`
          }
          style={activeCategory === cat ? { boxShadow: '0 0 20px rgba(212,175,55,0.3)' } : {}}>
          
            {cat}
            <span className="ml-1.5 text-xs opacity-70">
              ({cat === 'All' ? allWatches?.length : allWatches?.filter((w) => w?.category === cat)?.length})
            </span>
          </button>
        )}
      </div>
      {/* Results count */}
      <p className="text-muted-foreground text-sm mb-6">
        Showing <span className="text-primary font-semibold">{Math.min(visibleCount, filtered?.length)}</span> of{' '}
        <span className="text-foreground font-semibold">{filtered?.length}</span> watches
      </p>
      {/* Grid */}
      {filtered?.length === 0 ?
      <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No watches found for your search.</p>
          <button
          onClick={() => {setSearchQuery('');setActiveCategory('All');}}
          className="mt-4 text-primary text-sm font-medium hover:underline">
          
            Clear filters
          </button>
        </div> :

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {visible?.map((w, i) =>
        <div
          key={`${w?.brand}-${w?.name}-${i}`}
          className="watch-card-animate opacity-100"
          style={{ transitionDelay: `${i % 8 * 50}ms` }}>
          
              <ProductCard {...w} />
            </div>
        )}
        </div>
      }
      {/* Load more */}
      {visibleCount < filtered?.length &&
      <div className="text-center mt-10">
          <button
          onClick={() => setVisibleCount((v) => v + 24)}
          className="group relative overflow-hidden glass-card border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm">
          
            <span className="shine-effect" />
            Load More Watches ({filtered?.length - visibleCount} remaining)
          </button>
        </div>
      }
    </div>);

}
<br />;

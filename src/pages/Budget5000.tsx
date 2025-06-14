
import React from 'react';
import { Crown } from 'lucide-react';
import BudgetPageLayout from '@/components/BudgetPageLayout';
import ScrollReveal from '@/components/ScrollReveal';

const Budget5000 = () => {
  const config = {
    id: 'budget-5000',
    name: "L'ULTIME PC GAMER 2025",
    price: '5000€',
    budget: '5000€',
    idealFor: "Le summum absolu. 4K Ultra à des FPS extrêmes, avec une esthétique et des composants de luxe.",
    image: 'https://www.asus.com/microsite/motherboard/make-your-dream-pc-a-reality/fr/v1/img/sleeker/1.jpg',
    youtubeUrl: 'https://www.youtube.com/results?search_query=RTX+5090+%2B+Ryzen+9+9950X3D+gaming+benchmark+2025',
    topAchatUrl: 'https://www.topachat.com/pages/configomatic/54f6fb22-cf95-45bb-ad64-c87c1893e8c8',
    components: {
      cpu: 'AMD Ryzen 9 9950X3D (~830 €)',
      cooling: 'Asus ROG STRIX LC III 360 ARGB LCD (~250 €)',
      gpu: 'NVIDIA GeForce RTX 5090 (~2550 €)',
      ram: '32 Go DDR5 6000MHz CL30 (~153 €)',
      storage: '2 To Crucial T700 PCIe 5.0 (~220 €)',
      motherboard: 'MSI MPG X670E CARBON WIFI (~480 €)',
      psu: 'be quiet! Straight Power 12 1200W (~250 €)',
      case: 'NZXT H9 Elite (~230 €)'
    },
    performances: [
      { game: 'Cyberpunk 2077 (4K Ultra)', fps: '140-160 FPS' },
      { game: 'Baldur\'s Gate 3 (4K Ultra)', fps: '160-180 FPS' },
      { game: 'God of War: Ragnarök (4K Ultra)', fps: '150-170 FPS' },
      { game: 'Valorant (4K, Ultra)', fps: '500+ FPS' },
      { game: 'Fortnite (4K, Ultra)', fps: '240+ FPS' },
      { game: 'Call of Duty: Warzone (4K Ultra)', fps: '180-220 FPS' }
    ],
    notes: "Prix total : ~4963 €. Configuration ultime sans regard sur le prix. Meilleur processeur, RTX 5090, et composants de prestige avec écran LCD watercooling et boîtier aquarium. Machine et objet d'art.",
    highlights: ['RTX 5090', '4K Gaming', 'Watercooling', '180 FPS moyen']
  };

  const customBadge = {
    text: 'ULTIME',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
    icon: <Crown className="h-3 w-3 mr-1" />
  };

  return (
    <ScrollReveal>
      <BudgetPageLayout config={config} customBadge={customBadge} />
    </ScrollReveal>
  );
};

export default Budget5000;

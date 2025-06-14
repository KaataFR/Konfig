
import React from 'react';
import { Star } from 'lucide-react';
import BudgetPageLayout from '@/components/BudgetPageLayout';
import ScrollReveal from '@/components/ScrollReveal';

const Budget2000 = () => {
  const config = {
    id: 'budget-2000',
    name: "L'EXPÉRIENCE GAMING DE LUXE",
    price: '2000€',
    budget: '2000€',
    idealFor: "Dominer le 1440p à très haute fréquence (240Hz) et jouer très confortablement en 4K.",
    image: 'https://in.aorus.com/upload/Product/F_202303281146788WF11152.JPG',
    youtubeUrl: 'https://www.youtube.com/results?search_query=RX+9070+XT+%2B+Ryzen+7+7800X3D+gaming+benchmark+2025',
    topAchatUrl: 'https://www.topachat.com/pages/configomatic/60b6c993-7bc2-4820-bf3f-4b77e85a1208',
    components: {
      cpu: 'AMD Ryzen 7 7800X3D (~450 €)',
      cooling: 'Thermalright Phantom Spirit 120 EVO (~75 €)',
      gpu: 'AMD Radeon RX 9070 XT (~750 €)',
      ram: '32 Go DDR5 6000MHz CL30 (~150 €)',
      storage: '2 To Kingston KC3000 NVMe (~160 €)',
      motherboard: 'ASUS TUF GAMING B650M-E WIFI (~200 €)',
      psu: 'MSI MAG A850GL PCIE5 850W (~120 €)',
      case: 'Corsair 4000D Airflow (~110 €)'
    },
    performances: [
      { game: 'Cyberpunk 2077 (1440p Ultra)', fps: '140-160 FPS' },
      { game: 'Cyberpunk 2077 (4K Ultra)', fps: '70-80 FPS' },
      { game: 'Baldur\'s Gate 3 (1440p Ultra)', fps: '160-180 FPS' },
      { game: 'God of War: Ragnarök (1440p Ultra)', fps: '150-170 FPS' },
      { game: 'Valorant (1440p, Ultra)', fps: '400+ FPS' },
      { game: 'Fortnite (1440p, Ultra)', fps: '240+ FPS' },
      { game: 'Call of Duty: Warzone (1440p Ultra)', fps: '180-200 FPS' }
    ],
    notes: " (MAJ : 14/06/2025) - Prix total : ~2015 €. Le 7800X3D roi du gaming associé à une carte graphique nouvelle génération très puissante. Double capacité SSD et composants de haute qualité sans compromis.",
    highlights: ['RX 9070 XT', '1440p/4K Gaming', 'Ventirad', '160 FPS moyen']
  };

  const customBadge = {
    text: 'Gaming Luxe',
    color: 'bg-purple-500 text-purple-50',
    icon: <Star className="h-3 w-3 mr-1" />
  };

  return (
    <ScrollReveal>
      <BudgetPageLayout config={config} customBadge={customBadge} />
    </ScrollReveal>
  );
};

export default Budget2000;

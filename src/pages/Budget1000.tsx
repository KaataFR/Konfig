
import React from 'react';
import { TrendingUp } from 'lucide-react';
import BudgetPageLayout from '@/components/BudgetPageLayout';
import ScrollReveal from '@/components/ScrollReveal';

const Budget1000 = () => {
  const config = {
    id: 'budget-1000',
    name: "LE SAUT VERS LA MODERNITÉ",
    price: '1000€',
    budget: '1000€',
    idealFor: "L'excellence en 1080p à très haute fréquence (144Hz+) et une excellente entrée en matière pour le 1440p.",
    image: 'https://www.pcworld.com/wp-content/uploads/2025/04/600-Euro-Gaming-PC.jpg?quality=50&strip=all',
    youtubeUrl: 'https://www.youtube.com/results?search_query=RX+7700+XT+%2B+Ryzen+5+7600+gaming+benchmark+2025',
    topAchatUrl: 'https://www.topachat.com/pages/configomatic/95fbcdf7-48e7-4d7d-b384-15f87de7274d',
    components: {
      cpu: 'AMD Ryzen 5 7600 (~195 €)',
      cooling: 'Thermalright Phantom Spirit 120 SE (~40 €)',
      gpu: 'AMD Radeon RX 7700 XT (~380 €)',
      ram: '32 Go DDR5 6000MHz CL30 (~115 €)',
      storage: '1 To NVMe PCIe 4.0 (~75 €)',
      motherboard: 'Gigabyte B650M Gaming X (~140 €)',
      psu: '650W 80+ Bronze (~70 €)',
      case: 'Corsair 3000D Airflow (~100 €)'
    },
    performances: [
      { game: 'Cyberpunk 2077 (1080p Ultra)', fps: '90-100 FPS' },
      { game: 'Baldur\'s Gate 3 (1080p Ultra)', fps: '100-110 FPS' },
      { game: 'God of War: Ragnarök (1080p Ultra)', fps: '110-120 FPS' },
      { game: 'Valorant (1080p, Ultra)', fps: '300+ FPS' },
      { game: 'Fortnite (1080p, Ultra)', fps: '144+ FPS' },
      { game: 'Call of Duty: Warzone (1080p Ultra)', fps: '120-140 FPS' },
      { game: 'Elden Ring (1080p Ultra)', fps: '60 FPS' }
    ],
    notes: "Prix total : ~1075 €. Passage sur la plateforme moderne AM5 avec DDR5. Investissement pour l'avenir avec de meilleures performances de base et une excellente évolutivité.",
    highlights: ['RX 7700 XT', '1080p/1440p', 'Ventirad', '120 FPS moyen']
  };

  const customBadge = {
    text: 'Populaire',
    color: 'bg-green-500 text-green-50',
    icon: <TrendingUp className="h-3 w-3 mr-1" />
  };

  return (
    <ScrollReveal>
      <BudgetPageLayout config={config} customBadge={customBadge} />
    </ScrollReveal>
  );
};

export default Budget1000;


import React from 'react';
import { Star } from 'lucide-react';
import BudgetPageLayout from '@/components/BudgetPageLayout';
import ScrollReveal from '@/components/ScrollReveal';

const Budget1500 = () => {
  const config = {
    id: 'budget-1500',
    name: "LE ROI DU 1440P",
    price: '1500€',
    budget: '1500€',
    idealFor: "Jouer à tous les jeux en 1440p Ultra à haute fréquence (144Hz+) sans aucun compromis.",
    image: 'https://static.digit.in/MSI-DIY-PC-Build-2024-Opening.jpg',
    youtubeUrl: 'https://www.youtube.com/results?search_query=RX+7800+XT+%2B+Ryzen+5+9600X+gaming+benchmark+2025',
    topAchatUrl: 'https://www.topachat.com/pages/configomatic/42bafafd-6f92-49fa-b86a-8aa9370f78d2',
    components: {
      cpu: 'AMD Ryzen 5 9600X (~250 €)',
      cooling: 'Thermalright Phantom Spirit 120 SE (~42 €)',
      gpu: 'AMD Radeon RX 7800 XT (~600 €)',
      ram: '32 Go DDR5 6000MHz CL30 (~135 €)',
      storage: '1 To Kingston KC3000 NVMe (~85 €)',
      motherboard: 'MSI PRO B650-S WIFI (~155 €)',
      psu: 'be quiet! Pure Power 12 M 750W (~125 €)',
      case: 'Corsair 4000D Airflow (~110 €)'
    },
    performances: [
      { game: 'Cyberpunk 2077 (1440p Ultra)', fps: '100-110 FPS' },
      { game: 'Baldur\'s Gate 3 (1440p Ultra)', fps: '120-130 FPS' },
      { game: 'God of War: Ragnarök (1440p Ultra)', fps: '110-120 FPS' },
      { game: 'Valorant (1440p, Ultra)', fps: '300+ FPS' },
      { game: 'Fortnite (1440p, Ultra)', fps: '180-200 FPS' },
      { game: 'Call of Duty: Warzone (1440p Ultra)', fps: '130-150 FPS' },
      { game: 'Elden Ring (1440p Ultra)', fps: '60 FPS' }
    ],
    notes: " (MAJ : 14/06/2025) - Prix total : ~1502 €. Entrée dans le haut de gamme avec processeur nouvelle génération et carte graphique très puissante pour le 1440p. Composants de haute qualité pour performance, silence et fiabilité.",
    highlights: ['RX 7800 XT', '1440p Gaming', 'Ventirad', '140 FPS moyen']
  };

  const customBadge = {
    text: 'Recommandée',
    color: 'bg-amber-500 text-amber-950',
    icon: <Star className="h-3 w-3 mr-1" />
  };

  return (
    <ScrollReveal>
      <BudgetPageLayout config={config} customBadge={customBadge} />
    </ScrollReveal>
  );
};

export default Budget1500;

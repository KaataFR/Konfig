
import React from 'react';
import { TrendingUp } from 'lucide-react';
import BudgetPageLayout from '@/components/BudgetPageLayout';
import ScrollReveal from '@/components/ScrollReveal';

const Budget800 = () => {
  const config = {
    id: 'budget-800',
    name: "LA PORTE D'ENTRÉE INTELLIGENTE",
    price: '800€',
    budget: '800€',
    idealFor: "Jouer à tous les jeux en 1080p avec des réglages Élevés/Ultra à 60 FPS et plus.",
    image: 'https://h3v2h5f6.delivery.rocketcdn.me/wp-content/uploads/2021/03/configuration-pc-gaming-1080p.jpg',
    youtubeUrl: 'https://www.youtube.com/results?search_query=RTX+5060+%2B+Ryzen+5+5600+gaming+benchmark+2025',
    topAchatUrl: 'https://www.topachat.com/pages/configomatic/65e00e53-7eed-4861-80f6-159d2b1fe8f4',
    components: {
      cpu: 'AMD Ryzen 5 5600 (~125 €)',
      cooling: 'AMD Wraith Stealth (inclus avec le CPU)',
      gpu: 'NVIDIA GeForce RTX 5060 (~300 €)',
      ram: '16 Go DDR4 3600MHz CL18 (~55 €)',
      storage: '1 To SSD Kingston NV2 (~65 €)',
      motherboard: 'Gigabyte B550M DS3H (~95 €)',
      psu: 'MSI MAG A550BN 550W (~55 €)',
      case: 'BitFenix Nova Mesh SE (~55 €)'
    },
    performances: [
      { game: 'Cyberpunk 2077 (1080p Ultra)', fps: '60-70 FPS' },
      { game: 'Baldur\'s Gate 3 (1080p Ultra)', fps: '65-75 FPS' },
      { game: 'God of War: Ragnarök (1080p Ultra)', fps: '70-80 FPS' },
      { game: 'Valorant (1080p, Ultra)', fps: '200+ FPS' },
      { game: 'Fortnite (1080p, Élevé)', fps: '90-110 FPS' },
      { game: 'Call of Duty: Warzone (1080p Élevé)', fps: '75-85 FPS' },
      { game: 'Elden Ring (1080p Ultra)', fps: '60 FPS' }
    ],
    notes: "Prix total : ~750 €. Plateforme AM4 mature et abordable pour maximiser l'allocation du budget sur la carte graphique RTX 5060. Chaque composant optimisé pour le rapport performance/prix.",
    highlights: ['RTX 5060', '1080p Gaming', 'Ventirad', '80 FPS moyen']
  };

  const customBadge = {
    text: 'Entrée de gamme',
    color: 'bg-blue-500 text-blue-50',
    icon: <TrendingUp className="h-3 w-3 mr-1" />
  };

  return (
    <ScrollReveal>
      <BudgetPageLayout config={config} customBadge={customBadge} />
    </ScrollReveal>
  );
};

export default Budget800;

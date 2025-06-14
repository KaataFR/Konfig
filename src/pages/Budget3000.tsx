
import React from 'react';
import { Crown } from 'lucide-react';
import BudgetPageLayout from '@/components/BudgetPageLayout';
import ScrollReveal from '@/components/ScrollReveal';

const Budget3000 = () => {
  const config = {
    id: 'budget-3000',
    name: "LA MACHINE DE GUERRE 4K",
    price: '3000€',
    budget: '3000€',
    idealFor: "Jouer à tous les jeux en 4K Ultra à très haute fréquence (100-144 FPS).",
    image: 'https://technoidinc.com/cdn/shop/articles/Master_Gaming_PC_for_4K_Gaming_-_A_Complete_Guide.webp?v=1732810642',
    youtubeUrl: 'https://www.youtube.com/results?search_query=RTX+5080+%2B+Ryzen+7+9800X3D+gaming+benchmark+2025',
    topAchatUrl: 'https://www.topachat.com/pages/configomatic/ae998031-c331-4649-9931-9e52160f2457',
    components: {
      gpu: 'NVIDIA GeForce RTX 5080 (~1250 €)',
      cpu: 'AMD Ryzen 7 9800X3D (~560 €)',
      cooling: 'MSI MAG CORELIQUID 360R V2 (~140 €)',
      motherboard: 'MSI MAG X670E TOMAHAWK WIFI (~316 €)',
      ram: '32 Go DDR5 6000MHz CL30 (~150 €)',
      storage: '2 To KIOXIA EXCERIA PRO G3 NVMe (~200 €)',
      psu: 'Corsair RM1000e 1000W (~170 €)',
      case: 'Hyte Y60 (~200 €)'
    },
    performances: [
      { game: 'Cyberpunk 2077 (4K Ultra)', fps: '100-120 FPS' },
      { game: 'Baldur\'s Gate 3 (4K Ultra)', fps: '120-140 FPS' },
      { game: 'God of War: Ragnarök (4K Ultra)', fps: '110-130 FPS' },
      { game: 'Valorant (4K, Ultra)', fps: '400+ FPS' },
      { game: 'Fortnite (4K, Ultra)', fps: '160-200 FPS' },
      { game: 'Call of Duty: Warzone (4K Ultra)', fps: '120-150 FPS' },
      { game: 'Elden Ring (4K Ultra)', fps: '60 FPS' }
    ],
    notes: " (MAJ : 14/06/2025) - Prix total : ~2986 €. Machine conçue pour la domination en 4K. Duo CPU/GPU au sommet de la performance avec fondations renforcées (X670E, 1000W) et refroidissement AIO 360mm.",
    highlights: ['RTX 5080', '4K Gaming', 'Watercooling', '130 FPS moyen']
  };

  const customBadge = {
    text: 'Machine de Guerre',
    color: 'bg-red-500 text-red-50',
    icon: <Crown className="h-3 w-3 mr-1" />
  };

  return (
    <ScrollReveal>
      <BudgetPageLayout config={config} customBadge={customBadge} />
    </ScrollReveal>
  );
};

export default Budget3000;

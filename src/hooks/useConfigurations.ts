import { useState, useEffect } from 'react';
import configurationsData from '../data/configurations.json';

export interface ConfigComponent {
  cpu: string;
  cooling: string;
  gpu: string;
  ram: string;
  storage: string;
  motherboard: string;
  psu: string;
  case: string;
}

export interface ConfigPerformance {
  game: string;
  fps: string;
}

export interface Configuration {
  id: string;
  budget: string;
  name: string;
  shortName: string;
  description: string;
  idealFor: string;
  link: string;
  popular: boolean;
  image: string;
  youtubeUrl: string;
  lastUpdated: string;
  components: ConfigComponent;
  performances: ConfigPerformance[];
  notes: string;
  highlights: string[];
  badgeColor: string;
  badgeText: string;
}

export const useConfigurations = () => {
  const [configurations, setConfigurations] = useState<Configuration[]>([]);

  useEffect(() => {
    setConfigurations(configurationsData.configs);
  }, []);

  const getConfigById = (id: string): Configuration | undefined => {
    return configurations.find(config => config.id === id);
  };

  const getBudgetColor = (budget: string): string => {
    const budgetNum = parseInt(budget.replace(/[^\d]/g, ''));
    
    if (budgetNum <= 600) return 'hover:border-green-400';
    if (budgetNum <= 1000) return 'hover:border-blue-400';
    if (budgetNum <= 1500) return 'hover:border-purple-400';
    if (budgetNum <= 2000) return 'hover:border-orange-400';
    if (budgetNum <= 2500) return 'hover:border-red-400';
    return 'hover:border-yellow-400'; // Pour 4000€ et plus
  };

  const getBudgetRanges = () => {
    return configurations.map(config => ({
      budget: config.budget,
      name: config.name,
      description: config.description,
      link: config.link,
      popular: config.popular,
      image: config.image,
      hoverColor: getBudgetColor(config.budget)
    }));
  };

  return {
    configurations,
    getConfigById,
    getBudgetRanges,
    getBudgetColor
  };
};

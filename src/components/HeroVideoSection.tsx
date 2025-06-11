
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Monitor, Gamepad2 } from 'lucide-react';

const HeroVideoSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Budget configurations avec images spécifiques
  const budgetConfigs = [
    {
      budget: '600€',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      budget: '1000€', 
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      budget: '1500€',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      budget: '2000€',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      budget: '2500€',
      image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      budget: '4000€',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background noir et rouge gaming */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) contrast(1.3) saturate(1.2) hue-rotate(340deg)' }}
        >
          <source 
            src="https://videos.pexels.com/video-files/4836421/4836421-uhd_2560_1440_25fps.mp4"
            type="video/mp4" 
          />
          <source 
            src="https://videos.pexels.com/video-files/3168421/3168421-uhd_2560_1440_25fps.mp4"
            type="video/mp4" 
          />
          {/* Fallback avec gradient noir/rouge */}
          <div className="w-full h-full bg-gradient-to-br from-black via-red-900/30 to-black">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          </div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-900/20 to-black/70"></div>
      </div>

      {/* Animated Elements - cachés sur mobile et tablette pour améliorer la lisibilité */}
      <div 
        className="absolute top-20 left-20 transition-transform duration-75 hidden xl:block"
        style={{ 
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      >
        <Monitor className="h-16 w-16 text-primary/40 animate-pulse" />
      </div>
      
      <div 
        className="absolute bottom-20 right-20 transition-transform duration-75 hidden xl:block"
        style={{ 
          transform: `translate(${-scrollY * 0.2}px, ${scrollY * 0.1}px) rotate(${-scrollY * 0.05}deg)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      >
        <Gamepad2 className="h-20 w-20 text-accent/40 animate-pulse" />
      </div>
      
      <div 
        className="absolute top-40 right-40 transition-all duration-100 hidden xl:block"
        style={{ 
          transform: `translate(${scrollY * 0.3}px, ${-scrollY * 0.2}px) scale(${1 + scrollY * 0.0005})`,
          opacity: Math.max(0, 1 - scrollY * 0.003)
        }}
      >
        <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
      </div>
      
      <div 
        className="absolute bottom-40 left-40 transition-all duration-100 hidden xl:block"
        style={{ 
          transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.25}px) scale(${1 + scrollY * 0.0003})`,
          opacity: Math.max(0, 1 - scrollY * 0.003)
        }}
      >
        <div className="w-6 h-6 bg-accent rounded-full animate-pulse"></div>
      </div>

      {/* Particules supplémentaires - cachées sur mobile/tablette */}
      <div 
        className="absolute top-32 left-1/4 transition-all duration-75 hidden xl:block"
        style={{ 
          transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.12}px)`,
          opacity: Math.max(0, 0.6 - scrollY * 0.002)
        }}
      >
        <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
      </div>
      
      <div 
        className="absolute bottom-32 right-1/4 transition-all duration-75 hidden xl:block"
        style={{ 
          transform: `translate(${-scrollY * 0.12}px, ${scrollY * 0.08}px)`,
          opacity: Math.max(0, 0.6 - scrollY * 0.002)
        }}
      >
        <div className="w-3 h-3 bg-accent/30 rounded-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-8">
        <Badge variant="outline" className="text-primary border-primary/30 glow-effect">
          🎮 Configurations PC Gamer 2025
        </Badge>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight animate-fade-in">
          Votre PC Gaming<br />
          <span className="text-primary konfig-logo">sur Mesure.</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
          Découvrez mes configurations PC Gaming 2025 optimisées pour chaque budget. 
          Conseils gratuits, composants sélectionnés, performances détaillées.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 hover-glow w-full sm:w-auto">
            <Link to="/configurations">
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Découvrir les Configurations 2025
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto">
            <Link to="/contact">
              Demander des conseils gratuits
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-12 md:mt-16 px-4">
          {budgetConfigs.map((config, index) => (
            <Link 
              key={config.budget}
              to={`/configurations#budget-${config.budget.replace('€', '')}`}
              className="group p-3 md:p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 hover-glow bg-card/80 backdrop-blur-sm"
            >
              <div className="aspect-square mb-2 rounded-lg overflow-hidden">
                <img 
                  src={config.image} 
                  alt={`Configuration ${config.budget}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                {config.budget}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Config {index + 1}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;

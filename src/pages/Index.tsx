
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Users, Gamepad2, ArrowDown, Monitor, Cpu, HardDrive } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEngagements = () => {
    const engagementsSection = document.getElementById('engagements-section');
    if (engagementsSection) {
      engagementsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const engagements = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Conseils Gratuits",
      description: "Des recommandations PC Gaming sans frais, basées sur votre budget et vos besoins."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Configurations 2025", 
      description: "Composants sélectionnés pour 2025, optimisés rapport qualité/prix pour chaque budget."
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      title: "6 Budgets Clairs",
      description: "De 800€ à 5000€, trouvez la configuration adaptée à vos ambitions gaming."
    }
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      
      {/* Section Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
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
            <div className="w-full h-full bg-gradient-to-br from-black via-red-900/30 to-black">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
            </div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-900/20 to-black/70"></div>
        </div>

        {/* Éléments 3D flottants réactifs au scroll */}
        <div 
          className="absolute top-20 left-20 transition-all duration-75 hidden xl:block opacity-60"
          style={{ 
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg) rotateY(${scrollY * 0.05}deg)`,
            opacity: Math.max(0, 0.6 - scrollY * 0.002)
          }}
        >
          <div className="relative">
            <Monitor className="h-16 w-16 text-primary/50 animate-pulse" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-20 right-20 transition-all duration-75 hidden xl:block opacity-60"
          style={{ 
            transform: `translate(${-scrollY * 0.2}px, ${scrollY * 0.1}px) rotate(${-scrollY * 0.05}deg) rotateX(${scrollY * 0.03}deg)`,
            opacity: Math.max(0, 0.6 - scrollY * 0.002)
          }}
        >
          <div className="relative">
            <Gamepad2 className="h-20 w-20 text-accent/50 animate-pulse" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div 
          className="absolute top-40 right-40 transition-all duration-100 hidden xl:block"
          style={{ 
            transform: `translate(${scrollY * 0.3}px, ${-scrollY * 0.2}px) scale(${1 + scrollY * 0.0005}) rotateZ(${scrollY * 0.1}deg)`,
            opacity: Math.max(0, 0.7 - scrollY * 0.003)
          }}
        >
          <div className="relative">
            <Cpu className="h-12 w-12 text-primary/40 animate-pulse" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-40 left-40 transition-all duration-100 hidden xl:block"
          style={{ 
            transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.25}px) scale(${1 + scrollY * 0.0003}) rotateY(${scrollY * 0.08}deg)`,
            opacity: Math.max(0, 0.7 - scrollY * 0.003)
          }}
        >
          <div className="relative">
            <HardDrive className="h-14 w-14 text-accent/40 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Particules supplémentaires flottantes */}
        <div 
          className="absolute top-32 left-1/4 transition-all duration-75 hidden xl:block"
          style={{ 
            transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.12}px) rotateZ(${scrollY * 0.15}deg)`,
            opacity: Math.max(0, 0.5 - scrollY * 0.002)
          }}
        >
          <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse shadow-lg shadow-primary/20"></div>
        </div>
        
        <div 
          className="absolute bottom-32 right-1/4 transition-all duration-75 hidden xl:block"
          style={{ 
            transform: `translate(${-scrollY * 0.12}px, ${scrollY * 0.08}px) rotateX(${scrollY * 0.1}deg)`,
            opacity: Math.max(0, 0.5 - scrollY * 0.002)
          }}
        >
          <div className="w-4 h-4 bg-accent/40 rounded-full animate-pulse shadow-lg shadow-accent/20"></div>
        </div>

        <div 
          className="absolute top-60 left-1/3 transition-all duration-100 hidden xl:block"
          style={{ 
            transform: `translate(${scrollY * 0.06}px, ${-scrollY * 0.18}px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
            opacity: Math.max(0, 0.4 - scrollY * 0.002)
          }}
        >
          <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
        </div>

        <div 
          className="absolute bottom-60 right-1/3 transition-all duration-100 hidden xl:block"
          style={{ 
            transform: `translate(${-scrollY * 0.09}px, ${scrollY * 0.14}px) scale(${1 + Math.cos(scrollY * 0.01) * 0.1})`,
            opacity: Math.max(0, 0.4 - scrollY * 0.002)
          }}
        >
          <div className="w-3 h-3 bg-accent/50 rounded-full animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-8">
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
                Voir les Configurations
              </Link>
            </Button>
            <Button 
              onClick={scrollToEngagements}
              variant="outline" 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
            >
              <ArrowDown className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              En savoir plus
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto">
              <Link to="/contact">
                Conseils gratuits
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Engagements */}
      <section id="engagements-section" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pourquoi Konfig ?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Des conseils PC Gaming gratuits et des configurations optimisées pour 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {engagements.map((engagement, index) => (
              <div key={index} className="text-center space-y-4 p-4 md:p-6 rounded-lg hover:bg-card transition-colors">
                <div className="flex justify-center">
                  {engagement.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {engagement.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {engagement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Monitor, 
  Cpu, 
  HardDrive, 
  Zap, 
  Wifi, 
  Fan,
  CheckCircle,
  Euro,
  Thermometer,
  ExternalLink,
  Play,
  ShoppingCart,
  ArrowLeft,
  TrendingUp,
  Crown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LastUpdated from '@/components/LastUpdated';
import { useConfigurations } from '@/hooks/useConfigurations';

const Budget4000 = () => {
  const { getConfigById } = useConfigurations();
  const config = getConfigById('budget-4000');

  if (!config) {
    return <div>Configuration non trouvée</div>;
  }

  const getComponentIcon = (type: string) => {
    switch (type) {
      case 'cpu': return <Cpu className="h-6 w-6 text-primary" />;
      case 'cooling': return <Thermometer className="h-6 w-6 text-primary" />;
      case 'gpu': return <Monitor className="h-6 w-6 text-primary" />;
      case 'ram': return <Zap className="h-6 w-6 text-primary" />;
      case 'storage': return <HardDrive className="h-6 w-6 text-primary" />;
      case 'motherboard': return <Wifi className="h-6 w-6 text-primary" />;
      case 'psu': return <Zap className="h-6 w-6 text-primary" />;
      case 'case': return <Fan className="h-6 w-6 text-primary" />;
      default: return <CheckCircle className="h-6 w-6 text-primary" />;
    }
  };

  const getComponentLabel = (type: string) => {
    const labels = {
      cpu: 'Processeur (CPU)',
      cooling: 'Refroidissement',
      gpu: 'Carte Graphique (GPU)',
      ram: 'Mémoire Vive (RAM)',
      storage: 'Stockage',
      motherboard: 'Carte Mère',
      psu: 'Alimentation',
      case: 'Boîtier'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const generateIdealoLink = (componentName: string) => {
    let cleanName = componentName.split('(')[0].trim();
    return `https://www.idealo.fr/prechcat.html?q=${encodeURIComponent(cleanName)}`;
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      
      {/* Header avec gradient premium et vidéo de fond */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) contrast(1.2) saturate(1.1) hue-rotate(340deg)' }}
          >
            <source 
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
              type="video/mp4" 
            />
            <source 
              src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4"
              type="video/mp4" 
            />
            {/* Fallback avec gradient */}
            <div className="w-full h-full bg-gradient-to-br from-black via-red-900/20 to-black">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
            </div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/30 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6 text-white/80 hover:text-white">
            <Link to="/configurations">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux configurations
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="outline" className="text-primary border-primary/30 px-4 py-2 bg-black/30 backdrop-blur-sm">
                <Euro className="h-4 w-4 mr-2" />
                Configuration {config.budget}
              </Badge>
              <Badge className={`${config.badgeColor} text-primary-foreground px-4 py-2 bg-black/30 backdrop-blur-sm`}>
                <Crown className="h-3 w-3 mr-1" />
                {config.badgeText}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {config.name}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-6 drop-shadow-md">
              {config.idealFor}
            </p>

            {/* Affichage de la dernière mise à jour */}
            <div className="flex justify-center mb-8">
              <LastUpdated date={config.lastUpdated} />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {config.highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white/90">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Actions rapides */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://topachat.com" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Voir sur TopAchat
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={config.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <Play className="h-5 w-5 mr-2" />
                Tests YouTube
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Demander conseil</Link>
            </Button>
          </div>

          {/* Layout principal en 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Colonne de gauche - Image compacte et métriques */}
            <div className="space-y-6">
              <Card className="pc-card">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] bg-secondary rounded-xl overflow-hidden relative mb-6">
                    <img 
                      src={config.image} 
                      alt={config.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="budget-badge bg-primary text-primary-foreground px-3 py-2 rounded-full font-bold text-sm">
                        <Euro className="h-4 w-4 mr-1 inline" />
                        {config.budget}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <div className="text-xl font-bold text-primary mb-2">4K</div>
                      <div className="text-sm text-muted-foreground">Ray Tracing Max</div>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <div className="text-xl font-bold text-primary mb-2">120+ FPS</div>
                      <div className="text-sm text-muted-foreground">Performance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performances Gaming */}
              <Card className="pc-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <TrendingUp className="h-5 w-5 text-primary mr-3" />
                    Performances Gaming Ultimes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {config.performances.map((perf, index) => (
                    <div key={index} className="performance-item">
                      <span className="performance-game">{perf.game}</span>
                      <span className="performance-fps">
                        {perf.fps}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Colonne de droite - Composants */}
            <div className="space-y-6">
              <Card className="pc-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Composants Premium Sélectionnés
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(config.components).map(([type, spec]) => (
                    <div key={type} className="bg-card border border-border/50 rounded-xl p-4 space-y-3">
                      <div className="flex items-center">
                        {getComponentIcon(type)}
                        <h3 className="ml-3 font-semibold text-base text-foreground">
                          {getComponentLabel(type)}
                        </h3>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed text-sm">{spec}</p>
                        <a
                          href={generateIdealoLink(spec)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline font-medium text-sm"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Voir les prix sur Idealo
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Notes et CTA */}
          <Card className="pc-card mt-10">
            <CardContent className="p-6 text-center">
              <div className="bg-secondary/50 p-4 rounded-xl mb-6">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  <span className="font-semibold text-foreground">Remarques :</span> {config.notes}
                </p>
              </div>
              
              <Button size="lg" className="cta-button" asChild>
                <Link to="/contact">Demander des conseils personnalisés</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Budget4000;

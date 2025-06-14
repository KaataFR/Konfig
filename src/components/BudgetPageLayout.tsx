
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
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BudgetConfig {
  id: string;
  name: string;
  budget: string;
  idealFor: string;
  image: string;
  youtubeUrl: string;
  topAchatUrl: string; // Nouveau champ pour le lien TopAchat
  components: Record<string, string>;
  performances: Array<{ game: string; fps: string }>;
  notes: string;
  highlights: string[];
  badgeText?: string;
  badgeColor?: string;
}

interface BudgetPageLayoutProps {
  config: BudgetConfig;
  customBadge?: {
    text: string;
    color: string;
    icon?: React.ReactNode;
  };
}

const BudgetPageLayout: React.FC<BudgetPageLayoutProps> = ({ config, customBadge }) => {
  const getComponentIcon = (type: string) => {
    switch (type) {
      case 'cpu': return <Cpu className="h-5 w-5 text-primary" />;
      case 'cooling': return <Thermometer className="h-5 w-5 text-primary" />;
      case 'gpu': return <Monitor className="h-5 w-5 text-primary" />;
      case 'ram': return <Zap className="h-5 w-5 text-primary" />;
      case 'storage': return <HardDrive className="h-5 w-5 text-primary" />;
      case 'motherboard': return <Wifi className="h-5 w-5 text-primary" />;
      case 'psu': return <Zap className="h-5 w-5 text-primary" />;
      case 'case': return <Fan className="h-5 w-5 text-primary" />;
      default: return <CheckCircle className="h-5 w-5 text-primary" />;
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

      {/* Header avec gradient */}
      <section className="pt-20 pb-8 md:pt-24 md:pb-12 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-4 md:mb-6">
            <Link to="/configurations">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Link>
          </Button>

          <div className="text-center max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
              <Badge variant="outline" className="text-primary border-primary/30 px-3 py-1.5 text-sm">
                <Euro className="h-3 w-3 mr-1.5" />
                {config.budget}
              </Badge>
              {customBadge && (
                <Badge className={`${customBadge.color} px-3 py-1.5 text-sm`}>
                  {customBadge.icon}
                  {customBadge.text}
                </Badge>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 leading-tight">
              {config.name}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 px-4">
              {config.idealFor}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {config.highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="px-2 py-1 text-xs sm:text-sm">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Actions rapides */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8 md:mb-10">
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2">
              <a href={config.topAchatUrl} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-4 w-4 mr-2" />
                TopAchat
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="text-sm px-4 py-2">
              <a href={config.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                Tests YouTube
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="text-sm px-4 py-2">
              <Link to="/contact">Conseils</Link>
            </Button>
          </div>

          {/* Layout principal responsive */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Image et métriques */}
            <div className="order-2 lg:order-1">
              <Card className="pc-card">
                <CardContent className="p-4 md:p-6">
                  <div className="aspect-video bg-secondary rounded-lg overflow-hidden relative mb-4">
                    <img
                      src={config.image}
                      alt={config.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 md:top-4 md:right-4">
                      <div className="budget-badge bg-primary text-primary-foreground px-2 py-1 md:px-3 md:py-2 rounded-full font-bold text-xs md:text-sm">
                        <Euro className="h-3 w-3 mr-1 inline" />
                        {config.budget}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-6 text-center">
                    <div className="bg-secondary/50 p-3 md:p-4 rounded-lg">
                      <div className="text-lg md:text-xl font-bold text-primary mb-1">
                        {config.budget === '600€' || config.budget === '1000€' ? '1080p' :
                          config.budget === '1500€' ? '1440p' : '4K'}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">Résolution</div>
                    </div>
                    <div className="bg-secondary/50 p-3 md:p-4 rounded-lg">
                      <div className="text-lg md:text-xl font-bold text-primary mb-1">
                        {config.budget === '600€' ? '60-100' :
                          config.budget === '1000€' ? '60-100' :
                            config.budget === '1500€' ? '100+' :
                              config.budget === '2000€' ? '60+' :
                                config.budget === '2500€' ? '100+' : '120+'} FPS
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">Performance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performances Gaming */}
              <Card className="pc-card mt-6">
                <CardHeader className="pb-3 md:pb-4">
                  <CardTitle className="flex items-center text-lg md:text-xl">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3" />
                    Performances Gaming
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 md:space-y-3">
                  {config.performances.map((perf, index) => (
                    <div key={index} className="flex justify-between items-center p-2 md:p-3 bg-secondary/30 rounded-lg">
                      <span className="text-muted-foreground font-medium text-xs sm:text-sm flex-1 mr-2">{perf.game}</span>
                      <span className="fps-badge bg-primary text-primary-foreground px-2 py-1 rounded-full font-mono font-bold text-xs whitespace-nowrap">
                        {perf.fps}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Composants */}
            <div className="order-1 lg:order-2">
              <Card className="pc-card">
                <CardHeader className="pb-3 md:pb-4">
                  <CardTitle className="flex items-center text-lg md:text-xl">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3" />
                    Composants
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  {Object.entries(config.components).map(([type, spec]) => (
                    <div key={type} className="bg-card border border-border/50 rounded-lg p-3 md:p-4 space-y-2 md:space-y-3">
                      <div className="flex items-center">
                        {getComponentIcon(type)}
                        <h3 className="ml-2 md:ml-3 font-semibold text-sm md:text-base text-foreground">
                          {getComponentLabel(type)}
                        </h3>
                      </div>

                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{spec}</p>
                        <a
                          href={generateIdealoLink(spec)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline font-medium text-xs sm:text-sm"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Voir sur Idealo
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Notes et CTA */}
          <Card className="pc-card mt-6 md:mt-10">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="bg-secondary/50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                  <span className="font-semibold text-foreground">Remarques :</span> {config.notes}
                </p>
              </div>

              <Button size="sm" className="w-full sm:w-auto px-6 md:px-12 py-2 md:py-4 text-sm md:text-lg hover-glow" asChild>
                <Link to="/contact">Demander des conseils</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BudgetPageLayout;

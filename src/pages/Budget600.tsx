
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
import LastUpdated from '@/components/LastUpdated';

const Budget600 = () => {
  const config = {
    id: 'budget-600',
    name: "GAMING 1080P ENTRÉE DE GAMME",
    price: '600€',
    budget: '600€',
    idealFor: "Gaming 1080p entrée de gamme pour débuter dans le gaming PC. Jouer en 1080p à 60-100 FPS sur des jeux compétitifs et 30-60 FPS sur des AAA avec paramètres moyens.",
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    youtubeUrl: 'https://www.youtube.com/results?search_query=AMD+RX+7600+%2B+Ryzen+5+5500+gaming+test+2025',
    lastUpdated: '2025-01-10',
    components: {
      cpu: 'AMD Ryzen 5 5500 (boxed, avec cooler) (~93 €)',
      cooling: 'AMD Wraith Spire (inclus avec le CPU)',
      gpu: 'AMD Radeon RX 7600 (~246 €)',
      ram: '16 Go DDR4 3200 MHz G.Skill Aegis (~50 €)',
      storage: '500 Go M.2 NVMe Kingston NV3 (~40 €)',
      motherboard: 'ASRock B450M-HDV R4.0 (~50 €)',
      psu: 'Alimentation 450W générique (~40 €)',
      case: 'Boîtier PC économique (~30 €)'
    },
    performances: [
      { game: 'Valorant (1080p, bas)', fps: '150-200 FPS' },
      { game: 'Fortnite (1080p, moyens)', fps: '80-100 FPS' },
      { game: 'Elden Ring (1080p, moyens)', fps: '40-50 FPS' },
      { game: 'Starfield (1080p, bas)', fps: '30-40 FPS' },
      { game: 'Call of Duty: Warzone (1080p, moyens)', fps: '60-70 FPS' }
    ],
    notes: "Prix total : ~549 €, sous le budget. Possibilité d'ajouter 16 Go de RAM ou un SSD de 1 To pour ~599 € ou ~589 €. Le Ryzen 5 5500 boxed inclut le cooler Wraith Spire. La RX 7600 offre d'excellentes performances 1080p sans ray tracing.",
    highlights: ['RX 7600', '1080p Gaming', 'Cooler inclus', 'Budget optimal']
  };

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
      
      {/* Header avec gradient */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/configurations">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux configurations
            </Link>
          </Button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="outline" className="text-primary border-primary/30 px-4 py-2">
                <Euro className="h-4 w-4 mr-2" />
                Configuration {config.budget}
              </Badge>
              <Badge className="bg-blue-500 text-blue-50 px-4 py-2">
                Débutant
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {config.name}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {config.idealFor}
            </p>

            {/* Affichage de la dernière mise à jour */}
            <div className="flex justify-center mb-8">
              <LastUpdated date={config.lastUpdated} />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {config.highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
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
                  <div className="aspect-video bg-secondary rounded-xl overflow-hidden relative mb-6">
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
                      <div className="text-xl font-bold text-primary mb-2">1080p</div>
                      <div className="text-sm text-muted-foreground">Résolution</div>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <div className="text-xl font-bold text-primary mb-2">60-100 FPS</div>
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
                    Performances Gaming
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {config.performances.map((perf, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-xl">
                      <span className="text-muted-foreground font-medium text-sm">{perf.game}</span>
                      <span className="fps-badge bg-primary text-primary-foreground px-2 py-1 rounded-full font-mono font-bold text-xs">
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
                    Composants Sélectionnés
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
              
              <Button size="lg" className="w-full sm:w-auto px-12 py-4 text-lg hover-glow" asChild>
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

export default Budget600;

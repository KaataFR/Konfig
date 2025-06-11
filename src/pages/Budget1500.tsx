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
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LastUpdated from '@/components/LastUpdated';

const Budget1500 = () => {
  const config = {
    id: 'budget-1500',
    name: "GAMING 1440P HAUT DE GAMME",
    price: '1500€',
    budget: '1500€',
    idealFor: "Gaming 1440p à 100+ FPS et 4K à 60 FPS, avec ray tracing pour une qualité graphique supérieure.",
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    youtubeUrl: 'https://www.youtube.com/results?search_query=RTX+4060+Ti+%2B+Ryzen+7+5700X+gaming+benchmark+2025',
    lastUpdated: '2025-01-05',
    components: {
      cpu: 'AMD Ryzen 7 5700X (~180 €)',
      cooling: 'be quiet! Dark Rock Slim (~50 €)',
      gpu: 'NVIDIA GeForce RTX 4060 Ti 16GB (~450 €)',
      ram: '32 Go DDR4 3600 MHz G.Skill Ripjaws (~110 €)',
      storage: '1 To M.2 NVMe Samsung 980 Pro (~120 €)',
      motherboard: 'MSI B550 GAMING PLUS (~130 €)',
      psu: 'Corsair RM750 750W 80+ Gold (~90 €)',
      case: 'Fractal Design Define 7 Compact (~130 €)'
    },
    performances: [
      { game: 'Cyberpunk 2077 (1440p Ultra, DLSS)', fps: '80-90 FPS' },
      { game: 'Cyberpunk 2077 (4K, RT + DLSS)', fps: '50-60 FPS' },
      { game: 'Baldur\'s Gate 3 (1440p Ultra)', fps: '90-100 FPS' },
      { game: 'God of War: Ragnarök (1440p Ultra)', fps: '80-90 FPS' },
      { game: 'Valorant (1440p, Ultra)', fps: '300+ FPS' },
      { game: 'Fortnite (1440p, RT + DLSS)', fps: '120-140 FPS' },
      { game: 'Call of Duty: Warzone (1440p Ultra)', fps: '90-110 FPS' }
    ],
    notes: "Prix total : ~1460 €. RTX 4060 Ti 16GB pour le ray tracing 1440p et 4K. 32 Go de RAM et SSD Samsung 980 Pro pour les performances optimales.",
    highlights: ['RTX 4060 Ti 16GB', 'Ray Tracing 1440p', '32GB RAM', 'SSD Pro']
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
              <Badge className="bg-amber-500 text-amber-950 px-4 py-2">
                <Star className="h-3 w-3 mr-1" />
                Recommandée
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
              <Card className="pc-card glow-effect">
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
                      <div className="text-xl font-bold text-primary mb-2">1440p</div>
                      <div className="text-sm text-muted-foreground">Résolution</div>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-xl">
                      <div className="text-xl font-bold text-primary mb-2">100+ FPS</div>
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
              <div className="bg-secondary/50 p-6 rounded-xl mb-8">
                <p className="text-muted-foreground leading-relaxed">
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

export default Budget1500;

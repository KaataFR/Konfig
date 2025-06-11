
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Shield, Truck, CreditCard, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SitesRecommandes = () => {
  const sites = [
    {
      name: 'Amazon.fr',
      url: 'https://amazon.fr',
      logo: '🇫🇷',
      description: 'Le géant du e-commerce avec livraison rapide et service client réactif.',
      pros: ['Livraison Prime rapide', 'Service client excellent', 'Politique de retour flexible', 'Large catalogue'],
      cons: ['Prix parfois plus élevés', 'Vendeurs tiers variables'],
      rating: 4.5,
      speciality: 'Polyvalent',
      shipping: 'Gratuite dès 25€'
    },
    {
      name: 'Amazon.de',
      url: 'https://amazon.de',
      logo: '🇩🇪',
      description: 'Version allemande souvent moins chère avec livraison en France.',
      pros: ['Prix compétitifs', 'Stock important', 'Livraison France possible', 'Même garantie Amazon'],
      cons: ['Interface en allemand', 'Frais de livraison parfois'],
      rating: 4.3,
      speciality: 'Économique',
      shipping: 'Variable selon produit'
    },
    {
      name: 'TopAchat',
      url: 'https://topachat.com',
      logo: '🇫🇷',
      description: 'E-commerçant français spécialisé en informatique et high-tech.',
      pros: ['Prix attractifs', 'Promotions fréquentes', 'Livraison rapide', 'Service français'],
      cons: ['Interface parfois datée', 'SAV variable'],
      rating: 4.1,
      speciality: 'Rapport qualité/prix',
      shipping: 'Gratuite dès 50€'
    },
    {
      name: 'Materiel.net',
      url: 'https://materiel.net',
      logo: '🇫🇷',
      description: 'Distributeur français de matériel informatique et gaming.',
      pros: ['Expertise gaming', 'Guides détaillés', 'Configurateur PC', 'Support technique'],
      cons: ['Prix moyens-élevés', 'Délais parfois longs'],
      rating: 4.2,
      speciality: 'Gaming',
      shipping: 'Gratuite dès 30€'
    },
    {
      name: 'MemoryPC',
      url: 'https://memorypc.de',
      logo: '🇩🇪',
      description: 'Assembleur allemand de PC gaming et workstation avec livraison en France.',
      pros: ['PC pré-assemblés', 'Personnalisation poussée', 'Garantie 2 ans', 'Prix compétitifs'],
      cons: ['Site en allemand/anglais', 'Délais de livraison'],
      rating: 4.2,
      speciality: 'PC assemblés',
      shipping: 'Frais selon poids'
    }
  ];

  const getSpecialityIcon = (speciality: string) => {
    switch (speciality) {
      case 'Polyvalent': return '🌟';
      case 'Économique': return '💰';
      case 'Expert PC': return '🔧';
      case 'Rapport qualité/prix': return '⚖️';
      case 'Gaming': return '🎮';
      case 'Distributeur': return '📦';
      default: return '🛒';
    }
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sites de Vente Recommandés
          </h1>
          <p className="text-xl text-muted-foreground">
            Nos partenaires de confiance pour acheter vos composants PC Gaming au meilleur prix.
          </p>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sites.map((site, index) => (
              <Card key={index} className="pc-card hover-glow relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{site.logo}</span>
                      <CardTitle className="text-xl">{site.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {getSpecialityIcon(site.speciality)} {site.speciality}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(site.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{site.rating}/5</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {site.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-green-500 mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        Avantages
                      </h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {site.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-orange-500 mb-2">Inconvénients</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {site.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center">
                      <Truck className="h-3 w-3 mr-1" />
                      {site.shipping}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      France
                    </div>
                  </div>
                  
                  <Button asChild className="w-full hover-glow">
                    <a href={site.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visiter {site.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Conseils d'Achat
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="pc-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CreditCard className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Comparer les Prix</h3>
                    <p className="text-muted-foreground text-sm">
                      Utilisez des comparateurs comme Idealo ou Google Shopping pour trouver le meilleur prix. 
                      Les écarts peuvent être significatifs entre sites.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pc-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Garantie & SAV</h3>
                    <p className="text-muted-foreground text-sm">
                      Privilégiez les sites français pour un SAV en français. 
                      Vérifiez les conditions de garantie avant achat.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pc-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Truck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Livraison</h3>
                    <p className="text-muted-foreground text-sm">
                      Attention aux frais de livraison qui peuvent changer la donne. 
                      Amazon Prime est souvent rentable pour plusieurs achats.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="pc-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Avis Clients</h3>
                    <p className="text-muted-foreground text-sm">
                      Lisez les avis clients, surtout pour les alimentations et boîtiers. 
                      Méfiez-vous des notes trop parfaites ou trop mauvaises.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitesRecommandes;

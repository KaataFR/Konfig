
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Euro,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { useConfigurations } from '@/hooks/useConfigurations';

const Configurations = () => {
  const { getBudgetRanges } = useConfigurations();
  const budgetRanges = getBudgetRanges();

  const buyingSites = [
    { name: 'Amazon.de', url: 'https://amazon.de' },
    { name: 'Amazon.fr', url: 'https://amazon.fr' },
    { name: 'MemoryPC', url: 'https://memorypc.de' },
    { name: 'FlowUp', url: 'https://flowup.shop' }
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      
      {/* Header */}
      <ScrollReveal>
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Configurations PC Gamer 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Choisissez votre budget et découvrez la configuration optimisée pour vos besoins gaming.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Sites de vente */}
      <ScrollReveal delay={200}>
        <section className="py-8 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Sites de Vente Recommandés
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {buyingSites.map((site, index) => (
                <ScrollReveal key={site.name} delay={300 + index * 100}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {site.name}
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Budget Cards avec alignement amélioré et couleurs hover */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {budgetRanges.map((range, index) => (
              <ScrollReveal key={index} delay={400 + index * 150}>
                <Card className={`pc-card relative h-full flex flex-col transition-all duration-300 ${range.hoverColor} ${range.popular ? 'ring-2 ring-primary/30' : ''}`}>
                  {range.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-primary text-primary-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Populaire
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={range.image} 
                        alt={`Configuration ${range.budget}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center space-y-4 flex flex-col flex-1">
                      <div className="flex items-center justify-center">
                        <Euro className="h-6 w-6 text-primary mr-2" />
                        <span className="text-3xl font-bold text-primary">{range.budget}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground">
                        {range.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm flex-1">
                        {range.description}
                      </p>
                      
                      <div className="mt-auto">
                        <Button asChild className="w-full">
                          <Link to={range.link}>
                            Voir cette configuration
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Configurations;

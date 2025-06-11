
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Target, 
  Users, 
  Award,
  CheckCircle,
  Cpu,
  Monitor,
  Settings
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passion du Hardware",
      description: "Nous sommes des passionnés de hardware PC et de gaming. Chaque composant est choisi avec amour et expertise."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Performance Optimale",
      description: "Nous recherchons l'équilibre parfait entre performance, stabilité et rapport qualité-prix pour chaque budget."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Service Client",
      description: "Un accompagnement personnalisé, des conseils experts et un suivi après-vente pour que vous profitiez pleinement de votre PC."
    }
  ];

  const methodology = [
    {
      icon: <Cpu className="h-12 w-12 text-primary" />,
      title: "Sélection des Composants",
      description: "Nous analysons les derniers benchmarks, les retours de la communauté et testons personnellement chaque composant. Nous privilégions la cohérence de l'ensemble plutôt que les composants isolés spectaculaires."
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Montage et Optimisation",
      description: "Chaque PC est monté à la main par nos techniciens expérimentés. Nous optimisons le cable management, vérifions les températures et effectuons un overclocking sécurisé quand c'est pertinent."
    },
    {
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "Tests Rigoureux",
      description: "Avant livraison, chaque configuration passe une batterie de tests : stress tests, gaming en conditions réelles, vérification des températures et validation des performances annoncées."
    }
  ];

  const achievements = [
    { number: "500+", label: "PC livrés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "3 ans", label: "D'expertise" },
    { number: "24h", label: "Support technique" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="text-primary border-primary/30 mb-6">
            💡 Notre Histoire
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            À Propos de PC-Genius
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Née de la passion pour le hardware PC et le gaming, PC-Genius est l'aboutissement 
            d'années d'expérience dans l'assemblage et l'optimisation de configurations gaming. 
            Notre mission : démocratiser l'accès aux PC haute performance.
          </p>
        </div>
      </section>

      {/* Notre Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Notre Vision du PC Gaming
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le gaming PC ne devrait pas être réservé aux experts en hardware. 
                Nous croyons que chaque gamer mérite une machine optimisée, 
                équilibrée et adaptée à ses besoins, sans avoir à naviguer 
                dans la complexité technique.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                C'est pourquoi nous créons des configurations clés en main, 
                testées et garanties, qui vous permettent de vous concentrer 
                sur l'essentiel : jouer et gagner.
              </p>
            </div>
            <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Setup gaming"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground">
              Ce qui nous guide dans chaque configuration que nous créons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:bg-card transition-colors">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Méthodologie */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Notre Méthodologie
            </h2>
            <p className="text-xl text-muted-foreground">
              Comment nous garantissons l'excellence de chaque configuration
            </p>
          </div>

          <div className="space-y-12">
            {methodology.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    {step.icon}
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="p-6 bg-secondary/50">
                    <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary opacity-20">
                        {index + 1}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Réalisations */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-muted-foreground">
              Quelques chiffres qui témoignent de notre expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Transparence */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <CardContent className="space-y-6">
              <Award className="h-16 w-16 text-primary mx-auto" />
              <h2 className="text-3xl font-bold text-foreground">
                Notre Engagement Transparence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tous nos tests de performance sont réalisés dans les mêmes conditions 
                et documentés. Nous publions régulièrement nos benchmarks et n'hésitons 
                pas à partager nos méthodes. Votre confiance est notre priorité.
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">Tests publics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">Méthodes ouvertes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span className="text-muted-foreground">Support technique</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

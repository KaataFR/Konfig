
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  const handleDiscordRedirect = () => {
    window.open('https://discord.gg/Fg78FgXp', '_blank');
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in pt-16">
      <Navbar />
      
      {/* Header */}
      <ScrollReveal>
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Rejoignez notre communauté
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Échangez avec d'autres passionnés de PC Gaming, partagez vos builds et obtenez des conseils personnalisés !
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Discord Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {/* Discord Main Card */}
            <ScrollReveal delay={200}>
              <Card className="pc-card glow-effect">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-4">
                      <SiDiscord className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Discord KONFIG
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Rejoignez notre serveur Discord pour des conseils en temps réel
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 text-lg"
                    onClick={handleDiscordRedirect}
                  >
                    <SiDiscord className="h-5 w-5 mr-2" />
                    Rejoindre Discord
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="h-5 w-5 text-primary mr-3" />,
                  title: "Communauté Active",
                  description: "Des centaines de passionnés prêts à vous aider dans vos projets PC Gaming"
                },
                {
                  icon: <HelpCircle className="h-5 w-5 text-primary mr-3" />,
                  title: "Conseils Gratuits", 
                  description: "Obtenez des conseils personnalisés selon votre budget et vos besoins"
                },
                {
                  icon: <MessageSquare className="h-5 w-5 text-primary mr-3" />,
                  title: "Partage d'Expérience",
                  description: "Partagez vos builds, vos expériences et découvrez celles des autres"
                }
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={400 + index * 150}>
                  <Card className="pc-card">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        {feature.icon}
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Info Card */}
            <ScrollReveal delay={800}>
              <Card className="pc-card">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-4">
                    Pourquoi rejoindre notre Discord ?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <p>• Conseils en temps réel de la communauté</p>
                      <p>• Partage de configurations et benchmarks</p>
                      <p>• Alerts sur les bonnes affaires hardware</p>
                    </div>
                    <div className="space-y-2">
                      <p>• Aide au montage et dépannage</p>
                      <p>• Discussions sur les nouveautés tech</p>
                      <p>• Événements et concours communautaires</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

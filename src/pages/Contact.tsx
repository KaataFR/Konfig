
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    usage: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Demande de conseil PC Gaming - ${formData.name}`;
    const body = `Bonjour,

Nom: ${formData.name}
Email: ${formData.email}
Budget: ${formData.budget}
Usage principal: ${formData.usage}

Message:
${formData.message}

Cordialement,
${formData.name}`;

    const mailtoLink = `mailto:kaatafr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in pt-16">
      <Navbar />
      
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Besoin de conseils personnalisés pour votre configuration PC ? 
            Notre équipe est là pour vous aider !
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form - Largeur augmentée */}
            <div className="lg:col-span-2">
              <Card className="pc-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg md:text-xl">
                    <MessageSquare className="h-6 w-6 text-primary mr-3" />
                    Demande de Conseil
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nom *
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Votre nom" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium text-foreground">
                        Budget approximatif
                      </label>
                      <Input 
                        id="budget" 
                        placeholder="ex: 1500€" 
                        value={formData.budget}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="usage" className="text-sm font-medium text-foreground">
                        Usage principal
                      </label>
                      <Input 
                        id="usage" 
                        placeholder="ex: Gaming 1440p, Streaming, Travail..." 
                        value={formData.usage}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Décrivez vos besoins, vos jeux favoris, vos contraintes..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full hover-glow">
                      <Mail className="h-4 w-4 mr-2" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info - Largeur réduite */}
            <div className="lg:col-span-1">
              <div className="space-y-6 lg:space-y-8">
                <Card className="pc-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Temps de Réponse</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          Nous répondons généralement sous 24h. Les conseils sont entièrement gratuits !
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="pc-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Ce que nous proposons</h3>
                        <ul className="text-muted-foreground space-y-2 text-sm md:text-base">
                          <li>• Conseils personnalisés selon votre budget</li>
                          <li>• Optimisation de configurations existantes</li>
                          <li>• Aide au choix des composants</li>
                          <li>• Compatibilité et assemblage</li>
                          <li>• Recommandations de sites de vente</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="pc-card glow-effect">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 text-center">
                      Service 100% Gratuit
                    </h3>
                    <p className="text-muted-foreground text-center text-sm md:text-base">
                      Nos conseils PC Gaming sont entièrement gratuits. 
                      Notre passion, c'est de vous aider à trouver la configuration parfaite !
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

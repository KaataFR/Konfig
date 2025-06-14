
import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, ExternalLink } from 'lucide-react';
import { FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold konfig-logo">KONFIG</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Conseils et configurations PC Gaming 2025. De 600€ à 4000€, 
              trouvez la configuration parfaite pour votre budget et vos besoins gaming.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/configurations" className="text-muted-foreground hover:text-primary transition-colors">
                  Configurations 2025
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact et réseaux - Icons only */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Me Suivre
            </h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:kaatafr@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/Fg78FgXp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#5865F2] transition-colors"
                title="Discord"
              >
                <SiDiscord className="h-5 w-5" />
              </a>
              <a 
                href="https://linktr.ee/KaataFR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Mes autres sites"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@kaatafr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@Kaata.A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Konfig by Kaata. Tous droits réservés. | Conseils Gaming PC pour tous les budgets.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

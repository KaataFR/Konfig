
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Cpu, HardDrive } from 'lucide-react';

interface PCCardProps {
  id: string;
  name: string;
  price: string;
  idealFor: string;
  image: string;
  mainSpecs: {
    cpu: string;
    gpu: string;
    ram: string;
  };
  featured?: boolean;
}

const PCCard: React.FC<PCCardProps> = ({ 
  id, 
  name, 
  price, 
  idealFor, 
  image, 
  mainSpecs, 
  featured = false 
}) => {
  return (
    <div className={`pc-card relative ${featured ? 'glow-effect' : ''}`}>
      {featured && (
        <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
          Populaire
        </Badge>
      )}
      
      <div className="aspect-video bg-secondary rounded-lg mb-4 relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/80 text-foreground">
            {price}
          </Badge>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm">{idealFor}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Cpu className="h-4 w-4 text-primary mr-2" />
            <span className="text-muted-foreground">{mainSpecs.cpu}</span>
          </div>
          <div className="flex items-center text-sm">
            <Monitor className="h-4 w-4 text-primary mr-2" />
            <span className="text-muted-foreground">{mainSpecs.gpu}</span>
          </div>
          <div className="flex items-center text-sm">
            <HardDrive className="h-4 w-4 text-primary mr-2" />
            <span className="text-muted-foreground">{mainSpecs.ram}</span>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link to={`/configurations#${id}`}>
            Voir les détails
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PCCard;

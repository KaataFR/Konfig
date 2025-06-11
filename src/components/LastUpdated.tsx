
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

interface LastUpdatedProps {
  date: string;
  className?: string;
}

const LastUpdated: React.FC<LastUpdatedProps> = ({ date, className = '' }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getDaysSince = (dateString: string) => {
    const today = new Date();
    const updateDate = new Date(dateString);
    const diffTime = Math.abs(today.getTime() - updateDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysSince = getDaysSince(date);
  const isRecent = daysSince <= 30; // Considéré comme récent si moins de 30 jours

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge 
        variant={isRecent ? "default" : "secondary"} 
        className="text-xs px-2 py-1"
      >
        <Calendar className="h-3 w-3 mr-1" />
        Mis à jour le {formatDate(date)}
      </Badge>
      {daysSince <= 7 && (
        <Badge variant="outline" className="text-xs px-2 py-1 border-green-500 text-green-700">
          <Clock className="h-3 w-3 mr-1" />
          Récent
        </Badge>
      )}
    </div>
  );
};

export default LastUpdated;

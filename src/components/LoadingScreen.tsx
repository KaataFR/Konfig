
import React, { useEffect, useState } from 'react';
import { Monitor, Gamepad2 } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Désactiver le scroll du body pendant le chargement
    document.body.style.overflow = 'hidden';
    
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 30);

    // Nettoyer et réactiver le scroll quand le composant se démonte
    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8 w-full max-w-lg px-4">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Monitor className="h-12 w-12 text-primary animate-pulse" />
          <span className="text-5xl font-bold konfig-logo select-none">KONFIG</span>
          <Gamepad2 className="h-12 w-12 text-primary animate-pulse" />
        </div>
        
        <div className="space-y-4">
          <div className="w-full max-w-80 mx-auto bg-secondary rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground select-none">
            Chargement des configurations Gaming 2025...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Sites Recommandés', href: '/sites-recommandes' },
    { name: 'Contact', href: '/contact' },
  ];

  const budgetRanges = [
    { price: '800€', href: '/budget-800' },
    { price: '1000€', href: '/budget-1000' },
    { price: '1500€', href: '/budget-1500' },
    { price: '2000€', href: '/budget-2000' },
    { price: '3000€', href: '/budget-3000' },
    { price: '5000€', href: '/budget-5000' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleBudgetClick = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleConfigurationsClick = () => {
    if (location.pathname === '/configurations') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/configurations');
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={handleHomeClick} className="group">
            <span className="text-3xl font-bold konfig-logo">
              KONFIG
            </span>
          </button>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Section gauche : Accueil, Voir les configs, Budget */}
            <button
              onClick={handleHomeClick}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
              }`}
            >
              Accueil
            </button>
            
            <Button asChild variant="outline">
              <button onClick={handleConfigurationsClick}>Voir les Configs</button>
            </Button>

            {/* Budget Dropdown */}
            <div className="relative group">
              <Button variant="outline" className="flex items-center space-x-2">
                <Euro className="h-4 w-4" />
                <span>Budget</span>
              </Button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2 space-y-1">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget.price}
                      onClick={() => handleBudgetClick(budget.href)}
                      className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors"
                    >
                      Configuration {budget.price}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section droite */}
            <div className="flex items-center space-x-6 ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Mobile */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleHomeClick();
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-left ${
                      isActive('/')
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    Accueil
                  </button>
                  
                  <Button 
                    onClick={() => {
                      setIsOpen(false);
                      handleConfigurationsClick();
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Voir les Configs
                  </Button>
                  
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-foreground mb-2">Budget</p>
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.price}
                        onClick={() => handleBudgetClick(budget.href)}
                        className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Configuration {budget.price}
                      </button>
                    ))}
                  </div>

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

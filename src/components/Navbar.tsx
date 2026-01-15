import { Car, Bike, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-display font-bold text-foreground">VANT</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#veiculos" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Veículos
            </a>
            <a href="#carros" className="text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center gap-2">
              <Car className="w-4 h-4" />
              Carros
            </a>
            <a href="#motos" className="text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center gap-2">
              <Bike className="w-4 h-4" />
              Motos
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Serviços
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+351123456789" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+351 123 456 789</span>
            </a>
            <Button variant="hero" size="sm">
              Agendar Visita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href="#veiculos" className="text-foreground py-2 font-medium">Veículos</a>
              <a href="#carros" className="text-foreground py-2 font-medium flex items-center gap-2">
                <Car className="w-4 h-4" /> Carros
              </a>
              <a href="#motos" className="text-foreground py-2 font-medium flex items-center gap-2">
                <Bike className="w-4 h-4" /> Motos
              </a>
              <a href="#servicos" className="text-foreground py-2 font-medium">Serviços</a>
              <a href="#contacto" className="text-foreground py-2 font-medium">Contacto</a>
              <Button variant="hero" className="mt-2">Agendar Visita</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

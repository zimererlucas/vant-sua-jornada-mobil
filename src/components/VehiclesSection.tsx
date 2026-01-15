import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fuel, Gauge, Users } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import suvFamily from "@/assets/suv-family.jpg";
import carUrban from "@/assets/car-urban.jpg";
import motoSport from "@/assets/moto-sport.jpg";

interface VehicleCardProps {
  image: string;
  category: string;
  name: string;
  price: string;
  specs: {
    fuel?: string;
    power?: string;
    seats?: string;
  };
}

const VehicleCard = ({ image, category, name, price, specs }: VehicleCardProps) => {
  return (
    <Card variant="vehicle" className="group cursor-pointer overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          {specs.fuel && (
            <div className="flex items-center gap-1">
              <Fuel className="w-4 h-4" />
              {specs.fuel}
            </div>
          )}
          {specs.power && (
            <div className="flex items-center gap-1">
              <Gauge className="w-4 h-4" />
              {specs.power}
            </div>
          )}
          {specs.seats && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {specs.seats}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">A partir de</span>
            <div className="text-2xl font-display font-bold text-foreground">{price}</div>
          </div>
          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
            Ver mais
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const VehiclesSection = () => {
  const vehicles = [
    {
      image: heroCar,
      category: "Desportivo",
      name: "GT Sport 500",
      price: "€45.900",
      specs: { fuel: "Gasolina", power: "450cv", seats: "2 lugares" },
    },
    {
      image: suvFamily,
      category: "SUV",
      name: "Explorer Premium",
      price: "€38.500",
      specs: { fuel: "Híbrido", power: "280cv", seats: "7 lugares" },
    },
    {
      image: carUrban,
      category: "Urbano",
      name: "City Compact",
      price: "€18.900",
      specs: { fuel: "Elétrico", power: "150cv", seats: "4 lugares" },
    },
    {
      image: motoSport,
      category: "Moto",
      name: "Thunder 900",
      price: "€14.500",
      specs: { fuel: "Gasolina", power: "180cv" },
    },
  ];

  return (
    <section id="veiculos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Catálogo
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Veículos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra a nossa seleção de carros e motos novos e seminovos, 
            prontos para a estrada.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Ver Todos os Veículos
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;

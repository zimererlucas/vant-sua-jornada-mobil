import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, RefreshCw, Shield, Wrench, Truck, Headphones } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Financiamento Facilitado",
    description: "Taxas competitivas e aprovação rápida. Simulações personalizadas para o seu perfil.",
  },
  {
    icon: RefreshCw,
    title: "Troca de Usados",
    description: "Avaliamos o seu veículo atual e oferecemos o melhor valor de retoma.",
  },
  {
    icon: Shield,
    title: "Seguro Automóvel",
    description: "Parcerias com as melhores seguradoras para proteger o seu investimento.",
  },
  {
    icon: Wrench,
    title: "Oficina & Manutenção",
    description: "Técnicos certificados e peças originais. Garantia de qualidade em todos os serviços.",
  },
  {
    icon: Truck,
    title: "Entrega ao Domicílio",
    description: "Entregamos o seu novo veículo onde estiver, em todo o país.",
  },
  {
    icon: Headphones,
    title: "Apoio 24/7",
    description: "Assistência na estrada e suporte técnico disponível a qualquer hora.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Mais do que Veículos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Na VANT oferecemos uma experiência completa: do financiamento ao pós-venda, 
            estamos consigo em toda a jornada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} variant="service" className="group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

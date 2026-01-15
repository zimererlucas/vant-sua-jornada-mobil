import { Check } from "lucide-react";

const reasons = [
  "Mais de 15 anos de experiência no mercado automóvel",
  "Veículos inspecionados e certificados por técnicos especializados",
  "Garantia alargada em todos os veículos",
  "Financiamento com as melhores condições do mercado",
  "Transparência total: histórico completo de cada veículo",
  "Equipa dedicada e atendimento personalizado",
];

const WhyVantSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Porquê a VANT?
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              A vantagem de escolher quem
              <span className="text-primary"> entende de mobilidade</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Na VANT, cada cliente é único. Trabalhamos para encontrar o veículo 
              perfeito para as suas necessidades, com total transparência e confiança.
            </p>

            {/* Reasons List */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-display font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-display font-bold text-primary mb-2">2.5K</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-display font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Veículos em Stock</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="text-5xl font-display font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVantSection;

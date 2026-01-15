import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Visite-nos ou entre em contacto
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Estamos prontos para o ajudar a encontrar o veículo perfeito. 
              Visite o nosso showroom ou contacte-nos para mais informações.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Morada</h4>
                  <p className="text-muted-foreground">
                    Avenida da Liberdade, 123<br />
                    1250-096 Lisboa, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Telefone</h4>
                  <p className="text-muted-foreground">+351 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@vant.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Horário</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 9h - 19h<br />
                    Sábado: 10h - 18h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Envie-nos uma mensagem
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <Input placeholder="O seu nome" className="bg-secondary/50 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="email@exemplo.com" className="bg-secondary/50 border-border" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <Input placeholder="+351 XXX XXX XXX" className="bg-secondary/50 border-border" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Veículo de Interesse (opcional)
                </label>
                <Input placeholder="Ex: SUV Familiar, Moto Desportiva..." className="bg-secondary/50 border-border" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

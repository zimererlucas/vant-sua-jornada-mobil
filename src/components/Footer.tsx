import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vant-navy border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-display font-bold text-foreground">VANT</span>
            </div>
            <p className="text-muted-foreground mb-6">
              A sua vantagem na mobilidade. Carros e motos novos e seminovos, 
              com financiamento facilitado e serviço de excelência.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Veículos */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">Veículos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carros Novos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carros Seminovos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Motos Novas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Motos Seminovas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Veículos Importados</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financiamento</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Seguros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Troca de Usados</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Oficina</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pós-Venda</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Testemunhos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos e Condições</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 VANT. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Desenvolvido com ❤️ em Portugal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

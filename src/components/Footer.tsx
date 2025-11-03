import { Sparkles, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">ASTRA</h3>
                  <p className="text-xs text-primary">NEW WORLD</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Construindo o Novo Mundo com transparência e propósito. Um ecossistema onde tecnologia e consciência se unem.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Links Rápidos</h4>
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('transparencia')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Portal de Transparência
                </button>
                <button
                  onClick={() => scrollToSection('projetos')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Projetos
                </button>
                <button
                  onClick={() => scrollToSection('novo-mundo')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  O Novo Mundo
                </button>
                <button
                  onClick={() => scrollToSection('investidores')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Investidores
                </button>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Contato</h4>
              <div className="space-y-3">
                <a
                  href="mailto:contato@astranewworld.org"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">contato@astranewworld.org</span>
                </a>
                <a
                  href="tel:+556599999999"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+55 (65) 9999-9999</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Fundação Astra New World. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Transparência. Inovação. Consciência.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2 } from "lucide-react";
export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 cosmic-background"></div>
      
      {/* Animated globe/orb in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-3xl animate-pulse-glow"></div>
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-rotate-slow"></div>
          <div className="absolute inset-8 rounded-full border border-secondary/20 animate-rotate-slow" style={{
          animationDirection: 'reverse'
        }}></div>
          <Globe2 className="absolute inset-0 m-auto w-32 h-32 text-primary animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl font-bold text-glow text-slate-50 md:text-8xl">
              UMA NOVA ERA <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">COMEÇA AQUI!</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transparência. Inovação. Consciência. <br />
              Bem-vindo à <span className="text-primary font-semibold">Fundação Astra New World</span>
            </p>
          </div>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed md:text-lg font-medium text-slate-50 text-center">A Astra New World é uma fundação global que conecta inovação, consciência e sustentabilidade criando polos educacionais e projetos reais no coração da Amazônia.<span className="text-primary">consciência e sustentabilidade</span>, <span className="text-secondary">energia humana</span> e <span className="text-accent">consciência planetária</span> para construir o futuro.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <Button onClick={() => scrollToSection('transparencia')} className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group" size="lg">
              Portal de Transparência
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => scrollToSection('projetos')} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-secondary" size="lg">
              Projetos Ativos
            </Button>
            <Button onClick={() => scrollToSection('investidores')} className="glass-panel hover:bg-white/10" size="lg" variant="outline">
              Seja um Investidor
            </Button>
            <Button onClick={() => scrollToSection('novo-mundo')} className="glass-panel hover:bg-white/10" size="lg" variant="outline">
              A Missão Astra
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground italic">
              "Cada ação é visível. Cada investimento é rastreável. <br />
              Cada pessoa envolvida torna-se parte viva desse novo sistema mundial."
            </p>
          </div>
        </div>
      </div>
    </section>;
};
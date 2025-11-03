import { Card } from "@/components/ui/card";
import { Mountain, Droplets, Wind, Flame, Sparkles } from "lucide-react";

export const NewWorld = () => {
  const elements = [
    {
      icon: Mountain,
      name: "TERRA",
      meaning: "Estrutura e Construção",
      description: "A base sólida que sustenta toda transformação. Representa os projetos físicos e a infraestrutura do novo mundo.",
      color: "from-amber-600 to-orange-500",
    },
    {
      icon: Droplets,
      name: "ÁGUA",
      meaning: "Fluidez e Cooperação",
      description: "O fluxo contínuo de recursos e ideias. Representa a transparência e a capacidade de adaptação às mudanças.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Wind,
      name: "AR",
      meaning: "Conhecimento e Educação",
      description: "A propagação do saber e da consciência. Representa os projetos educacionais e a disseminação de informação.",
      color: "from-sky-400 to-indigo-300",
    },
    {
      icon: Flame,
      name: "FOGO",
      meaning: "Energia e Inovação",
      description: "A força transformadora que impulsiona mudanças. Representa a tecnologia, a paixão e o espírito empreendedor.",
      color: "from-red-500 to-orange-600",
    },
    {
      icon: Sparkles,
      name: "ÉTER",
      meaning: "Consciência e Conexão",
      description: "A força invisível que une tudo. Representa a consciência coletiva e a conexão espiritual entre todos os envolvidos.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="novo-mundo" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">
              O <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow">
                Novo Mundo
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A conexão entre os <span className="text-primary font-semibold">cinco elementos</span> fundamentais que sustentam nossa visão de transformação planetária.
            </p>
          </div>

          {/* Central Philosophy */}
          <div className="glass-panel p-8 md:p-12 rounded-2xl text-center space-y-6">
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-2xl animate-pulse-glow"></div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-rotate-slow"></div>
              <Sparkles className="absolute inset-0 m-auto w-16 h-16 text-primary animate-float" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground leading-relaxed">
              "O Novo Mundo nasce quando a consciência humana se une à tecnologia para servir à vida."
            </blockquote>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A ASTRA NEW WORLD não é apenas uma fundação. É um <span className="text-primary">portal para o futuro</span>, um código de transparência universal e uma luz guiando a humanidade para um novo nível de consciência.
            </p>
          </div>

          {/* Elements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elements.map((element, index) => (
              <Card 
                key={index} 
                className="holographic-card p-6 space-y-4 hover:scale-105 transition-all"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${element.color} flex items-center justify-center shadow-lg`}>
                    <element.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{element.name}</h3>
                    <p className="text-sm text-primary font-semibold">{element.meaning}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {element.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="text-center space-y-4 pt-8">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Nossa Missão
              </p>
            </div>
            <p className="text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Construir um ecossistema global onde <span className="text-primary font-semibold">tecnologia</span>, <span className="text-secondary font-semibold">educação</span> e <span className="text-accent font-semibold">energia humana</span> convergem para criar um futuro sustentável, transparente e evolutivo — começando por Novo Mundo, Mato Grosso, e expandindo para o planeta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

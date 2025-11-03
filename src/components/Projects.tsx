import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code2, Cpu, Heart, Leaf, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: Code2,
      name: "Escola de Programação",
      description: "Formação gratuita em desenvolvimento de software para jovens de Novo Mundo, MT",
      progress: 85,
      goal: "R$ 600.000",
      raised: "R$ 510.000",
      status: "Em andamento",
      link: "https://astranewworld.lovable.app/",
    },
    {
      icon: Cpu,
      name: "Polo Tecnológico Astra",
      description: "Centro de inovação com IA, blockchain e tecnologias emergentes",
      progress: 45,
      goal: "R$ 2.000.000",
      raised: "R$ 900.000",
      status: "Captando fundos",
      link: "#",
    },
    {
      icon: Heart,
      name: "Hospital do Futuro",
      description: "Assistência médica avançada com telemedicina e equipamentos de última geração",
      progress: 30,
      goal: "R$ 5.000.000",
      raised: "R$ 1.500.000",
      status: "Captando fundos",
      link: "#",
    },
    {
      icon: Leaf,
      name: "Reflorestamento Inteligente",
      description: "Recuperação de áreas degradadas com monitoramento via satélite e IoT",
      progress: 70,
      goal: "R$ 800.000",
      raised: "R$ 560.000",
      status: "Em andamento",
      link: "#",
    },
  ];

  return (
    <section id="projetos" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              Projetos <span className="text-secondary text-glow">Ativos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada projeto é uma semente de transformação. <br />
              Acompanhe o impacto real de cada investimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="holographic-card p-8 space-y-6 hover:scale-[1.02] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary flex-shrink-0">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Em andamento" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="text-primary font-semibold">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Arrecadado: <span className="text-foreground font-semibold">{project.raised}</span></span>
                    <span className="text-muted-foreground">Meta: <span className="text-foreground font-semibold">{project.goal}</span></span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                    Apoiar este projeto
                  </Button>
                  {project.link !== "#" && (
                    <Button variant="outline" className="glass-panel" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

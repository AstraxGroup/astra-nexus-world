import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Users, Target, ExternalLink } from "lucide-react";

export const TransparencyPortal = () => {
  const transactions = [
    { id: 1, value: "R$ 500.000", source: "Tech Corp Brasil", destination: "Escola de Programação", date: "15/01/2024", project: "Educação" },
    { id: 2, value: "R$ 250.000", source: "Investidor Anônimo", destination: "Polo Tecnológico", date: "12/01/2024", project: "Infraestrutura" },
    { id: 3, value: "R$ 150.000", source: "Green Foundation", destination: "Reflorestamento", date: "08/01/2024", project: "Sustentabilidade" },
    { id: 4, value: "R$ 75.000", source: "Maria Silva", destination: "Hospital do Futuro", date: "05/01/2024", project: "Saúde" },
  ];

  const stats = [
    { icon: DollarSign, label: "Total Arrecadado", value: "R$ 2.5M", change: "+15%" },
    { icon: Users, label: "Investidores Ativos", value: "127", change: "+23%" },
    { icon: Target, label: "Projetos Financiados", value: "8", change: "+2" },
    { icon: TrendingUp, label: "Impacto Social", value: "98%", change: "+5%" },
  ];

  return (
    <section id="transparencia" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              Portal de <span className="text-primary text-glow">Transparência</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acompanhe em tempo real cada investimento. <br />
              Transparência total do código à execução.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="holographic-card p-6 space-y-2 hover:scale-105 transition-transform">
                <div className="flex items-center justify-between">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <span className="text-sm text-green-400 font-semibold">{stat.change}</span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Blockchain Visual */}
          <Card className="glass-panel p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Transações em Blockchain</h3>
              <Button variant="outline" className="glass-panel">
                Filtrar <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {transactions.map((tx, index) => (
                <div key={tx.id} className="relative">
                  {/* Connection line */}
                  {index < transactions.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-50"></div>
                  )}
                  
                  <div className="holographic-card p-6 hover:scale-[1.02] transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      {/* Block indicator */}
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                          <span className="text-lg font-bold">#{tx.id}</span>
                        </div>
                      </div>

                      {/* Transaction details */}
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Valor</p>
                          <p className="text-lg font-bold text-primary">{tx.value}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Origem</p>
                          <p className="text-base font-medium text-foreground">{tx.source}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Destino</p>
                          <p className="text-base font-medium text-foreground">{tx.destination}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Data</p>
                          <p className="text-base text-foreground">{tx.date}</p>
                          <span className="inline-block mt-1 px-2 py-1 rounded text-xs bg-secondary/20 text-secondary">
                            {tx.project}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground glow-primary">
                Contribua com Transparência
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

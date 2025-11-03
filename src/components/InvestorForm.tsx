import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Rocket, Shield, TrendingUp } from "lucide-react";

export const InvestorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    amount: "",
    project: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.country) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Success
    toast.success("Obrigado! Entraremos em contato em breve para iniciar sua jornada no Novo Mundo.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      country: "",
      amount: "",
      project: "",
    });
  };

  return (
    <section id="investidores" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              Investidores & <span className="text-accent text-glow">Parceiros</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Torne-se parte da construção do Novo Mundo. <br />
              Cada contribuição é auditável e registrada publicamente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="space-y-6">
              <Card className="holographic-card p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Transparência Total</h3>
                    <p className="text-muted-foreground">
                      Cada contribuição é auditável e registrada publicamente em blockchain. Você acompanha em tempo real onde e como seus recursos estão sendo aplicados.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="holographic-card p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center glow-secondary flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Impacto Mensurável</h3>
                    <p className="text-muted-foreground">
                      Relatórios detalhados de impacto social, ambiental e econômico. Você verá as vidas transformadas e o futuro sendo construído.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="holographic-card p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center glow-accent flex-shrink-0">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Acesso Exclusivo</h3>
                    <p className="text-muted-foreground">
                      Participe de eventos, encontros com a equipe e tenha voz ativa nas decisões estratégicas da fundação.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <Card className="glass-panel p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome / Empresa *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome ou razão social"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-panel"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-panel"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">País *</Label>
                  <Input
                    id="country"
                    placeholder="Brasil"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="glass-panel"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Valor Estimado de Contribuição</Label>
                  <Input
                    id="amount"
                    placeholder="R$ 50.000"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="glass-panel"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Projeto de Interesse</Label>
                  <Select value={formData.project} onValueChange={(value) => setFormData({ ...formData, project: value })}>
                    <SelectTrigger className="glass-panel">
                      <SelectValue placeholder="Selecione um projeto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="escola">Escola de Programação</SelectItem>
                      <SelectItem value="polo">Polo Tecnológico</SelectItem>
                      <SelectItem value="hospital">Hospital do Futuro</SelectItem>
                      <SelectItem value="reflorestamento">Reflorestamento</SelectItem>
                      <SelectItem value="geral">Fundação em Geral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white glow-primary"
                  size="lg"
                >
                  Torne-se parte do Novo Mundo
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obrigatórios. Seus dados serão tratados com total privacidade e segurança.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

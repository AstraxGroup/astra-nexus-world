import { CosmicBackground } from "@/components/CosmicBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TransparencyPortal } from "@/components/TransparencyPortal";
import { Projects } from "@/components/Projects";
import { NewWorld } from "@/components/NewWorld";
import { InvestorForm } from "@/components/InvestorForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen cosmic-background">
      <CosmicBackground />
      <Navbar />
      <Hero />
      <TransparencyPortal />
      <Projects />
      <NewWorld />
      <InvestorForm />
      <Footer />
    </div>
  );
};

export default Index;

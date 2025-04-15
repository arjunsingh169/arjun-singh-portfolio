
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import ArduinoController from "./ArduinoController";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";

const Index = () => {
  const [showArduino, setShowArduino] = useState(false);
  const { toast } = useToast();

  const toggleArduinoView = () => {
    setShowArduino(!showArduino);
    toast({
      title: showArduino ? "Portfolio View" : "Arduino Controller",
      description: showArduino ? "Showing portfolio content" : "Showing Arduino LED controller",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={toggleArduinoView}
          variant="outline" 
          size="lg"
          className="rounded-full h-14 w-14 p-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Cpu className={`h-6 w-6 transition-all duration-300 ${showArduino ? 'text-primary' : ''}`} />
        </Button>
      </div>
      
      {showArduino ? (
        <ArduinoController />
      ) : (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </>
      )}
      
      <Toaster />
    </div>
  );
};

export default Index;

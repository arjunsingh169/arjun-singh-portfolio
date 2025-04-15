
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-slide-up">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/8dd064c3-819b-49b2-8804-c1aabd1ff799.png"
              alt="Arjun Singh"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
            Hi, I'm <span className="text-primary">Arjun Singh</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
            An aspiring web developer passionate about creating beautiful and functional websites
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              View My Work
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

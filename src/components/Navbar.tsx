
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <span className="text-xl font-bold text-primary">Arjun Singh</span>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary">About</a>
            <a href="#skills" className="text-gray-600 hover:text-primary">Skills</a>
            <a href="#achievements" className="text-gray-600 hover:text-primary">Achievements</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}


import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="max-w-xl mx-auto space-y-6">
          <a href="mailto:as2532@srmist.edu.in" className="contact-item">
            <Mail className="h-5 w-5" />
            <span>as2532@srmist.edu.in</span>
          </a>
          <a href="tel:+9140762428" className="contact-item">
            <Phone className="h-5 w-5" />
            <span>+91 40762428</span>
          </a>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" /> GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://discord.com/users/yourusername" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

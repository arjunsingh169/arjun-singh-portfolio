
import { Mail, Phone, Github, Linkedin } from "lucide-react";

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
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-gray-600 hover:text-primary">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

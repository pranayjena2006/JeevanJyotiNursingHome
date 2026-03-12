import { Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Logo & Name */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">JJ</span>
          </div>
          <div>
            <h3 className="font-bold text-lg">Jeevan Jyoti</h3>
            <p className="text-xs text-background/60">Nursing Home</p>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
          <a href="#about" className="text-background/80 hover:text-background transition-colors">
            About
          </a>
          <a href="#services" className="text-background/80 hover:text-background transition-colors">
            Services
          </a>
          <a href="#facilities" className="text-background/80 hover:text-background transition-colors">
            Facilities
          </a>
          <a href="#doctors" className="text-background/80 hover:text-background transition-colors">
            Doctors
          </a>
          <a href="#contact" className="text-background/80 hover:text-background transition-colors">
            Contact
          </a>
        </nav>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-sm">
          <a 
            href="tel:+916655222999" 
            className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
          >
            <Phone className="h-4 w-4" />
            +91 6655 222 999
          </a>
          <a 
            href="https://maps.google.com/?q=Jeevan+Jyoti+Nursing+Home+Titlagarh" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
          >
            <MapPin className="h-4 w-4" />
            Titlagarh, Odisha
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-6">
          <p className="text-center text-xs text-background/60">
            {currentYear} Jeevan Jyoti Nursing Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

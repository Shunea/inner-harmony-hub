import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Crisis Banner */}
      <div className="bg-destructive/90 text-destructive-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 md:mt-0" />
            <div className="text-sm">
              <p className="font-semibold mb-1">În criză?</p>
              <p className="opacity-90">
                Eu nu ofer servicii de urgență. Dacă ai gânduri suicidare sau dorințe de a-ți face rău, 
                te rog să apelezi <strong>112</strong> sau: Telefonul copilului - <strong>116 111</strong> (24h) | 
                Telefon de încredere pentru femei/fete - <strong>080088008</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Natalia Șargu</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Psiholog clinician și psihoterapeut integrativ în supervizare. 
              Te ajut să te cunoști, să te înțelegi și să îți creezi o viață mai echilibrată emoțional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Navigație</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/despre" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Despre mine
                </Link>
              </li>
              <li>
                <Link to="/servicii" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Chișinău, Republica Moldova</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@nataliasargu.md" className="hover:text-primary-foreground transition-colors">
                  contact@nataliasargu.md
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+37360000000" className="hover:text-primary-foreground transition-colors">
                  +373 60 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Natalia Șargu. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

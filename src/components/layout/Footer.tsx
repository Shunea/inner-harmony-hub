import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, AlertTriangle, Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { socialLinks } from "@/config/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Crisis Banner */}
      <div className="bg-destructive/90 text-destructive-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-2">În criză?</p>
                <p className="opacity-90 leading-relaxed">
                  Te rog să reții că eu nu ofer servicii de asistență în caz de urgență. Dacă te afli în prezent în criză, 
                  ai gânduri suicidare sau dorințe de a-ți face rău în vreun fel, te rog să apelezi la <strong>112</strong> sau 
                  la alte servicii de suport pentru cazurile de urgență.
                </p>
                <p className="opacity-90 mt-2">
                  <strong>Alte contacte care v-ar putea fi de ajutor:</strong>
                </p>
                <ul className="opacity-90 mt-1 space-y-1">
                  <li>• Telefonul copilului - <strong>116 111</strong> (liniile sunt deschise 24 de ore pe zi)</li>
                  <li>• Telefon de încredere pentru femei/fete - <strong>080088008</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Natalia Șargu</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Psiholog clinician și psihoterapeut integrativ în supervizare.
              Te ajut să te cunoști, să te înțelegi și să îți creezi o viață mai echilibrată emoțional.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
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
                <Link to="/despre-natalia-sargu" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Despre mine
                </Link>
              </li>
              <li>
                <Link to="/servicii" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Întrebări frecvente
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
                <a href="tel:+37369234250" className="hover:text-primary-foreground transition-colors">
                  +373 69 234 250
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

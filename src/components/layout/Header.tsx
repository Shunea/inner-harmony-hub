import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/despre-natalia-sargu", label: "Despre mine" },
  { href: "/servicii", label: "Servicii" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col hover:opacity-80 transition-opacity"
          >
            <span className="font-heading text-xl md:text-2xl font-semibold text-primary">
              Natalia Șargu
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Psiholog & Psihoterapeut
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 hover:text-primary relative py-2",
                    location.pathname === link.href
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Programează o ședință</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-base font-medium transition-colors py-2",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="default" className="w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Programează o ședință
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "primary" | "secondary";
}

const CTASection = ({
  title = "Ești pregătit să faci primul pas?",
  description = "Programează o ședință de cunoaștere pentru a discuta despre cum te pot ajuta. Primul pas este cel mai important.",
  variant = "primary",
}: CTASectionProps) => {
  if (variant === "secondary") {
    return (
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12 shadow-medium border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Programează online
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="tel:+37369234250">
                    <Phone className="w-5 h-5 mr-2" />
                    Sună acum
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            {title}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Programează o ședință
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/servicii">Vezi serviciile</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

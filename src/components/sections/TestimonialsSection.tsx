import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria T.",
    role: "Client - Terapie anxietate",
    content:
      "După câteva luni de terapie cu Natalia, am învățat să îmi gestionez anxietatea și atacurile de panică. Mă simt din nou în control asupra vieții mele. Recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Andrei P.",
    role: "Client - Dezvoltare personală",
    content:
      "Abordarea empatică și profesională m-a ajutat să înțeleg tiparele care mă blocau. Acum am mai multă claritate și încredere în deciziile pe care le iau.",
    rating: 5,
  },
  {
    name: "Elena M.",
    role: "Client din diasporă - Online",
    content:
      "Fiind în străinătate, terapia online în limba română a fost exact ce aveam nevoie. Natalia creează un spațiu sigur și confortabil chiar și prin ecran.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
            Testimoniale
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ce spun clienții mei
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback-ul celor care au parcurs procesul terapeutic alături de mine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

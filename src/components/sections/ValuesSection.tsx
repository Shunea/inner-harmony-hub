import { Shield, Heart, Lightbulb, Users, Leaf, Eye } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Confidențialitate",
    description:
      "Tot ce discutăm rămâne între noi. Respect strict codul etic și secretul profesional.",
  },
  {
    icon: Heart,
    title: "Empatie",
    description:
      "Te ascult fără să judec și încerc să înțeleg lumea prin ochii tăi.",
  },
  {
    icon: Lightbulb,
    title: "Profesionalism",
    description:
      "Folosesc tehnici validate științific, actualizate cu cele mai recente cercetări.",
  },
  {
    icon: Users,
    title: "Colaborare",
    description:
      "Lucrăm împreună ca parteneri egali în procesul tău de vindecare.",
  },
  {
    icon: Leaf,
    title: "Creștere",
    description:
      "Cred în potențialul fiecărei persoane de a evolua și de a-și depăși limitele.",
  },
  {
    icon: Eye,
    title: "Autenticitate",
    description:
      "Te încurajez să fii tu însuți/însăți și să-ți descoperi vocea interioară.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-medium mb-3 tracking-wide uppercase text-sm">
            Filozofia mea
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Valorile care ghidează practica mea
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aceste principii stau la baza modului în care lucrez cu fiecare persoană.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

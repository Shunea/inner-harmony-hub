import { PhoneCall, Users, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Primul contact",
    description:
      "Completezi formularul de contact sau mă suni pentru a stabili o primă întâlnire. Răspund la orice întrebare ai avea despre procesul terapeutic.",
  },
  {
    icon: Users,
    step: "02",
    title: "Ședința de cunoaștere",
    description:
      "O întâlnire de 50-60 minute în care ne cunoaștem, discutăm despre motivele pentru care cauți sprijin și stabilim împreună obiectivele terapiei.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Procesul terapeutic",
    description:
      "Ședințe săptămânale sau bisăptămânale în care lucrăm împreună, folosind tehnici personalizate pentru nevoile tale specifice.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Progres și evoluție",
    description:
      "Evaluăm periodic progresul, ajustăm obiectivele și celebrăm fiecare pas înainte pe drumul spre echilibrul emoțional.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
            Cum funcționează
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Procesul terapeutic pas cu pas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fiecare călătorie începe cu un prim pas. Iată cum arată drumul nostru împreună.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
                  )}
                  
                  <div className="relative bg-card rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="font-heading text-3xl font-bold text-accent/30">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

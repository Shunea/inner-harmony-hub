import { Users, Clock, Award, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clienți ajutați",
    description: "Adulți și adolescenți",
  },
  {
    icon: Clock,
    value: "5000+",
    label: "Ore de terapie",
    description: "Experiență practică",
  },
  {
    icon: Award,
    value: "7+",
    label: "Ani de experiență",
    description: "În psihologie clinică",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Satisfacție",
    description: "Feedback pozitiv",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-primary-foreground/60 text-sm">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

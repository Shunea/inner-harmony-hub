import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Sparkles, Brain, Heart, Shield, Target, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Brain,
    title: "Terapie pentru Anxietate",
    description: "Gestionarea anxietății, atacurilor de panică și a stresului cronic prin tehnici validate științific.",
    details: ["Tehnici de relaxare", "Restructurare cognitivă", "Mindfulness", "Expunere graduală"],
  },
  {
    icon: Heart,
    title: "Terapie pentru Depresie",
    description: "Sprijin în procesul de recuperare, reconstrucția motivației și a sensului vieții.",
    details: ["Activare comportamentală", "Procesare emoțională", "Reconstrucție cognitivă", "Prevenție recăderi"],
  },
  {
    icon: Shield,
    title: "Lucrul cu Trauma",
    description: "Procesarea experiențelor traumatice într-un ritm sigur și respectuos.",
    details: ["Stabilizare emoțională", "Procesare trauma", "Integrare resurse", "Vindecare relațională"],
  },
  {
    icon: Users,
    title: "Dificultăți Relaționale",
    description: "Înțelegerea tiparelor relaționale și dezvoltarea unor relații mai sănătoase.",
    details: ["Comunicare asertivă", "Limite sănătoase", "Dependență emoțională", "Îmbunătățire relații"],
  },
  {
    icon: Target,
    title: "Dezvoltare Personală",
    description: "Claritate interioară, autocunoaștere și realizarea potențialului personal.",
    details: ["Definirea obiectivelor", "Creșterea încrederii", "Luarea deciziilor", "Autenticitate"],
  },
  {
    icon: Flower2,
    title: "Mindfulness și Reglare Emoțională",
    description: "Tehnici de conștientizare și echilibru emoțional pentru viața de zi cu zi.",
    details: ["Meditație ghidată", "Respirație conștientă", "Gestionare emoții", "Prezență"],
  },
];

const sessionInfo = [
  {
    title: "Prima ședință",
    description: "O întâlnire de cunoaștere în care discutăm despre motivele pentru care cauți sprijin și stabilim obiectivele terapiei.",
    duration: "50-60 minute",
  },
  {
    title: "Ședințe ulterioare",
    description: "Ședințe regulate în care lucrăm împreună la obiectivele stabilite, folosind tehnici adaptate nevoilor tale.",
    duration: "50 minute",
  },
];

const Servicii = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
              Servicii de psihoterapie
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Cum te pot ajuta
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Oferim sprijin personalizat pentru diverse provocări emoționale și de viață, 
              într-un mediu sigur și non-judgmental.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium border border-border/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="w-3 h-3 text-accent flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Cum decurge procesul terapeutic
              </h2>
              <p className="text-muted-foreground text-lg">
                Fiecare persoană este unică, iar terapia este adaptată nevoilor tale specifice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sessionInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-accent">{info.duration}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrative Approach */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
                Abordare Integrativă
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-center mb-8">
                Abordarea integrativă înseamnă că îmbin tehnici validate științific din mai multe orientări 
                psihoterapeutice — cognitiv-comportamentală, psihodinamică, umanistă, mindfulness — 
                adaptate nevoilor fiecărei persoane.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🧠</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-1">Cognitiv-Comportamental</h4>
                  <p className="text-sm text-muted-foreground">Schimbarea gândurilor și comportamentelor</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">💭</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-1">Psihodinamic</h4>
                  <p className="text-sm text-muted-foreground">Înțelegerea tiparelor inconștiente</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🌱</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-1">Mindfulness</h4>
                  <p className="text-sm text-muted-foreground">Prezență și reglare emoțională</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Ești pregătit să faci primul pas?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Programează o ședință de cunoaștere pentru a discuta despre cum te pot ajuta.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Programează acum
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicii;

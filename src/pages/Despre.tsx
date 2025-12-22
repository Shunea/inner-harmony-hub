import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import nataliaSeated from "@/assets/natalia-seated.jpg";

const qualifications = [
  "Psiholog, Master în Psihologie Clinică",
  "Master în Psihologie Organizațională",
  "Psihoterapeut integrativ în supervizare",
  "Certificare – Specialist în dezvoltare personală",
  "Specializare în lucrul cu anxietatea",
  "Specializare în lucrul cu trauma",
  "Specializare în tehnici de mindfulness și reglare emoțională",
];

const expertise = [
  {
    title: "Anxietate și atacuri de panică",
    description: "Te ajut să înțelegi mecanismele anxietății și să dezvolți strategii eficiente de gestionare.",
  },
  {
    title: "Stres cronic și oboseală emoțională",
    description: "Împreună identificăm sursele stresului și construim resurse de reziliență.",
  },
  {
    title: "Depresie",
    description: "Oferim sprijin în procesul de recuperare și reconstrucție a sensului vieții.",
  },
  {
    title: "Dificultăți relaționale",
    description: "Explorăm tiparele relaționale și dezvoltăm competențe de comunicare sănătoasă.",
  },
  {
    title: "Blocaje emoționale",
    description: "Identificăm și procesăm emoțiile blocate pentru a elibera energie și vitalitate.",
  },
  {
    title: "Dezvoltare personală",
    description: "Te susțin în procesul de autocunoaștere și realizare a potențialului personal.",
  },
];

const Despre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={nataliaSeated}
                  alt="Natalia Șargu - Cabinet de psihoterapie"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
                Despre mine
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Psiholog și psihoterapeut integrativ
              </h1>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Sunt <strong className="text-foreground">Natalia Șargu</strong>, psiholog și psihoterapeut integrativ în supervizare, 
                  cu studii de master în psihologie clinică și psihologie organizațională, și cu formare continuă 
                  în lucrul cu sănătatea emoțională a adulților și adolescenților.
                </p>
                <p>
                  Lucrez atât cu adulți, cât și cu adolescenți, oferind sprijin pentru gestionarea emoțiilor 
                  dificile, înțelegerea tiparelor relaționale, creșterea stimei de sine și dezvoltarea resurselor interne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                Abordarea mea
              </h2>
            </div>
            
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Abordarea mea este una <strong className="text-foreground">integrativă</strong>, ceea ce înseamnă 
                că îmbin tehnici validate științific din mai multe orientări psihoterapeutice, adaptate nevoilor fiecărei persoane.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Terapia nu este un proces standardizat, ci unul <strong className="text-foreground">personalizat</strong>, 
                construit în ritmul tău, într-un spațiu sigur și empatic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Domenii de expertiză
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Îmi dedic activitatea profesională pentru a oferi sprijin în diverse provocări emoționale și de viață.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                Formare profesională și specializări
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-foreground">{qualification}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diaspora Section */}
      <section className="py-20 lg:py-28 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Pentru românii din diasporă
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ofer ședințe de psihoterapie atât față în față, cât și online, inclusiv pentru persoane din diasporă 
              care își doresc să lucreze cu un psiholog vorbitor de limba română, într-un cadru cultural și emoțional familiar.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Programează o consultație online
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Despre;

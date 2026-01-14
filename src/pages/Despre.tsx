import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/sections/CTASection";
import { getPersonSchema, getBreadcrumbSchema } from "@/utils/structuredData";
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
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Acasă", url: "/" },
    { name: "Despre Natalia Șargu", url: "/despre-natalia-sargu" }
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [getPersonSchema(), breadcrumbSchema]
  };

  return (
    <Layout>
      <SEO
        title="Despre Natalia Șargu | Psiholog și Psihoterapeut Integrativ Chișinău"
        description="Psiholog clinician cu dublă specializare și psihoterapeut integrativ în supervizare. Parcurs profesional, formare continuă și abordare terapeutică integrativă în Chișinău."
        keywords="Natalia Șargu, psiholog Chișinău, psihoterapeut integrativ, master psihologie clinică, terapie integrativă Moldova"
        canonical="/despre-natalia-sargu"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-36 lg:pb-20 gradient-hero">
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
              <p className="text-secondary font-medium mb-4 tracking -wide uppercase text-sm">
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
                <p>
                  Am ales să devin psihoterapeut din dorința de a înțelege mai profund suferința emoțională și de a crea un spațiu în care oamenii să se simtă văzuți, ascultați și în siguranță. Abordarea integrativă îmi permite să adaptez intervențiile la nevoile fiecărui client, folosind metode validate științific, într-un cadru clar și structurat. Ofer ședințe într-un spațiu sigur și confidențial, în care procesul terapeutic se desfășoară cu respect, profesionalism și grijă față de limitele fiecărei persoane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Approach Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-accent mb-4">
                Abordarea mea terapeutică
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Ce înseamnă "integrativ"?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Abordarea integrativă înseamnă că îmbin tehnici validate științific din mai multe orientări 
                  psihoterapeutice — cognitiv-comportamentală, psihodinamică, umanistă, mindfulness — 
                  adaptate nevoilor fiecărei persoane.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-soft">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Personalizare, nu standardizare
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Terapia nu este un proces standardizat, ci unul personalizat, construit în ritmul tău, 
                  într-un spațiu sigur și empatic. Nu există două ședințe identice, pentru că fiecare 
                  persoană este unică.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🧠</div>
                  <h3 className="font-medium text-accent mb-3">Cognitiv-Comportamental</h3>
                  <p className="text-sm text-accent/50">Restructurarea gândurilor și schimbarea comportamentelor</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💭</div>
                  <h4 className="font-medium text-accent mb-3">Psihodinamic</h4>
                  <p className="text-sm text-accent/50">Înțelegerea tiparelor inconștiente și a istoriei personale</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌱</div>
                  <h4 className="font-medium text-accent mb-3">Mindfulness</h4>
                  <p className="text-sm text-accent/50">Prezență conștientă și reglare emoțională</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Expertise Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-8 h-8 text-white" />
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-accent">
                Domenii de expertiză
              </h2>
            </div>
            <p className="text-accent text-lg max-w-2xl mx-auto">
              Îmi dedic activitatea profesională pentru a oferi sprijin în diverse provocări emoționale și de viață.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
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
      <section className="py-20 lg:py-28 bg-card">
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
                  className="flex items-center gap-3 p-4 rounded-lg bg-background shadow-soft"
                >
                  <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                  <p className="text-foreground">{qualification}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-accent/10 rounded-xl p-6 flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Formare continuă
                </h3>
                <p className="text-muted-foreground text-sm">
                  Particip regulat la conferințe, workshop-uri și programe de formare pentru a fi la curent 
                  cu cele mai recente cercetări și tehnici terapeutice. Cred în importanța dezvoltării profesionale 
                  continue pentru a oferi clienților mei cel mai bun sprijin posibil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diaspora Section */}
      <section className="py-20 lg:py-28 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-medium mb-3 tracking-wide uppercase text-sm">
              Oriunde te-ai afla
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Pentru românii din diasporă
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Ofer ședințe de psihoterapie atât față în față, cât și online, inclusiv pentru persoane din diasporă 
              care își doresc să lucreze cu un psiholog vorbitor de limba română, într-un cadru cultural și emoțional familiar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Înțeleg provocările unice ale vieții în străinătate — sentimentul de înstrăinare, dorul de casă, 
              dificultățile de adaptare, presiunea de a "reuși". Te pot ajuta să navighezi aceste experiențe 
              într-un spațiu sigur, în limba ta maternă.
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

      {/* CTA Section */}
      <CTASection 
        title="Hai să ne cunoaștem"
        description="Prima ședință este o oportunitate de a vedea dacă suntem potriviți să lucrăm împreună. Fără presiune, fără obligații."
      />
    </Layout>
  );
};

export default Despre;

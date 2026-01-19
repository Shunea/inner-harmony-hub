import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, GraduationCap, Award, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/sections/CTASection";
import { getPersonSchema, getBreadcrumbSchema } from "@/utils/structuredData";
import nataliaSeated from "@/assets/natalia-seated.jpg";
import { getAboutSections } from "@/api/about";
import { DynamicAboutSection } from "@/components/about/DynamicAboutSection";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

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
  // Încercare de a prelua date din backend
  const { data: sections, isLoading } = useQuery({
    queryKey: ['about-sections'],
    queryFn: getAboutSections,
  });

  // Dacă backend returnează date (array nu-gol), folosește rendering dinamic
  const hasBackendData = sections && sections.length > 0;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Acasă", url: "/" },
    { name: "Despre Natalia Șargu", url: "/despre-natalia-sargu" }
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [getPersonSchema(), breadcrumbSchema]
  };

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="py-24">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  // Dacă sunt date în backend, folosește componenta dinamică
  if (hasBackendData) {
    const sortedSections = sections.sort((a, b) => a.displayOrder - b.displayOrder);
    const heroSection = sortedSections.find(s => s.sectionType === 'hero');

    return (
      <Layout>
        <SEO
          title={heroSection?.titleRo || "Despre Natalia Șargu | Psiholog și Psihoterapeut Integrativ Chișinău"}
          description={heroSection?.metaDescriptionRo || "Psiholog clinician cu dublă specializare și psihoterapeut integrativ în supervizare."}
          keywords="Natalia Șargu, psiholog Chișinău, psihoterapeut integrativ, master psihologie clinică, terapie integrativă Moldova"
          canonical="/despre-natalia-sargu"
          structuredData={structuredData}
        />
        {sortedSections.map((section) => (
          <DynamicAboutSection key={section.id} section={section} />
        ))}
      </Layout>
    );
  }

  // Fallback: Afișare conținut static original (când nu sunt date în backend)
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
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          {/* Title - Always First on Mobile */}
          <div className="mb-6 md:mb-8 lg:hidden">
            <p className="text-secondary font-medium mb-3 tracking-wide uppercase text-xs">
              Despre mine
            </p>
            <h1 className="font-heading text-3xl font-semibold text-foreground leading-tight">
              Psiholog și psihoterapeut integrativ
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start">
            {/* Text Content - Third on mobile, Second on desktop */}
            <div className="order-3 lg:order-2 animate-fade-in-up">
              {/* Title - Desktop Only */}
              <div className="hidden lg:block mb-6">
                <p className="text-secondary font-medium mb-4 tracking-wide uppercase text-sm">
                  Despre mine
                </p>
                <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                  Psiholog și psihoterapeut integrativ
                </h1>
              </div>

              <div className="space-y-3 md:space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Sunt <strong className="text-foreground">Natalia Șargu</strong>, psiholog și psihoterapeut integrativ în supervizare,
                  cu studii de master în psihologie clinică și psihologie organizațională, și cu formare continuă
                  în lucrul cu sănătatea emoțională a adulților și adolescenților.
                </p>
                <p>
                  Lucrez atât cu adulți, cât și cu adolescenți, oferind sprijin pentru gestionarea emoțiilor
                  dificile, înțelegerea tiparelor relaționale, creșterea stimei de sine și dezvoltarea resurselor interne.
                </p>
                <p className="hidden md:block">
                  Am ales să devin psihoterapeut din dorința de a înțelege mai profund suferința emoțională și de a crea un spațiu în care oamenii să se simtă văzuți, ascultați și în siguranță. Abordarea integrativă îmi permet să adaptez intervențiile la nevoile fiecărui client, folosind metode validate științific, într-un cadru clar și structurat. Ofer ședințe într-un spațiu sigur și confidențial, în care procesul terapeutic se desfășoară cu respect, profesionalism și grijă față de limitele fiecărei persoane.
                </p>
              </div>
            </div>

            {/* Image - Second on mobile, First on desktop */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={nataliaSeated}
                  alt="Natalia Șargu - Cabinet de psihoterapie"
                  className="w-full h-auto object-contain"
                />
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
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-accent mb-4">
              Domenii de expertiză
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lucrez cu o varietate de dificultăți emoționale și psihologice, oferind sprijin personalizat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
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
      <section className="pt-20 lg:pt-28 pb-12 lg:pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
                Parcurs profesional
              </h2>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <ul className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-foreground"
                  >
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diaspora Section */}
      <section className="pt-12 lg:pt-16 pb-20 lg:pb-28 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6">
              Suport pentru diaspora
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Înțeleg provocările unice cu care se confruntă cei care trăiesc departe de casă.
                Adaptarea culturală, identitatea, sentimentele de singurătate și distanța de familie
                pot crea presiuni emoționale care afectează bunăstarea zilnică.
              </p>
              <p>
                Ofer ședințe online adaptate nevoilor diasporei, într-un spațiu unde poți explora
                aceste experiențe în română, rusă sau engleză.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">
                Programează o ședință
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Despre;

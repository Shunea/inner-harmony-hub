import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Video, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import StatsSection from "@/components/sections/StatsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactModal from "@/components/ContactModal";
import { getLocalBusinessSchema, getPersonSchema } from "@/utils/structuredData";
import nataliaPortrait from "@/assets/natalia-portrait.jpg";
import heroAbstract from "@/assets/hero-abstract.jpg";

const challenges = [
  "anxietate și atacuri de panică",
  "stres cronic și oboseală emoțională",
  "dificultăți în relații și comunicare",
  "trăiri de vinovăție, rușine sau auto-critică",
  "traume și modele relaționale repetitive",
  "nevoie de dezvoltare personală și claritate interioară",
];

const reasons = [
  "ai nevoie de un spațiu sigur pentru a te exprima",
  "emoțiile te copleșesc sau nu le înțelegi complet",
  "vrei să înveți cum să te respecți, să-ți pui limite și să-ți creezi relații sănătoase",
  "vrei sprijin profesionist în limba română, indiferent unde te afli",
];

const specializations = [
  { title: "Anxietate și panică", description: "Tehnici validate pentru gestionarea anxietății" },
  { title: "Stres și burnout", description: "Strategii de recuperare și prevenție" },
  { title: "Traume emoționale", description: "Procesare sigură și integrare" },
  { title: "Relații dificile", description: "Comunicare și limite sănătoase" },
  { title: "Stimă de sine", description: "Reconstrucția încrederii în sine" },
  { title: "Dezvoltare personală", description: "Claritate și aliniere interioară" },
];

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [getLocalBusinessSchema(), getPersonSchema()]
  };

  return (
    <Layout>
      <SEO
        title="Natalia Șargu | Psiholog Chișinău | Terapie Online și Cabinet"
        description="Psiholog clinician și psihoterapeut integrativ în Chișinău. Oferim terapie pentru anxietate, depresie, stres, traumă și dezvoltare personală. Ședințe față în față și online pentru diasporă."
        keywords="psiholog Chișinău, psihoterapeut Moldova, terapie anxietate, terapie depresie, terapie online, psiholog online, cabinet psihoterapie Chișinău, psihoterapeut integrativ"
        canonical="/"
        structuredData={structuredData}
      />
      {/* Hero Section - Side by Side Layout */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-background">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroAbstract}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Psiholog & Psihoterapeut Integrativ
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-5 leading-tight text-balance">
                Te ajut să te cunoști, să te înțelegi și să îți creezi o viață
                <span className="text-primary"> echilibrată emoțional</span>
              </h1>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed max-w-xl">
                Sunt psiholog clinician cu dublă specializare și psihoterapeut integrativ în supervizare.
                Te sprijin să înțelegi emoțiile și să găsești resursele interioare pentru schimbări reale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Programează o ședință
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/despre-natalia-sargu">Află mai multe despre mine</Link>
                </Button>
              </div>

              {/* Quick info */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Chișinău & Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-accent" />
                  <span>Ședințe pentru diasporă</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in-delay-1">
              <div className="relative rounded-2xl overflow-hidden shadow-medium h-[450px] lg:h-[550px]">
                <img
                  src={nataliaPortrait}
                  alt="Natalia Șargu - Psiholog și Psihoterapeut"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-56 h-56 bg-secondary rounded-full blur-2xl" />

              {/* Floating card */}
              <div className="absolute -bottom-4 left-4 bg-background rounded-xl p-4 shadow-medium border border-border/50 hidden md:block">
                <p className="text-sm font-medium text-foreground mb-1">7+ ani experiență</p>
                <p className="text-xs text-muted-foreground">Psihologie clinică</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Challenges Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Sprijin profesional
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Lucrez cu adulți și adolescenți care se confruntă cu:
            </h2>
            <p className="text-muted-foreground text-lg">
              Înțeleg cât de dificil poate fi să treci prin aceste experiențe. Sunt aici să te ajut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-foreground font-medium">{challenge}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-accent/10 rounded-xl p-6 max-w-2xl">
              <p className="text-lg text-foreground font-heading">
                ✔️ Obiectivul meu este să te ajut să te înțelegi mai bine, să îți asculți nevoile reale 
                și să găsești un echilibru emoțional durabil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Specializări
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Domenii în care te pot ajuta
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer"
                onClick={() => handleServiceClick(spec.title)}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {spec.description}
                </p>
                <div className="text-primary text-sm font-medium group-hover:underline">
                  Programează →
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Link to="/servicii">
                Vezi toate serviciile
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Therapy Modes Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Flexibilitate
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Terapie față în față și online
            </h2>
            <p className="text-muted-foreground text-lg">
              Indiferent unde te afli, poți avea acces la sprijin profesionist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* In-person */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Cabinet în Chișinău
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lucrez cu clienți în cabinetul din Chișinău, într-un spațiu sigur și confortabil, 
                special amenajat pentru ședințele de psihoterapie.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Spațiu privat și confortabil</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Atmosferă relaxantă</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Acces facil în centrul orașului</span>
                </li>
              </ul>
            </div>

            {/* Online */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Terapie Online
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O soluție eficientă, sigură și confidențială pentru persoanele din diasporă sau 
                pentru cei care nu pot ajunge fizic la cabinet.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Platforme securizate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Flexibilitate în programare</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Perfect pentru diasporă</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />


      {/* Benefits Section */}
      <BenefitsSection />

      {/* Right Place Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
                Pentru tine
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Ești în locul potrivit dacă...
              </h2>
              <p className="text-muted-foreground text-lg">
                ...simți că:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors"
                >
                  <div className="text-accent font-semibold text-lg">✔️</div>
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/contact">
                  Programează o consultație
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Quote Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-2xl md:text-3xl font-medium leading-relaxed text-foreground mb-4">
              "Terapia nu înseamnă să «repari» ceva stricat în tine. 
              Înseamnă să te cunoști, să te înțelegi și să îți creezi o viață mai echilibrată emoțional."
            </p>
            <cite className="text-muted-foreground not-italic">— Natalia Șargu</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={selectedService}
      />
    </Layout>
  );
};

export default Index;

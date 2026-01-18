import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Video, MapPin, Sparkles, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import ContactModal from "@/components/ContactModal";
import { SocialMediaPosts } from "@/components/SocialMediaPosts";
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
                Schimbarea începe atunci când ești
                <span className="text-primary"> înțeles(ă)</span>
              </h1>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed max-w-xl">
                Sunt psiholog clinician și psihoterapeut integrativ în supervizare. Creez un spațiu sigur în care poți explora emoțiile, tiparele și resursele tale interioare, pentru schimbări reale și durabile.
              </p>

              {/* Image - visible only on mobile */}
              <div className="relative lg:hidden mb-8 animate-fade-in-delay-1">
                <div className="relative rounded-2xl overflow-hidden shadow-medium h-[400px]">
                  <img
                    src={nataliaPortrait}
                    alt="Natalia Șargu - Psiholog și Psihoterapeut"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>

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

            {/* Image - visible only on desktop */}
            <div className="relative hidden lg:block animate-fade-in-delay-1">
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
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section - Domenii în care te pot ajuta */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-accent/70 font-medium mb-3 tracking-wide uppercase text-sm">
              Sprijin profesional
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-accent mb-4">
              Domenii în care te pot ajuta
            </h2>
            <p className="text-accent/80 text-lg">
              Sunt psiholog clinician cu dublă specializare și psihoterapeut integrativ în supervizare. 
              Te sprijin să înțelegi emoțiile, să-ți regăsești resursele interioare și să creezi schimbări reale în viața ta.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-center text-accent text-lg font-medium mb-8">
              Lucrez cu adulți și adolescenți care se confruntă cu:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50 shadow-soft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-accent/60 rounded-xl p-6 max-w-2xl">
              <p className="text-lg text-foreground font-heading">
                ✔️ Obiectivul meu este să ofer un spațiu terapeutic sigur și profesionist, în care oamenii să își poată înțelege emoțiile, regla stările interne și construi schimbări reale, în ritmul lor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Modes Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-secondary font-medium mb-3 tracking-wide uppercase text-sm">
              Flexibilitate
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Terapie față în față și online
            </h2>
            <p className="text-muted-foreground text-lg">
              Lucrez cu clienți în cabinetul din Chișinău dar și online, astfel încât să poți avea acces la sprijin profesionist indiferent unde te afli.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* In-person */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Cabinet în Chișinău
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Un spațiu calm și confidențial, special gândit pentru ședințe de psihoterapie și lucru emoțional în siguranță.
              </p>
            </div>

            {/* Online */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Terapie Online
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O soluție eficientă și sigură pentru persoanele din diasporă sau pentru cei care nu pot ajunge fizic la cabinet.
              </p>
            </div>
          </div>

          {/* Session Info */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Durata ședinței: 50 minute</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-border" />
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Program: Luni-Vineri 9:00 - 16:30</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">
                Programează o ședință
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Right Place Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent/70 font-medium mb-3 tracking-wide uppercase text-sm">
                Pentru tine
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-accent mb-4">
                Ești în locul potrivit dacă...
              </h2>
              <p className="text-accent text-lg">
                ...simți că:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border/50 hover:shadow-soft transition-all"
                >
                  <div className="text-primary font-semibold text-lg">✔️</div>
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

      {/* Quote Section */}
      <section className="py-16 lg:py-20 bg-background">
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

      {/* Social Media Posts */}
      <SocialMediaPosts />

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

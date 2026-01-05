import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Sparkles, Brain, Heart, Shield, Target, Flower2, Check, MessageCircle, Video, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactModal from "@/components/ContactModal";
import { getServiceSchema, getBreadcrumbSchema } from "@/utils/structuredData";

const services = [
  {
    icon: Brain,
    title: "Terapie pentru Anxietate",
    description: "Gestionarea anxietății, atacurilor de panică și a stresului cronic prin tehnici validate științific.",
    details: ["Tehnici de relaxare și respirație", "Restructurare cognitivă", "Mindfulness aplicat", "Expunere graduală"],
    forWhom: "Pentru tine dacă simți neliniște constantă, atacuri de panică, griji excesive sau evitare.",
  },
  {
    icon: Heart,
    title: "Terapie pentru Depresie",
    description: "Sprijin în procesul de recuperare, reconstrucția motivației și a sensului vieții.",
    details: ["Activare comportamentală", "Procesare emoțională", "Reconstrucție cognitivă", "Prevenție recăderi"],
    forWhom: "Pentru tine dacă simți tristețe persistentă, lipsă de energie, pierderea interesului sau gânduri negative.",
  },
  {
    icon: Shield,
    title: "Lucrul cu Trauma",
    description: "Procesarea experiențelor traumatice într-un ritm sigur și respectuos.",
    details: ["Stabilizare emoțională", "Procesare trauma", "Integrare resurse", "Vindecare relațională"],
    forWhom: "Pentru tine dacă ai trecut prin experiențe dureroase care încă te afectează emoțional.",
  },
  {
    icon: Users,
    title: "Dificultăți Relaționale",
    description: "Înțelegerea tiparelor relaționale și dezvoltarea unor relații mai sănătoase.",
    details: ["Comunicare asertivă", "Limite sănătoase", "Dependență emoțională", "Îmbunătățire relații"],
    forWhom: "Pentru tine dacă te confrunți cu conflicte repetitive, dificultăți de comunicare sau relații toxice.",
  },
  {
    icon: Target,
    title: "Dezvoltare Personală",
    description: "Claritate interioară, autocunoaștere și realizarea potențialului personal.",
    details: ["Definirea obiectivelor", "Creșterea încrederii", "Luarea deciziilor", "Autenticitate"],
    forWhom: "Pentru tine dacă vrei să te cunoști mai bine, să-ți clarifici valorile și să îți atingi potențialul.",
  },
  {
    icon: Flower2,
    title: "Mindfulness și Reglare Emoțională",
    description: "Tehnici de conștientizare și echilibru emoțional pentru viața de zi cu zi.",
    details: ["Meditație ghidată", "Respirație conștientă", "Gestionare emoții", "Prezență"],
    forWhom: "Pentru tine dacă vrei să înveți să-ți reglezi emoțiile și să fii mai prezent în viața de zi cu zi.",
  },
];

const sessionTypes = [
  {
    icon: Building,
    title: "Ședință la cabinet",
    location: "Chișinău",
    duration: "50 minute",
    description: "Întâlnire față în față într-un spațiu sigur și confortabil, amenajat special pentru terapie.",
    benefits: ["Contact uman direct", "Spațiu dedicat terapiei", "Fără distractori"],
  },
  {
    icon: Video,
    title: "Ședință online",
    location: "Oriunde în lume",
    duration: "50 minute",
    description: "Sesiune video securizată, ideală pentru cei din diasporă sau care nu pot ajunge la cabinet.",
    benefits: ["Flexibilitate maximă", "Confort de acasă", "Acces din orice locație"],
  },
  {
    icon: MessageCircle,
    title: "Prima consultație",
    location: "Cabinet sau online",
    duration: "60 minute",
    description: "Ședință introductivă pentru cunoaștere reciprocă, evaluare inițială și stabilirea obiectivelor.",
    benefits: ["Cunoaștere reciprocă", "Clarificare așteptări", "Plan personalizat"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Contact inițial",
    description: "Mă contactezi prin formular, email sau telefon pentru a stabili o întâlnire.",
  },
  {
    step: "02",
    title: "Prima ședință",
    description: "Ne cunoaștem, discutăm despre motivele tale și stabilim obiectivele terapiei.",
  },
  {
    step: "03",
    title: "Plan terapeutic",
    description: "Creăm împreună un plan personalizat, adaptat nevoilor și ritmului tău.",
  },
  {
    step: "04",
    title: "Ședințe regulate",
    description: "Lucrăm săptămânal sau bisăptămânal, folosind tehnici adaptate.",
  },
  {
    step: "05",
    title: "Evaluare progres",
    description: "Monitorizăm progresul și ajustăm abordarea după nevoie.",
  },
  {
    step: "06",
    title: "Finalizare",
    description: "Când ești pregătit, încheiem terapia și celebrăm creșterea ta.",
  },
];

const Servicii = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Acasă", url: "/" },
    { name: "Servicii", url: "/servicii" }
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [getServiceSchema(), breadcrumbSchema]
  };

  return (
    <Layout>
      <SEO
        title="Servicii Psihoterapie | Anxietate, Depresie, Traumă | Natalia Șargu"
        description="Servicii de psihoterapie în Chișinău și online: terapie anxietate, depresie, traumă, dificultăți relaționale, dezvoltare personală. Ședințe față în față și online."
        keywords="servicii psihoterapie, terapie anxietate Chișinău, terapie depresie Moldova, terapie traumă, consiliere psihologică, terapie online România"
        canonical="/servicii"
        structuredData={structuredData}
      />
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
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              Oferim sprijin personalizat pentru diverse provocări emoționale și de viață, 
              într-un mediu sigur și non-judgmental. Fiecare persoană este unică, iar terapia 
              se adaptează nevoilor tale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Programează acum
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white hover:text-white border-white/30 hover:bg-white/10">
                <a href="#servicii">Vezi serviciile</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
              Tipuri de ședințe
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Alege formatul potrivit pentru tine
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sessionTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {type.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <span>{type.location}</span>
                    <span>•</span>
                    <span>{type.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicii" className="py-20 lg:py-28 bg-secondary scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
              Specializări
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Domenii în care lucrez
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fiecare serviciu este adaptat nevoilor tale specifice, folosind tehnici validate 
              științific din abordarea integrativă.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium border border-border/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-secondary/80 transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Ce include:</p>
                    <ul className="space-y-1">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Sparkles className="w-3 h-3 text-accent flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border mb-4">
                    <p className="text-sm text-muted-foreground italic">
                      {service.forWhom}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleServiceClick(service.title)}
                    className="w-full"
                    size="sm"
                  >
                    Programează ședință
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={selectedService}
      />

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
              Cum funcționează
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Drumul terapeutic pas cu pas
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              De la primul contact până la finalizarea terapiei, te ghidez la fiecare pas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-card rounded-xl p-6 border border-border/50 shadow-soft"
                >
                  <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrative Approach */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-8 md:p-12 border border-border/50 shadow-soft">
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Abordare Integrativă
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Abordarea integrativă înseamnă că îmbin tehnici validate științific din mai multe orientări 
                  psihoterapeutice, adaptate nevoilor fiecărei persoane.
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <div className="text-3xl mb-2">🧠</div>
                  <h4 className="font-medium text-foreground mb-1">Cognitiv-Comportamental</h4>
                  <p className="text-xs text-muted-foreground">Schimbarea gândurilor și comportamentelor disfuncționale</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <div className="text-3xl mb-2">💭</div>
                  <h4 className="font-medium text-foreground mb-1">Psihodinamic</h4>
                  <p className="text-xs text-muted-foreground">Înțelegerea tiparelor inconștiente din trecut</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <div className="text-3xl mb-2">❤️</div>
                  <h4 className="font-medium text-foreground mb-1">Umanist</h4>
                  <p className="text-xs text-muted-foreground">Accent pe potențialul și resursele personale</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <div className="text-3xl mb-2">🌱</div>
                  <h4 className="font-medium text-foreground mb-1">Mindfulness</h4>
                  <p className="text-xs text-muted-foreground">Prezență conștientă și reglare emoțională</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                La ce să te aștepți
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Prima ședință
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Cunoaștere reciprocă într-un cadru relaxat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Discuție despre motivele pentru care cauți sprijin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Clarificarea așteptărilor și obiectivelor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Răspunsuri la întrebările tale</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  Pe parcursul terapiei
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Spațiu sigur pentru a te exprima liber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Tehnici practice pentru viața de zi cu zi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Progres la ritmul tău, fără presiune</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Feedback și ajustări continue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Servicii;

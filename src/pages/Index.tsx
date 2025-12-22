import { Link } from "react-router-dom";
import { Check, ArrowRight, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import nataliaPortrait from "@/assets/natalia-portrait.jpg";

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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
                Psiholog & Psihoterapeut Integrativ
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight text-balance">
                Te ajut să te cunoști, să te înțelegi și să îți creezi o viață 
                <span className="text-primary"> echilibrată emoțional</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                Sunt psiholog clinician cu dublă specializare și psihoterapeut integrativ în supervizare. 
                Te sprijin să înțelegi emoțiile și să găsești resursele interioare pentru schimbări reale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Programează o ședință
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/despre">Află mai multe despre mine</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in-delay-1">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={nataliaPortrait}
                  alt="Natalia Șargu - Psiholog și Psihoterapeut"
                  className="w-full h-auto object-cover"
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

      {/* Challenges Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
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
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-foreground font-medium">{challenge}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-foreground font-heading max-w-2xl mx-auto">
              ✔️ Obiectivul meu este să te ajut să te înțelegi mai bine, să îți asculți nevoile reale 
              și să găsești un echilibru emoțional durabil.
            </p>
          </div>
        </div>
      </section>

      {/* Therapy Modes Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Terapie față în față și online
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexibilitate și accesibilitate, indiferent unde te afli.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* In-person */}
            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Cabinet în Chișinău
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lucrez cu clienți în cabinetul din Chișinău, într-un spațiu sigur și confortabil, 
                special amenajat pentru ședințele de psihoterapie.
              </p>
            </div>

            {/* Online */}
            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Terapie Online
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O soluție eficientă, sigură și confidențială pentru persoanele din diasporă sau 
                pentru cei care nu pot ajunge fizic la cabinet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Place Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Ești în locul potrivit dacă...
              </h2>
              <p className="text-muted-foreground text-lg">
                ...simți că:
              </p>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-accent/5 border border-accent/20"
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

      {/* Quote Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-6">
              "Terapia nu înseamnă să «repari» ceva stricat în tine. 
              Înseamnă să te cunoști, să te înțelegi și să îți creezi o viață mai echilibrată emoțional."
            </p>
            <cite className="text-primary-foreground/80 not-italic">— Natalia Șargu</cite>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

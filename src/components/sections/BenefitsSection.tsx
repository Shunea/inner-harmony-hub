import { Check } from "lucide-react";

const benefits = [
  "Înțelegere profundă a emoțiilor și a tiparelor comportamentale",
  "Tehnici practice pentru gestionarea stresului și anxietății",
  "Creșterea încrederii în sine și a stimei de sine",
  "Îmbunătățirea relațiilor personale și profesionale",
  "Dezvoltarea rezilienței și a resurselor interioare",
  "Claritate în luarea deciziilor importante",
  "Echilibru emoțional și pace interioară",
  "Comunicare mai eficientă și limite sănătoase",
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
              Beneficii
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ce poți obține din procesul terapeutic
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Terapia este o investiție în tine. Fiecare ședință te aduce mai aproape de 
              versiunea ta cea mai echilibrată și autentică.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-medium">
              <blockquote className="text-primary-foreground">
                <p className="font-heading text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  "Cel mai important lucru pe care l-am învățat în terapie este că 
                  nu trebuie să fii perfect pentru a fi suficient de bun."
                </p>
                <footer className="text-primary-foreground/70">
                  — Reflecție dintr-o ședință de terapie
                </footer>
              </blockquote>
            </div>
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-accent/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

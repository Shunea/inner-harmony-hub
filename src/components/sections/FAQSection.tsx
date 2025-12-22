import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Cum știu dacă am nevoie de terapie?",
    answer:
      "Dacă simți că emoțiile te copleșesc, că te confrunți cu dificultăți repetitive în relații sau în viața de zi cu zi, sau pur și simplu vrei să te cunoști mai bine — terapia poate fi pentru tine. Nu trebuie să fii în criză pentru a beneficia de sprijin profesionist.",
  },
  {
    question: "Cât durează o ședință de terapie?",
    answer:
      "O ședință standard durează aproximativ 50 de minute. Prima ședință poate fi puțin mai lungă (60 minute) pentru a avea timp să discutăm despre istoricul tău și să stabilim obiectivele terapiei.",
  },
  {
    question: "Cu ce frecvență au loc ședințele?",
    answer:
      "De obicei, recomand ședințe săptămânale, mai ales la început, pentru a menține continuitatea procesului. Pe măsură ce progresezi, putem trece la ședințe bisăptămânale sau lunare.",
  },
  {
    question: "Cât timp durează procesul terapeutic?",
    answer:
      "Durata variază în funcție de obiective și de specificul situației tale. Unele probleme pot fi abordate în câteva luni, altele necesită un proces mai lung. Împreună vom evalua periodic progresul și vom decide când ești pregătit să închei terapia.",
  },
  {
    question: "Cum funcționează terapia online?",
    answer:
      "Ședințele online se desfășoară prin platforme securizate de videoconferință. Ai nevoie doar de o conexiune stabilă la internet, un dispozitiv cu cameră și microfon, și un spațiu privat unde să poți vorbi deschis. Terapia online este la fel de eficientă ca cea față în față.",
  },
  {
    question: "Este confidențial tot ce discutăm?",
    answer:
      "Da, absolut. Respect strict secretul profesional și codul deontologic. Tot ce discutăm rămâne confidențial, cu excepția situațiilor în care există un risc iminent pentru viața ta sau a altora — situații în care sunt obligat legal să intervin.",
  },
  {
    question: "Cum pot plăti ședințele?",
    answer:
      "Accept plata în numerar, transfer bancar sau prin aplicații mobile de plată. Pentru ședințele online, plata se face în avans prin transfer bancar.",
  },
  {
    question: "Ce se întâmplă dacă trebuie să anulez o ședință?",
    answer:
      "Te rog să anunți cu cel puțin 24 de ore înainte dacă nu poți ajunge la ședință. Astfel, pot oferi acel loc altcuiva care are nevoie. Anulările de ultim moment sau neprezentarea pot fi supuse politicii de plată.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
            FAQ
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Întrebări frecvente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre procesul terapeutic.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

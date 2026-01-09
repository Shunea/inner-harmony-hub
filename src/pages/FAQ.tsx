import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "De ce o ședință de psihoterapie durează 50 de minute?",
    answer: `Sigmund Freud a stabilit ședința săptămânală de terapie cu durata de 50 de minute acum mai bine de o sută de ani, din motive destul de întemeiate.

Discuțiile despre o problemă emoțională pot stârni emoții dificile. În timp ce eu și clientul meu facem o excursie în amintirile unei probleme dureroase, limita de timp îi amintește că în curând vom ieși înapoi. Limita stabilită duce, de asemenea, la o bună utilizare a timpului, ne ajută să ajungem la esența a ceea ce îl doare pe client, să ajungem la lucrurile importante. Totodată oferim clientului acest control asupra ceea ce vrea să discute și cât de mult să exploreze un capitol anume. Acest standard de timp permite ca procesul terapeutic să fie unul eficient și clar.

Încă un moment care merită menționat este că terapeutul are nevoie și el de timp să se poată autoregla între sesiuni, pentru a rămâne ancorat în prezent și a putea oferi suportul necesar persoanelor aflate în terapie.`,
  },
  {
    question: "Cum știu dacă am nevoie de psihoterapie?",
    answer: `Dacă descoperi că te confrunți cu probleme emoționale repetate care îți influențează negativ viața de zi cu zi, este de recomandat să discuți cu un specialist.

Dacă:
• Te simți anxios
• În general, te simți copleșit de tot
• Gânduri excesive și senzația că nu te poți „deconecta" de la gândurile tale
• Te enervezi mai ușor sau te chinui să-ți controlezi emoțiile
• Simți că „stai pe loc", nu te dezvolți în viața ta profesională sau personală
• Dormi mai mult sau mai puțin decât de obicei
• Mânci mai mult sau mai puțin decât de obicei
• Eviti să socializezi cu alte persoane
• Nu ești interesat de activitățile sau hobby-urile pe care le făceai cu plăcere înainte
• Îți faci probleme la serviciu, la universitate sau la școală
• Te simți fără speranță și ca și cum nu ar exista nicio cale de ieșire
• Folosești substanțe precum droguri sau alcool pentru a te ajuta să treci peste zi
• Ai gânduri de a te răni sau simți că nu mai vrei să fii aici

Indiferent de cauză, dacă aceste probleme sau emoții au un impact negativ asupra bunăstării tale și îți afectează capacitatea de a funcționa în viața de zi cu zi, este important să ceri ajutor.`,
  },
  {
    question: "Cum decurge prima ședință de terapie?",
    answer: `Prima ședință cu terapeutul va fi puțin mai diferită decât vizitele viitoare. Prima ședință presupune, de obicei, o discuție despre obiectivele tale de terapie. Acestea nu trebuie să fie concrete sau perfect articulate. Pot fi la fel de simple precum dorința de a „mă simți mai bine", „de a mă înțelege mai bine" sau „de a gestiona anxietatea". Colaborarea la stabilirea obiectivelor îți oferă ție și terapeutului tău o direcție comună pentru munca voastră împreună și ajută la stabilirea așteptărilor.

De asemenea, se vor stabili termenii de colaborare, contractul, detaliile despre durata și frecvența ședințelor.

Prima ședință este o oportunitate de a pune orice întrebări despre calificările, stilul terapeutic și experiența specialistului. Dacă aveți nelămuriri, nu ezitați să întrebați! Faptul că știți că sunteți pe mâini competente vă poate ajuta să construiți încrederea necesară pentru un rezultat bun.

În timpul primei ședințe, terapeutul vă poate întreba:
• „Ce v-a făcut să decideți să apelați la terapie acum?"
• „La ce sperați să obțineți din munca noastră împreună?"
• „Îmi puteți spune puțin despre ce v-a trecut prin minte în ultima vreme?"

Rețineți că psihoterapia necesită de obicei mai multe vizite, așa că nu vă așteptați la soluții instantanee la problemele dvs. în prima zi.`,
  },
  {
    question: "Este terapia online la fel de eficientă ca cea față în față?",
    answer: `Da, cercetările arată în mod constant că terapia online este la fel de eficientă ca terapia față în față pentru multe afecțiuni precum depresia și anxietatea, oferind rezultate similare, accesibilitate îmbunătățită și confort, deși unele cazuri complexe sau preferințe ar putea înclina spre terapia față în față, relația terapeutică fiind cheia succesului în toate modalitățile.

Pentru persoanele ocupate, acest lucru este esențial: confortul terapiei online vă permite să integrați perfect programările și sprijinul în viața de zi cu zi, fie că sunteți acasă sau la serviciu.

Posibilitatea de a participa la sesiuni din confortul propriului spațiu poate reduce, de asemenea, stresul și provocările logistice.`,
  },
  {
    question: "Dacă nu știu exact ce problemă am, pot veni în terapie?",
    answer: `Nu trebuie să aștepți până când lucrurile devin copleșitoare pentru a începe terapia. De fapt, unele dintre cele mai puternice rezultate se întâmplă atunci când oamenii intră în terapie cu curiozitate, nu cu o criză.

Terapia poate sprijini creșterea personală, ajutându-te să-ți explorezi identitatea, valorile, obiceiurile și relațiile. Încurajează autoreflecția și inteligența emoțională - ambele contribuind la cariere mai satisfăcătoare, conexiuni mai puternice și o încredere sporită în viața de zi cu zi.

Chiar dacă funcționezi bine zi de zi, terapia te poate ajuta să-ți construiești reziliența, să stabilești limite și să crești în versiunea ta pe care vrei să o fii.

Nu ai nevoie de un diagnostic sau de un eveniment care să-ți schimbe viața pentru a începe. Ai nevoie doar de dorința de a explora cum te simți și ce te-ar putea ajuta să te simți mai bine.`,
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

const FAQ = () => {
  return (
    <Layout>
      <SEO
        title="Întrebări Frecvente | FAQ | Natalia Șargu - Psiholog Chișinău"
        description="Răspunsuri la cele mai frecvente întrebări despre psihoterapie: durata ședințelor, cum funcționează terapia online, prima ședință și multe altele."
        keywords="întrebări frecvente psihoterapie, FAQ psiholog, durata ședință terapie, terapie online eficiență, prima ședință psihoterapie"
        canonical="/faq"
      />

      {/* Hero */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              FAQ
            </p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Întrebări frecvente
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Răspunsuri la cele mai comune întrebări despre procesul terapeutic, ședințe și ce poți aștepta de la psihoterapie.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Mai ai întrebări?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nu ezita să mă contactezi. Sunt aici să te ajut.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contactează-mă
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;

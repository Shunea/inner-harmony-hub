import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Video, Building, MessageCircle, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresă",
    value: "Chișinău, Republica Moldova",
    detail: "Locația exactă se comunică la programare",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+373 60 000 000",
    href: "tel:+37360000000",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@nataliasargu.md",
    href: "mailto:contact@nataliasargu.md",
  },
  {
    icon: Clock,
    title: "Program",
    value: "Luni - Vineri",
    detail: "09:00 - 19:00",
  },
];

const whyChoose = [
  {
    icon: CheckCircle,
    title: "Răspuns rapid",
    description: "Vei primi un răspuns în maximum 24 de ore",
  },
  {
    icon: Calendar,
    title: "Programare flexibilă",
    description: "Ore disponibile dimineața, după-amiaza și seara",
  },
  {
    icon: Video,
    title: "Online sau cabinet",
    description: "Alege formatul care ți se potrivește",
  },
  {
    icon: MessageCircle,
    title: "Prima consultație",
    description: "60 minute pentru cunoaștere și clarificare",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "online",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mesaj trimis cu succes!",
      description: "Vă voi contacta în cel mai scurt timp posibil pentru a stabili o întâlnire.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      sessionType: "online",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
              Contact
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Să începem conversația
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Primul pas către schimbare începe cu o conversație. 
              Contactează-mă pentru a programa o ședință de cunoaștere.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Trimite un mesaj
              </h2>
              <p className="text-muted-foreground mb-6">
                Completează formularul de mai jos și te voi contacta în cel mai scurt timp.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Numele complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Introduceți numele complet"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@exemplu.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+373 ..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tipul ședinței preferat</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.sessionType === "online"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="sessionType"
                        value="online"
                        checked={formData.sessionType === "online"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Video className="w-5 h-5 text-primary" />
                      <div>
                        <span className="font-medium text-foreground block">Online</span>
                        <span className="text-xs text-muted-foreground">Videoconferință</span>
                      </div>
                    </label>
                    <label
                      className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.sessionType === "cabinet"
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="sessionType"
                        value="cabinet"
                        checked={formData.sessionType === "cabinet"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Building className="w-5 h-5 text-primary" />
                      <div>
                        <span className="font-medium text-foreground block">Cabinet</span>
                        <span className="text-xs text-muted-foreground">Chișinău</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subiect</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="ex: Programare prima ședință"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descrieți pe scurt motivul pentru care doriți să programați o ședință. Puteți menționa și disponibilitatea dvs..."
                    rows={5}
                    required
                  />
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                  <p>
                    🔒 Informațiile tale sunt confidențiale și vor fi folosite doar pentru a te contacta 
                    în legătură cu programarea.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Se trimite..."
                  ) : (
                    <>
                      Trimite mesajul
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Informații de contact
              </h2>
              <p className="text-muted-foreground mb-6">
                Mă poți contacta și direct prin telefon sau email.
              </p>
              
              <div className="space-y-4 mb-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-primary hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                        {info.detail && (
                          <p className="text-sm text-muted-foreground mt-1">{info.detail}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-border/50 shadow-soft">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      Chișinău, Republica Moldova
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Locația exactă a cabinetului se comunică la programare
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="mt-6 p-5 rounded-xl bg-accent/10 border border-accent/20">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Nu ești sigur dacă terapia este pentru tine?
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Este normal să ai întrebări sau îndoieli. Prima ședință este o oportunitate 
                  de cunoaștere, fără niciun angajament. Poți decide apoi dacă vrei să continui.
                </p>
                <p className="text-sm text-foreground font-medium">
                  Scrie-mi și îți voi răspunde cu plăcere la orice întrebare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Întrebări frecvente despre programare
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Cât durează o ședință de terapie?
                </h3>
                <p className="text-muted-foreground">
                  O ședință durează aproximativ 50-60 de minute. Prima ședință poate fi puțin mai lungă 
                  pentru a avea timp să discutăm despre istoricul tău și obiectivele terapiei.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Cum funcționează terapia online?
                </h3>
                <p className="text-muted-foreground">
                  Ședințele online se desfășoară prin platforme securizate de videoconferință. 
                  Ai nevoie doar de o conexiune stabilă la internet și un spațiu privat unde să poți vorbi deschis.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Câte ședințe sunt necesare?
                </h3>
                <p className="text-muted-foreground">
                  Numărul de ședințe variază în funcție de obiectivele și nevoile fiecărei persoane. 
                  Împreună vom stabili un plan terapeutic personalizat.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Cât timp durează până primesc un răspuns?
                </h3>
                <p className="text-muted-foreground">
                  Încerc să răspund la toate mesajele în maximum 24 de ore în zilele lucrătoare. 
                  Dacă este urgent, te rog să menționezi acest lucru în mesaj.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Pot anula sau reprograma o ședință?
                </h3>
                <p className="text-muted-foreground">
                  Da, te rog să anunți cu cel puțin 24 de ore înainte dacă nu poți ajunge la ședință. 
                  Vom găsi împreună o altă dată convenabilă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

// Placeholder data - will be replaced with data from admin panel
const blogPosts: Record<string, {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}> = {
  "cum-sa-gestionezi-anxietatea": {
    id: "1",
    slug: "cum-sa-gestionezi-anxietatea",
    title: "Cum să gestionezi anxietatea în viața de zi cu zi",
    excerpt: "Anxietatea este o emoție naturală, dar când devine copleșitoare, poate afecta calitatea vieții. Descoperă tehnici practice pentru a o gestiona eficient.",
    content: `
      <p>Anxietatea este o experiență umană universală. Este răspunsul natural al corpului la stres și, în doze mici, poate fi chiar utilă - ne ajută să fim alertă și să răspundem la provocări. Cu toate acestea, când anxietatea devine cronică sau copleșitoare, poate interfera semnificativ cu viața de zi cu zi.</p>

      <h2>Ce este anxietatea?</h2>
      <p>Anxietatea este mai mult decât a te simți stresat sau îngrijorat. În timp ce stresul și îngrijorările sunt reacții normale la situații specifice și, de obicei, dispar odată ce situația s-a rezolvat, anxietatea poate persista și poate apărea fără un declanșator evident.</p>
      
      <p>Simptomele anxietății pot include:</p>
      <ul>
        <li>Neliniște sau agitație</li>
        <li>Oboseală rapidă</li>
        <li>Dificultăți de concentrare</li>
        <li>Iritabilitate</li>
        <li>Tensiune musculară</li>
        <li>Tulburări de somn</li>
      </ul>

      <h2>Tehnici practice pentru gestionarea anxietății</h2>
      
      <h3>1. Respirația diafragmatică</h3>
      <p>Respirația profundă activează sistemul nervos parasimpatic, care ajută la calmarea corpului. Încearcă să respiri lent, adânc, din diafragmă, numărând până la 4 la inspirație, ținând respirația 4 secunde, și expirând lent numărând până la 6.</p>

      <h3>2. Grounding (Ancorare în prezent)</h3>
      <p>Tehnica 5-4-3-2-1: Identifică 5 lucruri pe care le poți vedea, 4 pe care le poți atinge, 3 pe care le poți auzi, 2 pe care le poți mirosi și 1 pe care îl poți gusta. Această tehnică te readuce în momentul prezent.</p>

      <h3>3. Limitarea consumului de cafeină și alcool</h3>
      <p>Cafeina poate amplifica simptomele anxietății, în timp ce alcoolul, deși poate părea că relaxează inițial, poate de fapt agrava anxietatea pe termen lung.</p>

      <h3>4. Mișcare regulată</h3>
      <p>Exercițiul fizic eliberează endorfine și reduce hormonii de stres. Chiar și o plimbare de 30 de minute pe zi poate face o diferență semnificativă.</p>

      <h3>5. Rutină de somn sănătoasă</h3>
      <p>Somnul de calitate este esențial pentru sănătatea mentală. Încearcă să te culci și să te trezești la ore regulate, și evită ecranele cu cel puțin o oră înainte de culcare.</p>

      <h2>Când să cauți ajutor profesionist</h2>
      <p>Dacă anxietatea interferează semnificativ cu viața ta de zi cu zi, dacă simptomele persistă mai mult de câteva săptămâni, sau dacă experimentezi atacuri de panică, este important să consulți un specialist în sănătate mentală.</p>

      <p>Psihoterapia, în special terapia cognitiv-comportamentală, s-a dovedit a fi foarte eficientă în tratarea anxietății. Un terapeut te poate ajuta să identifici pattern-urile de gândire care contribuie la anxietate și să dezvolți strategii personalizate de coping.</p>

      <blockquote>
        <p>„Anxietatea nu te definește. Este o parte din experiența ta, nu întreaga ta identitate."</p>
      </blockquote>

      <p>Amintește-ți că a cere ajutor este un semn de curaj, nu de slăbiciune. Fiecare persoană merită să trăiască o viață echilibrată și împlinită.</p>
    `,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=600&fit=crop",
    category: "Anxietate",
    date: "2024-01-15",
    readTime: "5 min",
    author: "Natalia Șargu",
  },
  "importanta-autocunoasterii": {
    id: "2",
    slug: "importanta-autocunoasterii",
    title: "Importanța autocunoașterii în procesul terapeutic",
    excerpt: "Autocunoașterea este primul pas spre schimbare. Află de ce este esențială înțelegerea propriilor pattern-uri emoționale și comportamentale.",
    content: `
      <p>Autocunoașterea reprezintă fundamentul oricărei transformări personale autentice. În procesul terapeutic, această călătorie de descoperire a sinelui devine un instrument puternic de vindecare și creștere.</p>

      <h2>Ce înseamnă cu adevărat autocunoașterea?</h2>
      <p>Autocunoașterea merge dincolo de a ști ce îți place sau nu îți place. Este despre înțelegerea profundă a propriilor emoții, motivații, reacții automate, credințe și pattern-uri de gândire care îți ghidează comportamentul.</p>

      <h2>De ce este esențială în terapie?</h2>
      <p>Terapia oferă un spațiu sigur pentru explorare. Când începem să ne înțelegem mai bine, putem:</p>
      <ul>
        <li>Identifica sursa dificultăților noastre emoționale</li>
        <li>Recunoaște pattern-uri repetitive în relații</li>
        <li>Înțelege de ce reacționăm în anumite moduri</li>
        <li>Dezvolta compasiune față de noi înșine</li>
      </ul>

      <h2>Primul pas spre schimbare</h2>
      <p>Nu poți schimba ceea ce nu conștientizezi. Autocunoașterea este lumina care ne permite să vedem cu claritate acele părți din noi care au nevoie de atenție și îngrijire.</p>

      <blockquote>
        <p>„A te cunoaște pe tine însuți este începutul întregii înțelepciuni." - Aristotel</p>
      </blockquote>
    `,
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=600&fit=crop",
    category: "Dezvoltare personală",
    date: "2024-01-10",
    readTime: "7 min",
    author: "Natalia Șargu",
  },
  "limite-sanatoase-relatii": {
    id: "3",
    slug: "limite-sanatoase-relatii",
    title: "Cum să stabilești limite sănătoase în relații",
    excerpt: "Limitele sănătoase sunt esențiale pentru relații echilibrate. Învață să comunici nevoile tale și să îți protejezi starea emoțională.",
    content: `
      <p>Limitele sănătoase sunt fundamentul oricărei relații echilibrate, fie că vorbim despre relații romantice, familiale sau profesionale.</p>

      <h2>Ce sunt limitele sănătoase?</h2>
      <p>Limitele sunt granițe invizibile care definesc unde începi tu și unde începe cealaltă persoană. Ele protejează bunăstarea ta emoțională și fizică.</p>

      <h2>Semne că ai nevoie de limite mai clare</h2>
      <ul>
        <li>Te simți epuizat după interacțiuni cu anumite persoane</li>
        <li>Spui "da" când vrei să spui "nu"</li>
        <li>Simți resentimente față de alții</li>
        <li>Nevoile tale sunt mereu pe ultimul loc</li>
      </ul>

      <h2>Cum să stabilești limite sănătoase</h2>
      <p>Primul pas este să identifici ce ai nevoie și ce te face să te simți inconfortabil. Apoi, comunică aceste limite clar și calm, fără să te scuzi sau să te justifici excesiv.</p>

      <blockquote>
        <p>„A spune 'nu' nu te face o persoană rea. Te face o persoană care se respectă."</p>
      </blockquote>
    `,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop",
    category: "Relații",
    date: "2024-01-05",
    readTime: "6 min",
    author: "Natalia Șargu",
  },
  "mindfulness-pentru-incepatori": {
    id: "4",
    slug: "mindfulness-pentru-incepatori",
    title: "Mindfulness pentru începători: Ghid practic",
    excerpt: "Mindfulness-ul poate transforma modul în care experimentezi viața. Descoperă exerciții simple pe care le poți practica zilnic.",
    content: `
      <p>Mindfulness-ul, sau atenția conștientă, este practica de a fi pe deplin prezent în momentul actual, fără judecată.</p>

      <h2>Beneficiile mindfulness-ului</h2>
      <ul>
        <li>Reducerea stresului și anxietății</li>
        <li>Îmbunătățirea concentrării</li>
        <li>Reglare emoțională mai bună</li>
        <li>Somn de calitate superioară</li>
      </ul>

      <h2>Exerciții simple pentru începători</h2>
      <h3>Respirația conștientă</h3>
      <p>Petrece 5 minute observând respirația. Nu încerca să o schimbi, doar observ-o.</p>

      <h3>Scanarea corporală</h3>
      <p>Parcurge mental fiecare parte a corpului, observând senzațiile fără să le judeci.</p>

      <blockquote>
        <p>„Mindfulness nu înseamnă să ai o minte goală. Înseamnă să observi ce se întâmplă în minte."</p>
      </blockquote>
    `,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
    category: "Mindfulness",
    date: "2023-12-28",
    readTime: "8 min",
    author: "Natalia Șargu",
  },
  "trauma-si-vindecarea": {
    id: "5",
    slug: "trauma-si-vindecarea",
    title: "Înțelegerea traumei și drumul spre vindecare",
    excerpt: "Trauma nu definește cine ești. Află cum funcționează procesul de vindecare și ce pași poți face pentru a-ți recâștiga echilibrul.",
    content: `
      <p>Trauma este un răspuns emoțional la un eveniment profund perturbator care copleșește capacitatea noastră de a face față.</p>

      <h2>Cum ne afectează trauma</h2>
      <p>Trauma poate afecta modul în care ne vedem pe noi înșine, lumea din jur și viitorul. Poate influența relațiile, capacitatea de a ne regla emoțiile și chiar sănătatea fizică.</p>

      <h2>Semne ale traumei neprocessate</h2>
      <ul>
        <li>Flashback-uri sau coșmaruri</li>
        <li>Evitarea amintirilor legate de eveniment</li>
        <li>Hipervigilență</li>
        <li>Dificultăți în relații</li>
        <li>Simptome fizice inexplicabile</li>
      </ul>

      <h2>Vindecarea este posibilă</h2>
      <p>Cu sprijin adecvat, vindecarea de traumă este absolut posibilă. Terapia trauma-informed oferă un cadru sigur pentru procesarea experiențelor dureroase.</p>

      <blockquote>
        <p>„Vindecarea nu înseamnă că durerea nu a existat niciodată. Înseamnă că nu mai controlează viața ta."</p>
      </blockquote>
    `,
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=1200&h=600&fit=crop",
    category: "Traumă",
    date: "2023-12-20",
    readTime: "10 min",
    author: "Natalia Șargu",
  },
  "stima-de-sine-autocritica": {
    id: "6",
    slug: "stima-de-sine-autocritica",
    title: "Stima de sine: De la autocritică la autocompasiune",
    excerpt: "Vocea critică interioară poate fi transformată. Explorează tehnici pentru a dezvolta o relație mai blândă cu tine însuți.",
    content: `
      <p>Mulți dintre noi avem o voce critică interioară care ne judecă aspru pentru fiecare greșeală. Dar ce s-ar întâmpla dacă am înlocui această critică cu compasiune?</p>

      <h2>De unde vine autocritica?</h2>
      <p>Adesea, vocea critică internă își are originea în experiențele timpurii de viață. Poate reflecta mesajele primite de la părinți, profesori sau alți adulți importanți.</p>

      <h2>Ce este autocompasiunea?</h2>
      <p>Autocompasiunea înseamnă să te tratezi cu aceeași bunătate pe care ai oferi-o unui prieten drag aflat în dificultate.</p>

      <h2>Cum să dezvolți autocompasiunea</h2>
      <ul>
        <li>Recunoaște suferința ta fără să o minimizezi</li>
        <li>Amintește-ți că imperfecțiunea este parte din experiența umană</li>
        <li>Vorbește-ți cu blândețe, nu cu critică</li>
        <li>Practică auto-îngrijirea în mod regulat</li>
      </ul>

      <blockquote>
        <p>„Te tratezi așa cum te-au tratat alții. Dar poți alege să te tratezi diferit."</p>
      </blockquote>
    `,
    image: "https://images.unsplash.com/photo-1490730141103-6cac27abb37f?w=1200&h=600&fit=crop",
    category: "Stimă de sine",
    date: "2023-12-15",
    readTime: "6 min",
    author: "Natalia Șargu",
  },
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPosts[slug]) {
    return <Navigate to="/blog" replace />;
  }

  const post = blogPosts[slug];

  // Get related posts (same category, excluding current)
  const relatedPosts = Object.values(blogPosts)
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la blog
          </Link>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full mb-6">
              {post.category}
            </span>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} citire</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[2/1] rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-primary max-w-none
                prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-li:text-foreground prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-accent/50 
                prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                prose-blockquote:text-primary prose-blockquote:font-medium"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Distribuie acest articol:
                </span>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Distribuie
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-8">
                Articole similare
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border/50 shadow-soft hover:shadow-medium transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-6">
              Ai întrebări sau vrei să discutăm?
            </h2>
            <p className="text-muted-foreground mb-8">
              Sunt aici să te sprijin. Programează o ședință pentru a explora
              împreună cum pot fi de ajutor în situația ta specifică.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Programează o consultație</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticle;

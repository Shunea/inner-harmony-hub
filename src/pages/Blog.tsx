import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

// Placeholder data - will be replaced with data from admin panel
const blogPosts = [
  {
    id: "1",
    slug: "cum-sa-gestionezi-anxietatea",
    title: "Cum să gestionezi anxietatea în viața de zi cu zi",
    excerpt: "Anxietatea este o emoție naturală, dar când devine copleșitoare, poate afecta calitatea vieții. Descoperă tehnici practice pentru a o gestiona eficient.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=500&fit=crop",
    category: "Anxietate",
    date: "2024-01-15",
    readTime: "5 min",
  },
  {
    id: "2",
    slug: "importanta-autocunoasterii",
    title: "Importanța autocunoașterii în procesul terapeutic",
    excerpt: "Autocunoașterea este primul pas spre schimbare. Află de ce este esențială înțelegerea propriilor pattern-uri emoționale și comportamentale.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=500&fit=crop",
    category: "Dezvoltare personală",
    date: "2024-01-10",
    readTime: "7 min",
  },
  {
    id: "3",
    slug: "limite-sanatoase-relatii",
    title: "Cum să stabilești limite sănătoase în relații",
    excerpt: "Limitele sănătoase sunt esențiale pentru relații echilibrate. Învață să comunici nevoile tale și să îți protejezi starea emoțională.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=500&fit=crop",
    category: "Relații",
    date: "2024-01-05",
    readTime: "6 min",
  },
  {
    id: "4",
    slug: "mindfulness-pentru-incepatori",
    title: "Mindfulness pentru începători: Ghid practic",
    excerpt: "Mindfulness-ul poate transforma modul în care experimentezi viața. Descoperă exerciții simple pe care le poți practica zilnic.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
    category: "Mindfulness",
    date: "2023-12-28",
    readTime: "8 min",
  },
  {
    id: "5",
    slug: "trauma-si-vindecarea",
    title: "Înțelegerea traumei și drumul spre vindecare",
    excerpt: "Trauma nu definește cine ești. Află cum funcționează procesul de vindecare și ce pași poți face pentru a-ți recâștiga echilibrul.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&h=500&fit=crop",
    category: "Traumă",
    date: "2023-12-20",
    readTime: "10 min",
  },
  {
    id: "6",
    slug: "stima-de-sine-autocritica",
    title: "Stima de sine: De la autocritică la autocompasiune",
    excerpt: "Vocea critică interioară poate fi transformată. Explorează tehnici pentru a dezvolta o relație mai blândă cu tine însuți.",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27abb37f?w=800&h=500&fit=crop",
    category: "Stimă de sine",
    date: "2023-12-15",
    readTime: "6 min",
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Articole despre sănătate emoțională, dezvoltare personală și
              bunăstare psihică. Resurse și perspective pentru a te înțelege mai
              bine pe tine și relațiile tale.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-4">
                    {post.category}
                  </span>

                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime} citire</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6">
              Ai nevoie de sprijin personalizat?
            </h2>
            <p className="text-muted-foreground mb-8">
              Articolele oferă informații generale, dar fiecare persoană este
              unică. Programează o ședință pentru a discuta despre situația ta
              specifică.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Programează o consultație
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

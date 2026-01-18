import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorMessage } from "@/components/ui/error-message";
import { getBlogPosts } from "@/api/blog";

// Funcție pentru calcularea timpului de citire bazat pe text
const calculateReadTime = (text: string): string => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts,
  });

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
          {isLoading && <LoadingSpinner />}

          {error && <ErrorMessage message="Nu s-au putut încărca articolele. Vă rugăm încercați din nou mai târziu." />}

          {posts && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const fullText = `${post.blogIntroRo} ${post.firstSubheadingTextRo} ${post.secondSubheadingTextRo || ''} ${post.thirdSubheadingTextRo || ''} ${post.conclusionRo}`;
                const readTime = calculateReadTime(fullText);

                return (
                  <article
                    key={post.id}
                    className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <Link to={`/blog/${post.id}`}>
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.titleImagePath}
                          alt={post.titleImageAltTextRo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>

                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-4">
                        {post.label}
                      </span>

                      <Link to={`/blog/${post.id}`}>
                        <h2 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors line-clamp-2">
                          {post.blogTitleRo}
                        </h2>
                      </Link>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.blogIntroRo}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{formatDate(post.publishingDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{readTime} citire</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {posts && posts.length === 0 && (
            <div className="text-center text-muted-foreground py-12">
              <p>Nu există încă articole publicate.</p>
            </div>
          )}
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

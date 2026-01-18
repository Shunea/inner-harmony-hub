import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorMessage } from "@/components/ui/error-message";
import { getBlogPostById, getBlogPosts } from "@/api/blog";

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

const BlogArticle = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch current post
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => getBlogPostById(parseInt(id!)),
    enabled: !!id,
  });

  // Fetch all posts for related posts
  const { data: allPosts } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts,
  });

  if (!id || (error && !isLoading)) {
    return <Navigate to="/blog" replace />;
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="py-24">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24">
          <ErrorMessage message="Articolul nu a putut fi încărcat. Vă rugăm încercați din nou mai târziu." />
        </div>
      </Layout>
    );
  }

  // Get related posts (same label, excluding current)
  const relatedPosts = allPosts
    ? allPosts.filter((p) => p.label === post.label && p.id !== post.id).slice(0, 2)
    : [];

  // Calculate read time based on full content
  const fullText = `${post.blogIntroRo} ${post.firstSubheadingTextRo} ${post.secondSubheadingTextRo || ''} ${post.thirdSubheadingTextRo || ''} ${post.conclusionRo}`;
  const readTime = calculateReadTime(fullText);

  return (
    <Layout>
      <Helmet>
        <title>{post.blogTitleRo} - Blog Natalia Șargu</title>
        <meta name="description" content={post.metaDescriptionRo} />
        <meta name="keywords" content={post.metaKeywordsRo} />
      </Helmet>
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
              {post.label}
            </span>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
              {post.blogTitleRo}
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              {post.blogIntroRo}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Natalia Șargu</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishingDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime} citire</span>
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
                src={post.titleImagePath}
                alt={post.titleImageAltTextRo}
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
            <div className="prose prose-lg prose-primary max-w-none
              prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-li:text-foreground prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-accent/50
              prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-blockquote:text-primary prose-blockquote:font-medium">

              {/* First Section */}
              {post.firstSubheadingTitleRo && (
                <>
                  <h2>{post.firstSubheadingTitleRo}</h2>
                  <p>{post.firstSubheadingTextRo}</p>
                </>
              )}

              {/* Second Section */}
              {post.secondSubheadingTitleRo && (
                <>
                  <h2>{post.secondSubheadingTitleRo}</h2>
                  <p>{post.secondSubheadingTextRo}</p>
                </>
              )}

              {/* Third Section */}
              {post.thirdSubheadingTitleRo && (
                <>
                  <h2>{post.thirdSubheadingTitleRo}</h2>
                  <p>{post.thirdSubheadingTextRo}</p>
                </>
              )}

              {/* Conclusion */}
              {post.conclusionRo && (
                <p className="mt-8 font-medium">{post.conclusionRo}</p>
              )}
            </div>

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
                    to={`/blog/${relatedPost.id}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border/50 shadow-soft hover:shadow-medium transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedPost.titleImagePath}
                        alt={relatedPost.titleImageAltTextRo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                        {relatedPost.blogTitleRo}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedPost.blogIntroRo}
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

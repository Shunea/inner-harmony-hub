import { useQuery } from "@tanstack/react-query";
import { useEffect, useCallback, useRef } from "react";
import { Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SocialMediaPost {
  id: number;
  platform: "instagram" | "tiktok";
  videoUrl: string;
  titleRo: string;
  orderIndex: number;
}

function extractTikTokVideoId(url: string): string | null {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : null;
}

function extractInstagramPostId(url: string): string | null {
  const match = url.match(/\/(p|reel|reels)\/([A-Za-z0-9_-]+)/);
  return match ? match[2] : null;
}

async function getSocialMediaPosts(): Promise<SocialMediaPost[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/social-media-posts`);
  if (!response.ok) throw new Error('Failed to fetch social media posts');
  return response.json();
}

export const SocialMediaPosts = () => {
  const renderAttempts = useRef(0);

  const { data: apiPosts, isLoading, error } = useQuery<SocialMediaPost[]>({
    queryKey: ["social-media-posts"],
    queryFn: getSocialMediaPosts,
  });

  const posts = apiPosts || [];

  // Function to re-render embeds
  const renderEmbeds = useCallback(() => {
    if ((window as any).tiktokEmbed?.lib?.render) {
      (window as any).tiktokEmbed.lib.render();
    }
    if ((window as any).instgrm?.Embeds?.process) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;

    const hasTikTok = posts.some(p => p.platform === "tiktok");
    const hasInstagram = posts.some(p => p.platform === "instagram");

    // Load TikTok embed script
    if (hasTikTok) {
      const existingScript = document.querySelector('script[src*="tiktok.com/embed"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        script.onload = () => {
          setTimeout(renderEmbeds, 500);
        };
        document.body.appendChild(script);
      }
    }

    // Load Instagram embed script
    if (hasInstagram) {
      const existingScript = document.querySelector('script[src*="instagram.com/embed"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
          setTimeout(renderEmbeds, 500);
        };
        document.body.appendChild(script);
      }
    }

    // Re-render embeds multiple times to ensure they load
    const timers = [
      setTimeout(renderEmbeds, 500),
      setTimeout(renderEmbeds, 1500),
      setTimeout(renderEmbeds, 3000),
      setTimeout(renderEmbeds, 5000),
    ];

    // Also re-render when the component becomes visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          renderAttempts.current += 1;
          renderEmbeds();
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('[data-social-posts]');
    if (section) {
      observer.observe(section);
    }

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [posts, renderEmbeds]);

  if (isLoading) {
    return (
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Se încarcă...</p>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-secondary/5" data-social-posts>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
            Comunitatea Noastră
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Urmărește-ne pe rețelele sociale pentru conținut inspirațional și sfaturi despre sănătate mentală
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-4">
              {posts
                .sort((a, b) => a.orderIndex - b.orderIndex)
                .map((post) => (
                  <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-all h-full">
                      {/* Platform Badge */}
                      <div className="p-4 bg-gradient-to-r from-primary to-secondary">
                        <div className="flex items-center gap-2 text-primary-foreground">
                          {post.platform === "instagram" ? (
                            <>
                              <Instagram className="w-5 h-5" />
                              <span className="font-bold text-sm">Instagram</span>
                            </>
                          ) : (
                            <>
                              <SiTiktok className="w-5 h-5" />
                              <span className="font-bold text-sm">TikTok</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Video Embed */}
                      <div className="aspect-[9/16] relative bg-black flex items-center justify-center overflow-hidden" style={{ minHeight: '500px' }}>
                        {post.platform === "tiktok" ? (
                          <blockquote
                            className="tiktok-embed w-full h-full"
                            cite={post.videoUrl}
                            data-video-id={extractTikTokVideoId(post.videoUrl) || ""}
                            style={{ maxWidth: "100%", minWidth: "100%" }}
                          >
                            <section className="flex items-center justify-center h-full">
                              <div className="text-white text-center p-4">
                                <SiTiktok className="w-12 h-12 mx-auto mb-2 animate-pulse" />
                                <p className="text-sm">Se încarcă...</p>
                              </div>
                            </section>
                          </blockquote>
                        ) : (
                          <blockquote
                            className="instagram-media w-full h-full"
                            data-instgrm-permalink={post.videoUrl}
                            data-instgrm-version="14"
                            style={{ maxWidth: "100%", minWidth: "100%", margin: 0 }}
                          >
                            <div className="flex items-center justify-center h-full">
                              <div className="text-white text-center p-4">
                                <Instagram className="w-12 h-12 mx-auto mb-2 animate-pulse" />
                                <p className="text-sm">Se încarcă...</p>
                              </div>
                            </div>
                          </blockquote>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {post.titleRo}
                        </h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 bg-background hover:bg-primary hover:text-primary-foreground border-2 border-border hover:border-primary transition-all" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 bg-background hover:bg-primary hover:text-primary-foreground border-2 border-border hover:border-primary transition-all" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-8 md:hidden">
            <div className="text-xs text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
              Swipe pentru mai multe →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

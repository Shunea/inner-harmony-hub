import { AboutSection } from '@/api/about';

interface Props {
  section: AboutSection;
}

export const HeroSection = ({ section }: Props) => {
  return (
    <section className={`pt-20 pb-16 md:pt-24 md:pb-20 ${section.backgroundColor || 'bg-background'}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            {section.subtitleRo && (
              <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
                {section.subtitleRo}
              </span>
            )}

            {section.titleRo && (
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 leading-tight">
                {section.titleRo}
              </h1>
            )}

            {section.contentRo && (
              <div
                className="text-lg text-muted-foreground leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: section.contentRo }}
              />
            )}
          </div>

          {/* Image */}
          {section.imageUrl && (
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-large">
                  <img
                    src={section.imageUrl}
                    alt={section.imageAltTextRo || section.titleRo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

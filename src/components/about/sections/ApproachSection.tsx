import { AboutSection } from '@/api/about';

interface Props {
  section: AboutSection;
}

export const ApproachSection = ({ section }: Props) => {
  return (
    <section className={`py-20 lg:py-28 ${section.backgroundColor || 'bg-secondary'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {section.titleRo && (
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-8 text-center">
              {section.titleRo}
            </h2>
          )}

          {section.contentRo && (
            <div
              className="text-foreground leading-relaxed space-y-4 prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: section.contentRo }}
            />
          )}

          {section.imageUrl && (
            <div className="mt-12">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={section.imageUrl}
                  alt={section.imageAltTextRo || section.titleRo}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

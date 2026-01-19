import { AboutSection } from '@/api/about';
import { Award } from 'lucide-react';

interface Props {
  section: AboutSection;
}

export const QualificationsSection = ({ section }: Props) => {
  // Sortare items după orderIndex
  const sortedItems = section.items?.sort((a, b) => a.orderIndex - b.orderIndex) || [];

  return (
    <section className={`py-20 lg:py-28 ${section.backgroundColor || 'bg-secondary'}`}>
      <div className="container mx-auto px-4">
        {section.titleRo && (
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
            {section.titleRo}
          </h2>
        )}

        {section.contentRo && (
          <div
            className="max-w-3xl mx-auto text-center mb-12 text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: section.contentRo }}
          />
        )}

        <div className="max-w-4xl mx-auto space-y-6">
          {sortedItems.map((item, index) => (
            <div
              key={index}
              className="bg-background border border-border/50 rounded-xl p-6 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.titleRo}
                  </h3>

                  <div
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.descriptionRo }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { AboutSection } from '@/api/about';
import * as LucideIcons from 'lucide-react';

interface Props {
  section: AboutSection;
}

export const ExpertiseSection = ({ section }: Props) => {
  // Sortare items după orderIndex
  const sortedItems = section.items?.sort((a, b) => a.orderIndex - b.orderIndex) || [];

  return (
    <section className={`py-20 lg:py-28 ${section.backgroundColor || 'bg-background'}`}>
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sortedItems.map((item, index) => {
            // Dynamic icon from lucide-react
            const IconComponent = LucideIcons[item.iconName as keyof typeof LucideIcons] as any;

            return (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {IconComponent && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  )}

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
            );
          })}
        </div>
      </div>
    </section>
  );
};

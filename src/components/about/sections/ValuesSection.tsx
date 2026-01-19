import { AboutSection } from '@/api/about';
import * as LucideIcons from 'lucide-react';

interface Props {
  section: AboutSection;
}

export const ValuesSection = ({ section }: Props) => {
  // Sortare items după orderIndex
  const sortedItems = section.items?.sort((a, b) => a.orderIndex - b.orderIndex) || [];

  return (
    <section className={`py-20 lg:py-28 ${section.backgroundColor || 'bg-card'}`}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sortedItems.map((item, index) => {
            // Dynamic icon from lucide-react
            const IconComponent = LucideIcons[item.iconName as keyof typeof LucideIcons] as any;

            return (
              <div
                key={index}
                className="bg-background border border-border/50 rounded-xl p-6 hover:border-accent/30 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
              >
                {IconComponent && (
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                )}

                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.titleRo}
                </h3>

                <div
                  className="text-muted-foreground text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.descriptionRo }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

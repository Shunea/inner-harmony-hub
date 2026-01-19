import { AboutSection } from '@/api/about';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

interface Props {
  section: AboutSection;
}

export const DiasporaSection = ({ section }: Props) => {
  return (
    <section className={`py-20 lg:py-28 ${section.backgroundColor || 'bg-card'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {section.titleRo && (
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6">
              {section.titleRo}
            </h2>
          )}

          {section.contentRo && (
            <div
              className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-4"
              dangerouslySetInnerHTML={{ __html: section.contentRo }}
            />
          )}

          {section.ctaButtons && section.ctaButtons.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              {section.ctaButtons.map((button, index) => {
                const IconComponent = button.icon
                  ? (LucideIcons[button.icon as keyof typeof LucideIcons] as any)
                  : null;

                return (
                  <Button
                    key={index}
                    asChild
                    variant={button.variant === 'outline' ? 'outline' : 'default'}
                    size="lg"
                  >
                    <Link to={button.url}>
                      {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
                      {button.textRo}
                    </Link>
                  </Button>
                );
              })}
            </div>
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

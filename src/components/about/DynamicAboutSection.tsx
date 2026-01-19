import { AboutSection } from '@/api/about';
import { HeroSection } from './sections/HeroSection';
import { ApproachSection } from './sections/ApproachSection';
import { ValuesSection } from './sections/ValuesSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { QualificationsSection } from './sections/QualificationsSection';
import { DiasporaSection } from './sections/DiasporaSection';
import { CtaSection } from './sections/CtaSection';

interface Props {
  section: AboutSection;
}

export const DynamicAboutSection = ({ section }: Props) => {
  const { sectionType } = section;

  switch (sectionType) {
    case 'hero':
      return <HeroSection section={section} />;
    case 'approach':
      return <ApproachSection section={section} />;
    case 'values':
      return <ValuesSection section={section} />;
    case 'expertise':
      return <ExpertiseSection section={section} />;
    case 'qualifications':
      return <QualificationsSection section={section} />;
    case 'diaspora':
      return <DiasporaSection section={section} />;
    case 'cta':
      return <CtaSection section={section} />;
    default:
      return null;
  }
};

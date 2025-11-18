import HeroSection from '@/components/sections/home/HeroSection';
import LogosSection from '@/components/sections/home/LogosSection';
import USPsSection from '@/components/sections/home/USPsSection';
import ProjectsSection from '@/components/sections/home/ProjectsSection';
import AboutSection from '@/components/sections/home/AboutSection';
import ExperiencesSection from '@/components/sections/home/ExperiencesSection';
import CTASection from '@/components/sections/home/CTASection';

export const sectionRegistry: Record<string, React.ComponentType<any>> = {
  hero: HeroSection,
  logos: LogosSection,
  usps: USPsSection,
  projects: ProjectsSection,
  about: AboutSection,
  experiences: ExperiencesSection,
  cta: CTASection,
};

export default sectionRegistry;
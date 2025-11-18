import React from 'react';
import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import Button from '@/components/ui/Button';

interface HeroData {
  label: string;
  labelAccent: string;
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  heroImage: string;
}

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  // Split heading for visual impact: "Smart systems build" and "for real people"
  const [headingPart1, headingPart2] = data.heading.includes(' for ')
    ? data.heading.split(' for ')
    : [data.heading, ''];

  return (
    <section className="relative min-h-section bg-gradient-to-br from-dark-primary via-dark-secondary to-black flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gap lg:gap-16 items-start lg:items-center">
          {/* Left: Content */}
          <div className="order-1 lg:order-1 space-y-6 lg:space-y-8">
            <span className="text-accent-orange text-body font-semibold block">
              {data.label} <span className="font-bold">{data.labelAccent}</span>
            </span>
            <Heading variant="h1" className="text-text-white leading-[0.9]">
              <span className="block">{headingPart1}</span>
              <span className="block">{headingPart2}</span>
            </Heading>
            <Paragraph className="text-text-muted max-w-md">
              {data.subheading}
            </Paragraph>
            <Button href={data.ctaLink} variant="primary" size="lg">
              {data.ctaText}
            </Button>
          </div>
          {/* Right: Image */}
          <div className="order-2 lg:order-2 hidden lg:block">
            <img
              src={data.heroImage}
              alt="Fractals AI Crystals representing innovative design"
              className="w-full h-96 lg:h-[500px] object-contain opacity-90 rounded-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

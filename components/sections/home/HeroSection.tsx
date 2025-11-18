import React from 'react';
import Image from 'next/image'; // Use Next.js Image component
import Button from '@/components/ui/Button'; // Use our Button component

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

const HeroSection: React.FC<HeroProps> = ({ data }) => {
  return (
    // Set a minimum height and use flexbox for centering, with increased vertical spacing and content pushed down
    <section className="relative flex flex-col items-center justify-end text-center min-h-section bg-dark-primary px-6 py-28 pb-32 overflow-hidden">

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl">
        <span className="text-sm font-bold text-text-muted uppercase tracking-widest">
          {data.label} & {data.labelAccent}
        </span>

        <h1 className="mt-4 text-h1-mobile lg:text-hero-xl font-bold text-text-white">
          {data.heading}
        </h1>

        <p className="mt-6 text-body text-text-muted max-w-2xl mx-auto">
          {data.subheading}
        </p>

        <div className="mt-10">
          <Button href={data.ctaLink} variant="ghost" size="lg">
            {data.ctaText}
          </Button>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute bottom-0 right-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[120px] sm:max-w-[150px] md:max-w-[200px] opacity-50 z-0">
        <Image
          src={data.heroImage}
          alt="Fractals AI Crystals"
          width={500}
          height={500}
          priority // Eager load the hero image
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;

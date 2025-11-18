'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';

interface AboutSectionProps {
  data: {
    label: string;
    heading: string;
    name: string;
    paragraph: string;
    image: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    // CHANGE BG TO LIGHT THEME
    <section className="bg-light-primary py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-x-20 gap-y-12">
          {/* Text on left - adjusted to take more space */}
          <div className="lg:w-3/5">
            <span className="text-text-medium text-sm font-bold uppercase tracking-widest">
              {data.label}
            </span>
            <Heading variant="h2" className="text-text-dark my-4">
              {data.heading}
            </Heading>
            <p className="text-text-medium text-body leading-relaxed">
              {data.paragraph}
            </p>
          </div>
          {/* Image on right - adjusted to take less space */}
          <div className="lg:w-2/5 w-full">
            <Image
              src={data.image}
              alt={data.name}
              width={600}
              height={700} // Adjust height for a more portrait feel
              className="w-full h-auto rounded-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
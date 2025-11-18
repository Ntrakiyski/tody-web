'use client';
import React from 'react';
import Image from 'next/image';

interface LogosSectionProps {
  data: {
    heading: string; // Keep for type safety, but we won't render it
    logos: string[];
  };
}

const LogosSection: React.FC<LogosSectionProps> = ({ data }) => {
  return (
    // Change background to light, adjust padding
    <section className="bg-light-primary py-12">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Add the heading */}
        <h3 className="text-center text-text-muted text-h3 mb-12">
          {data.heading}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between">
          {data.logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                width={120} // Slightly increase size
                height={40}
                // Style SVGs to be dark and not change on hover
                className="h-6 w-auto object-contain text-text-medium"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
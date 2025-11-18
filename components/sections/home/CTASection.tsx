'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Badge from '@/components/ui/Badge';
import Paragraph from '@/components/ui/Paragraph';

interface CTASectionProps {
  data: {
    heading: string;
    subtitle: string;
    tags: string[];
    image: string;
  };
}

const CTASection: React.FC<CTASectionProps> = ({ data }) => {
  return (
    <section className="bg-dark-primary py-section-padding relative overflow-hidden">
      {/* Decorative crystal image positioned at bottom right */}
      <div className="absolute bottom-0 right-0 w-1/3 h-auto opacity-30">
        <Image
          src={data.image}
          alt="Decorative crystals"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="max-w-3xl">
          <Heading variant="h2" className="text-text-white mb-6">
            {data.heading}
          </Heading>
          <Paragraph className="text-text-muted mb-8">
            {data.subtitle}
          </Paragraph>
          
          <div className="flex flex-wrap gap-3 mt-10">
            {data.tags.map((tag, index) => (
              // Use an outline variant we will create
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
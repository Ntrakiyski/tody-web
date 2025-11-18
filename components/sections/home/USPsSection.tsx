'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Paragraph from '@/components/ui/Paragraph';

interface USPsSectionProps {
  data: {
    heading: string;
    subtitle: string;
    cards: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

const USPsSection: React.FC<USPsSectionProps> = ({ data }) => {
  return (
    <section className="bg-light-primary py-section-padding">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <Heading variant="h2" className="text-text-dark mb-4">
            {data.heading}
          </Heading>
          <Paragraph className="text-text-medium max-w-2xl mx-auto">
            {data.subtitle}
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.cards.map((card, index) => (
            <Card key={index} variant="light">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <Heading variant="h4" className="text-text-dark mb-2">
                  {card.title}
                </Heading>
                <Paragraph className="text-text-medium">
                  {card.description}
                </Paragraph>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPsSection;
'use client';

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Paragraph from '@/components/ui/Paragraph';
import { ArrowUpRight } from 'lucide-react'; // Import a proper icon

interface ExperiencesSectionProps {
  data: {
    heading: string;
    subtitle: string;
    experiences: Array<{
      slug: string;
      company: string;
      description: string;
    }>;
  };
}

const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ data }) => {
  return (
    // CHANGE BACKGROUND TO LIGHT THEME, CENTER INTRO TEXT
    <section className="bg-light-primary py-section-padding">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto"> {/* Center aligned text */}
          <Heading variant="h2" className="text-text-dark mb-4">
            {data.heading}
          </Heading>
          <Paragraph className="text-text-medium">
            {data.subtitle}
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.experiences.map((experience, index) => (
            <Link href={`/experiences/${experience.slug}`} key={index} className="block">
              <Card variant="light"> {/* Use light variant */}
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Heading variant="h3" className="text-text-dark flex-1 pr-4"> {/* Dark text */}
                      {experience.company}
                    </Heading>
                    {/* Use an icon component */}
                    <ArrowUpRight className="text-text-medium h-6 w-6" /> {/* Medium color icon */}
                  </div>
                  <div className="flex-1 mt-auto">
                    <Paragraph size="small" className="text-text-medium"> {/* Use smaller text and medium color */}
                      {experience.description}
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
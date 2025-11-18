import React from 'react';

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
    <section className="relative min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-black flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left: Content */}
          <div className="order-1 lg:order-1 space-y-6 lg:space-y-8">
            <span className="text-orange-400 text-lg font-semibold block">
              {data.label} <span className="font-bold">{data.labelAccent}</span>
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.9]">
              <span className="block">{headingPart1}</span>
              <span className="block">{headingPart2}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 italic max-w-md leading-relaxed">
              {data.subheading}
            </p>
            <a
              href={data.ctaLink}
              className="inline-block bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              {data.ctaText}
            </a>
          </div>
          {/* Right: Image */}
          <div className="order-2 lg:order-2 hidden lg:block">
            <img
              src={data.heroImage}
              alt="Fractals AI Crystals representing innovative design"
              className="w-full h-96 lg:h-[500px] object-contain opacity-90"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

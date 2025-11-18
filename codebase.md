# Project Codebase Documentation

Generated from: `.`

## File: `eslint.config.mjs`

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

```

## File: `next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

## File: `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

```

## File: `package.json`

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@next/third-parties": "^16.0.3",
    "framer-motion": "^12.23.24",
    "lucide-react": "^0.554.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

## File: `postcss.config.mjs`

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

## File: `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary gradient colors
        'gradient-start': '#E46337',
        'gradient-end': '#FFC947',

        // Dark backgrounds
        'dark-primary': '#101010',
        'dark-secondary': '#1C1C1C',

        // Light backgrounds
        'light-primary': '#F9F9F7',
        'light-secondary': '#FFFFFF',

        // Text colors
        'text-white': '#FFFFFF',
        'text-dark': '#111827',
        'text-medium': '#4B5563',
        'text-muted': '#9CA3AF',

        // Accent colors
        'accent-blue': '#60A5FA',
        'accent-orange': '#E46337',
        'accent-green': '#22C55E',
        'accent-red': '#EF4444',
      },
      fontFamily: {
        // Use CSS variable we defined in layout.tsx
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        // The heading font can be removed if Inter is used for everything
        // Or kept if you want to use Bricolage for specific headings. The new design looks like it uses Inter exclusively.
        heading: ['var(--font-sans)', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['72px', { lineHeight: '1.2' }],
        'h1-mobile': ['48px', { lineHeight: '1.2' }],
        'h2-desktop': ['48px', { lineHeight: '1.2' }],
        'h2-mobile': ['36px', { lineHeight: '1.2' }],
        'h3': ['20px', { lineHeight: '1.2' }],
        'h4': ['14px', { lineHeight: '1.2' }],
        'body': ['18px', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.4' }],
        'xs': ['12px', { lineHeight: '1.2' }],
      },
      spacing: {
        'section-padding': '80px', // py-20
        'container': '1280px',
        'grid-gap': '32px',
        'card-padding': '24px',
        'section-min-h': '728px',
      },
      minHeight: {
        'section': '728px',
      },
      borderRadius: {
        'card': '16px',
        'button': '8px',
        'image': '16px',
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
```

## File: `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

## File: `app\globals.css`

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
  /* Design system colors */
  --color-gradient-start: #E46337;
  --color-gradient-end: #FFC947;
  --color-dark-primary: #101010;
  --color-dark-secondary: #1C1C1C;
  --color-light-primary: #F9F9F7;
  --color-light-secondary: #FFFFFF;
  --color-text-white: #FFFFFF;
  --color-text-dark: #111827;
  --color-text-medium: #4B5563;
  --color-text-muted: #9CA3AF;
  --color-accent-blue: #60A5FA;
  --color-accent-orange: #E46337;
  --color-accent-green: #22C55E;
  --color-accent-red: #EF4444;
}

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-gradient-start: var(--color-gradient-start);
  --color-gradient-end: var(--color-gradient-end);
  --color-dark-primary: var(--color-dark-primary);
  --color-dark-secondary: var(--color-dark-secondary);
  --color-light-primary: var(--color-light-primary);
  --color-light-secondary: var(--color-light-secondary);
  --color-text-white: var(--color-text-white);
  --color-text-dark: var(--color-text-dark);
  --color-text-medium: var(--color-text-medium);
  --color-text-muted: var(--color-text-muted);
  --color-accent-blue: var(--color-accent-blue);
  --color-accent-orange: var(--color-accent-orange);
  --color-accent-green: var(--color-accent-green);
  --color-accent-red: var(--color-accent-red);
  --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-heading: 'Bricolage Grotesque', sans-serif;
  --font-size-hero: 100px;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Flat design - no default shadows */
* {
  box-shadow: none;
}

/* font-family can be removed since we set it on the body in layout.tsx */

```

## File: `app\layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Fractals - AI & Product Design Portfolio",
  description: "Portfolio showcasing AI and Product Design expertise by Gloria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-dark-primary font-sans text-text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

```

## File: `app\page.tsx`

```tsx
import { sectionRegistry } from '@/lib/section-registry';
import homeData from '@/data/home.json';

export default function HomePage() {
  return (
    <main>
      {Object.entries(homeData).map(([sectionName, sectionConfig]) => {
        if (!sectionConfig.enabled) return null;

        const SectionComponent = sectionRegistry[sectionName];

        if (!SectionComponent) {
          console.warn(`Section "${sectionName}" not found in registry`);
          return null;
        }

        return (
          <SectionComponent
            key={sectionName}
            data={sectionConfig.data}
          />
        );
      })}
    </main>
  );
}

```

## File: `components\global\Footer.tsx`

```tsx
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react'; // Example icons

const Footer = () => {
  return (
    <footer className="bg-dark-primary border-t border-text-muted/20">
      <div className="container mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-text-muted text-sm order-2 sm:order-1">
            © 2025 Fractals. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center space-x-6 order-1 sm:order-2">
            <Link href="mailto:email@example.com" className="text-sm text-text-muted hover:text-text-white transition-colors">
              Email Me
            </Link>
            <Link href="/resume.pdf" target="_blank" className="text-sm text-text-muted hover:text-text-white transition-colors">
              Resume
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 order-3">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            {/* Add Dribbble/Behance here if needed */}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

## File: `components\global\Header.tsx`

```tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You may need to install lucide-react: pnpm install lucide-react

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Resources', href: '/resources', hasDropdown: true },
    { name: 'Pricing', href: '/pricing' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-primary/90 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Fractals
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-text-medium hover:text-text-white transition-colors duration-200 flex items-center"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-dark-primary border border-text-muted/20 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href={`${link.href}/overview`}
                        className="block px-4 py-2 text-text-medium hover:text-text-white transition-colors duration-200"
                      >
                        Overview
                      </Link>
                      <Link
                        href={`${link.href}/features`}
                        className="block px-4 py-2 text-text-medium hover:text-text-white transition-colors duration-200"
                      >
                        Features
                      </Link>
                      <Link
                        href={`${link.href}/pricing`}
                        className="block px-4 py-2 text-text-medium hover:text-text-white transition-colors duration-200"
                      >
                        Pricing
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-text-white hover:text-accent-blue transition-colors duration-200"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-gradient-start to-gradient-end text-white px-4 py-2 rounded-button hover:opacity-90 transition-opacity duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-text-muted/20">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className="text-text-white hover:text-accent-orange transition-colors duration-200 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        href={`${link.href}/overview`}
                        className="block px-4 py-2 text-text-medium hover:text-text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Overview
                      </Link>
                      <Link
                        href={`${link.href}/features`}
                        className="block px-4 py-2 text-text-medium hover:text-text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Features
                      </Link>
                      <Link
                        href={`${link.href}/pricing`}
                        className="block px-4 py-2 text-text-medium hover:text-text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pricing
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Link
                  href="/login"
                  className="text-text-white hover:text-accent-blue transition-colors duration-200 text-center"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-gradient-start to-gradient-end text-white px-4 py-2 rounded-button hover:opacity-90 transition-opacity duration-200 text-center"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
```

## File: `components\sections\Hero.tsx`

```tsx
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

```

## File: `components\sections\home\AboutSection.tsx`

```tsx
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
    // CHANGE BG, ADD MIN-HEIGHT AND FLEX
    <section className="bg-dark-secondary min-h-section flex items-center py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-x-20 gap-y-12">
          {/* Text on left */}
          <div className="lg:w-1/2">
            <span className="text-text-muted text-sm font-bold uppercase tracking-widest">
              {data.label}
            </span>
            <Heading variant="h2" className="text-text-white my-4">
              {data.heading}
            </Heading>
            <p className="text-text-muted text-body leading-relaxed">
              {data.paragraph}
            </p>
          </div>
          {/* Image on right */}
          <div className="lg:w-1/2 w-full">
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
```

## File: `components\sections\home\CTASection.tsx`

```tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Badge from '@/components/ui/Badge';

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
          <p className="text-text-muted text-body mb-8">
            {data.subtitle}
          </p>
          
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
```

## File: `components\sections\home\ExperiencesSection.tsx`

```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
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
    // CHANGE BACKGROUND, APPLY MIN-HEIGHT AND FLEX FOR CENTERING
    <section className="bg-dark-primary min-h-section flex items-center py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-left mb-16 max-w-2xl"> {/* Text aligned left */}
          <Heading variant="h2" className="text-text-white mb-4">
            {data.heading}
          </Heading>
          <p className="text-text-muted text-body">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.experiences.map((experience, index) => (
            <Link href={`/experiences/${experience.slug}`} key={index} className="block">
              <Card variant="dark">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Heading variant="h3" className="text-text-white flex-1 pr-4">
                      {experience.company}
                    </Heading>
                    {/* Use an icon component */}
                    <ArrowUpRight className="text-text-muted h-6 w-6" />
                  </div>
                  <div className="flex-1 mt-auto">
                    <p className="text-text-muted text-small"> {/* Use smaller text */}
                      {experience.description}
                    </p>
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
```

## File: `components\sections\home\HeroSection.tsx`

```tsx
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
    // Set a minimum height and use flexbox for centering
    <section className="relative flex flex-col items-center justify-center text-center min-h-section bg-dark-primary px-6 py-20 overflow-hidden">

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl">
        <span className="text-sm font-bold text-text-muted uppercase tracking-widest">
          {data.label} & {data.labelAccent}
        </span>

        <h1 className="mt-4 text-h1-mobile lg:text-h1-desktop font-bold text-text-white">
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
      <div className="absolute bottom-0 right-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs sm:max-w-sm md:max-w-md opacity-50 z-0">
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

```

## File: `components\sections\home\LogosSection.tsx`

```tsx
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
    // Change background, adjust padding
    <section className="bg-dark-secondary py-12">
      <div className="container mx-auto max-w-7xl px-6">
        {/* REMOVE THE HEADING */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between">
          {data.logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                width={120} // Slightly increase size
                height={40}
                // Style SVGs to be monochrome and change color on hover
                className="h-6 w-auto object-contain text-text-muted transition-colors hover:text-text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
```

## File: `components\sections\home\ProjectsSection.tsx`

```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import { ArrowUpRight } from 'lucide-react'; // Import a proper icon

interface ProjectsSectionProps {
  data: {
    heading: string;
    subtitle: string;
    projects: Array<{
      slug: string;
      title: string;
      description: string;
    }>;
  };
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  return (
    // CHANGE BACKGROUND, APPLY MIN-HEIGHT AND FLEX FOR CENTERING
    <section className="bg-dark-primary min-h-section flex items-center py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-left mb-16 max-w-2xl"> {/* Text aligned left */}
          <Heading variant="h2" className="text-text-white mb-4">
            {data.heading}
          </Heading>
          <p className="text-text-muted text-body">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={index} className="block">
              <Card variant="dark">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Heading variant="h3" className="text-text-white flex-1 pr-4">
                      {project.title}
                    </Heading>
                    {/* Use an icon component */}
                    <ArrowUpRight className="text-text-muted h-6 w-6" />
                  </div>
                  <div className="flex-1 mt-auto">
                    <p className="text-text-muted text-small"> {/* Use smaller text */}
                      {project.description}
                    </p>
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

export default ProjectsSection;
```

## File: `components\sections\home\USPsSection.tsx`

```tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';

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
          <p className="text-text-medium text-body max-w-2xl mx-auto">
            {data.subtitle}
          </p>
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
                <p className="text-text-medium text-body">
                  {card.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPsSection;
```

## File: `components\ui\Badge.tsx`

```tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = ''
}) => {
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-gradient-to-r from-gradient-start to-gradient-end text-text-white';
      break;
    case 'secondary':
      variantClasses = 'bg-dark-secondary text-text-white';
      break;
    // ADD THIS NEW VARIANT
    case 'outline':
      variantClasses = 'border border-text-muted/50 text-text-muted hover:bg-dark-secondary hover:border-text-white/80 hover:text-text-white';
      break;
    case 'default':
    default:
      variantClasses = 'bg-light-secondary text-text-medium border border-text-muted/20';
      break;
  }

  // ADD rounded-full
  const badgeClasses = `inline-flex items-center px-4 py-1.5 rounded-full text-small font-medium transition-colors ${variantClasses} ${className}`.trim();

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

export default Badge;
```

## File: `components\ui\Button.tsx`

```tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
}) => {
  // Base button classes
  let baseClasses = 'inline-flex items-center justify-center rounded-button font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size classes
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'px-3 py-1.5 text-sm';
      break;
    case 'lg':
      // Updated lg size classes
      sizeClasses = 'px-8 py-3 text-body'; // Use theme font sizes
      break;
    default: // md
      sizeClasses = 'px-6 py-2.5 text-base';
      break;
  }

  // Variant classes
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-gradient-to-r from-gradient-start to-gradient-end text-text-white hover:opacity-90 focus:ring-accent-orange';
      break;
    case 'secondary':
      variantClasses = 'border border-accent-orange text-accent-orange bg-transparent hover:bg-accent-orange/10 focus:ring-accent-orange';
      break;
    case 'ghost':
      // Updated ghost variant styles
      variantClasses = 'border border-text-white/50 text-text-white bg-transparent hover:bg-dark-secondary hover:border-text-white focus:ring-text-white';
      break;
  }
  
  const buttonClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`.trim();

  // Conditionally render Link or button element
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
```

## File: `components\ui\Card.tsx`

```tsx
import React from 'react';

interface CardProps {
  variant?: 'light' | 'dark';
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  variant = 'light', 
  children, 
  className = '' 
}) => {
  let variantClasses = '';
  
  switch (variant) {
    case 'dark':
      variantClasses = 'bg-dark-secondary text-text-white rounded-card p-6 h-full transition-colors hover:bg-[#2a2a2a] cursor-pointer';
      break;
    case 'light':
    default:
      variantClasses = 'bg-light-secondary text-text-dark rounded-card p-card-padding';
      break;
  }
  
  const cardClasses = `rounded-card p-card-padding ${variantClasses} ${className}`.trim();
  
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
```

## File: `components\ui\Container.tsx`

```tsx
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  const containerClasses = `mx-auto max-w-container px-6 ${className}`.trim();
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;
```

## File: `components\ui\Grid.tsx`

```tsx
import React from 'react';

interface GridProps {
  cols?: 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large' | string;
  children: React.ReactNode;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ 
  cols = 3, 
  gap = 'medium', 
  children, 
  className = '' 
}) => {
  // Map gap sizes to design system values
  const gapClasses = {
    small: 'gap-4',    // 16px
    medium: 'gap-8',   // 32px (grid-gap from design system)
    large: 'gap-12',   // 48px
  };
  
  // Determine gap class
  const gapClass = gapClasses[gap as keyof typeof gapClasses] || gap;
  
  // Grid classes - responsive columns
  const gridClassesMap: Record<number, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', 
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };
  
  const gridClass = gridClassesMap[cols];
  
  const classes = `grid ${gridClass} ${gapClass} ${className}`.trim();
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Grid;
```

## File: `components\ui\Heading.tsx`

```tsx
import React from 'react';

interface HeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ 
  variant = 'h2', 
  children, 
  className = '' 
}) => {
  const headingClasses = {
    h1: 'text-hero-large md:text-[72px] font-bold leading-tight font-heading', // Larger hero
    h2: 'text-h2-desktop sm:text-h2-mobile font-bold leading-tight font-heading',
    h3: 'text-h3 font-bold leading-tight font-heading', // Bold for cards
    h4: 'text-h4 font-semibold leading-tight font-heading',
  };

  const classes = `${headingClasses[variant]} ${className}`.trim();

  switch (variant) {
    case 'h1':
      return <h1 className={classes}>{children}</h1>;
    case 'h2':
      return <h2 className={classes}>{children}</h2>;
    case 'h3':
      return <h3 className={classes}>{children}</h3>;
    case 'h4':
      return <h4 className={classes}>{children}</h4>;
    default:
      return <h2 className={classes}>{children}</h2>;
  }
};

export default Heading;
```

## File: `components\ui\Paragraph.tsx`

```tsx
import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  size?: 'base' | 'small' | 'xs';
}

const Paragraph: React.FC<ParagraphProps> = ({ 
  children, 
  className = '',
  size = 'base'
}) => {
  const sizeClasses = {
    base: 'text-body leading-relaxed',
    small: 'text-small leading-relaxed',
    xs: 'text-xs leading-relaxed',
  };

  const classes = `${sizeClasses[size]} ${className}`.trim();
  
  return (
    <p className={classes}>
      {children}
    </p>
  );
};

export default Paragraph;
```

## File: `data\home.json`

```json
{
  "hero": {
    "enabled": true,
    "data": {
      "label": "HUMAN &",
      "labelAccent": "AI",
      "heading": "Smart systems build for real people",
      "subheading": "Where Product Design meets AI & Machine Learning",
      "ctaText": "Book free call",
      "ctaLink": "#contact",
      "heroImage": "/images/home/hero-crystals.png"
    }
  },
  "logos": {
    "enabled": true,
    "data": {
      "heading": "Tech we work with",
      "logos": [
        "/images/home/cursor-logo.svg",
        "/images/home/cursor-logo.svg",
        "/images/home/cursor-logo.svg",
        "/images/home/cursor-logo.svg",
        "/images/home/cursor-logo.svg"
      ]
    }
  },
  "usps": {
    "enabled": false,
    "data": {
      "heading": "Building intelligence into your product",
      "subtitle": "ML engineers that work backwards—and I understand what work for humans—not just algorithms.",
      "cards": [
        {
          "icon": "/images/home/icon-ai-integration.svg",
          "title": "AI Integration",
          "description": "Seamlessly integrate AI capabilities into your existing products"
        },
        {
          "icon": "/images/home/icon-chatbots.svg",
          "title": "AI Chatbots",
          "description": "Build intelligent conversational interfaces"
        },
        {
          "icon": "/images/home/icon-custom-apps.svg",
          "title": "Custom AI apps",
          "description": "Develop tailored AI solutions for your specific needs"
        },
        {
          "icon": "/images/home/icon-product-design.svg",
          "title": "Product Design",
          "description": "Design AI-powered products that users love"
        }
      ]
    }
  },
  "projects": {
    "enabled": true,
    "data": {
      "heading": "Machine Learning & AI",
      "subtitle": "Hands-on experience building with Neural Networks, LLMs, and autonomous agents.",
      "projects": [
        {
          "slug": "whitepaper-extraction",
          "title": "RAG - Whitepaper data extraction",
          "description": "Reduced manual efforts reduced time by 95% while achieving 98% retrieval accuracy"
        },
        {
          "slug": "meeting-agent",
          "title": "Real-time meeting agent",
          "description": "The use of RLHF (RL) has been used to train AI to train for meeting, editing, and scheduling tasks"
        },
        {
          "slug": "patient-detection",
          "title": "Patient detection system",
          "description": "An autonomous system that predicts and analyzes patient flow within a clinic setting"
        }
      ]
    }
  },
  "about": {
    "enabled": true,
    "data": {
      "label": "for now",
      "heading": "One person team",
      "name": "I'm Gloria",
      "paragraph": "Hi, Gloria — a product designer, based in Bulgaria, with 8 years of experience in UX/UI, product, web & mobile design. I specialize in creating intuitive, user-centered experiences that balance aesthetics with functionality. My work spans across various industries, from SaaS to e-commerce, where I've helped companies transform their digital products into seamless, scalable solutions. I believe great design is not just about how it looks, but how it works.\n\nAfter years of working in product design, I've developed a deep passion for AI and machine learning. I've started to bridge these worlds—using design thinking to make AI more accessible and human-centered. Whether it's designing AI-powered features or exploring how ML can enhance user experiences, I'm constantly learning and experimenting at the intersection of design and technology.",
      "image": "/images/home/gloria-photo.png"
    }
  },
  "experiences": {
    "enabled": true,
    "data": {
      "heading": "Product Design",
      "subtitle": "This is my working experience company-wide with just a few selected projects",
      "experiences": [
        {
          "slug": "tida",
          "company": "TIDA",
          "description": "Redesigning onboarding & business intelligence tool"
        },
        {
          "slug": "treeveo",
          "company": "Treeveo",
          "description": "Redesigning a marketplace for SaaS..."
        },
        {
          "slug": "unum",
          "company": "UNUM",
          "description": "Redesign & unification of the client platform"
        }
      ]
    }
  },
  "cta": {
    "enabled": true,
    "data": {
      "heading": "Interested in My Approach to ML Problem-Solving?",
      "subtitle": "I'm constantly seeking conversations that challenge my thinking",
      "tags": [
        "Machine Learning consulting",
        "Data Science",
        "Generative AI (LLM)",
        "Computer Vision"
      ],
      "image": "/images/home/cta-crystals.png"
    }
  }
}
```

## File: `lib\section-registry.ts`

```typescript
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
```


---

Total files processed: 29
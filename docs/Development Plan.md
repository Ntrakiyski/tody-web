Complete Step-by-Step Guide: Building Your Portfolio Website
Phase 1: Design System Configuration
Step 1: Configure Tailwind with Design System
Open tailwind.config.js (or tailwind.config.ts)
Add custom colors to theme.extend.colors:
Primary gradient: gradient-start: #E46337, gradient-end: #FFC947
Dark backgrounds: dark-primary: #101010, dark-secondary: #1C1C1C
Light backgrounds: light-primary: #F9F9F7, light-secondary: #FFFFFF
Text colors: white: #FFFFFF, dark: #111827, medium: #4B5563, muted: #9CA3AF
Accents: blue: #60A5FA, orange: #E46337, green: #22C55E, red: #EF4444
Add custom font family: fontFamily: { sans: ['Inter', 'sans-serif'] }
Add custom font sizes:
h1-desktop: 72px, h1-mobile: 48px
h2-desktop: 48px, h2-mobile: 36px
h3: 20px, h4: 14px
body: 18px, small: 14px, xs: 12px
Add custom spacing:
section-padding: 80px
container: 1280px
grid-gap: 32px
card-padding: 24px
Add custom border radius:
card: 16px, button: 8px, image: 16px
Save and verify Tailwind is working
Step 2: Set Up Global Styles
Open app/globals.css
Import Inter font from Google Fonts (if not already done)
Add base styles:
Set smooth scrolling: html { scroll-behavior: smooth; }
Remove default shadows (flat design)
Set base typography styles
Verify styles are applied
Phase 2: Global Components
Step 3: Build Header Component
Create components/global/Header.tsx
Add structure:
Logo (link to /)
Navigation: Home, Products, Resources, Pricing
Auth buttons: Log In, Sign Up
Style with Tailwind:
Use dark background or transparent
Make sticky: sticky top-0 z-50
Add backdrop blur if needed
Add mobile menu:
Hamburger icon (visible on mobile)
Slide-out or dropdown menu
Close button
Make fully responsive
Export component
Step 4: Build Footer Component
Create components/global/Footer.tsx
Add structure:
Social media icons (LinkedIn, Dribbble, Behance)
Copyright text: "© 2025 Fractals. All rights reserved."
Style with Tailwind:
Dark background (bg-dark-primary)
Center content
Proper spacing
Make fully responsive
Export component
Step 5: Update Root Layout
Open app/layout.tsx
Import Header and Footer components
Wrap {children} with Header and Footer:
tsx
Copy
<Header />
<main>{children}</main>
<Footer />
Add metadata (title, description)
Verify layout renders on all pages
Phase 3: UI Component Library
Step 6: Build Button Component
Create components/ui/Button.tsx
Add TypeScript interface:
tsx
Copy
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
Style variants:
Primary: Orange gradient background, white text
Secondary: Outlined, transparent background
Ghost: No background, text only
Add sizes: small, medium, large
Add hover/active states
Support both button and link (if href provided)
Export component
Step 7: Build Container Component
Create components/ui/Container.tsx
Add max-width: max-w-7xl (1280px)
Center with mx-auto
Add horizontal padding: px-6
Make responsive
Export component
Step 8: Build Typography Components
Create components/ui/Heading.tsx:
Support variants: h1, h2, h3, h4
Use design system font sizes
Add proper line heights (leading-tight)
Support custom className prop
Create components/ui/Paragraph.tsx:
Use body text size (18px)
Line height: 1.6
Support custom className prop
Export both components
Step 9: Build Card Component
Create components/ui/Card.tsx
Add TypeScript interface:
tsx
Copy
interface CardProps {
  variant?: 'light' | 'dark';
  children: React.ReactNode;
  className?: string;
}
Style:
Border radius: 16px
Padding: 24px
Light variant: white background
Dark variant: dark background
Make responsive
Export component
Step 10: Build Badge Component
Create components/ui/Badge.tsx
Style for skill tags:
Small text (14px)
Padding: px-3 py-1
Border radius: 8px
Support different colors
Export component
Step 11: Build Grid Component
Create components/ui/Grid.tsx
Add TypeScript interface:
tsx
Copy
interface GridProps {
  cols?: 2 | 3 | 4;
  gap?: string;
  children: React.ReactNode;
}
Use CSS Grid
Make responsive:
4 cols → 2 cols on tablet → 1 col on mobile
3 cols → 2 cols on tablet → 1 col on mobile
Use 32px gap by default
Export component
Phase 4: Home Page Sections
Step 12: Build Hero Section
Create components/sections/HeroSection.tsx
Add TypeScript interface for data prop:
tsx
Copy
interface HeroSectionProps {
  data: {
    heading: string;
    highlightedText: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    image: string;
  };
}
Structure:
Dark background (bg-dark-primary)
Container with max-width
Large heading with highlighted text (orange gradient)
Subtitle below
CTA button
Decorative crystal image (absolute positioned, bottom right)
Make fully responsive:
Text size adjusts (72px → 48px)
Image scales/hides on mobile
Export component
Step 13: Build Logos Section
Create components/sections/LogosSection.tsx
Add TypeScript interface:
tsx
Copy
interface LogosSectionProps {
  data: {
    heading: string;
    logos: string[]; // array of 5 image paths
  };
}
Structure:
Light background
Section heading: "Tech we work with"
Horizontal row of 5 logos
Make responsive:
Horizontal scroll on mobile
Grid on desktop
Use Next.js Image component
Export component
Step 14: Build USPs Section
Create components/sections/USPsSection.tsx
Add TypeScript interface:
tsx
Copy
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
Structure:
Light background (bg-light-primary)
Section heading and subtitle
4-column grid of cards
Each card: icon, title, description
Make responsive:
4 cols → 2 cols on tablet → 1 col on mobile
Export component
Step 15: Build Projects Section
Create components/sections/ProjectsSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectsSectionProps {
  data: {
    heading: string;
    subtitle: string;
    projects: Array<{
      slug: string;
      title: string;
      description: string;
      image: string;
    }>;
  };
}
Structure:
Light background
Section heading and subtitle
3-column grid of project cards
Each card: image, title, description
Link to /projects/[slug]
Make responsive:
3 cols → 2 cols on tablet → 1 col on mobile
Use Next.js Image component
Export component
Step 16: Build About Section
Create components/sections/AboutSection.tsx
Add TypeScript interface:
tsx
Copy
interface AboutSectionProps {
  data: {
    label: string;
    heading: string;
    name: string;
    paragraph: string;
    image: string;
  };
}
Structure:
Light background
Two-column layout: text (left) + image (right)
Label: "for now"
Heading: "One person team"
Name and long paragraph
Profile photo
Make responsive:
Stack vertically on mobile
Use Next.js Image component
Export component
Step 17: Build Experiences Section
Create components/sections/ExperiencesSection.tsx
Add TypeScript interface:
tsx
Copy
interface ExperiencesSectionProps {
  data: {
    heading: string;
    subtitle: string;
    experiences: Array<{
      slug: string;
      company: string;
      description: string;
      image: string;
    }>;
  };
}
Structure:
Light background
Section heading and subtitle
3-column grid of experience cards
Each card: image, company, description
Link to /experiences/[slug]
Make responsive:
3 cols → 2 cols on tablet → 1 col on mobile
Use Next.js Image component
Export component
Step 18: Build CTA Section
Create components/sections/CTASection.tsx
Add TypeScript interface:
tsx
Copy
interface CTASectionProps {
  data: {
    heading: string;
    subtitle: string;
    tags: string[];
    image: string;
  };
}
Structure:
Dark background (bg-dark-primary)
Heading and subtitle
Skill tags as badges
Decorative crystal image (absolute positioned, bottom right)
Make responsive
Export component
Phase 5: Project Page Sections
Step 19: Build Project Hero Section
Create components/sections/ProjectHeroSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectHeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    metadataImage: string;
  };
}
Structure:
Dark background with gradient
Large title
Subtitle
Metadata box image (right side)
Make responsive
Export component
Step 20: Build Project Goal Section
Create components/sections/ProjectGoalSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectGoalSectionProps {
  data: {
    heading: string;
    description: string;
    metricsImage: string;
  };
}
Structure:
Light background
Heading and description
Metrics image (shows 3 cards)
Make responsive
Use Next.js Image component
Export component
Step 21: Build Project Challenge Section
Create components/sections/ProjectChallengeSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectChallengeSectionProps {
  data: {
    heading: string;
    description: string;
    bulletPoints: string[];
    diagramImage: string;
  };
}
Structure:
Light background
Heading and description
Bullet points list
Diagram image (right side)
Make responsive
Export component
Step 22: Build Project Approach Section
Create components/sections/ProjectApproachSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectApproachSectionProps {
  data: {
    heading: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    backgroundImage: string;
  };
}
Structure:
Light background
Heading and description
2x2 grid of approach cards
Gradient background image
Make responsive
Export component
Step 23: Build Project Architecture Section
Create components/sections/ProjectArchitectureSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectArchitectureSectionProps {
  data: {
    heading: string;
    description: string;
    bulletPoints: string[];
    diagramImage: string;
  };
}
Structure:
Light background
Heading and description
Bullet points
Architecture diagram image
Make responsive
Export component
Step 24: Build Project Results Section
Create components/sections/ProjectResultsSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectResultsSectionProps {
  data: {
    heading: string;
    description: string;
    ctaHeading: string;
    ctaSubheading: string;
    videoUrl?: string;
  };
}
Structure:
Dark background
Heading and description
CTA box with video embed (if provided)
Support video embed:
Use iframe or video element
Handle missing video gracefully
Make responsive
Export component
Step 25: Build Project Outcomes Section
Create components/sections/ProjectOutcomesSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectOutcomesSectionProps {
  data: {
    cards: Array<{
      icon: string;
      title: string;
      bulletPoints: string[];
    }>;
  };
}
Structure:
Light background
Two-column grid
Each card: icon, title, bullet points
Make responsive (stack on mobile)
Export component
Step 26: Build Project Tech Stack Section
Create components/sections/ProjectTechStackSection.tsx
Add TypeScript interface:
tsx
Copy
interface ProjectTechStackSectionProps {
  data: {
    heading: string;
    description: string;
    categories: Array<{
      name: string;
      technologies: string[];
    }>;
  };
}
Structure:
Light background
Heading and description
Tech badges grouped by category
Display in rows
Make responsive
Export component
Phase 6: Experience Page Sections
Step 27: Build Experience Hero Section
Create components/sections/ExperienceHeroSection.tsx
Add TypeScript interface:
tsx
Copy
interface ExperienceHeroSectionProps {
  data: {
    title: string;
    subtitle: string;
  };
}
Structure:
Dark background
Job title (large)
Company description with highlighted text
Make responsive
Export component
Step 28: Build Experience Overview Section
Create components/sections/ExperienceOverviewSection.tsx
Add TypeScript interface:
tsx
Copy
interface ExperienceOverviewSectionProps {
  data: {
    cards: Array<{
      heading: string;
      description: string;
    }>;
  };
}
Structure:
Light background
Two-column grid
Each card: heading, description
Make responsive (stack on mobile)
Export component
Step 29: Build Experience Work Section
Create components/sections/ExperienceWorkSection.tsx
Add TypeScript interface:
tsx
Copy
interface ExperienceWorkSectionProps {
  data: {
    heading: string;
    subtitle: string;
  };
}
Structure:
Light background
Simple heading and subtitle
Export component
Step 30: Build Experience Detail Section
Create components/sections/ExperienceDetailSection.tsx
Add TypeScript interface:
tsx
Copy
interface ExperienceDetailSectionProps {
  data: {
    heading: string;
    description: string;
    subheading: string;
    bulletPoints: string[];
    visual: string | object; // image path or grid data
    visualType: 'image' | 'grid';
  };
}
Structure:
Light background
Heading and description
"What was achieved" subheading
Bullet points
Visual (image or grid)
Handle both image and grid visuals
Make responsive
Export component (this is repeatable)
Step 31: Build Experience Closing Section
Create components/sections/ExperienceClosingSection.tsx
Add TypeScript interface:
tsx
Copy
interface ExperienceClosingSectionProps {
  data: {
    heading: string;
    paragraph: string;
  };
}
Structure:
Dark background
Heading and long paragraph
Make responsive
Export component
Step 32: Build Experience CTA Section
Create components/sections/ExperienceCTASection.tsx
Add TypeScript interface:
tsx
Copy
interface ExperienceCTASectionProps {
  data: {
    heading: string;
    description: string;
    buttons: Array<{
      text: string;
      href: string;
      variant: 'primary' | 'secondary';
    }>;
    tags: string[];
    backgroundImage: string;
  };
}
Structure:
Dark background with gradient
Heading and description
Email and LinkedIn buttons
Skill tags
Gradient background image
Make responsive
Export component
Phase 7: Section Registry
Step 33: Create Section Registry
Create lib/section-registry.ts (or .js)
Import ALL section components:
tsx
Copy
import HeroSection from '@/components/sections/HeroSection';
import LogosSection from '@/components/sections/LogosSection';
// ... import all sections
Create registry object:
tsx
Copy
export const sectionRegistry: Record<string, React.ComponentType<any>> = {
  hero: HeroSection,
  logos: LogosSection,
  usps: USPsSection,
  projects: ProjectsSection,
  about: AboutSection,
  experiences: ExperiencesSection,
  cta: CTASection,
  projectHero: ProjectHeroSection,
  projectGoal: ProjectGoalSection,
  // ... map all sections
};
Export the registry
Phase 8: JSON Data Structure
Step 34: Create Home Page JSON
Create data/home.json
Structure:
json
Copy
{
  "hero": {
    "enabled": true,
    "data": {
      "heading": "Smart systems build for real people",
      "highlightedText": "HUMAN & AI",
      "subtitle": "Where Product Design meets AI & Machine Learning",
      "ctaText": "Know more",
      "ctaLink": "#about",
      "image": "/images/home/hero-crystals.png"
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
  }
  // ... add all other sections
}
Add all content from "Home Page Content.md"
Use image paths relative to /public/
Step 35: Create Projects JSON
Create data/projects.json
Structure as array:
json
Copy
[
  {
    "slug": "rag-document-qa",
    "title": "RAG - Document Q&A System",
    "sections": {
      "projectHero": {
        "enabled": true,
        "data": {
          "title": "RAG - Document Q&A System",
          "subtitle": "Intelligent document analysis with AI-powered question answering, RAG, LLM",
          "metadataImage": "/images/projects/rag-metadata-box.png"
        }
      },
      "projectGoal": {
        "enabled": true,
        "data": {
          "heading": "The Goal",
          "description": "To build an AI-powered system...",
          "metricsImage": "/images/projects/rag-goal-metrics.png"
        }
      }
      // ... add all sections
    }
  }
  // ... add more projects
]
Add all content from "Projects Template Page Content.md"
Support custom sections with enabled: true/false
Step 36: Create Experiences JSON
Create data/experiences.json
Structure as array:
json
Copy
[
  {
    "slug": "senior-product-designer",
    "title": "Senior Product Designer",
    "sections": {
      "experienceHero": {
        "enabled": true,
        "data": {
          "title": "Senior Product Designer",
          "subtitle": "This is transforming B2B SaaS & business management with 1500+ members across the US, India, Germany & France"
        }
      },
      "experienceOverview": {
        "enabled": true,
        "data": {
          "cards": [
            {
              "heading": "In a nutshell",
              "description": "I joined the team when..."
            },
            {
              "heading": "Cross-functional impact",
              "description": "I worked with the design team..."
            }
          ]
        }
      }
      // ... add all sections
    }
  }
  // ... add more experiences
]
Add all content from "Experiences Template Page Content.md"
Support custom sections with enabled: true/false
Support repeatable detail sections
Phase 9: Dynamic Pages
Step 37: Build Home Page
Open app/page.tsx
Import section registry and home.json:
tsx
Copy
import { sectionRegistry } from '@/lib/section-registry';
import homeData from '@/data/home.json';
Loop through sections:
tsx
Copy
export default function HomePage() {
  return (
    <main>
      {Object.entries(homeData).map(([sectionName, sectionConfig]) => {
        if (!sectionConfig.enabled) return null;
        
        const SectionComponent = sectionRegistry[sectionName];
        
        if (!SectionComponent) {
          console.warn(`Section "${sectionName}" not found`);
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
Test home page renders correctly
Step 38: Build Projects Dynamic Page
Create app/projects/[id]/page.tsx
Import section registry and projects.json:
tsx
Copy
import { sectionRegistry } from '@/lib/section-registry';
import projectsData from '@/data/projects.json';
import { notFound } from 'next/navigation';
Get project by slug:
tsx
Copy
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.slug === params.id);
  
  if (!project) {
    notFound();
  }
  
  return (
    <main>
      {Object.entries(project.sections).map(([sectionName, sectionConfig]) => {
        if (!sectionConfig.enabled) return null;
        
        const SectionComponent = sectionRegistry[sectionName];
        
        if (!SectionComponent) {
          console.warn(`Section "${sectionName}" not found`);
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
Add generateStaticParams for static generation:
tsx
Copy
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.slug,
  }));
}
Test project pages render correctly
Step 39: Build Experiences Dynamic Page
Create app/experiences/[id]/page.tsx
Import section registry and experiences.json:
tsx
Copy
import { sectionRegistry } from '@/lib/section-registry';
import experiencesData from '@/data/experiences.json';
import { notFound } from 'next/navigation';
Get experience by slug (same pattern as projects)
Handle repeatable detail sections:
tsx
Copy
// If section is an array (repeatable), render multiple times
if (Array.isArray(sectionConfig)) {
  return sectionConfig.map((config, index) => {
    if (!config.enabled) return null;
    return (
      <SectionComponent 
        key={`${sectionName}-${index}`} 
        data={config.data} 
      />
    );
  });
}
Add generateStaticParams for static generation
Test experience pages render correctly
Step 40: Add Metadata Generation
Add generateMetadata to each page:
tsx
Copy
export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.slug === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: project.title,
    description: project.sections.projectHero.data.subtitle,
    openGraph: {
      title: project.title,
      description: project.sections.projectHero.data.subtitle,
    },
  };
}
Add metadata to home page
Test metadata appears correctly
Phase 10: Images & Assets
Step 41: Organize Images
Create folder structure in /public/images/:
/public/images/global/ (logo, icons)
/public/images/home/ (all home page images)
/public/images/projects/ (all project images)
/public/images/experiences/ (all experience images)
Place all images in appropriate folders
Use descriptive filenames (e.g., hero-crystals.png, project-1-goal-metrics.png)
Step 42: Update Image Paths in JSON
Go through data/home.json
Update all image paths to match actual file locations
Example: "/images/home/hero-crystals.png"
Go through data/projects.json
Update all image paths
Go through data/experiences.json
Update all image paths
Verify all paths are correct
Step 43: Optimize Images
Verify all section components use Next.js Image component
Add proper width and height attributes
Enable lazy loading (default in Next.js Image)
Consider using WebP format for better compression
Test images load correctly on all pages
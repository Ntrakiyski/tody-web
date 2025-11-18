# Qwen Code Instructions: Tody Portfolio Website

## Project Overview

This is a Next.js 16.0.3 portfolio website project called "Tody Portfolio Website" built with the App Router. The application is designed with a modular, component-driven architecture that uses JSON-based content management. The site is built with TypeScript, Tailwind CSS, and React 19.2.0, following modern Next.js practices.

Key technologies:
- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Package Manager**: pnpm
- **Compiler**: React Compiler enabled (with babel-plugin-react-compiler)
- **Fonts**: Geist and Geist Mono (Google Fonts)

## Architecture

The project follows a three-layer architecture:
1. **Section Components** (`/components/sections/`) - Pre-built, reusable React components for different page sections (Hero, About, Projects, etc.)
2. **Section Registry** (`/lib/section-registry.js`) - Mapping file that connects section names (strings) to their corresponding React components
3. **JSON Configuration** (`/data/*.json`) - Content files that define which sections appear on each page and contain all section content

## Page Structure

- **Home Page** (`/`) - Uses `/data/home.json` and includes hero, features, projects showcase, about, experiences, and call-to-action sections
- **Projects Pages** (`/projects/[id]`) - Dynamic project detail pages using `/data/projects.json`, with customizable sections per project
- **Experiences Pages** (`/experiences/[id]`) - Dynamic experience detail pages using `/data/experiences.json`, with customizable sections per experience

## Design System

### Colors
- Primary gradient: `#E46337` to `#FFC947`
- Dark backgrounds: `#101010` (primary), `#1C1C1C` (secondary)
- Light backgrounds: `#F9F9F7` (primary), `#FFFFFF` (secondary)
- Text: `#FFFFFF` (white), `#111827` (dark), `#4B5563` (medium), `#9CA3AF` (muted)
- Accents: `#60A5FA` (blue), `#E46337` (orange), `#22C55E` (green), `#EF4444` (red)

### Typography
- Font family: Inter (via Geist fonts)
- H1: 72px desktop / 48px mobile
- H2: 48px desktop / 36px mobile
- Body: 18px
- Line heights: 1.2 for headings, 1.6 for body

### Spacing
- Section padding: 80px
- Container max width: 1280px
- Grid gap: 32px
- Card padding: 24px

### Border Radius
- Cards: 16px
- Buttons: 8px
- Images: 16px

## Development Commands

From the project root directory, you can run:

- `pnpm dev` - Start the development server on http://localhost:3000
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## Code Structure

The project follows this directory structure:
```
/my-app
  /app
    /projects/[id]/page.tsx
    /experiences/[id]/page.tsx
    /page.tsx (home)
    /layout.tsx
  /components
    /global
      Header.tsx
      Footer.tsx
    /sections
      HeroSection.tsx
      ProjectHeroSection.tsx
      etc.
    /ui
      Button.tsx
      Card.tsx
      etc.
  /lib
    section-registry.js
  /data
    home.json
    projects.json
    experiences.json
  /public
    /images
  next.config.ts
  tsconfig.json
  package.json
```

## Development Guidelines

### General Guidelines
- Always follow the three-layer architecture: Section Components → Section Registry → JSON Configuration
- Every section component must be registered in `/lib/section-registry.js` before it can be used
- All content must come from JSON files in `/data/` directory, never hardcoded in components
- Every new UI component, section, or page must maintain absolute visual and functional consistency with the existing implementation
- Use Tailwind CSS classes exclusively for styling. Never write custom CSS unless absolutely necessary
- All components must be fully responsive (mobile-first approach)
- Use TypeScript for all files. Define proper interfaces for props and data structures
- Optimize images using Next.js Image component with proper sizing and lazy loading
- Follow Next.js 14+ App Router conventions (app directory, server/client components)

### When Writing Code
- Always use TypeScript with proper type definitions
- Use 'use client' directive only when necessary (interactivity, hooks)
- Prefer server components by default for better performance
- Use semantic HTML elements (header, nav, main, section, article, footer)
- Add proper alt text to all images
- Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
- Extract repeated Tailwind classes into reusable components
- Handle loading states with Suspense and loading.tsx files
- Handle errors with error.tsx files
- Use Next.js metadata API for SEO (generateMetadata function)

### When Creating Sections
- Each section should be a separate component file
- Accept a 'data' prop that contains all section content
- Use design system values from Tailwind config
- Make sections fully responsive
- Add proper TypeScript interfaces for data prop
- Handle missing or optional data gracefully
- Use Next.js Image component for all images
- Add proper semantic HTML structure
- Study existing section components to match spacing, layout patterns, and visual rhythm

### When Working with JSON
- Keep JSON structure consistent across all files
- Use enabled: true/false to toggle sections
- Store all content (text, image paths, links) in JSON
- Use descriptive keys that match component prop names
- Validate JSON structure before using in components
- Handle missing or malformed JSON data gracefully
- Custom sections can be added to both projects and experiences with enabled: true/false

## Error Handling

- Missing JSON Data: Display fallback content or hide section gracefully, log warning to console in development mode, never crash the application
- Invalid Section Name: Log error to console, skip rendering that section, continue rendering other valid sections
- Missing Image: Use Next.js Image component with proper error handling, display placeholder or alt text, log warning in development
- Invalid Route Parameter: Return 404 page using Next.js notFound() function, provide helpful error message

## Constraints

- Must use Next.js 14+ with App Router (not Pages Router)
- Must use Tailwind CSS for all styling (no custom CSS files unless absolutely necessary)
- Must use TypeScript for type safety
- All content must be managed through JSON files, never hardcoded
- Sections must be modular and reusable across different pages
- Must follow the exact design system specifications provided
- Must be pixel-perfect to Figma designs when provided
- Must maintain visual and functional consistency with existing implementation
- Images must be optimized using Next.js Image component
- Must achieve good Core Web Vitals scores

## Success Criteria

- Code follows Next.js 14+ best practices
- Design system is properly implemented in Tailwind config
- All sections are modular and reusable
- Content is fully managed through JSON files
- Website is fully responsive on all devices
- Images are optimized and load efficiently
- TypeScript types are properly defined
- Code is clean, readable, and well-documented
- No console errors or warnings in production
- Achieves good performance scores (Lighthouse)
- New components feel native and seamlessly integrated with existing implementation
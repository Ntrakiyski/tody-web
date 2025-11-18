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
        'hero-xl': ['96px', { lineHeight: '1.1' }], // Larger hero font size
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
        'section-padding-lg': '120px', // py-30
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
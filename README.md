# Tody Portfolio Website

A modern, responsive portfolio website built with Next.js 16.0.3, TypeScript, and Tailwind CSS. This portfolio features a modular, component-driven architecture with JSON-based content management, making it easy to customize and maintain without code changes.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16.0.3 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modular Architecture**: Component-driven design with reusable sections
- **Content Management**: JSON-based content management system
- **Performance Optimized**: Fast loading times with optimized images and assets
- **SEO Friendly**: Proper metadata and semantic HTML
- **Accessibility**: Built with accessibility best practices in mind
- **Animation**: Smooth animations using Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Package Manager**: pnpm
- **Compiler**: React Compiler enabled (with babel-plugin-react-compiler)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist and Geist Mono (Google Fonts)

## 📁 Project Structure

```
my-app/
├── app/                    # Next.js pages and layouts
│   ├── experiences/        # Dynamic experience pages
│   ├── projects/           # Dynamic project pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── global/            # Global components (Header, Footer)
│   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   └── ui/                # UI components (Button, Card, etc.)
├── data/                  # JSON content files
│   ├── home.json          # Home page content
│   ├── projects.json      # Projects content
│   └── experiences.json   # Experiences content
├── lib/                   # Shared utilities
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🏗️ Architecture

This portfolio follows a three-layer architecture:

### 1. Section Components (`/components/sections/`)
Pre-built, reusable React components for different page sections (Hero, About, Projects, etc.) that follow the design system specifications.

### 2. Section Registry (`/lib/section-registry.js`)
Mapping file that connects section names (strings) to their corresponding React components, enabling dynamic rendering based on JSON configuration.

### 3. JSON Configuration (`/data/*.json`)
Content files that define which sections appear on each page and contain all section content, enabling complete customization without code changes.

## 📄 Pages

### Home Page (`/`)
- Located at `app/page.tsx`
- Uses `/data/home.json` for content
- Includes hero, features, projects showcase, about, experiences, and call-to-action sections
- Fully responsive and optimized for all screen sizes

### Projects Pages (`/projects/[id]`)
- Dynamic project detail pages using `/data/projects.json`
- Each project can have customizable sections per individual project
- Supports rich media content and detailed project descriptions

### Experiences Pages (`/experiences/[id]`)
- Dynamic experience detail pages using `/data/experiences.json`
- Each experience can have customizable sections per individual experience
- Includes timeline, role descriptions, and key accomplishments

## 🎨 Design System

### Colors
- **Primary Gradient**: `#E46337` to `#FFC947`
- **Dark Backgrounds**: `#101010` (primary), `#1C1C1C` (secondary)
- **Light Backgrounds**: `#F9F9F7` (primary), `#FFFFFF` (secondary)
- **Text**: `#FFFFFF` (white), `#111827` (dark), `#4B5563` (medium), `#9CA3AF` (muted)
- **Accents**: `#60A5FA` (blue), `#E46337` (orange), `#22C55E` (green), `#EF4444` (red)

### Typography
- **Font Family**: Inter (via Geist fonts)
- **H1**: 72px desktop / 48px mobile
- **H2**: 48px desktop / 36px mobile
- **Body**: 18px
- **Line Heights**: 1.2 for headings, 1.6 for body

### Spacing
- **Section Padding**: 80px
- **Container Max Width**: 1280px
- **Grid Gap**: 32px
- **Card Padding**: 24px

### Border Radius
- **Cards**: 16px
- **Buttons**: 8px
- **Images**: 16px

## 📝 Content Management

All content is managed through JSON files in the `/data/` directory:

### Home Page (`/data/home.json`)
- Controls which sections appear on the home page
- Contains all text, image paths, and links for the home page
- Sections can be enabled/disabled using `enabled: true/false`

### Projects (`/data/projects.json`)
- Defines all projects with customizable sections
- Each project can have a unique combination of sections
- Supports rich media content and detailed descriptions

### Experiences (`/data/experiences.json`)
- Defines work experiences, education, or other timeline-based content
- Each experience can have customizable sections
- Supports timeline visualization and detailed descriptions

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18 or later
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `pnpm dev` - Start the development server on http://localhost:3000
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## 🔧 Customization

### Adding New Sections
1. Create a new section component in `/components/sections/`
2. Register the component in `/lib/section-registry.js`
3. Add the section to your JSON configuration files

### Updating Content
1. Modify the appropriate JSON file in the `/data/` directory
2. Changes will be reflected immediately in development mode

### Updating Design
1. Modify the Tailwind config in `tailwind.config.ts`
2. Update global styles in `app/globals.css`
3. Update component styling using Tailwind classes

## 🧪 Testing

The application uses Next.js built-in testing capabilities. To run tests:

```bash
pnpm test
```

## 🚀 Deployment

### Vercel
The easiest way to deploy this portfolio is with [Vercel](https://vercel.com), the creators of Next.js:

1. Push your code to a Git repository
2. Import the project into Vercel
3. Vercel will automatically detect and configure your Next.js application
4. Your portfolio will be deployed and available at a unique URL

### Other Platforms
This application can be deployed to any platform that supports Next.js applications, such as:
- Netlify
- AWS Amplify
- GitHub Pages
- Custom servers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions about the portfolio, please open an issue in the repository or contact me directly.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
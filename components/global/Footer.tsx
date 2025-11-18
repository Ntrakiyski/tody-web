import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react'; // Example icons

const Footer = () => {
  return (
    <footer className="bg-dark-primary border-t border-text-muted/20">
      <div className="container mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between gap-6">

          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-text-white font-bold text-lg">
              Fractals
            </Link>
          </div>

          {/* Center: Links */}
          <div className="flex items-center space-x-6">
            <Link href="mailto:email@example.com" className="text-sm text-text-muted hover:text-text-white transition-colors">
              Email Me
            </Link>
            <Link href="/resume.pdf" target="_blank" className="text-sm text-text-muted hover:text-text-white transition-colors">
              Resume
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-5">
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
        {/* Desktop copyright centered at the bottom */}
        <div className="mt-6 flex justify-center">
          <p className="text-text-muted text-sm">
            © 2025 Fractals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
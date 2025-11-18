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
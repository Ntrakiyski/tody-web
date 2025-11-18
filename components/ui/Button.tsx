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
      sizeClasses = 'px-3 py-1.5 text-small';
      break;
    case 'lg':
      // Updated lg size classes - use design system padding
      sizeClasses = 'px-8 py-3 text-body'; // Use theme font sizes
      break;
    default: // md
      sizeClasses = 'px-6 py-2.5 text-body'; // Use theme font sizes
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
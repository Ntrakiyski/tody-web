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
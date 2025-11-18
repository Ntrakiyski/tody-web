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
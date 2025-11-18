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
      variantClasses = 'bg-light-secondary text-text-dark rounded-card p-card-padding border border-gray-200'; // Add border
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
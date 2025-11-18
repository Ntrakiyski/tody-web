import React from 'react';

interface GridProps {
  cols?: 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large' | string;
  children: React.ReactNode;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ 
  cols = 3, 
  gap = 'medium', 
  children, 
  className = '' 
}) => {
  // Map gap sizes to design system values
  const gapClasses = {
    small: 'gap-4',    // 16px
    medium: 'gap-8',   // 32px (grid-gap from design system)
    large: 'gap-12',   // 48px
  };
  
  // Determine gap class
  const gapClass = gapClasses[gap as keyof typeof gapClasses] || gap;
  
  // Grid classes - responsive columns
  const gridClassesMap: Record<number, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', 
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };
  
  const gridClass = gridClassesMap[cols];
  
  const classes = `grid ${gridClass} ${gapClass} ${className}`.trim();
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Grid;
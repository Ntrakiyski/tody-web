import React from 'react';

interface HeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  variant = 'h2',
  children,
  className = ''
}) => {
  const headingClasses = {
    h1: 'text-h1-mobile lg:text-h1-desktop font-bold leading-tight font-heading',
    h2: 'text-h2-mobile lg:text-h2-desktop font-bold leading-tight font-heading',
    h3: 'text-h3 font-bold leading-tight font-heading',
    h4: 'text-h4 font-semibold leading-tight font-heading',
  };

  const classes = `${headingClasses[variant]} ${className}`.trim();

  switch (variant) {
    case 'h1':
      return <h1 className={classes}>{children}</h1>;
    case 'h2':
      return <h2 className={classes}>{children}</h2>;
    case 'h3':
      return <h3 className={classes}>{children}</h3>;
    case 'h4':
      return <h4 className={classes}>{children}</h4>;
    default:
      return <h2 className={classes}>{children}</h2>;
  }
};

export default Heading;
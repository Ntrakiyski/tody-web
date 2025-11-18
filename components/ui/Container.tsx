import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  const containerClasses = `mx-auto max-w-container px-6 ${className}`.trim(); // px-6 is standard padding, could be changed to design system value

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;
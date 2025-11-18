import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  const containerClasses = `mx-auto max-w-container px-6 ${className}`.trim();
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;
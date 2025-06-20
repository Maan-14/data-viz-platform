import React from 'react';
import type { IconProps } from './types';

export const PlusIcon: React.FC<IconProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z" fill="#FCFCFC"/>
    </svg>
  );
}; 

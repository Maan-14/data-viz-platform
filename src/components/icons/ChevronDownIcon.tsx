    import React from 'react';
import type { IconProps } from './types';

export const ChevronDownIcon: React.FC<IconProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="12"
      height="08"
      viewBox="0 0 12 08"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M1.41006 0.580017L6.00006 5.17002L10.5901 0.580017L12.0001 2.00002L6.00006 8.00002L6.10352e-05 2.00002L1.41006 0.580017Z" fill="#FCFCFC"/>
    </svg>
  );
}; 
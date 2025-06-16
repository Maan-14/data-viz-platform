import React from 'react';
import type { IconProps } from './types';

export const ArrowUpIcon: React.FC<IconProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M1.41 7.41992L6 2.82992L10.59 7.41992L12 5.99992L6 -7.82013e-05L0 5.99992L1.41 7.41992Z"
        fill="#C8E972"
      />
    </svg>
  );
}; 
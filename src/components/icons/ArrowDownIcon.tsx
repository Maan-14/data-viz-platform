import React from 'react';
import type { IconProps } from './types';

export const ArrowDownIcon: React.FC<IconProps> = ({
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
      <path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill="#C8E972"/>
    </svg>
  );
}; 
import React from 'react';
import type { IconProps } from './types';

export const ReloadIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M0.666687 8C0.666687 12.1417 4.02502 15.5 8.16669 15.5C10.1584 15.5 12.0667 14.7167 13.5 13.3333L12.25 12.0833C11.1917 13.2083 9.71669 13.8333 8.16669 13.8333C2.96669 13.8333 0.366687 7.55 4.04169 3.875C7.71669 0.2 14 2.80833 14 8H11.5L14.8334 11.3333H14.9167L18.1667 8H15.6667C15.6667 3.85833 12.3084 0.5 8.16669 0.5C4.02502 0.5 0.666687 3.85833 0.666687 8Z" fill="#C9FF3B"/>
    </svg>
  );
};
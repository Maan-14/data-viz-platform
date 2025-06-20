import React from 'react';
import type { IconProps } from './types';
import { defaultIconProps } from './types';

export const Bars3Icon: React.FC<IconProps> = ({
  color = defaultIconProps.color,
  className = defaultIconProps.className,
  ...props
}) => {
  return (
    <svg
      width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M1 12H19C19.5523 12 20 12.4477 20 13C20 13.5128 19.614 13.9355 19.1166 13.9933L19 14H1C0.44772 14 0 13.5523 0 13C0 12.4872 0.38604 12.0645 0.88338 12.0067L1 12ZM0.99988 6L18.9999 5.9978C19.5522 5.9978 20 6.4454 20 6.9977C20 7.5105 19.6141 7.9333 19.1167 7.9911L19.0001 7.9978L1.00012 8C0.44784 8.0001 0 7.5524 0 7.0001C0 6.4873 0.38594 6.0646 0.88326 6.0067L0.99988 6ZM1 0H19C19.5523 0 20 0.44772 20 1C20 1.51284 19.614 1.93551 19.1166 1.99327L19 2H1C0.44772 2 0 1.55228 0 1C0 0.48716 0.38604 0.0644901 0.88338 0.00673008L1 0Z" fill="white"/>
    </svg>
  );
}; 

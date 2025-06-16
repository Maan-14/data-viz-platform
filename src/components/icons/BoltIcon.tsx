import React from 'react';
import type { IconProps } from './types';
import { defaultIconProps } from './types';

export const BoltIcon: React.FC<IconProps> = ({
  color = defaultIconProps.color,
  className = defaultIconProps.className,
  ...props
}) => {
  return (
    <svg
      width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M6.75 17.75H0.5L9.25 0.25V10.25H15.5L6.75 27.75V17.75Z" fill="white"/>
    </svg>
  );
}; 

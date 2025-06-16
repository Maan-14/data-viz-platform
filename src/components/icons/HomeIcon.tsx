import React from 'react';
import type { IconProps } from './types';
import { defaultIconProps } from './types';

export const HomeIcon: React.FC<IconProps> = ({
  color = defaultIconProps.color,
  className = defaultIconProps.className,
  ...props
}) => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill={color}/>
    </svg>
  );
}; 
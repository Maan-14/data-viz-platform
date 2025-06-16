import React from 'react';
import type { IconProps } from './types';
import { defaultIconProps } from './types';

export const IconTemplate: React.FC<IconProps> = ({
  width = defaultIconProps.width,
  height = defaultIconProps.height,
  color = defaultIconProps.color,
  className = defaultIconProps.className,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Replace this with your SVG path */}
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}; 
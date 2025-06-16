import React from 'react';
import type { IconProps } from './types';
import { defaultIconProps } from './types';

export const TickIcon: React.FC<IconProps> = ({
  width = defaultIconProps.width,
  height = defaultIconProps.height,
  color = defaultIconProps.color,
  className = defaultIconProps.className,
  ...props
}) => {
  return (
    <svg
      width='11'
      height='09'
      viewBox="0 0 11 09"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Replace this with your SVG path */}
      <path d="M10.2497 1.58313L3.24969 8.58313L0.041687 5.37512L0.863953 4.55286L3.24969 6.93274L9.42743 0.760864L10.2497 1.58313Z" fill="#C8E972"/>
<path d="M10.2497 1.58313L3.24969 8.58313L0.041687 5.37512L0.863953 4.55286L3.24969 6.93274L9.42743 0.760864L10.2497 1.58313Z" stroke="#C8E972"/>
    </svg>
  );
}; 
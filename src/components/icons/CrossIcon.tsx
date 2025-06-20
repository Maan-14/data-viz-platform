import React from 'react';
import type { IconProps } from './types';
import { defaultIconProps } from './types';

export const CrossIcon: React.FC<IconProps> = ({
  color = defaultIconProps.color,
  className = defaultIconProps.className,
  ...props
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M1 1L15 15M1 15L15 1" stroke="white" stroke-width="2"
      />
    </svg>
  );
};
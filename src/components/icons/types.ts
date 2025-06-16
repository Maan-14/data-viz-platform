import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const defaultIconProps: Partial<IconProps> = {
  width: 'auto',
  height: 'auto',
  color: 'currentColor',
  className: '',
};  
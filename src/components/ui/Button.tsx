'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'accent' | 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  accent:
    'bg-accent text-white shadow-elevated-md hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
  primary:
    'bg-primary text-white shadow-elevated-md hover:bg-primary-bright focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  secondary:
    'bg-card-light-alt text-text-primary shadow-elevated-sm hover:bg-card-light focus-visible:ring-2 focus-visible:ring-text-secondary focus-visible:ring-offset-2',
  ghost: 'bg-transparent text-text-primary hover:bg-card-light focus-visible:ring-2 focus-visible:ring-card-light focus-visible:ring-offset-2',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm font-semibold',
  md: 'px-5 py-3 text-base font-semibold',
  lg: 'px-6 py-4 text-lg font-bold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'accent', size = 'md', fullWidth, className, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={cn(
          'rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? 'w-full' : '',
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type IconButtonVariant = 'bare' | 'rounded';

type IconButtonProps = {
  icon: string;
  label?: string;
  href?: Route;
  variant?: IconButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<IconButtonVariant, string> = {
  bare: 'text-text-secondary hover:text-text-primary',
  rounded: 'rounded-full bg-card-light p-2 text-text-secondary hover:bg-card-light-alt hover:text-text-primary',
};

export function IconButton({ icon, label, href, variant = 'bare', className, ...props }: IconButtonProps) {
  const content = (
    <button
      type={props.type ?? 'button'}
      aria-label={label ?? icon}
      {...props}
      className={cn('flex items-center justify-center transition-colors duration-150', variantStyles[variant], className)}
    >
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </button>
  );

  if (href) {
    return (
      <Link href={href} aria-label={label ?? icon} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}

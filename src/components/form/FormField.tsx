'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type FormFieldProps = {
  id: string;
  label: string;
  description?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

export function FormField({ id, label, description, hint, error, children, className }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-sm font-medium text-text-secondary">
        {label}
      </label>
      {description ? <p className="text-xs text-text-secondary/80">{description}</p> : null}
      {children}
      {hint && !error ? <p className="text-xs text-text-secondary/70">{hint}</p> : null}
      {error ? <p className="text-xs font-semibold text-wise-red">{error}</p> : null}
    </div>
  );
}

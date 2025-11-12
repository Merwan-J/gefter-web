'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/cn';

type ToastVariant = 'success' | 'info' | 'warning' | 'error';

type ToastProps = {
  open: boolean;
  message: string;
  variant?: ToastVariant;
  duration?: number;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

const variantStyles: Record<ToastVariant, string> = {
  success: 'bg-wise-green text-white',
  info: 'bg-primary text-white',
  warning: 'bg-chip-yellow text-text-primary',
  error: 'bg-wise-red text-white',
};

export function Toast({
  open,
  message,
  variant = 'info',
  duration = 2500,
  onOpenChange,
  className,
}: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timeout = window.setTimeout(() => {
      onOpenChange?.(false);
    }, duration);
    return () => window.clearTimeout(timeout);
  }, [open, duration, onOpenChange]);

  if (!open) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-30 flex justify-center px-4">
      <div
        className={cn(
          'pointer-events-auto flex max-w-sm items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-elevated-lg',
          variantStyles[variant],
          className,
        )}
      >
        <span>{message}</span>
      </div>
    </div>
  );
}

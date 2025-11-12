'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type OverlayModalProps = {
  open: boolean;
  title?: string;
  onClose?: () => void;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function OverlayModal({ open, title, onClose, children, footer, className }: OverlayModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
      <div className={cn('w-full max-w-sm rounded-2xl bg-background-light p-6 shadow-elevated-lg', className)}>
        <div className="flex items-start justify-between gap-4">
          {title ? <h3 className="text-lg font-bold text-text-primary">{title}</h3> : <span />}
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-card-light p-1 text-text-secondary hover:bg-card-light-alt"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          ) : null}
        </div>
        <div className="mt-4 space-y-4 text-text-primary">{children}</div>
        {footer ? <div className="mt-6 flex flex-col gap-3">{footer}</div> : null}
      </div>
    </div>
  );
}

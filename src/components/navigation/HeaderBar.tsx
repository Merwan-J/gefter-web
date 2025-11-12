'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { cn } from '@/lib/cn';
import { ButtonHTMLAttributes } from 'react';

export type HeaderAction = {
  icon?: string;
  label?: string;
  href?: Route;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
};

type HeaderBarProps = {
  title?: string;
  leftAction?: HeaderAction;
  rightAction?: HeaderAction;
  leftActions?: HeaderAction[];
  rightActions?: HeaderAction[];
  className?: string;
  sticky?: boolean;
};

function HeaderButton({ action }: { action: HeaderAction }) {
  const className = 'flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-card-light';
  const ariaLabel = action.label ?? action.icon ?? '';

  if (action.href) {
    return (
      <Link href={action.href} className={className} aria-label={ariaLabel}>
        {action.icon ? <span className="material-symbols-outlined text-2xl">{action.icon}</span> : action.label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={className} aria-label={ariaLabel}>
      {action.icon ? <span className="material-symbols-outlined text-2xl">{action.icon}</span> : action.label}
    </button>
  );
}

function HeaderActions({ actions, align }: { actions: HeaderAction[]; align: 'start' | 'end' }) {
  if (!actions.length) {
    return <div className={cn('flex w-12 items-center justify-center', align === 'start' ? 'justify-start' : 'justify-end')} />;
  }

  return (
    <div
      className={cn(
        'flex min-w-[3rem] items-center gap-1',
        align === 'start' ? 'justify-start' : 'justify-end',
      )}
    >
      {actions.map((action, index) => (
        <HeaderButton action={action} key={`${action.icon ?? action.label ?? 'action'}-${index}`} />
      ))}
    </div>
  );
}

export function HeaderBar({
  title,
  leftAction,
  rightAction,
  leftActions,
  rightActions,
  className,
  sticky = true,
}: HeaderBarProps) {
  const resolvedLeftActions = leftActions ?? (leftAction ? [leftAction] : []);
  const resolvedRightActions = rightActions ?? (rightAction ? [rightAction] : []);

  return (
    <header
      className={cn(
        'flex items-center bg-background-light px-4 py-3 text-text-primary',
        sticky ? 'sticky top-0 z-20 border-b border-gray-200/60 backdrop-blur-sm' : '',
        className,
      )}
    >
      <HeaderActions actions={resolvedLeftActions} align="start" />
      <div className="flex-1 text-center">
        {title ? <h1 className="text-lg font-bold leading-tight tracking-tight">{title}</h1> : null}
      </div>
      <HeaderActions actions={resolvedRightActions} align="end" />
    </header>
  );
}

'use client';

import Link from 'next/link';
import type { Route } from 'next';

type QuickAction = {
  label: string;
  icon: string;
  href: Route;
};

type QuickActionsProps = {
  actions: QuickAction[];
};

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <section>
      <h2 className="text-lg font-bold text-text-primary">Quick Actions</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-light p-4 text-sm font-bold text-text-primary shadow-elevated-sm transition-colors hover:bg-gray-200"
          >
            <span className="material-symbols-outlined text-2xl">{action.icon}</span>
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

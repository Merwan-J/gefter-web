'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { useTheme } from '@/components/theme/ThemeProvider';
import type { Route } from 'next';

export type BottomNavItem = {
  label: string;
  icon: string;
  href: Route;
};

type BottomNavigationProps = {
  items: BottomNavItem[];
  className?: string;
};

export function BottomNavigation({ items, className }: BottomNavigationProps) {
  const pathname = usePathname();
  const { theme } = useTheme();

  const baseItemColor = theme === 'dark' ? 'text-text-primary-dark' : 'text-text-primary';

  return (
    <nav
      data-role="bottom-nav"
      className={cn(
        'fixed inset-x-0 bottom-0 z-20 flex items-center justify-around px-2 py-2 backdrop-blur-sm transition-colors duration-200',
        theme === 'dark' ? 'border-t border-white/10 bg-[rgba(16,19,34,0.92)]' : 'border-t border-gray-200/60 bg-white/90',
        className,
      )}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex w-20 flex-col items-center justify-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-colors',
              theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-card-light',
              baseItemColor,
              isActive && 'text-accent',
            )}
            aria-label={item.label}
          >
            <span
              className={cn(
                'material-symbols-outlined text-2xl transition-colors',
                isActive ? 'text-accent' : baseItemColor,
              )}
            >
              {item.icon}
            </span>
            <span className={cn('transition-colors', isActive ? 'text-accent' : baseItemColor)}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

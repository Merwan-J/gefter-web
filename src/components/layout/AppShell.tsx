import { ReactNode } from 'react';
import { BottomNavigation, BottomNavItem } from '@/components/navigation/BottomNavigation';
import { cn } from '@/lib/cn';

export type AppShellProps = {
  children: ReactNode;
  bottomNavItems?: BottomNavItem[];
  mainClassName?: string;
};

export function AppShell({ children, bottomNavItems, mainClassName }: AppShellProps) {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[420px] flex-col bg-background-light">
      <main className={cn('flex-1 px-4 pb-28', mainClassName)}>{children}</main>
      {bottomNavItems ? <BottomNavigation items={bottomNavItems} /> : null}
    </div>
  );
}

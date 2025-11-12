import type { Route } from 'next';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { defaultBottomNavItems } from '@/constants/navigation';

export default function NotificationsPage() {
  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar title="Notifications" leftAction={{ icon: 'arrow_back', href: '/' as Route }} />
      <div className="flex flex-1 items-center justify-center pt-10">
        <p className="text-text-secondary">No new notifications.</p>
      </div>
    </AppShell>
  );
}

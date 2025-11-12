import type { Route } from 'next';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { defaultBottomNavItems } from '@/constants/navigation';

export default function ProfilePage() {
  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar title="Profile" leftAction={{ icon: 'arrow_back', href: '/' as Route }} />
      <div className="flex flex-1 items-center justify-center pt-10">
        <p className="text-text-secondary">Profile details will appear here.</p>
      </div>
    </AppShell>
  );
}

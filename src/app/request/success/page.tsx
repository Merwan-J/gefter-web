import Link from 'next/link';
import { AppShell } from '@/components/layout/AppShell';
import { defaultBottomNavItems } from '@/constants/navigation';

export default function RequestSuccessPage() {
  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-12 text-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-green-100">
          <span className="material-symbols-outlined text-7xl text-wise-green">check</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-text-primary">Request Sent Successfully!</h1>
          <p className="text-base text-text-secondary">
            You requested <span className="font-semibold text-text-primary">ETB 150.00</span> from{' '}
            <span className="font-semibold text-text-primary">Abebe Bikila</span>.
          </p>
        </div>
        <Link
          href="/"
          className="w-full rounded-full bg-accent py-4 text-center text-lg font-bold text-white shadow-elevated-md"
        >
          Done
        </Link>
      </div>
    </AppShell>
  );
}

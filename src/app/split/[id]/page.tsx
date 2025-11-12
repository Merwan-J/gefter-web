import type { Route } from 'next';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { defaultBottomNavItems } from '@/constants/navigation';
import { splits } from '@/data/mockData';
import { SplitActions } from '@/components/split/SplitActions';

export default function SplitDetailPage({ params }: { params: { id: string } }) {
  const split = splits.find((item) => item.id === params.id);

  if (!split) {
    return notFound();
  }

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar
        title="Split Details"
        leftAction={{ icon: 'arrow_back_ios_new', href: '/' as Route }}
      />

      <section className="flex flex-col items-center gap-3 pt-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card-light">
          <span className="material-symbols-outlined text-4xl text-text-secondary">receipt_long</span>
        </div>
        <p className="text-sm text-text-secondary">{split.description}</p>
        <p className="text-4xl font-bold tracking-tight text-text-primary">{split.totalAmount.toFixed(2)} ETB</p>
      </section>

      <section className="mt-6 space-y-4">
        <div className="rounded-xl bg-card-light p-4 shadow-elevated-sm">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Date</span>
            <span className="font-medium text-text-primary">{split.date}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-text-secondary">Time</span>
            <span className="font-medium text-text-primary">{split.time}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-primary">Participants ({split.participants.length})</h2>
          </div>
          <div className="mt-4 space-y-2">
            {split.participants.map((participant) => (
              <div
                key={participant.id}
                className="flex items-center gap-4 rounded-lg bg-card-light p-3 shadow-elevated-sm"
              >
                <img
                  src={participant.avatar ?? 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-IBz83ifsYbvaKzArxE86S8wnkG41Xg9cYrSwB1ayLcQJDY4z9YWvrO48PbxDK6-3hN10FA3yi933X5VGphk_q5MrIc_bL8GytSDPJwEFu_MT9A0Qo06Q25ZPvgjxZrvhqYtQRZaAwlVEVzOz5qdw_h3SSTwDoN41Q544rm_lVwpP7cKPJ52o38huzBwTXL0XA6DACtBiozUSFx-6BOWnjt-ne0IwCYE3NzardkVcLUaRlNeMvxG_fR2y4WELbkrUipgnRzekCpo'}
                  alt={participant.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <p className="text-base font-medium text-text-primary">{participant.name}</p>
                  <StatusBadge
                    status={participant.status === 'paid' ? 'paid' : 'pending'}
                    className="mt-1 px-2.5 py-0.5 text-xs"
                  >
                    {participant.status === 'paid' ? 'Paid' : 'Pending'}
                  </StatusBadge>
                </div>
                <p className="text-base font-semibold text-text-primary">{participant.amount.toFixed(2)} ETB</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitActions />
    </AppShell>
  );
}

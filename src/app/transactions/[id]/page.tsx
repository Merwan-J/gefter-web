import Link from 'next/link';
import type { Route } from 'next';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { DetailCard } from '@/components/cards/DetailCard';
import { defaultBottomNavItems } from '@/constants/navigation';
import { transactions } from '@/data/mockData';
import { TransactionActions } from '@/components/transactions/TransactionActions';

const statusMap = {
  pending: 'pending',
  acknowledged: 'acknowledged',
  paid: 'paid',
  rejected: 'rejected',
  markedAsPaid: 'markedAsPaid',
} as const;

export default function TransactionDetail({ params }: { params: { id: string } }) {
  const transaction = transactions.find((item) => item.id === params.id);

  if (!transaction) {
    return notFound();
  }

  const isIncoming = transaction.direction === 'incoming';
  const amountLabel = `${isIncoming ? '+' : '-'}${transaction.amount.toFixed(2)} ETB`;
  const amountToneClass = isIncoming ? 'text-wise-green' : 'text-wise-red';

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar
        title="Transaction Details"
        leftAction={{ icon: 'arrow_back_ios_new', href: '/transactions' as Route }}
      />

      <section className="flex flex-col items-center space-y-4 pt-4 text-center">
        <div className="relative">
          <img
            src={
              transaction.counterpartAvatar ??
              'https://lh3.googleusercontent.com/aida-public/AB6AXuB-IBz83ifsYbvaKzArxE86S8wnkG41Xg9cYrSwB1ayLcQJDY4z9YWvrO48PbxDK6-3hN10FA3yi933X5VGphk_q5MrIc_bL8GytSDPJwEFu_MT9A0Qo06Q25ZPvgjxZrvhqYtQRZaAwlVEVzOz5qdw_h3SSTwDoN41Q544rm_lVwpP7cKPJ52o38huzBwTXL0XA6DACtBiozUSFx-6BOWnjt-ne0IwCYE3NzardkVcLUaRlNeMvxG_fR2y4WELbkrUipgnRzekCpo'
            }
            alt={transaction.counterpart}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div className="absolute -right-2 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full bg-background-light shadow-elevated-sm">
            <span className="material-symbols-outlined text-text-secondary">person</span>
          </div>
        </div>
        <p className="text-lg font-bold text-text-primary">
          {isIncoming ? `${transaction.counterpart} owes you` : `You owe ${transaction.counterpart}`}
        </p>
        <p className={`text-4xl font-extrabold tracking-tighter ${amountToneClass}`}>{amountLabel}</p>
        <p className="text-sm text-text-secondary">{`Recorded on ${transaction.date}`}</p>
      </section>

      <section className="mt-6 space-y-4">
        <div className="rounded-xl bg-card-light p-4">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Status</span>
            <StatusBadge status={statusMap[transaction.status]} />
          </div>
        </div>

        <DetailCard
          title="Transaction Details"
          rows={[
            { label: 'Date', value: transaction.date },
            { label: 'Time', value: transaction.time },
            { label: 'Description', value: transaction.description, alignTop: true },
          ]}
        />
      </section>

      <TransactionActions transaction={transaction} isIncoming={isIncoming} />

      <div className="mt-4 text-center">
        <Link href={'/transactions' as Route} className="text-sm font-medium text-text-secondary">
          View all transactions
        </Link>
      </div>
    </AppShell>
  );
}

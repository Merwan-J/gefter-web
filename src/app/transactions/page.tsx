"use client";

import { useState } from 'react';
import type { Route } from 'next';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { TransactionsFilters, TransactionFilter } from '@/components/transactions/TransactionsFilters';
import { TransactionsList } from '@/components/transactions/TransactionsList';
import { defaultBottomNavItems } from '@/constants/navigation';
import { transactions } from '@/data/mockData';

function filterTransactions(filter: TransactionFilter) {
  switch (filter) {
    case 'Requests':
      return transactions.filter((item) => item.direction === 'incoming' && item.status !== 'paid');
    case 'Payments':
      return transactions.filter((item) => item.direction === 'outgoing');
    case 'Splits':
      return transactions.filter((item) => item.description.toLowerCase().includes('split') || item.description.includes('Trip'));
    default:
      return transactions;
  }
}

export default function TransactionsPage() {
  const [activeFilter, setActiveFilter] = useState<TransactionFilter>('All');
  const filtered = filterTransactions(activeFilter);

  return (
    <AppShell bottomNavItems={defaultBottomNavItems} mainClassName="pb-28">
      <HeaderBar title="Transactions" leftAction={{ icon: 'arrow_back_ios_new', href: '/' as Route }} />
      <TransactionsFilters activeFilter={activeFilter} onSelect={setActiveFilter} />
      <TransactionsList
        transactions={filtered.map((transaction) => ({
          id: transaction.id,
          href: `/transactions/${transaction.id}` as Route,
          title:
            transaction.direction === 'incoming'
              ? `${transaction.counterpart} paid you`
              : `You paid ${transaction.counterpart}`,
          subtitle: transaction.description,
          amount: `${transaction.direction === 'incoming' ? '+' : '-'}${transaction.amount.toFixed(2)} ETB`,
          amountTone: transaction.direction === 'incoming' ? 'positive' : 'negative',
          timestamp: transaction.relativeTime,
          avatarUrl: transaction.counterpartAvatar,
        }))}
      />
    </AppShell>
  );
}

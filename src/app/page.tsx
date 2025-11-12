'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { HomeSummary } from '@/components/home/HomeSummary';
import { QuickActions } from '@/components/home/QuickActions';
import { TransactionsList } from '@/components/transactions/TransactionsList';
import { defaultBottomNavItems } from '@/constants/navigation';
import { transactions } from '@/data/mockData';
import { useTheme } from '@/components/theme/ThemeProvider';
import { useCurrentUser } from '@/user/hooks/user/useCurrentUser';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { LoadingScreen } from '@/components/loading-screens/main-loading-screen';

const balanceSummary = {
  total: 800,
  youOwe: 450,
  owedToYou: 1250,
};

const quickActions = [
  { label: 'Request', icon: 'call_received', href: '/request/select-contact' as Route },
  { label: 'Pay', icon: 'call_made', href: '/transactions/t2' as Route },
  { label: 'Split', icon: 'receipt_long', href: '/split' as Route },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();  
  // const { user, isLoadingUser } = useCurrentUser();

  // useEffect(
  //   ()=>{

  //     if(!isLoadingUser && !user){
  //       redirect('/on-boarding')
  //     }
  //   },
  //   [user, isLoadingUser]
  // )

  // if (isLoadingUser) {
  //   return (
  //     <LoadingScreen 
  //       isLoading={true}
  //       loadingSteps={[
  //         {
  //           key: "user-data",
  //           label: "Loading user data...",
  //           completed: false
  //         }
  //       ]}
  //     />
  //   );
  // }

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar
        title="Gefter"
        leftAction={{ icon: 'account_circle', href: '/profile' as Route, label: 'Profile' }}
        rightActions={[
          { icon: 'notifications', href: '/notifications' as Route, label: 'Notifications' },
          {
            icon: theme === 'dark' ? 'light_mode' : 'dark_mode',
            label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
            onClick: toggleTheme,
          },
        ]}
      />

      <section className="space-y-6 pt-4">
        <HomeSummary total={balanceSummary.total} youOwe={balanceSummary.youOwe} owedToYou={balanceSummary.owedToYou} />
        <QuickActions actions={quickActions} />

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-primary">Transactions</h2>
            <Link href={'/transactions' as Route} className="text-sm font-bold text-accent">
              See all
            </Link>
          </div>
          <TransactionsList
            transactions={transactions.map((transaction) => ({
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
        </section>
      </section>
    </AppShell>
  );
}

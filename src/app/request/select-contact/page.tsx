"use client";

import type { Route } from 'next';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { ContactSearch } from '@/components/request/ContactSearch';
import { defaultBottomNavItems } from '@/constants/navigation';
import { contacts } from '@/data/mockData';

export default function SelectContactPage() {
  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar title="Request From" leftAction={{ icon: 'arrow_back_ios_new', href: '/' as Route }} />
      <div className="py-6">
        <ContactSearch contacts={contacts} baseHref={'/request/amount'} />
      </div>
    </AppShell>
  );
}

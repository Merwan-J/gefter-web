"use client";

import type { Route } from 'next';
import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { Button } from '@/components/ui/Button';
import { defaultBottomNavItems } from '@/constants/navigation';
import { contacts } from '@/data/mockData';

export default function SelectFriendsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount') ?? '0.00';
  const description = searchParams.get('description') ?? '';

  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>(['Hana Tesfaye', 'Abebe Bikila']);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => contact.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const toggleContact = (contact: string) => {
    setSelected((current) =>
      current.includes(contact) ? current.filter((item) => item !== contact) : [...current, contact],
    );
  };

  const handleNext = () => {
    const queryString = new URLSearchParams({ amount, description, friends: selected.join(',') }).toString();
    router.push(`/split/confirm?${queryString}` as Route);
  };

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar
        title="Select Friends"
        leftAction={{ icon: 'arrow_back_ios_new', href: '/split/amount' as Route }}
        sticky={false}
      />

      <div className="space-y-6 py-6">
        <div className="relative">
          <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
            search
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search friends..."
            className="w-full rounded-full border border-gray-200 bg-card-light py-3 pl-10 pr-4 text-base text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-3">
          {filteredContacts.map((contact) => {
            const isChecked = selected.includes(contact);
            return (
              <label
                key={contact}
                className="flex cursor-pointer items-center justify-between rounded-lg bg-card-light p-3 shadow-elevated-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card-light-alt text-sm font-semibold text-text-secondary">
                    {contact
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">{contact}</p>
                    <p className="text-xs text-text-secondary">@{contact.toLowerCase().replace(/\s+/g, '')}</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleContact(contact)}
                  className="h-5 w-5 rounded-md border-gray-200 text-primary focus:ring-primary/40"
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="sticky bottom-24 rounded-2xl bg-white p-4 shadow-elevated-md">
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span>Total Bill</span>
          <span className="font-bold text-text-primary">ETB {amount}</span>
        </div>
        <div className="mt-1 flex items-center justify-between text-sm text-text-secondary">
          <span>Selected</span>
          <span className="font-bold text-text-primary">{selected.length} people</span>
        </div>
        <Button
          variant="accent"
          size="lg"
          fullWidth
          className="mt-4"
          onClick={handleNext}
          disabled={selected.length === 0}
        >
          Next
        </Button>
      </div>
    </AppShell>
  );
}

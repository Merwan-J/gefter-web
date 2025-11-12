"use client";

import type { Route } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { Button } from '@/components/ui/Button';
import { defaultBottomNavItems } from '@/constants/navigation';

export default function SplitAmountPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('0.00');
  const [description, setDescription] = useState('');

  const handleNext = () => {
    const query = new URLSearchParams({ amount, description }).toString();
    router.push(`/split/select-friends?${query}` as Route);
  };

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar title="Enter Bill Amount" leftAction={{ icon: 'arrow_back_ios_new', href: '/' as Route }} />

      <form
        className="flex flex-1 flex-col gap-8 py-6"
        onSubmit={(event) => {
          event.preventDefault();
          handleNext();
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-medium text-text-secondary">Amount</span>
          <div className="relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-bold text-text-secondary/40">ETB</span>
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="w-full border-none bg-transparent p-0 pl-16 text-center text-7xl font-bold text-text-primary focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="description">
            Description
          </label>
          <input
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Dinner at Romina"
            className="w-full rounded-full border border-gray-200 bg-card-light px-5 py-4 text-center text-base text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <Button type="submit" variant="accent" size="lg" fullWidth>
          Next
        </Button>
      </form>
    </AppShell>
  );
}

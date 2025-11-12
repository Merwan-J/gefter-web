"use client";

import type { Route } from 'next';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { Button } from '@/components/ui/Button';
import { AmountInput } from '@/components/request/AmountInput';
import { defaultBottomNavItems } from '@/constants/navigation';

export default function EnterAmountPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contact = searchParams.get('contact');

  const [amount, setAmount] = useState('0.00');
  const [description, setDescription] = useState('');

  const handleNext = () => {
    const query = new URLSearchParams({
      contact: contact ?? '',
      amount,
      description,
    }).toString();
    router.push(`/request/create?${query}` as Route);
  };

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar
        title="Enter Amount"
        leftAction={{ icon: 'arrow_back_ios_new', href: '/request/select-contact' as Route }}
      />

      <form
        className="flex flex-1 flex-col gap-6 py-6"
        onSubmit={(event) => {
          event.preventDefault();
          handleNext();
        }}
      >
        <div className="flex flex-col items-center gap-4">
          {contact ? (
            <div className="flex items-center gap-3 text-sm font-medium text-text-secondary">
              <span className="material-symbols-outlined text-text-secondary">person</span>
              Requesting from <span className="font-semibold text-text-primary">{contact}</span>
            </div>
          ) : null}

          <span className="text-lg text-text-secondary">Amount</span>
          <AmountInput value={amount} onChange={setAmount} size="xl" />
        </div>

        <div>
          <label className="sr-only" htmlFor="description">
            Description
          </label>
          <input
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="What is this for?"
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

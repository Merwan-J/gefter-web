"use client";

import type { Route } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/form/FormField';
import { AmountInput } from '@/components/request/AmountInput';
import { ScheduleInputs } from '@/components/request/ScheduleInputs';
import { defaultBottomNavItems } from '@/constants/navigation';

export default function RequestCreatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const contact = searchParams.get('contact') ?? 'Selected Contact';
  const initialAmount = searchParams.get('amount') ?? '0.00';
  const initialDescription = searchParams.get('description') ?? '';

  const [amount] = useState(initialAmount);
  const [description, setDescription] = useState(initialDescription);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new URLSearchParams({ contact, amount, description, date, time }).toString();
    router.push(`/request/success?${query}` as Route);
  };

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar
        title="Request Payment"
        leftAction={{ icon: 'arrow_back_ios_new', href: '/request/amount' as Route }}
      />

      <form className="space-y-6 py-6" onSubmit={handleSubmit}>
        <section className="rounded-xl bg-white p-6 shadow-elevated-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card-light-alt text-sm font-semibold text-text-secondary">
              {contact
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </div>
            <p className="text-sm font-medium text-text-secondary">Requesting from {contact}</p>
          </div>

          <div className="mt-6 text-center">
            <AmountInput value={amount} onChange={() => {}} prefix="ETB" size="lg" readOnly />
          </div>

          <FormField id="description" label="What is this for?" className="mt-6">
            <input
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="For Lunch 🍔"
              className="block w-full rounded-md border border-gray-200 bg-card-light px-3 py-2.5 text-base text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </FormField>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-elevated-sm">
          <h2 className="text-base font-semibold text-text-primary">Optional Details</h2>
          <ScheduleInputs date={date} time={time} onDateChange={setDate} onTimeChange={setTime} />
        </section>

        <Button type="submit" variant="accent" size="lg" fullWidth>
          Send Request
        </Button>
      </form>
    </AppShell>
  );
}

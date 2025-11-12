"use client";

import type { Route } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { SplitAmountEditor, EditableParticipant } from '@/components/split/SplitAmountEditor';
import { defaultBottomNavItems } from '@/constants/navigation';

const initialParticipants: EditableParticipant[] = [
  { id: 'p1', name: 'Abebe Bikila', handle: '@abebeb', amount: 300 },
  { id: 'p2', name: 'Liya Kebede', handle: '@liyak', amount: 300 },
  { id: 'p3', name: 'Marcus Samuelsson', handle: '@marc_sam', amount: 300 },
  { id: 'p4', name: 'Haile Gebrselassie', handle: '@haileg', amount: 300 },
];

export default function EditAmountsPage() {
  const router = useRouter();
  const [participants, setParticipants] = useState(initialParticipants);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const totalBill = 1200;
  const remaining = totalBill - participants.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(false);
    requestAnimationFrame(() => setToastOpen(true));
  };

  const handleSplitEvenly = () => {
    const evenShare = totalBill / participants.length;
    setParticipants((current) =>
      current.map((participant) => ({ ...participant, amount: Number(evenShare.toFixed(2)) })),
    );
    triggerToast('Split evenly applied.');
  };

  const handleDone = () => {
    triggerToast('Updated amounts saved.');
    setTimeout(() => router.push('/split/confirm' as Route), 400);
  };

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar title="Edit Amounts" leftAction={{ icon: 'arrow_back_ios_new', href: '/split/confirm' as Route }} />

      <section className="space-y-6 py-6">
        <div className="rounded-2xl bg-white p-6 text-center shadow-elevated-sm">
          <div className="grid grid-cols-2 gap-6 text-sm text-text-secondary">
            <div>
              <p>Total Bill Amount</p>
              <p className="mt-1 text-2xl font-bold text-text-primary">
                {totalBill.toFixed(2)} <span className="text-base">ETB</span>
              </p>
            </div>
            <div>
              <p>Remaining Amount</p>
              <p className="mt-1 text-2xl font-bold text-wise-green">
                {remaining.toFixed(2)} <span className="text-base">ETB</span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card-light p-6 shadow-elevated-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-text-primary">Participants</h2>
            <button
              type="button"
              className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
              onClick={handleSplitEvenly}
            >
              Split Evenly
            </button>
          </div>

          <div className="mt-4">
            <SplitAmountEditor participants={participants} onChange={setParticipants} />
          </div>
        </div>

        <Button variant="accent" size="lg" fullWidth onClick={handleDone}>
          Done
        </Button>
      </section>

      <Toast open={toastOpen} message={toastMessage} variant="info" onOpenChange={setToastOpen} />
    </AppShell>
  );
}

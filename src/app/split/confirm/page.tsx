"use client";

import type { Route } from 'next';
import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { HeaderBar } from '@/components/navigation/HeaderBar';
import { Button } from '@/components/ui/Button';
import { OverlayModal } from '@/components/ui/OverlayModal';
import { Toast } from '@/components/ui/Toast';
import { SplitParticipants, SplitParticipant } from '@/components/split/SplitParticipants';
import { defaultBottomNavItems } from '@/constants/navigation';

type Participant = {
  id: string;
  name: string;
  handle: string;
  amount: number;
};

const fallbackFriends = ['Hana Tesfaye', 'Abebe Bikila', 'Lidya Solomon'];

export default function ConfirmSplitPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const amount = Number(searchParams.get('amount') ?? '600');
  const description = searchParams.get('description') ?? 'Dinner at Romina';
  const friendParam = searchParams.get('friends');
  const friends = friendParam?.split(',').filter(Boolean) ?? fallbackFriends;

  const initialParticipants = useMemo(() => {
    const evenShare = friends.length > 0 ? amount / friends.length : 0;
    return friends.map((friend, index) => ({
      id: `friend-${index}`,
      name: friend,
      handle: `@${friend.toLowerCase().replace(/\s+/g, '')}`,
      amount: Number(evenShare.toFixed(2)),
    }));
  }, [friends, amount]);

  const [participants, setParticipants] = useState<Participant[]>(initialParticipants);
  const splitParticipants: SplitParticipant[] = participants.map((participant) => ({
    id: participant.id,
    name: participant.name,
    handle: participant.handle,
    amount: participant.amount,
    status: participant.id === 'friend-0' ? 'paid' : 'pending',
  }));
  const [activeParticipantId, setActiveParticipantId] = useState<string | null>(null);
  const [modalAmount, setModalAmount] = useState('0.00');
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    setParticipants(initialParticipants);
  }, [initialParticipants]);

  const openModal = (participant: SplitParticipant) => {
    setActiveParticipantId(participant.id);
    setModalAmount(participant.amount.toFixed(2));
  };

  const closeModal = () => {
    setActiveParticipantId(null);
  };

  const handleModalSave = () => {
    setParticipants((current) =>
      current.map((participant) =>
        participant.id === activeParticipantId
          ? { ...participant, amount: Number(parseFloat(modalAmount).toFixed(2)) || 0 }
          : participant,
      ),
    );
    setToastMessage('Share updated.');
    setToastOpen(false);
    requestAnimationFrame(() => setToastOpen(true));
    closeModal();
  };

  const handleSplitEvenly = () => {
    const evenShare = participants.length > 0 ? amount / participants.length : 0;
    setParticipants((current) =>
      current.map((participant) => ({ ...participant, amount: Number(evenShare.toFixed(2)) })),
    );
    setToastMessage('Split evenly applied.');
    setToastOpen(false);
    requestAnimationFrame(() => setToastOpen(true));
  };

  const handleSendRequests = () => {
    router.push('/split/s1' as Route);
  };

  const activeParticipant = participants.find((participant) => participant.id === activeParticipantId);

  return (
    <AppShell bottomNavItems={defaultBottomNavItems}>
      <HeaderBar
        title="Confirm Split"
        leftAction={{ icon: 'arrow_back_ios_new', href: '/split/select-friends' as Route }}
      />

      <section className="space-y-6 py-6">
        <div className="rounded-2xl bg-white p-6 text-center shadow-elevated-sm">
          <p className="text-sm text-text-secondary">Total amount for</p>
          <p className="mt-1 text-4xl font-bold tracking-tight text-text-primary">
            {amount.toFixed(2)} <span className="text-2xl">ETB</span>
          </p>
          <p className="mt-2 text-text-secondary">{description}</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-elevated-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-text-primary">Participants ({participants.length})</h2>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
                onClick={handleSplitEvenly}
              >
                Split Evenly
              </button>
              <button
                type="button"
                onClick={() => router.push('/split/edit-amounts' as Route)}
                className="rounded-full bg-gray-200 px-4 py-1.5 text-sm font-semibold text-text-secondary"
              >
                Edit Amounts
              </button>
            </div>
          </div>

          <SplitParticipants participants={splitParticipants} onSelect={openModal} />
        </div>

        <Button variant="accent" size="lg" fullWidth onClick={handleSendRequests}>
          Send Requests
        </Button>
      </section>

      <OverlayModal
        open={Boolean(activeParticipant)}
        title={activeParticipant ? `${activeParticipant.name}'s Share` : undefined}
        onClose={closeModal}
        footer={
          <>
            <Button variant="secondary" size="md" fullWidth onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="primary" size="md" fullWidth onClick={handleModalSave}>
              Save
            </Button>
          </>
        }
      >
        <div className="relative text-center">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-semibold text-text-secondary/40">ETB</span>
          <input
            type="number"
            step="0.01"
            value={modalAmount}
            onChange={(event) => setModalAmount(event.target.value)}
            className="w-full rounded-full border border-gray-200 bg-card-light px-16 py-3 text-4xl font-bold text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <p className="text-sm text-text-secondary">Tap save to update this participant's contribution.</p>
      </OverlayModal>

      <Toast open={toastOpen} message={toastMessage} variant="info" onOpenChange={setToastOpen} />
    </AppShell>
  );
}

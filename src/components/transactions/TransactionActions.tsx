'use client';

import { useState } from 'react';
import { Transaction } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';

export function TransactionActions({ transaction, isIncoming }: { transaction: Transaction; isIncoming: boolean }) {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'info' | 'warning' | 'error'>('info');

  const triggerToast = (message: string, variant: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    setToastMessage(message);
    setToastVariant(variant);
    setToastOpen(false);
    requestAnimationFrame(() => setToastOpen(true));
  };

  const handleReminder = () => {
    triggerToast('Reminder sent successfully!', 'success');
  };

  const handleAcknowledge = () => {
    triggerToast('Acknowledged. Status will update once processed.', 'info');
  };

  const handleReject = () => {
    triggerToast('Marked as rejected.', 'warning');
  };

  const handlePay = () => {
    triggerToast('Payment flow will open soon.', 'info');
  };

  return (
    <div className="mt-8 flex flex-col gap-3">
      {transaction.status === 'pending' && isIncoming ? (
        <Button variant="primary" size="lg" fullWidth onClick={handleReminder}>
          Send Reminder
        </Button>
      ) : null}

      {transaction.status === 'pending' && !isIncoming ? (
        <div className="flex gap-3">
          <Button variant="secondary" size="lg" fullWidth onClick={handleReject}>
            Reject
          </Button>
          <Button variant="primary" size="lg" fullWidth onClick={handleAcknowledge}>
            Acknowledge
          </Button>
        </div>
      ) : null}

      {transaction.status === 'acknowledged' && !isIncoming ? (
        <Button variant="primary" size="lg" fullWidth onClick={handlePay}>
          Pay Now
        </Button>
      ) : null}

      {transaction.status === 'markedAsPaid' ? (
        <div className="flex gap-3">
          <Button variant="secondary" size="lg" fullWidth onClick={handleReject}>
            Reject
          </Button>
          <Button variant="primary" size="lg" fullWidth onClick={handleAcknowledge}>
            Acknowledge
          </Button>
        </div>
      ) : null}

      <Toast open={toastOpen} message={toastMessage} variant={toastVariant} onOpenChange={setToastOpen} />
    </div>
  );
}

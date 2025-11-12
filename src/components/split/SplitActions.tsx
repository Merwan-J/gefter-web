'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ReminderToast } from '@/components/ui/ReminderToast';

export function SplitActions() {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(false);
    requestAnimationFrame(() => setToastOpen(true));
  };

  return (
    <>
      <div className="mt-8 flex flex-col gap-3">
        <Button variant="accent" size="lg" fullWidth onClick={() => triggerToast('Reminder sent to pending participants.')}
        >
          Remind Pending
        </Button>
        <Button variant="primary" size="lg" fullWidth onClick={() => triggerToast('Payment flow will open soon.')}
        >
          Pay Your Share
        </Button>
      </div>
      <ReminderToast visible={toastOpen} message={toastMessage} onOpenChange={setToastOpen} />
    </>
  );
}

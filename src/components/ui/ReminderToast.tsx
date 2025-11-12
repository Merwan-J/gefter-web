'use client';

import { Toast } from '@/components/ui/Toast';

type ReminderToastProps = {
  visible: boolean;
  message: string;
  onOpenChange: (open: boolean) => void;
};

export function ReminderToast({ visible, message, onOpenChange }: ReminderToastProps) {
  return <Toast open={visible} message={message} variant="success" onOpenChange={onOpenChange} />;
}

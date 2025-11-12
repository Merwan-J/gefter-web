import { cn } from '@/lib/cn';

export type StatusType = 'paid' | 'pending' | 'acknowledged' | 'rejected' | 'markedAsPaid';

type StatusBadgeProps = {
  status: StatusType;
  className?: string;
  children?: React.ReactNode;
};

const statusStyles: Record<StatusType, string> = {
  paid: 'bg-green-100 text-wise-green',
  pending: 'bg-yellow-100 text-chip-yellow',
  acknowledged: 'bg-wise-green-bright/20 text-wise-green-bright',
  rejected: 'bg-red-100 text-wise-red',
  markedAsPaid: 'bg-blue-100 text-primary',
};

const statusLabels: Record<StatusType, string> = {
  paid: 'Paid',
  pending: 'Pending',
  acknowledged: 'Acknowledged',
  rejected: 'Rejected',
  markedAsPaid: 'Marked as Paid',
};

export function StatusBadge({ status, className, children }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold',
        statusStyles[status],
        className,
      )}
    >
      {children ?? statusLabels[status]}
    </span>
  );
}

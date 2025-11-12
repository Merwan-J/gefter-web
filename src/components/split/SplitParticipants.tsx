import { StatusBadge } from '@/components/ui/StatusBadge';

export type SplitParticipant = {
  id: string;
  name: string;
  handle: string;
  amount: number;
  status: 'paid' | 'pending';
  avatar?: string;
};

type SplitParticipantsProps = {
  participants: SplitParticipant[];
  onSelect?: (participant: SplitParticipant) => void;
};

export function SplitParticipants({ participants, onSelect }: SplitParticipantsProps) {
  return (
    <div className="space-y-3">
      {participants.map((participant) => (
        <button
          key={participant.id}
          type="button"
          onClick={() => onSelect?.(participant)}
          className="flex w-full items-center gap-4 rounded-lg bg-card-light p-3 text-left shadow-elevated-sm hover:bg-card-light-alt"
        >
          <img
            src={
              participant.avatar ??
              'https://lh3.googleusercontent.com/aida-public/AB6AXuB-IBz83ifsYbvaKzArxE86S8wnkG41Xg9cYrSwB1ayLcQJDY4z9YWvrO48PbxDK6-3hN10FA3yi933X5VGphk_q5MrIc_bL8GytSDPJwEFu_MT9A0Qo06Q25ZPvgjxZrvhqYtQRZaAwlVEVzOz5qdw_h3SSTwDoN41Q544rm_lVwpP7cKPJ52o38huzBwTXL0XA6DACtBiozUSFx-6BOWnjt-ne0IwCYE3NzardkVcLUaRlNeMvxG_fR2y4WELbkrUipgnRzekCpo'
            }
            alt={participant.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-grow">
            <p className="font-semibold text-text-primary">{participant.name}</p>
            <p className="text-xs text-text-secondary">{participant.handle}</p>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge
              status={participant.status === 'paid' ? 'paid' : 'pending'}
              className="px-2.5 py-0.5 text-xs"
            >
              {participant.status === 'paid' ? 'Paid' : 'Pending'}
            </StatusBadge>
            <p className="text-base font-semibold text-text-primary">{participant.amount.toFixed(2)} ETB</p>
          </div>
        </button>
      ))}
    </div>
  );
}

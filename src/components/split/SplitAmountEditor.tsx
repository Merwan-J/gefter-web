'use client';

import { FormField } from '@/components/form/FormField';

export type EditableParticipant = {
  id: string;
  name: string;
  handle: string;
  amount: number;
};

type SplitAmountEditorProps = {
  participants: EditableParticipant[];
  onChange: (participants: EditableParticipant[]) => void;
};

export function SplitAmountEditor({ participants, onChange }: SplitAmountEditorProps) {
  const updateAmount = (id: string, amount: string) => {
    onChange(
      participants.map((participant) =>
        participant.id === id ? { ...participant, amount: Number(amount) } : participant,
      ),
    );
  };

  return (
    <div className="space-y-3">
      {participants.map((participant) => (
        <div key={participant.id} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-elevated-sm">
          <div>
            <p className="font-semibold text-text-primary">{participant.name}</p>
            <p className="text-xs text-text-secondary">{participant.handle}</p>
          </div>
          <div className="relative w-28">
            <FormField id={`amount-${participant.id}`} label="">
              <input
                id={`amount-${participant.id}`}
                type="number"
                value={participant.amount}
                onChange={(event) => updateAmount(participant.id, event.target.value)}
                className="w-full rounded-md border border-gray-200 bg-card-light px-3 py-2 text-right font-semibold text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </FormField>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-text-secondary">ETB</span>
          </div>
        </div>
      ))}
    </div>
  );
}

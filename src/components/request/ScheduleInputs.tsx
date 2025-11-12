'use client';

import { FormField } from '@/components/form/FormField';

type ScheduleInputsProps = {
  date: string;
  time: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
};

export function ScheduleInputs({ date, time, onDateChange, onTimeChange }: ScheduleInputsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormField id="date" label="Date">
        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => onDateChange(event.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-200 bg-card-light px-3 py-2.5 text-base text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </FormField>
      <FormField id="time" label="Time">
        <input
          id="time"
          type="time"
          value={time}
          onChange={(event) => onTimeChange(event.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-200 bg-card-light px-3 py-2.5 text-base text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </FormField>
    </div>
  );
}

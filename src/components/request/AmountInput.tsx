'use client';

import { InputHTMLAttributes } from 'react';

type AmountInputProps = {
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  size?: 'lg' | 'xl';
  readOnly?: boolean;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'name'>;

const sizeClasses = {
  lg: 'text-6xl',
  xl: 'text-7xl',
};

export function AmountInput({ value, onChange, prefix = 'ETB', size = 'lg', readOnly = false, name }: AmountInputProps) {
  return (
    <div className="relative">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-bold text-text-secondary/40">{prefix}</span>
      <input
        type="text"
        inputMode="decimal"
        value={value}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        readOnly={readOnly}
        className={`w-full border-0 bg-transparent p-0 pl-16 text-center font-bold text-text-primary focus:outline-none focus:ring-0 ${sizeClasses[size]} ${readOnly ? 'cursor-default' : ''}`}
      />
    </div>
  );
}

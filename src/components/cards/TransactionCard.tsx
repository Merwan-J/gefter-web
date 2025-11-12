import Link from 'next/link';
import { Avatar } from '@/components/ui/Avatar';
import { cn } from '@/lib/cn';

export type TransactionType = 'incoming' | 'outgoing' | 'split' | 'info';

export type TransactionCardProps = {
  id: string;
  href?: string;
  title: string;
  subtitle?: string;
  amount?: string;
  amountTone?: 'positive' | 'negative' | 'neutral';
  timestamp?: string;
  avatarUrl?: string;
  avatarIcon?: string;
  className?: string;
};

const amountToneStyles: Record<NonNullable<TransactionCardProps['amountTone']>, string> = {
  positive: 'text-wise-green',
  negative: 'text-wise-red',
  neutral: 'text-text-secondary',
};

export function TransactionCard({
  href,
  title,
  subtitle,
  amount,
  amountTone = 'neutral',
  timestamp,
  avatarUrl,
  className,
}: TransactionCardProps) {
  const content = (
    <article className={cn('flex items-center gap-4 rounded-lg bg-card-light p-3 shadow-elevated-sm', className)}>
      <Avatar src={avatarUrl} alt={title} size="sm" />
      <div className="flex-grow">
        <p className="text-base font-semibold leading-tight text-text-primary">{title}</p>
        {subtitle ? <p className="text-sm text-text-secondary">{subtitle}</p> : null}
      </div>
      <div className="shrink-0 text-right">
        {amount ? <p className={cn('font-semibold', amountToneStyles[amountTone])}>{amount}</p> : null}
        {timestamp ? <p className="text-xs text-text-secondary">{timestamp}</p> : null}
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

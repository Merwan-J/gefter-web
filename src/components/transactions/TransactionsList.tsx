import { TransactionCard, TransactionCardProps } from '@/components/cards/TransactionCard';

type TransactionsListProps = {
  transactions: TransactionCardProps[];
};

export function TransactionsList({ transactions }: TransactionsListProps) {
  return (
    <div className="flex flex-col gap-2">
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} {...transaction} />
      ))}
    </div>
  );
}

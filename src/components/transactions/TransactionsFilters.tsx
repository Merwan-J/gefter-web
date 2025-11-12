'use client';

const filters = ['All', 'Requests', 'Payments', 'Splits'] as const;

export type TransactionFilter = (typeof filters)[number];

type TransactionsFiltersProps = {
  activeFilter: TransactionFilter;
  onSelect: (filter: TransactionFilter) => void;
};

export function TransactionsFilters({ activeFilter, onSelect }: TransactionsFiltersProps) {
  return (
    <div className="sticky top-[72px] z-10 bg-background-light py-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => onSelect(filter)}
              className={
                isActive
                  ? 'whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-bold text-white'
                  : 'whitespace-nowrap rounded-full bg-card-light px-4 py-2 text-sm font-medium text-text-secondary hover:bg-gray-200'
              }
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}

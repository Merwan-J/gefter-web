type HomeSummaryProps = {
  total: number;
  youOwe: number;
  owedToYou: number;
};

export function HomeSummary({ total, youOwe, owedToYou }: HomeSummaryProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-medium text-text-secondary">Total Balance</p>
        <p className="mt-1 text-4xl font-bold tracking-tight text-text-primary">{total.toFixed(2)} ETB</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <article className="rounded-lg bg-card-light p-4 shadow-elevated-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-wise-red">arrow_upward</span>
            <p className="text-sm font-medium text-text-secondary">You Owe</p>
          </div>
          <p className="mt-2 text-xl font-bold text-wise-red">{youOwe.toFixed(2)}</p>
        </article>
        <article className="rounded-lg bg-card-light p-4 shadow-elevated-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-wise-green">arrow_downward</span>
            <p className="text-sm font-medium text-text-secondary">Owed to You</p>
          </div>
          <p className="mt-2 text-xl font-bold text-wise-green">{owedToYou.toFixed(2)}</p>
        </article>
      </div>
    </section>
  );
}

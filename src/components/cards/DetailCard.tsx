type DetailRow = {
  label: string;
  value: string;
  alignTop?: boolean;
};

type DetailCardProps = {
  title?: string;
  rows: DetailRow[];
};

export function DetailCard({ title, rows }: DetailCardProps) {
  return (
    <section className="space-y-3 rounded-xl bg-card-light p-4 shadow-elevated-sm">
      {title ? <h2 className="text-base font-bold text-text-primary">{title}</h2> : null}
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-4 text-sm"
        >
          <span className="text-text-secondary">{row.label}</span>
          <span className={row.alignTop ? 'text-right font-semibold leading-tight text-text-primary' : 'font-semibold text-text-primary'}>
            {row.value}
          </span>
        </div>
      ))}
    </section>
  );
}

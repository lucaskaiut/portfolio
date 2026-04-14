interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <header className="mb-10 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-base text-slate-300">{description}</p>
    </header>
  );
}

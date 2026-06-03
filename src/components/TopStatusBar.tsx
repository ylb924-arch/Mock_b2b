import { CalendarDays, Filter, Radio } from 'lucide-react';

export function TopStatusBar() {
  return (
    <header className="flex flex-col gap-3 border-b border-white/10 bg-graphite-950/60 px-4 py-4 backdrop-blur md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Операционный обзор</p>
        <h2 className="mt-1 text-base font-semibold text-white">TechFlow Conference 2025</h2>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="inline-flex items-center gap-2 rounded-lg border border-pulse-400/20 bg-pulse-400/10 px-3 py-2 font-medium text-pulse-400">
          <Radio size={14} />
          Онлайн
        </span>
        <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-zinc-300">
          <CalendarDays size={14} />
          24 мая — 25 мая 2025
        </span>
        <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-zinc-300 transition hover:text-white">
          <Filter size={14} />
          Фильтр
        </button>
      </div>
    </header>
  );
}

import { ArrowUpRight } from 'lucide-react';
import { heroMetrics } from '../data/mockMetrics';
import { svgLinePath } from '../lib/utils';

const toneMap = {
  green: 'text-pulse-400 border-pulse-400/20 bg-pulse-400/[0.06]',
  cyan: 'text-sky-300 border-sky-300/20 bg-sky-300/[0.06]',
  amber: 'text-amber-300 border-amber-300/20 bg-amber-300/[0.06]',
  violet: 'text-violet-300 border-violet-300/20 bg-violet-300/[0.06]',
};

export function MetricsCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
      {heroMetrics.map((metric) => (
        <article key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs text-zinc-500">{metric.label}</p>
            {metric.delta && (
              <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] font-semibold ${toneMap[metric.tone]}`}>
                <ArrowUpRight size={12} />
                {metric.delta}
              </span>
            )}
          </div>
          <div className="mt-3 flex items-end justify-between gap-4">
            <strong className="text-2xl font-semibold tracking-normal text-white">{metric.value}</strong>
            <svg viewBox="0 0 120 44" className="h-11 w-28" role="img" aria-label={`Динамика: ${metric.label}`}>
              <path d={svgLinePath(metric.sparkline, 120, 44)} fill="none" stroke="currentColor" strokeWidth="3" className={toneMap[metric.tone].split(' ')[0]} strokeLinecap="round" />
            </svg>
          </div>
        </article>
      ))}
    </div>
  );
}

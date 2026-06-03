import { CheckCircle2, ServerCog } from 'lucide-react';
import { healthItems } from '../data/mockMetrics';

export function StatusPanel() {
  return (
    <section id="status" className="px-4 py-6 lg:px-8">
      <div className="rounded-lg border border-white/10 bg-graphite-900 p-5 lg:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Статус сервисов</h2>
            <p className="mt-2 text-sm text-zinc-500">Локальный статический preview операционного состояния</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-pulse-400/20 bg-pulse-400/10 px-3 py-2 text-sm font-medium text-pulse-400">
            <CheckCircle2 size={17} />
            Все сервисы работают
          </span>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {healthItems.map((item) => (
            <article key={item.name} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <ServerCog size={18} className="text-zinc-500" />
              <h3 className="mt-4 text-sm font-semibold text-white">{item.name}</h3>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-pulse-400">{item.status}</span>
                <span className="text-zinc-500">{item.latency}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

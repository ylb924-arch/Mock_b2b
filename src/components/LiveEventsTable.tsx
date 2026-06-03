import { CircleDot, Search } from 'lucide-react';
import { liveEvents } from '../data/mockEvents';

const levelColor = {
  high: 'bg-pulse-400',
  medium: 'bg-sky-300',
  low: 'bg-zinc-500',
};

export function LiveEventsTable() {
  return (
    <section id="events" className="px-4 py-6 lg:px-8">
      <div className="rounded-lg border border-white/10 bg-graphite-900">
        <div className="flex flex-col gap-4 border-b border-white/10 p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Поток событий</h2>
            <p className="mt-1 text-sm text-zinc-500">Статический пример входящих событий платформы</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-graphite-950 px-3 py-2 text-sm text-zinc-500">
            <Search size={16} />
            <span>Поиск по событию</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-white/[0.025] text-xs uppercase tracking-[0.18em] text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Событие</th>
                <th className="px-4 py-3 font-medium">Пользователь</th>
                <th className="px-4 py-3 font-medium">Время</th>
                <th className="px-4 py-3 font-medium">Параметры</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {liveEvents.map((item) => (
                <tr key={`${item.event}-${item.user}`} className="transition hover:bg-white/[0.035]">
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-2 font-medium text-white">
                      <CircleDot size={16} className={levelColor[item.level]} />
                      {item.event}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-mono text-xs text-zinc-300">{item.user}</td>
                  <td className="px-4 py-4 text-zinc-400">{item.time}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      {item.params.map((param) => (
                        <span key={param} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-zinc-400">
                          {param}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

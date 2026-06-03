import { activityLine, engagementCards, platformActivity } from '../data/mockPlatforms';
import { svgLinePath } from '../lib/utils';

export function PlatformActivity() {
  return (
    <section id="analytics" className="grid gap-4 px-4 py-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <article className="rounded-lg border border-white/10 bg-graphite-900 p-5">
        <h2 className="text-xl font-semibold text-white">Активность по платформам</h2>
        <div className="mt-6 flex items-center gap-6">
          <div
            className="size-36 shrink-0 rounded-full"
            style={{
              background:
                'conic-gradient(#4ade80 0 48.7%, #38bdf8 48.7% 77.1%, #a78bfa 77.1% 92.4%, #f59e0b 92.4% 100%)',
            }}
          >
            <div className="grid size-full place-items-center rounded-full p-5">
              <div className="grid size-24 place-items-center rounded-full bg-graphite-900 text-center">
                <span className="text-2xl font-semibold text-white">4</span>
                <span className="-mt-3 text-xs text-zinc-500">канала</span>
              </div>
            </div>
          </div>
          <div className="w-full space-y-4">
            {platformActivity.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-300">{item.name}</span>
                  <span className="font-medium text-white">{item.value}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="rounded-lg border border-white/10 bg-graphite-900 p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Вовлечённость</h2>
            <p className="mt-1 text-sm text-zinc-500">Мини-графики ключевых действий аудитории</p>
          </div>
          <span className="text-xs text-pulse-400">Аналитика без задержек</span>
        </div>
        <svg viewBox="0 0 420 150" className="mt-5 h-36 w-full" role="img" aria-label="Линия вовлечённости">
          {[30, 70, 110].map((y) => (
            <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="rgba(255,255,255,.08)" />
          ))}
          <path d={svgLinePath(activityLine, 420, 150)} fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {engagementCards.map((card) => (
            <div key={card.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs text-zinc-500">{card.label}</p>
              <strong className="mt-2 block text-xl font-semibold text-white">{card.value}</strong>
              <div className="mt-4 flex h-12 items-end gap-1.5">
                {card.bars.map((bar, index) => (
                  <span key={index} className="w-full rounded-t bg-pulse-400/80" style={{ height: `${bar}%` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

import { ArrowRight, PlayCircle, RefreshCw, ShieldCheck } from 'lucide-react';
import { MetricsCards } from './MetricsCards';

export function HeroDashboard() {
  return (
    <section id="overview" className="grid gap-6 px-4 py-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-8">
      <article className="flex min-h-[520px] flex-col justify-between rounded-lg border border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(74,222,128,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-6 shadow-glow lg:p-8">
        <div>
          <p className="max-w-sm text-xs font-semibold uppercase tracking-[0.24em] text-pulse-400">
            Платформа аналитики мероприятий в реальном времени
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-normal text-white sm:text-5xl xl:text-6xl">
            Понимайте каждое событие. Действуйте сейчас.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
            2Pulse собирает, обогащает и визуализирует данные о ваших мероприятиях в реальном времени.
            От регистрации до пост-аналитики — вся картина у вас под рукой.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#events" className="inline-flex items-center justify-center gap-2 rounded-lg bg-pulse-500 px-5 py-3 text-sm font-semibold text-graphite-950 transition hover:bg-pulse-400">
              Попробовать демо
              <ArrowRight size={17} />
            </a>
            <a href="#api" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-pulse-400/40">
              Запросить доступ к API
            </a>
          </div>
          <a href="#analytics" className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
            <PlayCircle size={17} className="text-pulse-400" />
            Смотреть обзор платформы (2:14)
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {['Данные в реальном времени', 'Гибкая схема событий', 'API, Webhooks, SDK', 'Безопасность и приватность'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-graphite-950/45 p-3 text-sm text-zinc-300">
              <ShieldCheck size={16} className="shrink-0 text-pulse-400" />
              {item}
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-lg border border-white/10 bg-graphite-900 p-4 shadow-glow">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">TechFlow Conference 2025</h2>
            <p className="mt-1 text-sm text-zinc-500">24 мая — 25 мая 2025</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-pulse-400/10 px-3 py-2 text-xs font-semibold text-pulse-400">Онлайн</span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-300">
              <RefreshCw size={13} className="text-pulse-400" />
              Realtime
            </span>
          </div>
        </div>
        <div className="mt-4">
          <MetricsCards />
        </div>
        <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-lg border border-white/10 bg-graphite-950/55 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-white">Динамика активности</p>
              <span className="text-xs text-zinc-500">последние 12 часов</span>
            </div>
            <svg viewBox="0 0 520 220" className="h-56 w-full" role="img" aria-label="Линейный график активности">
              <defs>
                <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[40, 80, 120, 160, 200].map((y) => (
                <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="rgba(255,255,255,.08)" />
              ))}
              <path d="M 0 176 L 46 162 L 94 168 L 142 128 L 189 138 L 236 92 L 284 106 L 331 64 L 378 82 L 425 48 L 472 60 L 520 28 L 520 220 L 0 220 Z" fill="url(#lineFill)" />
              <path d="M 0 176 L 46 162 L 94 168 L 142 128 L 189 138 L 236 92 L 284 106 L 331 64 L 378 82 L 425 48 L 472 60 L 520 28" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="rounded-lg border border-white/10 bg-graphite-950/55 p-4">
            <p className="text-sm font-medium text-white">Плотность событий</p>
            <div className="mt-5 grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, index) => (
                <span
                  key={index}
                  className="aspect-square rounded-[5px] border border-white/5"
                  style={{ backgroundColor: `rgba(74, 222, 128, ${0.08 + ((index * 17) % 7) * 0.09})` }}
                />
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-zinc-500">Пик вовлечённости пришёлся на интерактивные сессии и загрузку материалов.</p>
          </div>
        </div>
      </article>
    </section>
  );
}

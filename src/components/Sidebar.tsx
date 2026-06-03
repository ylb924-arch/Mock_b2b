import {
  Activity,
  BarChart3,
  Boxes,
  Gauge,
  GitBranch,
  Radio,
  Settings,
  ShieldCheck,
  Users,
} from 'lucide-react';

const navItems = [
  { label: 'Обзор', icon: Gauge, href: '#overview' },
  { label: 'События', icon: Radio, href: '#events' },
  { label: 'Аудитория', icon: Users, href: '#analytics' },
  { label: 'Аналитика', icon: BarChart3, href: '#analytics' },
  { label: 'Потоки данных', icon: GitBranch, href: '#api' },
  { label: 'Воронки', icon: Activity, href: '#analytics' },
  { label: 'Интеграции', icon: Boxes, href: '#api' },
  { label: 'Настройки', icon: Settings, href: '#status' },
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 border-r border-white/10 bg-graphite-950/95 px-5 py-6 backdrop-blur min-[1360px]:flex min-[1360px]:flex-col">
      <a href="#overview" className="flex items-center gap-3" aria-label="EventPulse">
        <span className="grid size-10 place-items-center rounded-lg bg-pulse-500 text-graphite-950 shadow-[0_0_30px_rgba(34,197,94,0.35)]">
          <Activity size={21} strokeWidth={2.6} />
        </span>
        <span>
          <span className="block text-lg font-semibold text-white">EventPulse</span>
          <span className="block text-xs text-zinc-500">Realtime analytics</span>
        </span>
      </a>

      <nav className="mt-8 space-y-1" aria-label="Основная навигация">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                index === 0
                  ? 'bg-white/[0.07] text-white shadow-inner shadow-white/5'
                  : 'text-zinc-400 hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              <Icon size={17} className={index === 0 ? 'text-pulse-400' : 'text-zinc-500 group-hover:text-pulse-400'} />
              {item.label}
            </a>
          );
        })}
      </nav>

      <section className="mt-auto rounded-lg border border-pulse-400/20 bg-pulse-400/[0.06] p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-400 opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-pulse-400" />
          </span>
          Система активна
        </div>
        <p className="mt-2 text-xs leading-5 text-zinc-400">Все сервисы работают</p>
        <p className="text-xs font-medium text-pulse-400">99.98% uptime</p>
      </section>

      <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
        {['Документация', 'API', 'Статус'].map((label) => (
          <a key={label} href={label === 'Статус' ? '#status' : '#api'} className="rounded-md border border-white/10 px-2 py-2 text-center text-zinc-400 hover:text-white">
            {label}
          </a>
        ))}
      </div>
    </aside>
  );
}

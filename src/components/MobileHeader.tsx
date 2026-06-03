import { Activity, Menu } from 'lucide-react';

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-graphite-950/90 px-4 py-3 backdrop-blur min-[1360px]:hidden">
      <a href="#overview" className="flex items-center gap-2" aria-label="EventPulse">
        <span className="grid size-9 place-items-center rounded-lg bg-pulse-500 text-graphite-950">
          <Activity size={20} />
        </span>
        <span className="font-semibold text-white">EventPulse</span>
      </a>
      <a href="#events" className="grid size-9 place-items-center rounded-lg border border-white/10 text-zinc-300" aria-label="Перейти к событиям">
        <Menu size={19} />
      </a>
    </header>
  );
}

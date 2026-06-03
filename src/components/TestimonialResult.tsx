import { Quote } from 'lucide-react';
import { resultMetrics } from '../data/mockMetrics';

export function TestimonialResult() {
  return (
    <section className="px-4 py-6 lg:px-8">
      <div className="grid gap-4 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(74,222,128,0.12),rgba(255,255,255,0.035)_38%,rgba(56,189,248,0.08))] p-5 lg:grid-cols-[1.25fr_0.75fr] lg:p-7">
        <article>
          <Quote size={28} className="text-pulse-400" />
          <blockquote className="mt-5 max-w-3xl text-xl font-medium leading-8 text-white">
            EventPulse дал нам прозрачность, которой не было раньше. Мы видим поведение аудитории
            в реальном времени и принимаем решения прямо во время события.
          </blockquote>
          <p className="mt-5 text-sm font-semibold text-white">Илья Морозов</p>
          <p className="mt-1 text-sm text-zinc-500">Руководитель продукта, TechFlow</p>
          <p className="mt-4 text-xs text-zinc-600">Демонстрационные данные, не публичный кейс клиента.</p>
        </article>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {resultMetrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-white/10 bg-graphite-950/60 p-4">
              <strong className="block text-3xl font-semibold text-pulse-400">{metric.value}</strong>
              <span className="mt-1 block text-sm text-zinc-400">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

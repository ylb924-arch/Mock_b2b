import { Cable, Clock3, DatabaseZap, LockKeyhole, Route } from 'lucide-react';

const features = [
  { title: 'Данные в реальном времени', text: 'Обработка событий за миллисекунды', icon: Clock3 },
  { title: 'Гибкая схема событий', text: 'Настройте под вашу модель данных', icon: DatabaseZap },
  { title: 'Аналитика без задержек', text: 'Сегменты, воронки, когорты', icon: Route },
  { title: 'Безопасность и приватность', text: 'Контроль доступа и хранение данных', icon: LockKeyhole },
  { title: 'Лёгкая интеграция', text: 'API, Webhooks, SDK', icon: Cable },
];

export function FeatureStrip() {
  return (
    <section className="px-4 py-6 lg:px-8">
      <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-5">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="bg-graphite-900 p-4">
              <Icon size={19} className="text-pulse-400" />
              <h3 className="mt-4 text-sm font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-xs leading-5 text-zinc-500">{feature.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

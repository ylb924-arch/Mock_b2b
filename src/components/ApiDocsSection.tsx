import { ArrowRight, Braces, Code2, Send, Webhook } from 'lucide-react';

const sdkItems = ['JavaScript SDK', 'iOS SDK', 'Android SDK'];
const webhookItems = ['event.received', 'user.updated', 'session.ended'];

export function ApiDocsSection() {
  return (
    <section id="api" className="grid gap-4 px-4 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <article className="rounded-lg border border-white/10 bg-graphite-900 p-5 lg:p-6">
        <Code2 size={24} className="text-pulse-400" />
        <h2 className="mt-5 text-2xl font-semibold text-white">Документация и API</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
          Интегрируйте 2Pulse за часы, а не за недели. Подробные гайды, SDK и статические
          примеры помогают быстро описать события продукта, сайта или мероприятия.
        </p>
        <a href="mailto:hello@2pulse.info" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-graphite-950 transition hover:bg-pulse-400">
          Перейти к документации
          <ArrowRight size={17} />
        </a>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <Braces size={18} className="text-sky-300" />
            <h3 className="mt-3 text-sm font-semibold text-white">SDK</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {sdkItems.map((item) => (
                <span key={item} className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-zinc-400">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <Webhook size={18} className="text-pulse-400" />
            <h3 className="mt-3 text-sm font-semibold text-white">Webhooks</h3>
            <div className="mt-3 space-y-2">
              {webhookItems.map((item) => (
                <p key={item} className="font-mono text-xs text-zinc-400">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </article>

      <article className="rounded-lg border border-white/10 bg-[#07100d] p-5 shadow-glow">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <Send size={17} className="text-pulse-400" />
            Отправка события
          </div>
          <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-500">static example</span>
        </div>
        <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/45 p-4 text-xs leading-6 text-zinc-300">
{`POST https://2pulse.info/api/v1/events
Content-Type: application/json

{
  "event": "session_view",
  "user_id": "user_8f3a1c",
  "timestamp": "2025-05-24T10:24:31Z",
  "properties": {
    "session_id": "s_abc123",
    "platform": "web"
  }
}`}
        </pre>
        <p className="mt-4 text-xs leading-5 text-zinc-500">
          Публичный блок показывает только пример структуры запроса. Frontend не выполняет сетевые вызовы
          к служебным endpoint-путям.
        </p>
      </article>
    </section>
  );
}

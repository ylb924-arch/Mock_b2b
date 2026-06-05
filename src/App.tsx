import { ApiDocsSection } from './components/ApiDocsSection';
import { FeatureStrip } from './components/FeatureStrip';
import { Footer } from './components/Footer';
import { HeroDashboard } from './components/HeroDashboard';
import { LiveEventsTable } from './components/LiveEventsTable';
import { MobileHeader } from './components/MobileHeader';
import { PlatformActivity } from './components/PlatformActivity';
import { Sidebar } from './components/Sidebar';
import { StatusPanel } from './components/StatusPanel';
import { TestimonialResult } from './components/TestimonialResult';
import { TopStatusBar } from './components/TopStatusBar';

function InternalServicePreview() {
  const rows = [
    ['Project', '2Pulse'],
    ['Domain', '2pulse.info'],
    ['Static frontend', 'yes'],
    ['Database', 'not used'],
    ['Backend', 'not used'],
    ['Reserved endpoint', '/api/v1/events'],
    ['Frontend calls reserved endpoint', 'no'],
  ];

  return (
    <main className="min-h-screen bg-graphite-950 px-4 py-8 text-white">
      <section className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-graphite-900 p-6 shadow-glow">
        <p className="text-xs uppercase tracking-[0.22em] text-pulse-400">Internal preview</p>
        <h1 className="mt-4 text-3xl font-semibold">Служебная проверка 2Pulse</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Статическая страница для проверки проекта. Она не управляет сервером, конфигурациями
          или инфраструктурой.
        </p>
        <dl className="mt-6 divide-y divide-white/10 rounded-lg border border-white/10">
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-2 px-4 py-4 sm:grid-cols-[1fr_1fr]">
              <dt className="text-sm text-zinc-500">{label}</dt>
              <dd className="font-mono text-sm text-pulse-400">{value}</dd>
            </div>
          ))}
        </dl>
        <a href="/" className="mt-6 inline-flex rounded-lg bg-pulse-500 px-4 py-2 text-sm font-semibold text-graphite-950">
          На публичный сайт
        </a>
      </section>
    </main>
  );
}

function PublicSite() {
  return (
    <div className="min-h-screen bg-graphite-950 text-zinc-100">
      <MobileHeader />
      <div className="mx-auto flex max-w-[1920px]">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <TopStatusBar />
          <main>
            <HeroDashboard />
            <LiveEventsTable />
            <PlatformActivity />
            <FeatureStrip />
            <TestimonialResult />
            <ApiDocsSection />
            <StatusPanel />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  if (window.location.pathname === '/internal-service-preview') {
    return <InternalServicePreview />;
  }

  return <PublicSite />;
}

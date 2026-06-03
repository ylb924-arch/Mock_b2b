export function Footer() {
  return (
    <footer className="px-4 py-8 lg:px-8">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 EventPulse. Статический демонстрационный интерфейс.</p>
        <div className="flex gap-4">
          <a href="#api" className="hover:text-white">API</a>
          <a href="#status" className="hover:text-white">Статус</a>
          <a href="mailto:hello@example.com" className="hover:text-white">Контакт</a>
        </div>
      </div>
    </footer>
  );
}

# Project Context

2Pulse — статический сайт-заглушка в виде нейтральной аналитической SaaS-платформы.

Публичный домен проекта: `https://2pulse.info/`.

Проект не связан с GoUp2.

Проект не использует базу данных.

Проект не использует backend.

Проект не использует Telegram Bot API.

Путь `/api/v1/events` зарезервирован под инфраструктурное проксирование через Nginx. Frontend не вызывает этот путь и не создаёт для него обработчик.

Весь интерфейс построен на статических mock-данных из `src/data`.

Публичные crawler/brand assets находятся в `public/` и копируются в `dist/` при сборке:

```txt
/favicon.svg
/apple-touch-icon.svg
/site.webmanifest
/robots.txt
/sitemap.xml
```

# 2Pulse Deploy Notes

Проект собирается как полностью статический frontend без базы данных, авторизации и backend API.

## Локальный запуск

```bash
npm install
npm run dev
```

По умолчанию dev-сервер доступен на:

```txt
http://localhost:3000
```

## Сборка

```bash
npm run build
npm run preview
```

Результат сборки:

```txt
dist/
```

Публичные статические assets, которые должны попасть в `dist/`:

```txt
/favicon.svg
/apple-touch-icon.svg
/site.webmanifest
/robots.txt
/sitemap.xml
```

Путь для деплоя:

```txt
/var/www/2pulse/dist
```

## Проверка

```bash
curl -I https://2pulse.info/
curl -I https://2pulse.info/status
```

`/api/v1/events` не проверять как обычную страницу сайта. Этот путь резервируется под Nginx `proxy_pass`; frontend не создаёт route, handler или fetch для этого endpoint.

Служебная статическая проверка проекта:

```txt
/internal-service-preview
```

# PROMPT ДЛЯ CODEX
# Проект: EventPulse — статический сайт-заглушка под XHTTP

## 0. Контекст задачи

Нужно создать НЕ коммерческий сайт веб-студии и НЕ дубль GoUp2.

Нужен самостоятельный нейтральный сайт-заглушка под названием **EventPulse**.

Тематика сайта:  
**платформа событийной аналитики для сайтов, приложений и мероприятий в реальном времени**.

Основная задача сайта:
- выглядеть как реальный SaaS/аналитическая платформа;
- быть полностью статическим;
- не использовать базу данных;
- не использовать авторизацию;
- не использовать backend;
- не быть похожим на сайт GoUp2 или предыдущий проект веб-студии;
- естественно объяснять наличие API-маршрутов вида `/api/v1/events`;
- оставить путь `/api/v1/events` свободным для проксирования через Nginx на XHTTP/Xray.

Важно:  
Сам сайт НЕ должен обращаться к `/api/v1/events`.  
Этот путь должен быть зарезервирован под инфраструктуру и не использоваться frontend-кодом.

---

## 1. Выбранная визуальная концепция

Ориентир — третий выбранный вариант дизайна:

- тёмный интерфейс;
- чёрный / графитовый фон;
- зелёные акценты;
- структура больше похожа на dashboard / analytics platform, а не на лендинг веб-студии;
- слева вертикальное меню;
- справа основная зона с аналитикой;
- блоки: live events, charts, API/docs, webhooks, SDK, status;
- визуально должно отличаться от GoUp2.

Нельзя делать классическую структуру:

```txt
Hero → карточки услуг → тарифы → кейсы → CTA
```

Она слишком похожа на GoUp2 и веб-студию.

Нужно сделать структуру как у SaaS dashboard / product interface:

```txt
Left sidebar
Top status bar
Hero-dashboard section
Live events table
Metrics cards
API documentation block
SDK block
Webhooks block
Status/service health block
Footer
```

---

## 2. Название и позиционирование

Название:

```txt
EventPulse
```

Слоган:

```txt
Понимайте каждое событие. Действуйте сейчас.
```

Подзаголовок:

```txt
EventPulse собирает, обогащает и визуализирует события вашего сайта, продукта или мероприятия в реальном времени — от регистрации до пост-аналитики.
```

Дополнительные тезисы:

```txt
Данные в реальном времени
Гибкая схема событий
API, Webhooks, SDK
Безопасность и приватность
Аналитика без задержек
```

---

## 3. Технологии

Использовать:

```txt
Vite
React
TypeScript
Tailwind CSS
lucide-react
```

Не использовать:

```txt
Next.js
PostgreSQL
SQLite
Prisma
Drizzle
MongoDB
Firebase
Supabase
любую базу данных
любую авторизацию
server actions
backend API routes
```

Сайт должен собираться как статический frontend:

```bash
npm install
npm run build
npm run preview
```

Результат сборки:

```txt
dist/
```

---

## 4. Важное требование по XHTTP

Путь:

```txt
/api/v1/events
```

должен быть зарезервирован под Nginx proxy_pass на Xray XHTTP.

Frontend НЕ должен делать реальные fetch-запросы на этот путь.

Можно показывать этот endpoint в документации как пример:

```txt
POST /api/v1/events
```

Но нельзя вызывать его из браузера.

Если нужен mock API в интерфейсе, использовать только статические данные внутри frontend-кода:

```txt
src/data/mockEvents.ts
src/data/mockMetrics.ts
```

Никаких запросов на backend.

---

## 5. Структура сайта

Создать одностраничный статический сайт с секциями.

### 5.1 Layout

Общий layout должен выглядеть как полноценная аналитическая система.

Левая sidebar:

```txt
EventPulse logo
Обзор
События
Аудитория
Аналитика
Потоки данных
Воронки
Интеграции
Настройки
```

Внизу sidebar:

```txt
Система активна
Все сервисы работают
99.98% uptime
Документация
API
Статус
```

Важно: меню может быть визуальным, без настоящей навигации на отдельные страницы.

---

### 5.2 Hero/dashboard block

Слева:

```txt
ПЛАТФОРМА АНАЛИТИКИ МЕРОПРИЯТИЙ В РЕАЛЬНОМ ВРЕМЕНИ

Понимайте каждое событие.
Действуйте сейчас.

EventPulse собирает, обогащает и визуализирует данные о ваших мероприятиях в реальном времени. От регистрации до пост-аналитики — вся картина у вас под рукой.
```

Кнопки:

```txt
Попробовать демо
Запросить доступ к API
```

Под кнопками:

```txt
Смотреть обзор платформы (2:14)
```

Правая часть:

Большой mock-dashboard:

- top bar: `TechFlow Conference 2025`
- badge: `Онлайн`
- date range: `24 мая — 25 мая 2025`
- filter button
- realtime badge

Карточки метрик:

```txt
Посетители сейчас: 1 284 ↑ 18.7%
Всего событий: 98 347
Уникальные посетители: 12 578 ↑ 16.2%
Конверсия в целевое действие: 26.4% ↑ 6.1%
```

---

### 5.3 Live events table

Сделать таблицу “Поток событий”:

Колонки:

```txt
Событие
Пользователь
Время
Параметры
```

Примеры строк:

```txt
Просмотр сессии | user_8f3a1c | 10:24:31 | session_id, platform
Регистрация | user_a7d2e9 | 10:24:29 | plan, source
Посещение стенда | user_c1b9d2 | 10:24:28 | booth_id, interest
Скачивание материала | user_3e7f91 | 10:24:27 | material_id, topic
Отправка вопроса | user_d4a6b8 | 10:24:25 | session_id, length
Оценка сессии | user_f2c6a1 | 10:24:23 | rating, feedback
```

---

### 5.4 Charts / Analytics

Сделать визуальные графики без сторонних chart-библиотек, чтобы не усложнять проект.

Можно использовать:
- CSS/SVG линии;
- простые div-bars;
- SVG path;
- mock donut chart через CSS conic-gradient.

Блоки:

```txt
Активность по платформам
Web — 48.7%
iOS — 28.4%
Android — 15.3%
Другие — 7.6%

Динамика активности
Линейный график с зелёной линией

Вовлечённость
Мини-графики в карточках
```

Не подключать тяжёлые библиотеки типа Recharts, Chart.js, D3, если в проекте это не нужно.

---

### 5.5 Feature strip

Горизонтальная полоса под dashboard:

```txt
Данные в реальном времени
Обработка событий за миллисекунды

Гибкая схема событий
Настройте под вашу модель данных

Аналитика без задержек
Сегменты, воронки, когорты

Безопасность и приватность
Соответствие GDPR и SOC 2

Лёгкая интеграция
API, Webhooks, SDK
```

---

### 5.6 Testimonial / result block

Сделать блок отзыва:

```txt
EventPulse дал нам прозрачность, которой не было раньше. Мы видим поведение аудитории в реальном времени и принимаем решения прямо во время события.
```

Имя:

```txt
Илья Морозов
Руководитель продукта, TechFlow
```

Метрики рядом:

```txt
+42% к вовлечённости
-28% к стоимости лида
2.7x ROI события
```

Важно: это mock-данные. Не выдавать их за реальные кейсы.

---

### 5.7 Documentation and API block

Создать секцию:

```txt
Документация и API
Интегрируйте EventPulse за часы, а не за недели. Подробные гайды, SDK и примеры на всех языках.
```

Кнопка:

```txt
Перейти к документации
```

Карточка “Отправка события”:

Показать код как статический пример:

```http
POST https://api.eventpulse.io/v1/events
Content-Type: application/json

{
  "event": "session_view",
  "user_id": "user_8f3a1c",
  "timestamp": "2025-05-24T10:24:31Z",
  "properties": {
    "session_id": "s_abc123",
    "platform": "web"
  }
}
```

Важно:
- В публичном код-блоке можно показывать внешний пример `https://api.eventpulse.io/v1/events`.
- Не делать реальный fetch.
- Не использовать реальный домен, если он не куплен. Это только mock-документация.

Карточка SDK:

```txt
JavaScript SDK
iOS SDK
Android SDK
```

Карточка Webhooks:

```txt
event.received
user.updated
session.ended
```

---

## 6. Страницы и маршруты

Так как сайт статический, можно сделать одну страницу `/`.

Но структура кода должна позволять расширение.

Если используется React Router — не усложнять. Лучше без роутера.

Секции на одной странице:

```txt
#overview
#events
#analytics
#api
#status
```

Sidebar может скроллить к секциям.

---

## 7. Требования к дизайну

Цвета:

```txt
background: почти чёрный / графитовый
surface: #07110d / #0b1712 / #101713
border: rgba(70, 255, 160, 0.15)
accent green: #39e58c / #22c55e
text primary: #f5f7f6
text secondary: #94a3a0
muted: #64706c
```

Стиль:

```txt
dark SaaS dashboard
glass panels
тонкие border
зелёные glow-акценты
табличные данные
реалистичные mock-графики
минимум декоративных hero-карточек
```

Избегать:

```txt
ярких фиолетово-синих градиентов GoUp2
классического лендинга веб-студии
крупных карточек услуг как в GoUp2
слишком маркетинговых блоков
типовых “50+ проектов, 98% довольных клиентов”
изображений людей как главного hero
```

---

## 8. Адаптивность

Обязательно проверить:

```txt
desktop 1440px
laptop 1280px
tablet 768px
mobile 390px
```

На мобильной версии:

- sidebar не должна ломать экран;
- можно превратить sidebar в верхний compact header;
- dashboard-карточки должны идти в одну колонку;
- таблица событий должна либо скроллиться горизонтально, либо превращаться в карточки;
- кнопки не должны выходить за экран;
- текст не должен обрезаться;
- не должно быть горизонтального overflow.

---

## 9. Уроки и ошибки из прошлых проектов, которые нельзя повторять

Учесть проблемы, которые уже были в проектах “веб-студия” и “Epic_Studio”.

### 9.1 Не должно быть ситуации “изменения не видны”

После реализации обязательно:

```bash
npm run build
npm run preview
```

В финальном отчёте указать:

```txt
какие файлы изменены
какие компоненты созданы
какую страницу открыть
что именно визуально изменилось
```

Если проект уже был открыт в браузере, напомнить про hard refresh.

---

### 9.2 Не делать дубли меню и блоков

В прошлых проектах были дубли меню/секций.

Проверить:

```txt
нет двух одинаковых навигаций
нет повторяющихся пунктов
нет одинаковых CTA-блоков
нет дублей “главной” внутри главной
```

---

### 9.3 Не ломать мобильную версию

В прошлых проектах были проблемы с мобильным видом, скроллом, большими окнами и вылезающими блоками.

Обязательно проверить:

```txt
нет горизонтального скролла
карточки не вылезают
таблицы читаются
модальные окна не используются без необходимости
кнопки помещаются
sidebar адаптируется
```

---

### 9.4 Не использовать неподходящую структуру GoUp2

Этот проект НЕ должен напоминать:

```txt
GoUp2
веб-студию
сайт услуг
лендинг по продаже сайтов
```

Нужна структура:

```txt
analytics SaaS
dashboard
API
live events
developer docs
service status
```

---

### 9.5 Не использовать базу данных

Не добавлять:

```txt
PostgreSQL
SQLite
Prisma
Drizzle
ORM
миграции
.env для БД
```

Все данные должны быть mock/static:

```txt
src/data/mockMetrics.ts
src/data/mockEvents.ts
src/data/mockCharts.ts
```

---

### 9.6 Не использовать Telegram Bot API

В проекте Epic_Studio были сложности с Telegram Bot API и chat_id.

В этом проекте:

```txt
не создавать Telegram-бота
не использовать Bot API
не добавлять токены
не добавлять TELEGRAM_BOT_TOKEN
не добавлять TELEGRAM_ORDER_CHAT_IDS
```

Если нужна кнопка контакта — сделать обычную ссылку-заглушку:

```txt
mailto:hello@example.com
```

или статический mock contact.

---

### 9.7 Не использовать реальные секреты

Не создавать и не коммитить:

```txt
.env
.env.local
токены
ключи
пароли
chat_id
server IP
UUID
Reality keys
Xray config
```

Можно создать только:

```txt
.env.example
```

если он реально нужен, но для этого проекта лучше вообще без env.

---

### 9.8 Не трогать XHTTP-конфиг

Codex должен создать только frontend-сайт.

Не менять:

```txt
Nginx production config
Xray config
sing-box config
Hysteria2 config
серверные systemd unit
```

Можно создать отдельный файл с примером Nginx:

```txt
docs/nginx-eventpulse-example.conf
```

Но не применять его автоматически.

---

### 9.9 Не занимать путь `/api/v1/events`

Очень важно:

```txt
frontend не должен создавать файл, роут, mock handler или fetch для /api/v1/events
```

Этот путь должен остаться свободным для Nginx:

```nginx
location /api/v1/events {
    proxy_pass http://127.0.0.1:10000;
}
```

---

### 9.10 Не использовать случайные интернет-фото

Не скачивать картинки из интернета.

Не использовать непроверенные стоки.

Не вставлять логотипы реальных компаний как реальные доверенные клиенты.

Если нужны изображения, использовать один из вариантов:

1. CSS/SVG mockup внутри проекта.
2. Сгенерированные изображения через ChatGPT Image.
3. Локальные изображения, предоставленные пользователем.

---

## 10. Требование по ChatGPT Image

Codex должен использовать **ChatGPT Image** для подготовки реалистичных визуальных материалов, если такая возможность доступна в текущей среде.

Нужно подготовить изображения/визуалы в стиле:

```txt
realistic dark SaaS analytics dashboard
event analytics platform
live event stream
black graphite interface
green neon accents
developer API dashboard
not a web studio landing page
not GoUp2 style
```

Если Codex не имеет прямого доступа к ChatGPT Image, он обязан:

1. Не скачивать случайные изображения.
2. Не выдумывать, что изображения сгенерированы.
3. Создать файл:

```txt
docs/chatgpt-image-prompts.md
```

И положить туда 5 готовых промтов для генерации изображений через ChatGPT Image.

Пример промта:

```txt
Create a realistic dark SaaS analytics dashboard for a fictional platform called EventPulse. The interface should show live event streams, metrics cards, platform activity charts, API status widgets, and webhook logs. Use a black graphite background, subtle green neon accents, thin borders, and realistic product UI details. It must not look like a web agency landing page. No real company logos. No real personal data.
```

Изображения, которые желательно подготовить:

```txt
1. main dashboard preview
2. live events stream preview
3. API documentation preview
4. service status preview
5. abstract event data visualization
```

Если реальные изображения не получаются — использовать CSS/SVG mockup, но указать это в финальном отчёте честно.

---

## 11. Контент и юридическая нейтральность

Сайт должен выглядеть как легальный SaaS-продукт.

Не использовать слова:

```txt
VPN
proxy
Xray
VLESS
Reality
XHTTP
bypass
обход
туннель
шифрование трафика
DPI
```

На публичном сайте не должно быть упоминаний инфраструктуры.

Темы сайта только:

```txt
event analytics
product analytics
web analytics
API
webhooks
SDK
privacy
service status
```

---

## 12. Файловая структура

Рекомендуемая структура:

```txt
src/
  App.tsx
  main.tsx
  index.css

  components/
    Sidebar.tsx
    HeroDashboard.tsx
    MetricsCards.tsx
    LiveEventsTable.tsx
    PlatformActivity.tsx
    FeatureStrip.tsx
    TestimonialResult.tsx
    ApiDocsSection.tsx
    StatusPanel.tsx
    Footer.tsx

  data/
    mockMetrics.ts
    mockEvents.ts
    mockPlatforms.ts

  lib/
    utils.ts

docs/
  chatgpt-image-prompts.md
  nginx-eventpulse-example.conf
  DEPLOY_NOTES.md
  PROJECT_CONTEXT.md
```

---

## 13. Nginx example

Создать файл:

```txt
docs/nginx-eventpulse-example.conf
```

Содержимое должно быть примерным и безопасным, без реальных доменов и секретов:

```nginx
server {
    listen 443 ssl http2;
    server_name example.com www.example.com;

    root /var/www/eventpulse/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Reserved for infrastructure proxying.
    # Frontend must not call this endpoint.
    location /api/v1/events {
        proxy_pass http://127.0.0.1:10000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Важно:  
Не применять этот конфиг автоматически.

---

## 14. DEPLOY_NOTES.md

Создать файл:

```txt
docs/DEPLOY_NOTES.md
```

В нём указать:

```bash
npm install
npm run build
npm run preview
```

Путь для деплоя:

```txt
/var/www/eventpulse/dist
```

Пример проверки:

```bash
curl -I https://example.com/
curl -I https://example.com/status
```

И отдельно указать:

```txt
/api/v1/events не проверять как обычную страницу сайта, этот путь резервируется под Nginx proxy_pass.
```

---

## 15. PROJECT_CONTEXT.md

Создать файл:

```txt
docs/PROJECT_CONTEXT.md
```

В нём коротко описать:

```txt
EventPulse — статический сайт-заглушка в виде нейтральной аналитической SaaS-платформы.
Проект не связан с GoUp2.
Проект не использует базу данных.
Проект не использует backend.
Путь /api/v1/events зарезервирован под инфраструктурное проксирование через Nginx.
```

---

## 16. Требования к качеству

Обязательно:

```bash
npm run build
```

Если есть lint/typecheck — выполнить:

```bash
npm run lint
npm run typecheck
```

Если таких команд нет — не добавлять лишнюю сложность без необходимости, но сборка должна проходить.

Исправить все ошибки TypeScript.

Не оставлять warning из-за неправильного порядка CSS `@import`.

Не использовать несуществующие импорты.

Не оставлять битые ссылки на assets.

Не оставлять placeholder `undefined`.

Не оставлять lorem ipsum.

---

## 17. Финальный отчёт Codex

В финальном отчёте обязательно указать:

1. Что сделано.
2. Какие файлы созданы/изменены.
3. Как запустить локально.
4. Как собрать проект.
5. Проверил ли `npm run build`.
6. Есть ли ограничения.
7. Были ли использованы изображения через ChatGPT Image.
8. Если ChatGPT Image недоступен — где лежат промты для генерации.
9. Подтвердить, что проект:
   - не использует DB;
   - не использует backend;
   - не использует Telegram Bot API;
   - не связан с GoUp2;
   - не занимает `/api/v1/events`.

Обязательные ссылки для проверки в финальном отчёте:

```txt
Публичный сайт:
http://localhost:3000
или фактический адрес dev-сервера

Скрытая служебная страница проверки:
http://localhost:3000/internal-service-preview
```

Важно:  
Так как в проекте нет настоящей админки и базы данных, создать скрытую страницу/секцию `/internal-service-preview` только как статический preview состояния проекта.

Она не должна быть связана с управлением сервером, Xray, XHTTP или реальными конфигами.

На ней можно показать:

```txt
Build status: static frontend
Database: not used
Backend: not used
Reserved endpoint: /api/v1/events
Frontend calls reserved endpoint: no
```

Эта страница нужна только для проверки проекта пользователем и не должна быть видна в основном меню.

---

## 18. Главная цель

Сделать профессиональный, реалистичный, статический сайт EventPulse, который визуально выглядит как современная аналитическая платформа.

Главный критерий успеха:

```txt
Когда пользователь открывает сайт, он должен видеть не веб-студию, не GoUp2, не лендинг услуг, а самостоятельный SaaS/dashboard-продукт по событийной аналитике.
```

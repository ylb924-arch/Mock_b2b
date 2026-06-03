export type Metric = {
  label: string;
  value: string;
  delta?: string;
  tone: 'green' | 'cyan' | 'amber' | 'violet';
  sparkline: number[];
};

export const heroMetrics: Metric[] = [
  {
    label: 'Посетители сейчас',
    value: '1 284',
    delta: '+18.7%',
    tone: 'green',
    sparkline: [24, 32, 29, 44, 51, 63, 58, 72],
  },
  {
    label: 'Всего событий',
    value: '98 347',
    tone: 'cyan',
    sparkline: [38, 42, 48, 45, 61, 68, 74, 86],
  },
  {
    label: 'Уникальные посетители',
    value: '12 578',
    delta: '+16.2%',
    tone: 'violet',
    sparkline: [18, 27, 33, 41, 39, 52, 60, 67],
  },
  {
    label: 'Конверсия в цель',
    value: '26.4%',
    delta: '+6.1%',
    tone: 'amber',
    sparkline: [11, 18, 16, 24, 29, 31, 36, 43],
  },
];

export const resultMetrics = [
  { value: '+42%', label: 'к вовлечённости' },
  { value: '-28%', label: 'к стоимости лида' },
  { value: '2.7x', label: 'ROI события' },
];

export const healthItems = [
  { name: 'Сбор событий', status: 'Работает', latency: '28 мс' },
  { name: 'Пайплайн обогащения', status: 'Работает', latency: '42 мс' },
  { name: 'Экспорт отчётов', status: 'Работает', latency: '63 мс' },
  { name: 'Webhook доставка', status: 'Работает', latency: '34 мс' },
];

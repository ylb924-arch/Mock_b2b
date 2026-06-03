export type LiveEvent = {
  event: string;
  user: string;
  time: string;
  params: string[];
  level: 'high' | 'medium' | 'low';
};

export const liveEvents: LiveEvent[] = [
  {
    event: 'Просмотр сессии',
    user: 'user_8f3a1c',
    time: '10:24:31',
    params: ['session_id', 'platform'],
    level: 'high',
  },
  {
    event: 'Регистрация',
    user: 'user_a7d2e9',
    time: '10:24:29',
    params: ['plan', 'source'],
    level: 'high',
  },
  {
    event: 'Посещение стенда',
    user: 'user_c1b9d2',
    time: '10:24:28',
    params: ['booth_id', 'interest'],
    level: 'medium',
  },
  {
    event: 'Скачивание материала',
    user: 'user_3e7f91',
    time: '10:24:27',
    params: ['material_id', 'topic'],
    level: 'medium',
  },
  {
    event: 'Отправка вопроса',
    user: 'user_d4a6b8',
    time: '10:24:25',
    params: ['session_id', 'length'],
    level: 'low',
  },
  {
    event: 'Оценка сессии',
    user: 'user_f2c6a1',
    time: '10:24:23',
    params: ['rating', 'feedback'],
    level: 'low',
  },
];

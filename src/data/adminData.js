// ────────────────────────────────────────────────────────────────────────────
// Admin Data Store — shared source of truth for admin panel & frontend
// ────────────────────────────────────────────────────────────────────────────

export const adminServices = [
  { id: 1, name: 'Обличчя (одна зона)', price: 100, active: true, order: 1 },
  { id: 2, name: 'Пахви', price: 180, active: true, order: 2 },
  { id: 3, name: 'Руки до ліктя', price: 200, active: true, order: 3 },
  { id: 4, name: 'Руки повністю', price: 270, active: true, order: 4 },
  { id: 5, name: 'Бікіні класика', price: 290, active: true, order: 5 },
  { id: 6, name: 'Глибоке бікіні (+ лінія живота, сідниці)', price: 500, active: true, order: 6 },
  { id: 7, name: 'Живіт / Поясниця / Сідниці (одна зона)', price: 250, active: true, order: 7 },
  { id: 8, name: 'Ноги (гомілки)', price: 400, active: true, order: 8 },
  { id: 9, name: 'Ноги (стегна)', price: 450, active: true, order: 9 },
  { id: 10, name: 'Ноги повністю', price: 600, active: true, order: 10 },
];

export const adminComplexes = [
  {
    id: 1,
    name: 'Complex S',
    tag: 'ТОП',
    items: ['Глибоке бікіні', 'Пахви'],
    price: 600,
    active: true,
    priority: 1,
  },
  {
    id: 2,
    name: 'Complex M',
    tag: 'VOGUE',
    items: ['Глибоке бікіні', 'Пахви', 'Гомілки'],
    price: 950,
    active: true,
    priority: 2,
  },
  {
    id: 3,
    name: 'Complex L',
    tag: 'MAX',
    items: ['Глибоке бікіні', 'Пахви', 'Ноги повністю'],
    price: 1150,
    active: true,
    priority: 3,
  },
];

export const adminReviews = [
  {
    id: 1,
    name: 'Аліна К.',
    rating: 5,
    text: 'Вже пів року ходжу до Наталії — результат кожного разу ідеальний! Майстер дуже делікатний, відчуваю повний комфорт під час процедури.',
    date: '2025-04-01',
    source: 'Google',
    status: 'published',
  },
  {
    id: 2,
    name: 'Марина Т.',
    rating: 5,
    text: 'Краще місце для депіляції! Чисто, акуратно, без болю. Наталія — справжній профі!',
    date: '2025-03-20',
    source: 'Instagram',
    status: 'published',
  },
  {
    id: 3,
    name: 'Вікторія О.',
    rating: 5,
    text: 'Нарешті знайшла свого майстра! Процедура пройшла легко та швидко. Рекомендую всім подругам.',
    date: '2025-03-10',
    source: 'Google',
    status: 'published',
  },
  {
    id: 4,
    name: 'Юлія Д.',
    rating: 5,
    text: 'Довіряю Наталії вже 3 роки. Воск преміальний — ItalWax — шкіра після гладенька, ніякого подразнення.',
    date: '2025-02-28',
    source: 'Ручний',
    status: 'published',
  },
  {
    id: 5,
    name: 'Катерина М.',
    rating: 5,
    text: 'Приємна атмосфера, стерильність на вищому рівні, майстер чудово спілкується. Результат зберігається дуже довго!',
    date: '2025-02-15',
    source: 'Google',
    status: 'published',
  },
];

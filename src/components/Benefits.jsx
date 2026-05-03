

const Benefits = () => {
  const items = [
    { icon: 'spa', title: 'ItalWax', text: 'Преміальні матеріали з Італії' },
    { icon: 'location_on', title: 'Локація', text: 'Серце Олексіївки, зручний доїзд' },
    { icon: 'clean_hands', title: 'Стерильність', text: 'Тільки одноразові розхідники' },
    { icon: 'bolt', title: 'Швидкість', text: 'Якісна процедура за 30-45 хв' },
    { icon: 'bed', title: 'Комфорт', text: 'Затишна атмосфера та музика' }
  ];

  return (
    <section className="py-xl bg-surface-container">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="sr-only">Переваги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl text-center flex flex-col items-center shadow-sm">
              <span className="material-symbols-outlined text-4xl mb-4 text-primary">{item.icon}</span>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

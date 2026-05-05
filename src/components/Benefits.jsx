

const Benefits = () => {
  const items = [
    { icon: 'spa', title: 'ItalWax', text: 'Преміальні матеріали з Італії' },
    { icon: 'location_on', title: 'Локація', text: 'Серце Олексіївки, зручний доїзд' },
    { icon: 'clean_hands', title: 'Стерильність', text: 'Тільки одноразові розхідники' },
    { icon: 'bolt', title: 'Швидкість', text: 'Процедура за 30-45 хв' },
    { icon: 'bed', title: 'Комфорт', text: 'Затишна атмосфера' }
  ];

  return (
    <section className="py-10 xs:py-16 md:py-xl bg-surface-container/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="sr-only">Переваги</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xs:gap-4 md:gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-4 xs:p-6 md:p-8 rounded-2xl text-center flex flex-col items-center shadow-sm border border-slate-50 transition-all hover:shadow-md ${
                index === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <span className="material-symbols-outlined text-2xl xs:text-3xl md:text-4xl mb-2 xs:mb-3 text-primary">{item.icon}</span>
              <h4 className="font-bold text-xs xs:text-sm md:text-base mb-1 text-primary uppercase tracking-tight">{item.title}</h4>
              <p className="text-[10px] xs:text-xs md:text-sm text-secondary leading-tight font-medium md:font-normal">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

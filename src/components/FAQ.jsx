import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqs = [
    {
      q: 'Чи боляче робити депіляцію вперше?',
      a: 'Перший раз може бути трохи незвичним, але завдяки використанню воску ItalWax та професійній техніці Наталії, дискомфорт зводиться до мінімуму. З кожним наступним разом волоски стають тоншими, а процедура — легшою.'
    },
    {
      q: 'Яка оптимальна довжина волосся?',
      a: 'Для найкращого результату довжина волосся має бути 5-7 мм. Зазвичай це 10-14 днів після останнього гоління.'
    },
    {
      q: 'Яку косметику ви використовуєте?',
      a: 'Ми працюємо виключно з преміальним італійським воском ItalWax та використовуємо професійний догляд до та після процедури, що забезпечує ідеальну гладкість та здоров’я вашої шкіри.'
    },
    {
      q: 'Чи можна робити воскову депіляцію, якщо я раніше користувалась тільки бритвою?',
      a: 'Так, звісно! Багато наших клієнток прийшли до воску саме після бритви. Єдиний нюанс: після бритви волосся росте жорсткішим, тому перша процедура може бути трохи чутливішою. Але вже після 2-3 візитів до WaxButterfly волосся стане тоншим, рідшим, а процедура — значно комфортнішою. Головне — дотримуйтесь рекомендацій щодо довжини волосся (5-7 мм), і все пройде ідеально! ✨'
    },
    {
      q: 'Як знайти ваш кабінет на Олексіївці? Чи є парковка?',
      a: (
        <div className="space-y-3">
          <p>Ми знаходимось за адресою: проспект Людвіга Свободи, 31 (район Олексіївка, Харків). 📍</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Метро: 1 хвилина пішки від ст. м. «Олексіївська»</li>
            <li>Парковка: біля будинку є безкоштовні місця для авто</li>
          </ul>
          <p>Після запису я надішлю вам детальну інструкцію з фото-орієнтирами у Viber/Instagram. Якщо загубитесь — телефонуйте, допоможу зорієнтуватися! 🗺️</p>
        </div>
      )
    },
    {
      q: 'Чи можна робити депіляцію під час менструації?',
      a: (
        <div className="space-y-3">
          <p>Так, можна, але є важливий нюанс. У цей період чутливість шкіри може бути вищою, тому процедура може відчуватися трохи болючіше. 💡 Наша рекомендація:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Якщо у вас високий больовий поріг — сміливо записуйтесь, ми використаємо знеболюючий спрей.</li>
            <li>Якщо ви дуже чутливі — краще перенести візит на 2-3 день після завершення циклу для максимального комфорту.</li>
          </ul>
          <p>Ми завжди індивідуально підходимо до кожного візиту, тому просто попередьте мене про це при записі, і ми підберемо оптимальний час та підготовку. 🤍</p>
        </div>
      )
    }
  ];

  return (
    <section className="py-xl bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeading className="mb-16">Питання та відповіді</SectionHeading>
        <div className="space-y-1 max-w-[760px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => handleToggle(index)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <h3 className="font-bold text-primary pr-4">{faq.q}</h3>
                <motion.span 
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  className="material-symbols-outlined text-secondary"
                >
                  expand_more
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="pb-6 px-6 text-secondary leading-relaxed border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

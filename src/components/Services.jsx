import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import whiteBox from '../assets/white-box.png';
import redBox from '../assets/red-box.png';
import blackBox from '../assets/black-box.png';

const Services = ({ onSelectService }) => {
  const complexes = [
    {
      name: 'Complex S',
      fullName: 'Complex S (Глибоке бікіні + Пахви)',
      tag: 'ТОП',
      items: ['Глибоке бікіні', 'Пахви'],
      price: '600 ₴',
      image: whiteBox,
      primary: false
    },
    {
      name: 'Complex M',
      fullName: 'Complex M (Глибоке бікіні + Пахви + Гомілки)',
      tag: 'VOGUE',
      items: ['Глибоке бікіні', 'Пахви', 'Гомілки'],
      price: '950 ₴',
      image: redBox,
      primary: true
    },
    {
      name: 'Complex L',
      fullName: 'Complex L (Глибоке бікіні + Пахви + Ноги повністю)',
      tag: 'MAX',
      items: ['Глибоке бікіні', 'Пахви', 'Ноги повністю'],
      price: '1150 ₴',
      image: blackBox,
      primary: false
    }
  ];

  const zones = [
    { name: 'Обличчя (одна зона)', price: '100 ₴' },
    { name: 'Пахви', price: '180 ₴' },
    { name: 'Руки до ліктя', price: '200 ₴' },
    { name: 'Руки повністю', price: '270 ₴' },
    { name: 'Бікіні класика', price: '290 ₴' },
    { name: 'Глибоке бікіні (+ лінія живота, сідниці)', price: '500 ₴' },
    { name: 'Живіт / Поясниця / Сідниці (одна зона)', price: '250 ₴' },
    { name: 'Ноги (гомілки)', price: '400 ₴' },
    { name: 'Ноги (стегна)', price: '450 ₴' },
    { name: 'Ноги повністю', price: '600 ₴' }
  ];

  return (
    <section className="py-xl bg-white" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeading className="mb-10" description="Оберіть свою ідеальну процедуру або вигідний комплекс">
          Послуги
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {complexes.map((item, index) => (
            <div
              key={index}
              className={`${item.primary
                ? 'bg-primary text-on-primary scale-105 z-10'
                : 'bg-surface-container-low border border-transparent'
                } p-10 rounded-2xl hover:shadow-xl transition-all duration-500 flex flex-col group`}
            >
              <div className="w-[120px] h-[120px] mb-8 overflow-hidden rounded-xl mx-auto">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-headline-md text-headline-md">{item.name}</h3>
                <span className={`${item.primary ? 'bg-white text-primary' : 'bg-primary text-on-primary'} px-3 py-1 rounded text-xs`}>
                  {item.tag}
                </span>
              </div>
              <ul className={`space-y-1 mb-10 ${item.primary ? 'opacity-80' : 'text-secondary'}`}>
                {item.items.map((sub, i) => (
                  <li key={i}>• {sub}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className={`text-display-lg font-bold mb-4 leading-none ${item.primary ? '' : 'text-primary'}`}>{item.price}</p>
                <button
                  onClick={() => onSelectService(item.fullName)}
                  className={`w-full py-4 rounded-lg font-bold transition-all ${item.primary ? 'bg-white text-primary hover:opacity-90' : 'border border-primary text-primary hover:bg-primary hover:text-on-primary'
                    }`}
                >
                  Забронювати
                </button>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[760px] mx-auto bg-surface p-8 md:p-12 rounded-2xl shadow-sm border border-slate-50"
        >
          <h3 className="font-headline-md text-headline-md mb-10 text-center text-primary">Окремі зони</h3>
          <div className="divide-y divide-outline-variant">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-5 flex justify-between items-center group cursor-pointer"
                onClick={() => onSelectService(zone.name)}
              >
                <span className="text-body-md font-medium text-secondary group-hover:text-primary transition-colors duration-300">
                  {zone.name}
                </span>
                <div className="flex-grow mx-4 border-b border-dotted border-slate-200 group-hover:border-primary/20 transition-colors duration-300"></div>
                <span className="text-body-md font-bold text-primary group-hover:text-accent-pink transition-all duration-300 group-hover:scale-110 origin-right">
                  {zone.price}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

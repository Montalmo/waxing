
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
      oldPrice: '780 ₴',
      image: whiteBox,
      primary: false
    },
    {
      name: 'Complex M',
      fullName: 'Complex M (Глибоке бікіні + Пахви + Гомілки)',
      tag: 'VOGUE',
      items: ['Глибоке бікіні', 'Пахви', 'Гомілки'],
      price: '950 ₴',
      oldPrice: '1200 ₴',
      image: redBox,
      primary: true
    },
    {
      name: 'Complex L',
      fullName: 'Complex L (Глибоке бікіні + Пахви + Ноги повністю)',
      tag: 'MAX',
      items: ['Глибоке бікіні', 'Пахви', 'Ноги повністю'],
      price: '1150 ₴',
      oldPrice: '1450 ₴',
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading className="mb-6 xs:mb-10" description="Оберіть свою ідеальну процедуру або вигідний комплекс">
          Послуги
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 xs:mb-16">
          {complexes.map((item, index) => (
            <div
              key={index}
              className={`${item.primary
                ? 'bg-primary text-on-primary md:scale-105 z-10'
                : 'bg-surface-container-low border border-transparent'
                } p-6 xs:p-8 md:p-10 rounded-2xl xs:rounded-3xl hover:shadow-xl transition-all duration-500 flex flex-col group`}
            >
              <div className="flex justify-between items-center mb-4 md:mb-3">
                <h3 className="text-xl xs:text-2xl md:text-headline-md font-black tracking-tight uppercase leading-tight">{item.name}</h3>
                <div className="flex items-center gap-2 xs:gap-3">
                  <img src={item.image} alt="" className="h-12 xs:h-14 md:h-8 w-auto object-contain drop-shadow-md" />
                  <span className={`${item.primary ? 'bg-white text-primary' : 'bg-primary text-on-primary'} px-3 py-1 rounded-full font-bold text-[10px] whitespace-nowrap`}>
                    {item.tag}
                  </span>
                </div>
              </div>
              
              <ul className={`space-y-2 mb-8 xs:mb-10 text-base xs:text-lg md:text-body-md ${item.primary ? 'text-white' : 'text-secondary'} font-bold md:font-medium`}>
                {item.items.map((sub, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40"></span>
                    {sub}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <div className="flex items-baseline gap-3 mb-6">
                  <p className={`text-2xl xs:text-3xl md:text-headline-lg font-black leading-none ${item.primary ? 'text-white' : 'text-primary'}`}>
                    {item.price}
                  </p>
                  {item.oldPrice && (
                    <p className={`text-base xs:text-lg md:text-body-lg line-through opacity-50 font-bold ${item.primary ? 'text-white' : 'text-secondary'}`}>
                      {item.oldPrice}
                    </p>
                  )}
                </div>
                <button
                   onClick={() => onSelectService(item.fullName)}
                   className={`w-full py-4 rounded-xl font-bold text-base md:text-body-md transition-all ${item.primary ? 'bg-white text-primary hover:opacity-95 shadow-lg' : 'border-2 border-primary text-primary hover:bg-primary hover:text-on-primary'
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
          className="max-w-[760px] mx-auto bg-surface p-5 xs:p-6 md:p-12 rounded-2xl xs:rounded-3xl shadow-sm border border-slate-50"
        >
          <h3 className="text-xl xs:text-2xl md:text-headline-md font-black mb-6 xs:mb-10 text-center text-primary uppercase tracking-widest">Окремі зони</h3>
          <div className="divide-y divide-outline-variant">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-3.5 xs:py-5 flex justify-between items-center gap-4 group cursor-pointer"
                onClick={() => onSelectService(zone.name)}
              >
                <span className="text-[15px] md:text-base font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                  {zone.name}
                </span>
                <div className="flex-grow border-b border-dotted border-slate-200 group-hover:border-primary/20 transition-colors duration-300 min-w-[20px]"></div>
                <span className="text-lg md:text-xl font-bold text-primary whitespace-nowrap shrink-0 group-hover:text-accent-pink transition-all duration-300 group-hover:scale-110 origin-right">
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

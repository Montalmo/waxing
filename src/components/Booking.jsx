import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceSelect = ({ selectedService, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayValue = selectedService || 'Оберіть послугу';
  const isPlaceholder = !selectedService;

  const complexes = [
    'Complex S (Глибоке бікіні + Пахви)',
    'Complex M (Глибоке бікіні + Пахви + Гомілки)',
    'Complex L (Глибоке бікіні + Пахви + Ноги повністю)'
  ];

  const zones = [
    'Обличчя (одна зона)',
    'Пахви',
    'Руки до ліктя',
    'Руки повністю',
    'Бікіні класика',
    'Глибоке бікіні (+ лінія живота, сідниці)',
    'Живіт / Поясниця / Сідниці (одна зона)',
    'Ноги (гомілки)',
    'Ноги (стегна)',
    'Ноги повністю'
  ];

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-surface-container-low border border-transparent hover:border-outline-variant/50 rounded-lg p-4 flex justify-between items-center cursor-pointer transition-all duration-300 hover:bg-white shadow-sm"
      >
        <span className={isPlaceholder ? 'text-secondary/60' : 'text-primary font-medium'}>
          {displayValue}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="material-symbols-outlined text-secondary"
        >
          expand_more
        </motion.span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 w-full bg-white rounded-xl shadow-xl border border-slate-100 z-50 max-h-80 overflow-y-auto p-2"
          >
            <div className="px-3 py-2 text-xs font-bold text-secondary/50 uppercase tracking-wider">Комплекси</div>
            {complexes.map((item) => (
              <div
                key={item}
                onClick={() => handleSelect(item)}
                className="px-4 py-3 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors text-body-md text-primary"
              >
                {item}
              </div>
            ))}
            <div className="px-3 py-2 mt-2 text-xs font-bold text-secondary/50 uppercase tracking-wider border-t border-slate-50 pt-4">Окремі зони</div>
            {zones.map((item) => (
              <div
                key={item}
                onClick={() => handleSelect(item)}
                className="px-4 py-3 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors text-body-md text-primary"
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Booking = ({ selectedService, onServiceSelect }) => {
  return (
    <section className="py-10 xs:py-xl bg-white" id="booking">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-primary-container rounded-2xl shadow-2xl flex flex-col lg:flex-row relative overflow-hidden">
          <div className="lg:w-1/2 p-5 xs:p-8 md:p-12 lg:p-20 text-on-primary rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display-lg text-xl xs:text-headline-lg md:text-display-lg font-bold mb-3 md:mb-6 text-white uppercase tracking-tight"
            >
              Записатися
            </motion.h2>
            <p className="font-body-lg text-on-primary-container mb-6 md:mb-12 text-[13px] xs:text-base md:text-lg leading-snug opacity-90">
              Залиште ваші контакти, ми зв'яжемося для підтвердження часу.
            </p>
            <div className="flex flex-row xs:flex-col gap-4 xs:gap-6">
              <div className="flex items-center gap-2 xs:gap-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-base xs:text-xl md:text-2xl">call</span>
                </div>
                <span className="text-[12px] xs:text-base md:text-body-lg whitespace-nowrap">+38 (063) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 xs:gap-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-base xs:text-xl md:text-2xl">schedule</span>
                </div>
                <span className="text-[12px] xs:text-base md:text-body-lg whitespace-nowrap">09:00 - 20:00</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white p-5 xs:p-8 md:p-12 lg:p-20 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl relative">
            <form className="space-y-3 xs:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1 xs:space-y-2">
                <label className="text-[9px] xs:text-label-sm uppercase tracking-wider text-secondary/60 font-bold">Ваше ім'я</label>
                <input
                  className="w-full bg-surface-container-low border border-transparent hover:border-outline-variant/50 rounded-lg p-3 xs:p-4 text-sm xs:text-base focus:ring-2 focus:ring-primary outline-none transition-all duration-300 hover:bg-white shadow-sm"
                  placeholder="Ім'я"
                  type="text"
                />
              </div>
              <div className="space-y-1 xs:space-y-2">
                <label className="text-[9px] xs:text-label-sm uppercase tracking-wider text-secondary/60 font-bold">Номер телефону</label>
                <input
                  className="w-full bg-surface-container-low border border-transparent hover:border-outline-variant/50 rounded-lg p-3 xs:p-4 text-sm xs:text-base focus:ring-2 focus:ring-primary outline-none transition-all duration-300 hover:bg-white shadow-sm"
                  placeholder="+38 (0__) ___ __ __"
                  type="tel"
                />
              </div>
              <div className="space-y-1 xs:space-y-2">
                <label className="text-[9px] xs:text-label-sm uppercase tracking-wider text-secondary/60 font-bold">Послуга</label>
                <ServiceSelect selectedService={selectedService} onSelect={onServiceSelect} />
              </div>
              <div className="flex items-start gap-2 mt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-0.5 w-3.5 h-3.5 text-primary border-slate-300 rounded focus:ring-primary"
                />
                <label htmlFor="privacy" className="text-[10px] xs:text-sm text-secondary/70 leading-tight">
                  Згоден(на) на обробку даних згідно з{' '}
                  <Link to="/privacy" className="text-primary hover:underline font-medium">
                    Політикою
                  </Link>
                </label>
              </div>
              <button
                className="w-full bg-primary text-on-primary py-3.5 xs:py-5 rounded-lg font-bold text-base xs:text-lg hover:opacity-90 transition-all shadow-lg mt-4 xs:mt-8"
                type="submit"
              >
                Забронювати час
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

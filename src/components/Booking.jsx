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
    <section className="py-xl bg-white" id="booking">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-primary-container rounded-2xl shadow-2xl flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 p-12 lg:p-20 text-on-primary rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display-lg text-display-lg font-semibold mb-6 text-white"
            >
              Записатися
            </motion.h2>
            <p className="font-body-lg text-on-primary-container mb-12">
              Залиште ваші контакти, і ми зв'яжемося з вами для підтвердження зручного часу.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">call</span>
                </div>
                <span className="text-body-lg">+38 (063) 123-45-67</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">schedule</span>
                </div>
                <span className="text-body-lg">Пн-Нд: 09:00 - 20:00</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white p-12 lg:p-20 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl relative">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-secondary">Ваше ім'я</label>
                <input
                  className="w-full bg-surface-container-low border border-transparent hover:border-outline-variant/50 rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all duration-300 hover:bg-white shadow-sm"
                  placeholder="Введіть ваше ім'я"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-secondary">Номер телефону</label>
                <input
                  className="w-full bg-surface-container-low border border-transparent hover:border-outline-variant/50 rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all duration-300 hover:bg-white shadow-sm"
                  placeholder="+38 (0__) ___ __ __"
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-secondary">Послуга</label>
                <ServiceSelect selectedService={selectedService} onSelect={onServiceSelect} />
              </div>
              <div className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary"
                />
                <label htmlFor="privacy" className="text-sm text-secondary leading-tight">
                  Я згоден(на) на обробку персональних даних згідно з{' '}
                  <Link to="/privacy" className="text-primary hover:underline font-medium">
                    Політикою конфіденційності
                  </Link>
                </label>
              </div>
              <button
                className="w-full bg-primary text-on-primary py-5 rounded-lg font-bold text-lg hover:opacity-90 transition-all shadow-lg mt-8"
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';

const Reviews = () => {
  const reviews = [
    {
      initial: 'A',
      name: 'Alina Sweets',
      status: '28 тижнів тому',
      text: 'Рекомендую от Души! Мастер Наталия - профессионал своего дела. Всегда всё чисто, аккуратно и комфортно. Я очень довольна качеством процедур и очень рада, что нашла для себя такого мастера.',
      featured: false
    },
    {
      initial: 'A',
      name: 'Ana Lyma',
      status: '29 тижнів тому',
      text: 'Неймовірний майстер! Чудово знається на своїй справі, дуже швидко та якісно виконує депіляцію 😍 Усім дівчаткам рекомендую!!!',
      featured: true
    },
    {
      initial: 'Д',
      name: 'Дарія Безпалько',
      status: '36 тижнів тому',
      text: 'Обслуговування і якість процедури на вищому рівні.',
      featured: false
    },
    {
      initial: 'Н',
      name: 'Наталь',
      status: '44 тижні тому',
      text: 'Чудовий майстер своєї справи. Рекомендую!',
      featured: false
    },
    {
      initial: 'С',
      name: 'Светлана Терехова',
      status: '45 тижнів тому',
      text: 'Від усього серця рекомендую майстра Наталію! Обслуговуюсь у майстра вже тривалий час і кожен мій похід на процедури - то справжнє свято! Дуже акуратно, делікатно, не боляче і швидко. Наташа - спеціаліст вищого рівня та ще й неймовірна людина! Рекомендасьон для всіх дівчат нашого Незламного)',
      featured: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Get visible reviews (3 on desktop, 1 on mobile handled by CSS)
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="py-xl bg-surface overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10 md:mb-12">
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <SectionHeading
              align="left"
              className="mb-0"
              description="Ті, хто вже довірили свою красу Наталії"
            >
              Відгуки
            </SectionHeading>
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm self-start px-4 md:px-5 py-2 md:py-3 rounded-2xl border border-primary/10 shadow-sm">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display-lg font-bold text-primary text-xl md:text-2xl">5.0</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-yellow-400 text-[16px] md:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] md:text-[11px] text-secondary font-bold uppercase tracking-widest">
                  Всього {reviews.length} відгуків клієнтів
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-secondary/40 font-bold tracking-widest text-[10px] uppercase">
              <span className="text-primary text-sm">{currentIndex + 1}</span>
              <span className="text-xs">/</span>
              <span>{reviews.length}</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-outline-variant hover:bg-white transition-all group active:scale-90 flex items-center justify-center"
              >
                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">chevron_left</span>
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-outline-variant hover:bg-white transition-all group active:scale-90 flex items-center justify-center"
              >
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleReviews().map((review, index) => (
                <motion.div
                  key={`${review.name}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full flex flex-col border border-slate-50 ${index > 0 ? 'hidden md:flex' : 'flex'
                    }`}
                >
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="material-symbols-outlined text-yellow-400 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-md text-secondary italic mb-8 flex-grow leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center font-bold text-primary text-lg">
                      {review.initial}
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-base">{review.name}</h5>
                      <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">{review.status}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden flex-col items-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-secondary/40 font-bold tracking-widest text-[10px] uppercase">
              <span className="text-primary text-sm">{currentIndex + 1}</span>
              <span className="text-xs">/</span>
              <span>{reviews.length}</span>
            </div>
            <div className="flex justify-center gap-8">
              <button onClick={prev} className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={next} className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

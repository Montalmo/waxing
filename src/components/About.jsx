
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-xl bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
            <img
              className="w-full h-full object-cover"
              alt="Natalia - Beauty Therapist"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqicqfUVZcooqK8I9QiOXCfFK-KB1vndfrRxj_fF31aUKQAT7h7PcL792cqj0o_5X6TKuahbasANsGtvdLoRbP0UTp_eWwPy0KWYFSKSconEme36M2t1JC5dfiucoUKMTpNN8R7kU0WGToGVr6D8_d47l19u5dzlukO2z78kqwrnUI0n9dfB3MDLTdenXzBHSxBXK71J4kAkN_Bertsu9JnOwWdBIWY7oTwp3IjuhT7ydZrXw49gbRJ_rqVULacDkdKoXyYcg2kYHI"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white p-4 md:p-8 rounded-lg shadow-lg">
            <p className="font-display-lg text-headline-md md:text-headline-lg text-primary">5+</p>
            <p className="text-[10px] md:text-label-sm text-secondary uppercase tracking-widest">Років досвіду</p>
          </div>
        </div>
        <div>
          <span className="text-[10px] md:text-label-sm text-secondary uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4 block">Ваш майстер</span>
          <div className="relative mb-6 md:mb-8 inline-block">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display-lg text-display-lg font-semibold text-primary leading-tight"
            >
              Про майстра
            </motion.h2>
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
              className="absolute -bottom-1 left-0 w-full h-1 bg-primary/10 origin-left rounded-full"
            />
          </div>
          <p className="font-body-md text-body-md text-secondary mb-8">
            Моя місія — зробити процедуру видалення волосся максимально комфортною та безболісною. Я використовую лише перевірені методики та преміальну косметику ItalWax, щоб ваша шкіра залишалася гладкою та здоровою.
          </p>
          <ul className="space-y-4">
            {[
              { icon: 'verified', text: 'Сертифікований спеціаліст ItalWax' },
              { icon: 'sanitizer', text: '100% стерильність та одноразові матеріали' },
              { icon: 'favorite', text: 'Індивідуальний підхід до кожного типу шкіри' }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                <span className="font-body-md text-on-surface">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

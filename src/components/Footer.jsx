import { Link } from 'react-router-dom';
import logo from '../assets/wax_h_log.svg';

const Footer = () => {
  const socialLinks = [
    { icon: 'photo_camera', label: 'Instagram', url: 'https://instagram.com/waxbutterfly', color: 'hover:text-pink-500' },
    { icon: 'send', label: 'Telegram', url: 'https://t.me/waxbutterfly', color: 'hover:text-blue-400' },
    { icon: 'chat', label: 'Viber', url: 'viber://add?number=380631234567', color: 'hover:text-purple-500' }
  ];

  return (
    <footer className="bg-primary text-on-primary w-full relative overflow-hidden" id="contact">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link className="mb-6 group" to="/">
              <img src={logo} alt="WaxButterfly Logo" className="h-12 md:h-16 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-on-primary/60 font-body-md text-sm md:text-base leading-relaxed w-full max-w-none">
              Ваш ідеальний простір для професійної воскової депіляції. Поєднуємо італійську якість ItalWax з турботою про вашу шкіру.
            </p>
            <div className="flex gap-5 mt-8">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/10 hover:-translate-y-1`}
                  title={social.label}
                >
                  <span className="material-symbols-outlined text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h3 className="font-display-lg text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest text-white">Контакти</h3>
            <ul className="space-y-6 w-full">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-base text-on-primary/70">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-primary/40 mb-1">Адреса</p>
                  <a 
                    href="https://maps.app.goo.gl/6DHebwGW8aUp27zr5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-medium hover:text-white transition-colors"
                  >
                    пр. Людвіга Свободи, Харків
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-base text-on-primary/70">call</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-primary/40 mb-1">Телефон</p>
                  <a href="tel:+380631234567" className="text-sm md:text-base font-medium hover:text-white transition-colors">+38 (063) 123-45-67</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-base text-on-primary/70">schedule</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-primary/40 mb-1">Графік роботи</p>
                  <span className="text-sm md:text-base font-medium">Пн-Нд: 09:00 - 20:00</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-5 h-64 lg:h-auto min-h-[300px] rounded-2xl overflow-hidden shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!m12!m3!1d3439.193177852092!2d36.2049489!3d50.05103999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a5004046e92b%3A0x74a45116979b9c4b!2z0JL0vtGB0LrQvtCy0LAg0LTQtdC_0ZbQu9GP0YbRltGPINCe0LvQtdC60YHRltGX0LLQutCwINCl0LDRgNC60ZbQsg!5e1!3m2!1suk!2sua!4v1776963098633!5m2!1suk!2sua"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
            
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <a 
                href="https://maps.app.goo.gl/6DHebwGW8aUp27zr5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-primary px-6 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <span className="material-symbols-outlined text-lg">directions</span>
                ВІДКРИТИ В GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-on-primary/40">
              © 2024 WaxButterfly Beauty Studio. Всі права захищені.
            </p>
            <p className="font-sans text-[9px] tracking-widest uppercase text-on-primary/20">
              Розроблено з любов'ю до вашої краси
            </p>
          </div>
          <div className="flex gap-8">
            <Link className="text-on-primary/40 hover:text-white transition-colors font-sans text-[10px] md:text-xs tracking-widest uppercase" to="/privacy">
              Політика конфіденційності
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
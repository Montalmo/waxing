import { Link } from 'react-router-dom';
import logo from '../assets/wax_h_log.svg';

const Footer = () => {
  return (
    <footer className="bg-slate-50 w-full border-t border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <Link className="flex items-center gap-2 mb-5 block" to="/">
              <img src={logo} alt="WaxButterfly Logo" className="h-[77px] w-auto" />
            </Link>
            <p className="text-slate-700 font-sans text-xs tracking-widest uppercase leading-relaxed">
              Я знаходжусь в самому серці Олексіївки. Простір, де краса поєднується з комфортом та професійним доглядом.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-5 uppercase tracking-widest text-2xl text-slate-900">Контакти</h2>
            <ul className="space-y-3 text-slate-700 font-sans text-xs tracking-widest uppercase">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>пр. Людвіга Свободи, Харків</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">call</span>
                <span>+38 (063) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-3 hover:text-slate-900 transition-colors">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                  <span>@waxbutterfly</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm h-48 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.193177852092!2d36.2049489!3d50.05103999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a5004046e92b%3A0x74a45116979b9c4b!2z0JL0vtGB0LrQvtCy0LAg0LTQtdC_0ZbQu9GP0YbRltGPINCe0LvQtdC60YHRltGX0LLQutCwINCl0LDRgNC60ZbQsg!5e1!3m2!1suk!2sua!4v1776963098633!5m2!1suk!2sua"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-slate-200">
          <p className="font-sans text-xs tracking-widest uppercase text-slate-500">
            © 2024 WaxButterfly Beauty Studio. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link className="text-slate-500 hover:text-slate-900 transition-opacity font-sans text-xs tracking-widest uppercase" to="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

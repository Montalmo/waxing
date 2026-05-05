import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/wax_h_log.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e, id) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [
    { label: 'Про мене', id: 'about' },
    { label: 'Послуги та ціни', id: 'services' },
    { label: 'Галерея', id: 'gallery' },
    { label: 'Відгуки', id: 'reviews' },
    { label: 'Поради', id: 'tips' },
    { label: 'Контакти', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)]'}`}>
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-8 h-14 xs:h-16 md:h-20">
        <Link className="flex items-center gap-2" to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="WaxButterfly Logo" className="h-7 xs:h-8 md:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              className="font-sans tracking-tight text-sm uppercase font-semibold text-slate-500 hover:text-slate-900 transition-colors duration-300"
              to={`/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="bg-primary text-on-primary px-6 py-3 rounded-lg text-label-sm font-semibold hover:opacity-90 transition-opacity"
            to="/#booking"
            onClick={(e) => handleNavClick(e, 'booking')}
          >
            ЗАПИСАТИСЯ
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3 xs:gap-4">
          <Link
            className={`bg-primary text-on-primary px-3 xs:px-4 py-2 rounded-lg text-[9px] xs:text-[10px] font-semibold transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            to="/#booking"
            onClick={(e) => handleNavClick(e, 'booking')}
          >
            ЗАПИС
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary flex items-center justify-center relative z-[110]"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl xs:text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { delay: 0.5, duration: 0.3 } 
            }}
            className="fixed inset-0 z-[100] bg-white md:hidden flex flex-col justify-center items-center px-6 xs:px-8"
          >
            <div className="flex flex-col space-y-4 xs:space-y-6 w-full text-center">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ 
                    opacity: 0, 
                    transition: { duration: 0.2 }
                  }}
                  transition={{ 
                    delay: 0.35 + (index * 0.08), 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <Link
                    className="text-2xl xs:text-[32px] font-display-lg font-bold text-primary hover:text-secondary transition-colors uppercase tracking-tight block py-1"
                    to={`/#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ 
                  opacity: 0, 
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  delay: 0.35 + (navLinks.length * 0.08), 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="pt-4 xs:pt-6"
              >
                <Link
                  className="w-full bg-primary text-on-primary py-4 xs:py-5 rounded-2xl font-bold text-lg xs:text-xl flex items-center justify-center gap-2 xs:gap-3 shadow-xl active:scale-95 transition-all"
                  to="/#booking"
                  onClick={(e) => handleNavClick(e, 'booking')}
                >
                  <span className="material-symbols-outlined text-lg xs:text-xl">calendar_month</span>
                  ЗАПИСАТИСЯ
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/wax_h_log.svg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, id) => {
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link className="flex items-center gap-2" to="/">
          <img src={logo} alt="WaxButterfly Logo" className="h-12 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: 'Про мене', id: 'about' },
            { label: 'Послуги та ціни', id: 'services' },
            { label: 'Галерея', id: 'gallery' },
            { label: 'Відгуки', id: 'reviews' },
            { label: 'Поради', id: 'tips' },
            { label: 'Контакти', id: 'contact' }
          ].map((item) => (
            <Link
              key={item.id}
              className="font-sans tracking-tight text-sm uppercase font-semibold text-slate-500 hover:text-slate-900 transition-colors duration-300"
              to={`/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="bg-primary text-on-primary px-6 py-3 rounded-lg text-label-sm font-semibold hover:opacity-90 transition-opacity"
          to="/#booking"
          onClick={(e) => handleNavClick(e, 'booking')}
        >
          ЗАПИСАТИСЯ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

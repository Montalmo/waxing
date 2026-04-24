import { useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  const navItems = [
    { title: 'Дашборд', icon: 'dashboard', path: '/admin/dashboard' },
    { title: 'Блог', icon: 'article', path: '/admin/blog' },
    { title: 'Прайс', icon: 'payments', path: '/admin/price' },
    { title: 'Відгуки', icon: 'forum', path: '/admin/reviews' },
    { title: 'Налаштування', icon: 'settings', path: '/admin/settings' },
  ];

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    // Outer wrapper: always flex-row, sidebar collapses on mobile
    <div className="flex min-h-screen bg-[#FAF7F2] font-body-md">

      {/* ═══ Desktop Sidebar ═══ */}
      <aside
        className="hidden lg:flex flex-col w-64 xl:w-72 shrink-0 bg-white border-r border-primary/5 sticky top-0 h-screen overflow-y-auto"
      >
        {/* Brand */}
        <div className="p-6 xl:p-8">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-10 group"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform shrink-0">
              🦋
            </div>
            <div className="min-w-0">
              <p className="font-display-lg font-bold text-base text-[#1A1A1A] tracking-tight leading-tight truncate">
                WaxButterfly
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-secondary/30">
                Admin Panel
              </p>
            </div>
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                    active
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-secondary/50 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] shrink-0">{item.icon}</span>
                  <span className="truncate">{item.title}</span>
                  {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="mt-auto p-6 xl:p-8 border-t border-primary/5 space-y-1">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 w-full rounded-2xl font-bold text-secondary/40 hover:text-primary hover:bg-primary/5 transition-all text-sm"
          >
            <span className="material-symbols-outlined text-[20px] shrink-0">open_in_new</span>
            <span className="truncate">Переглянути сайт</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-2xl font-bold text-secondary/40 hover:text-red-500 hover:bg-red-50 transition-all text-sm"
          >
            <span className="material-symbols-outlined text-[20px] shrink-0">logout</span>
            <span className="truncate">Вийти</span>
          </button>
        </div>
      </aside>

      {/* ═══ Right column: mobile header + content + mobile nav ═══ */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-primary/5 px-5 py-3.5 flex justify-between items-center sticky top-0 z-[100] shadow-sm">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-lg shadow-md shadow-primary/30">
              🦋
            </div>
            <span className="font-display-lg font-bold text-primary text-lg">Admin</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              target="_blank"
              className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-9 h-9 rounded-xl bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
            </button>
          </div>
        </header>

        {/* ── Main Content ── */}
        <main className="flex-1 p-4 sm:p-6 lg:p-10 xl:p-12 pb-28 lg:pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-primary/5 z-[100] shadow-[0_-8px_32px_rgba(0,0,0,0.06)]">
          <div className="flex justify-around items-center px-1 py-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-2xl transition-all min-w-0 ${
                    active ? 'text-primary' : 'text-secondary/30'
                  }`}
                >
                  <div className={`w-10 h-7 rounded-xl flex items-center justify-center transition-all ${active ? 'bg-primary/10' : ''}`}>
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wide truncate max-w-[52px] text-center">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminLayout;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate network delay for better UX
    await new Promise(r => setTimeout(r, 600));

    if (login === 'admin' && password === 'wax2025') {
      localStorage.setItem('admin_token', 'wax_auth_session_active');
      navigate('/admin/dashboard');
    } else {
      setError('Невірний логін або пароль');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F5EFE6] to-[#EDE3D4] flex items-center justify-center p-4 sm:p-6 font-body-md overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-72 h-72 bg-[#E8D5C4]/60 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative w-[90%] sm:w-[440px] max-w-[440px] bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl shadow-black/10 border border-primary/5 z-10"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
            className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-primary/10"
          >
            <span className="text-4xl">🦋</span>
          </motion.div>
          <h1 className="font-display-lg text-3xl text-[#1A1A1A] font-bold mb-2 tracking-tight">
            WaxButterfly
          </h1>
          <p className="text-secondary/50 text-sm font-medium">
            Панель управління контентом
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-secondary/40 mb-2 ml-1">
              Логін
            </label>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              autoComplete="username"
              className="w-full px-5 py-4 bg-[#FAF7F2] border-2 border-transparent rounded-2xl focus:border-primary/30 focus:bg-white outline-none transition-all font-medium placeholder:text-secondary/30"
              placeholder="admin"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-secondary/40 mb-2 ml-1">
              Пароль
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full px-5 py-4 bg-[#FAF7F2] border-2 border-transparent rounded-2xl focus:border-primary/30 focus:bg-white outline-none transition-all font-medium placeholder:text-secondary/30"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Error */}
          <motion.div
            initial={false}
            animate={error ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-2xl text-red-500 text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">error</span>
              {error}
            </div>
          </motion.div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-[#A67C00] shadow-xl shadow-primary/20 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Вхід...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">login</span>
                Увійти
              </>
            )}
          </button>
        </form>

        {/* Hint */}
        <div className="mt-8 p-4 bg-[#FAF7F2] rounded-2xl text-center">
          <p className="text-[11px] text-secondary/40 font-bold uppercase tracking-widest mb-1">Demo доступ</p>
          <p className="text-sm font-bold text-secondary/60">
            <span className="text-primary">admin</span> / <span className="text-primary">wax2025</span>
          </p>
        </div>

        <p className="mt-8 text-center text-[10px] text-secondary/20 uppercase tracking-[0.2em]">
          WaxButterfly Admin Panel © 2025
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;

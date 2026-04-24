
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = [
    { label: 'Перегляди (30д)', value: '1,284', icon: 'visibility', trend: '+12%', color: '#C9A227' },
    { label: 'Заявки (30д)', value: '42', icon: 'event_available', trend: '+5%', color: '#4CAF50' },
    { label: 'Статті блогу', value: '3', icon: 'article', trend: '0', color: '#2196F3' },
    { label: 'Відгуки', value: '5', icon: 'star', trend: '+1', color: '#9C27B0' },
  ];

  const quickActions = [
    { title: 'Нова стаття', icon: 'add_circle', path: '/admin/blog/new', color: 'bg-primary' },
    { title: 'Змінити ціни', icon: 'edit_square', path: '/admin/price', color: 'bg-[#1A1A1A]' },
    { title: 'Модерація відгуків', icon: 'rate_review', path: '/admin/reviews', color: 'bg-secondary' },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-display-lg text-4xl text-[#1A1A1A] font-bold mb-2">Вітаємо, Наталія! 👋</h1>
          <p className="text-secondary/60">Ось огляд активності вашого сайту за останній час.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary/30">Сьогодні</p>
            <p className="font-bold text-secondary">24 квітня 2026</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-2xl border border-primary/5 flex items-center justify-center text-primary shadow-sm">
            <span className="material-symbols-outlined">notifications</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[32px] border border-primary/5 shadow-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
              >
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-400'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary/30 mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display-lg font-bold text-[#1A1A1A]">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">bolt</span>
            Швидкі дії
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickActions.map((action, i) => (
              <Link 
                key={i} 
                to={action.path}
                className={`flex flex-col items-center justify-center p-8 rounded-3xl ${action.color} text-white hover:scale-[1.02] transition-all shadow-lg active:scale-95`}
              >
                <span className="material-symbols-outlined text-3xl mb-4">{action.icon}</span>
                <span className="font-bold text-sm text-center">{action.title}</span>
              </Link>
            ))}
          </div>

          <div className="bg-white rounded-[32px] border border-primary/5 p-8">
             <h2 className="text-xl font-bold text-secondary mb-8">Останні заявки</h2>
             <div className="space-y-4">
               {[1, 2, 3].map((_, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-2xl">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-bold">О</div>
                       <div>
                         <p className="font-bold text-secondary">Олена К.</p>
                         <p className="text-xs text-secondary/40">Сьогодні, 14:20 • Глибоке бікіні</p>
                       </div>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Нова</span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Recent Changes Log */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">history</span>
            Журнал дій
          </h2>
          <div className="bg-white rounded-[32px] border border-primary/5 p-8">
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-primary/10"></div>
              {[
                { action: 'Оновлено ціну', entity: 'Комплекс L', time: '10 хв тому' },
                { action: 'Опубліковано статтю', entity: 'Як підготуватися...', time: '2 год тому' },
                { action: 'Новий відгук', entity: 'Марина Т.', time: 'Вчора' },
                { action: 'Змінено графік', entity: 'Налаштування', time: '3 дні тому' },
              ].map((log, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-white"></div>
                  <p className="text-sm font-bold text-secondary leading-tight">{log.action}</p>
                  <p className="text-xs text-secondary/60 mb-1">{log.entity}</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-secondary/30">{log.time}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-primary/5 text-primary rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all">
              Переглянути всі
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

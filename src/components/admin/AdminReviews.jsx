import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { adminReviews } from '../../data/adminData';

const SOURCES = ['Всі', 'Google', 'Instagram', 'Ручний'];
const STATUSES = { published: { label: 'Опубліковано', color: 'bg-green-100 text-green-600' }, pending: { label: 'На модерації', color: 'bg-amber-100 text-amber-600' }, hidden: { label: 'Приховано', color: 'bg-gray-100 text-gray-400' } };

const Stars = ({ value, onChange }) => (
  <div className="flex gap-1">
    {[1,2,3,4,5].map(n => (
      <button key={n} onClick={() => onChange && onChange(n)} className={`text-2xl transition-transform hover:scale-125 ${n <= value ? 'text-primary' : 'text-gray-200'}`}>★</button>
    ))}
  </div>
);

const AdminReviews = () => {
  const [reviews, setReviews] = useState(adminReviews);
  const [filter, setFilter] = useState('Всі');
  const [selected, setSelected] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [toast, setToast] = useState(null);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '', source: 'Ручний' });

  const showToast = (msg, type = 'success') => { setToast({ msg, type }); setTimeout(() => setToast(null), 3000); };

  const filtered = filter === 'Всі' ? reviews : reviews.filter(r => r.source === filter);

  const toggleSelect = (id) => setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const toggleAll = () => setSelected(selected.length === filtered.length ? [] : filtered.map(r => r.id));

  const setStatus = (id, status) => { setReviews(p => p.map(r => r.id === id ? { ...r, status } : r)); showToast('Статус оновлено'); };
  const deleteReview = (id) => { setReviews(p => p.filter(r => r.id !== id)); showToast('Відгук видалено'); };

  const bulkAction = (status) => {
    setReviews(p => p.map(r => selected.includes(r.id) ? { ...r, status } : r));
    setSelected([]);
    showToast(`${selected.length} відгук(и) оновлено`);
  };

  const hasSpam = (text) => /https?:\/\/|www\.|t\.me\//i.test(text);

  const addReview = () => {
    if (!newReview.name.trim() || !newReview.text.trim()) { showToast('Заповніть імʼя та текст', 'warning'); return; }
    if (hasSpam(newReview.text)) { showToast('❌ Виявлено посилання — заблоковано', 'error'); return; }
    const dup = reviews.find(r => r.name.trim().toLowerCase() === newReview.name.trim().toLowerCase() && r.text.trim().toLowerCase() === newReview.text.trim().toLowerCase());
    if (dup) { showToast('⚠️ Схожий відгук вже існує', 'warning'); return; }
    setReviews(p => [{ ...newReview, id: Date.now(), date: new Date().toISOString().split('T')[0], status: 'pending' }, ...p]);
    setNewReview({ name: '', rating: 5, text: '', source: 'Ручний' });
    setShowAdd(false);
    showToast('✅ Відгук додано на модерацію');
  };

   return (
     <div className="space-y-8">
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            className={`fixed bottom-8 right-8 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-bold text-white text-sm ${toast.type === 'success' ? 'bg-green-500' : toast.type === 'warning' ? 'bg-amber-500' : 'bg-red-500'}`}>
            {toast.msg}
            <button onClick={() => setToast(null)}><span className="material-symbols-outlined text-[18px]">close</span></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="font-display-lg text-4xl text-[#1A1A1A] font-bold mb-2">Відгуки</h1>
          <p className="text-secondary/60">Модерація та управління відгуками клієнтів.</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 px-6 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-[#A67C00] transition-all">
          <span className="material-symbols-outlined">add</span>Додати відгук
        </button>
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {showAdd && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] flex items-center justify-center p-6"
            onClick={e => e.target === e.currentTarget && setShowAdd(false)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-[40px] p-10 w-full max-w-lg shadow-2xl space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl text-[#1A1A1A]">Новий відгук</h2>
                <button onClick={() => setShowAdd(false)} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary/40 hover:bg-gray-200 transition-all">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="space-y-4">
                <div><label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">Імʼя клієнта</label>
                  <input value={newReview.name} onChange={e => setNewReview(p => ({ ...p, name: e.target.value }))} className="w-full px-5 py-4 bg-[#FAF7F2] rounded-2xl outline-none" placeholder="Олена К." /></div>
                <div><label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">Рейтинг</label>
                  <Stars value={newReview.rating} onChange={r => setNewReview(p => ({ ...p, rating: r }))} /></div>
                <div><label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">Текст відгуку</label>
                  <textarea rows="4" value={newReview.text} onChange={e => setNewReview(p => ({ ...p, text: e.target.value }))} className="w-full px-5 py-4 bg-[#FAF7F2] rounded-2xl outline-none resize-none" placeholder="Відгук..." /></div>
                <div><label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">Джерело</label>
                  <select value={newReview.source} onChange={e => setNewReview(p => ({ ...p, source: e.target.value }))} className="w-full px-5 py-4 bg-[#FAF7F2] rounded-2xl outline-none font-bold">
                    {['Google', 'Instagram', 'Ручний'].map(s => <option key={s}>{s}</option>)}
                  </select></div>
              </div>
              <button onClick={addReview} className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-[#A67C00] transition-all">Додати на модерацію</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4">
        {[{ label: 'Всього', value: reviews.length, icon: 'forum' }, { label: 'Опубліковано', value: reviews.filter(r => r.status === 'published').length, icon: 'check_circle' }, { label: 'На модерації', value: reviews.filter(r => r.status === 'pending').length, icon: 'pending' }].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-primary/5 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined">{s.icon}</span></div>
            <div><p className="text-2xl font-bold text-[#1A1A1A]">{s.value}</p><p className="text-[10px] uppercase font-bold tracking-widest text-secondary/30">{s.label}</p></div>
          </div>
        ))}
      </div>

      {/* Filters + Bulk */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2 p-2 bg-white rounded-2xl border border-primary/5 shadow-sm">
          {SOURCES.map(s => <button key={s} onClick={() => setFilter(s)} className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${filter === s ? 'bg-primary text-white' : 'text-secondary/40 hover:text-primary'}`}>{s}</button>)}
        </div>
        {selected.length > 0 && (
          <div className="flex gap-3 items-center">
            <span className="text-sm font-bold text-secondary/40">Вибрано: {selected.length}</span>
            <button onClick={() => bulkAction('published')} className="px-4 py-2 bg-green-500 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-all">Опублікувати</button>
            <button onClick={() => bulkAction('hidden')} className="px-4 py-2 bg-gray-100 text-secondary/60 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all">Приховати</button>
          </div>
        )}
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {/* Select All */}
        <div className="flex items-center gap-3 px-6">
          <input type="checkbox" checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleAll} className="w-4 h-4 accent-primary cursor-pointer" />
          <span className="text-xs font-bold uppercase tracking-widest text-secondary/30">Вибрати всі</span>
        </div>

        {filtered.map(review => (
          <motion.div key={review.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className={`bg-white rounded-[24px] border border-primary/5 p-6 shadow-sm transition-all ${selected.includes(review.id) ? 'border-primary/30 bg-primary/3' : 'hover:shadow-md'}`}>
            <div className="flex items-start gap-4">
              <input type="checkbox" checked={selected.includes(review.id)} onChange={() => toggleSelect(review.id)} className="w-4 h-4 accent-primary cursor-pointer mt-1 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shrink-0">{review.name[0]}</div>
                  <span className="font-bold text-[#1A1A1A]">{review.name}</span>
                  <div className="flex gap-0.5">{[1,2,3,4,5].map(n => <span key={n} className={n <= review.rating ? 'text-primary' : 'text-gray-200'}>★</span>)}</div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${STATUSES[review.status]?.color || 'bg-gray-100 text-gray-400'}`}>{STATUSES[review.status]?.label}</span>
                  {hasSpam(review.text) && <span className="px-2 py-1 bg-red-100 text-red-500 text-[10px] font-bold rounded-full">⚠️ Спам</span>}
                  <span className="text-[10px] text-secondary/30 font-bold uppercase tracking-widest ml-auto">{review.source} · {review.date}</span>
                </div>
                <p className="text-secondary/70 leading-relaxed text-sm mb-4">{review.text}</p>
                <div className="flex gap-2 flex-wrap">
                  {review.status !== 'published' && <button onClick={() => setStatus(review.id, 'published')} className="px-4 py-2 bg-green-50 text-green-600 rounded-xl font-bold text-xs hover:bg-green-500 hover:text-white transition-all">Опублікувати</button>}
                  {review.status !== 'hidden' && <button onClick={() => setStatus(review.id, 'hidden')} className="px-4 py-2 bg-gray-50 text-secondary/40 rounded-xl font-bold text-xs hover:bg-gray-100 transition-all">Приховати</button>}
                  <button onClick={() => deleteReview(review.id)} className="px-4 py-2 bg-red-50 text-red-400 rounded-xl font-bold text-xs hover:bg-red-500 hover:text-white transition-all">Видалити</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-secondary/30">
            <span className="material-symbols-outlined text-6xl block mb-4">forum</span>
            <p className="font-bold">Відгуків не знайдено</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminReviews;

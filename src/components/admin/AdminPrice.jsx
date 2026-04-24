import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { adminServices, adminComplexes } from '../../data/adminData';

const AdminPrice = () => {
  const [services, setServices] = useState(adminServices);
  const [complexes, setComplexes] = useState(adminComplexes);
  const [activeTab, setActiveTab] = useState('zones');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [editName, setEditName] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const startEdit = (id, price, name) => { setEditingId(id); setEditValue(String(price)); setEditName(name); };

  const saveEdit = (id, isComplex = false) => {
    const newPrice = parseInt(editValue);
    if (isNaN(newPrice) || newPrice < 0) { showToast('Ціна має бути числом ≥ 0', 'warning'); return; }
    const list = isComplex ? complexes : services;
    const original = list.find(i => i.id === id);
    if (original && newPrice < original.price * 0.85) showToast('⚠️ Зниження ціни > 15%! Перевірте.', 'warning');
    if (isComplex) setComplexes(p => p.map(c => c.id === id ? { ...c, price: newPrice, name: editName } : c));
    else setServices(p => p.map(s => s.id === id ? { ...s, price: newPrice, name: editName } : s));
    setEditingId(null);
    showToast('✅ Збережено!');
  };

  const toggleActive = (id, isComplex = false) => {
    if (isComplex) setComplexes(p => p.map(c => c.id === id ? { ...c, active: !c.active } : c));
    else setServices(p => p.map(s => s.id === id ? { ...s, active: !s.active } : s));
    showToast('Статус оновлено');
  };

  const Toggle = ({ checked, onChange }) => (
    <button onClick={onChange} className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${checked ? 'bg-primary' : 'bg-gray-200'}`}>
      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${checked ? 'left-7' : 'left-1'}`} />
    </button>
  );

  return (
    <div className="space-y-10">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            className={`fixed bottom-8 right-8 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-bold text-white text-sm ${toast.type === 'success' ? 'bg-green-500' : 'bg-amber-500'}`}>
            <span className="material-symbols-outlined text-[20px]">{toast.type === 'success' ? 'check_circle' : 'warning'}</span>
            {toast.message}
            <button onClick={() => setToast(null)}><span className="material-symbols-outlined text-[18px] opacity-70">close</span></button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="font-display-lg text-4xl text-[#1A1A1A] font-bold mb-2">Управління прайсом</h1>
          <p className="text-secondary/60">Редагуйте ціни та активність послуг.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-4 bg-white border border-primary/10 text-secondary/60 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">
          <span className="material-symbols-outlined">download</span>
          Експорт CSV
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-2 bg-white rounded-2xl border border-primary/5 w-fit shadow-sm">
        {[{ key: 'zones', label: 'Окремі зони' }, { key: 'complexes', label: 'Комплекси' }].map(tab => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === tab.key ? 'bg-primary text-white shadow-lg' : 'text-secondary/40 hover:text-primary'}`}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'zones' && (
        <div className="bg-white rounded-[40px] border border-primary/5 overflow-hidden shadow-sm">
          <div className="px-8 py-5 border-b border-primary/5">
            <p className="text-sm font-bold text-secondary/40 uppercase tracking-widest">{services.filter(s => s.active).length} / {services.length} активних зон</p>
          </div>
          <div className="divide-y divide-primary/5">
            {services.map(s => (
              <div key={s.id} className={`px-8 py-5 flex items-center gap-4 group transition-colors ${!s.active ? 'opacity-40' : 'hover:bg-[#FAF7F2]/50'}`}>
                <Toggle checked={s.active} onChange={() => toggleActive(s.id)} />
                {editingId === s.id ? (
                  <div className="flex-1 flex flex-wrap items-center gap-3">
                    <input value={editName} onChange={e => setEditName(e.target.value)} className="flex-1 min-w-[160px] px-4 py-2 bg-[#FAF7F2] rounded-xl outline-none border border-primary/20 font-bold" />
                    <input type="number" value={editValue} onChange={e => setEditValue(e.target.value)} onKeyDown={e => e.key === 'Enter' && saveEdit(s.id)} className="w-24 px-4 py-2 bg-[#FAF7F2] rounded-xl outline-none border border-primary/20 font-bold text-right" />
                    <span className="font-bold text-secondary/40">₴</span>
                    <button onClick={() => saveEdit(s.id)} className="w-9 h-9 rounded-xl bg-green-500 text-white flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">check</span></button>
                    <button onClick={() => setEditingId(null)} className="w-9 h-9 rounded-xl bg-gray-100 text-secondary/40 flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">close</span></button>
                  </div>
                ) : (
                  <>
                    <span className="flex-1 font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</span>
                    <span className="text-xl font-bold text-primary">{s.price} ₴</span>
                    <button onClick={() => startEdit(s.id, s.price, s.name)} className="w-9 h-9 rounded-xl bg-primary/10 text-primary items-center justify-center hover:bg-primary hover:text-white transition-all hidden group-hover:flex">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'complexes' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {complexes.map(c => (
            <div key={c.id} className={`bg-white rounded-[32px] border border-primary/10 p-8 shadow-sm transition-all ${!c.active ? 'opacity-40' : 'hover:shadow-xl hover:-translate-y-1'}`}>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">{c.tag}</span>
                <Toggle checked={c.active} onChange={() => toggleActive(c.id, true)} />
              </div>
              {editingId === `c-${c.id}` ? (
                <div className="space-y-4">
                  <input value={editName} onChange={e => setEditName(e.target.value)} className="w-full px-4 py-2 bg-[#FAF7F2] rounded-xl outline-none border border-primary/20 font-bold" />
                  <div className="flex gap-2"><input type="number" value={editValue} onChange={e => setEditValue(e.target.value)} className="flex-1 px-4 py-2 bg-[#FAF7F2] rounded-xl outline-none border border-primary/20 font-bold" /><span className="self-center font-bold text-secondary/40">₴</span></div>
                  <div className="flex gap-2">
                    <button onClick={() => saveEdit(c.id, true)} className="flex-1 py-3 bg-green-500 text-white rounded-xl font-bold text-sm">Зберегти</button>
                    <button onClick={() => setEditingId(null)} className="px-4 py-3 bg-gray-100 text-secondary/40 rounded-xl font-bold text-sm">Скасувати</button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-2xl text-[#1A1A1A] mb-3">{c.name}</h3>
                  <ul className="space-y-1 mb-6 text-sm text-secondary/60">{c.items.map((item, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>{item}</li>)}</ul>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-primary">{c.price} ₴</span>
                    <button onClick={() => startEdit(`c-${c.id}`, c.price, c.name)} className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined text-[18px]">edit</span>Редагувати
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPrice;

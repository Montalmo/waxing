import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

const Toggle = ({ checked, onChange }) => (
  <button onClick={onChange} className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${checked ? 'bg-primary' : 'bg-gray-200'}`}>
    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${checked ? 'left-7' : 'left-1'}`} />
  </button>
);

const Section = ({ title, icon, children, onSave, saveName }) => (
  <div className="bg-white rounded-[32px] border border-primary/5 p-8 lg:p-10 shadow-sm space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-xl text-[#1A1A1A] flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">{icon}</span>{title}
      </h2>
      {onSave && (
        <button onClick={() => onSave(saveName)} className="px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-[#A67C00] transition-all">
          Зберегти
        </button>
      )}
    </div>
    {children}
  </div>
);

const Field = ({ label, value, onChange, type = 'text', placeholder }) => (
  <div>
    <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">{label}</label>
    <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className="w-full px-5 py-4 bg-[#FAF7F2] rounded-2xl outline-none border border-transparent focus:border-primary/20 focus:bg-white transition-all font-medium" />
  </div>
);

const AdminSettings = () => {
  const [toast, setToast] = useState(null);
  const [contacts, setContacts] = useState({
    phone: '+38 (099) 123-45-67',
    instagram: 'https://instagram.com/waxbutterfly',
    telegram: 'https://t.me/waxbutterfly',
    viber: 'https://viber.com/waxbutterfly',
    address: 'Харків, вул. Сумська 1',
    mapLat: '49.9935',
    mapLng: '36.2304',
  });
  const [schedule, setSchedule] = useState({
    Пн: { open: true, from: '10:00', to: '20:00' },
    Вт: { open: true, from: '10:00', to: '20:00' },
    Ср: { open: true, from: '10:00', to: '20:00' },
    Чт: { open: true, from: '10:00', to: '20:00' },
    Пт: { open: true, from: '10:00', to: '20:00' },
    Сб: { open: true, from: '10:00', to: '18:00' },
    Нд: { open: false, from: '10:00', to: '18:00' },
  });
  const [integrations, setIntegrations] = useState({
    tgBotToken: '',
    gaId: '',
    metaPixelId: '',
  });

  const showToast = (msg, type = 'success') => { setToast({ msg, type }); setTimeout(() => setToast(null), 3000); };

  const save = (section) => showToast(`✅ Розділ "${section}" збережено!`);

  const handleExportAll = () => {
    const data = { contacts, schedule, integrations, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'waxbutterfly-backup.json'; a.click();
    showToast('📥 Бекап завантажено!');
  };



  return (
    <div className="space-y-8">
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            className={`fixed bottom-8 right-8 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-bold text-white text-sm ${toast.type === 'success' ? 'bg-green-500' : 'bg-amber-500'}`}>
            {toast.msg}
            <button onClick={() => setToast(null)}><span className="material-symbols-outlined text-[18px]">close</span></button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="font-display-lg text-4xl text-[#1A1A1A] font-bold mb-2">Налаштування сайту</h1>
          <p className="text-secondary/60">Контакти, графік роботи, інтеграції та резервне копіювання.</p>
        </div>
        <button onClick={handleExportAll} className="flex items-center gap-2 px-6 py-4 bg-[#1A1A1A] text-white rounded-2xl font-bold hover:bg-[#333] transition-all">
          <span className="material-symbols-outlined">download</span>Export All (JSON)
        </button>
      </div>

      {/* Contacts */}
      <Section title="Контакти та соцмережі" icon="contact_phone" onSave={save} saveName="Контакти">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Телефон" value={contacts.phone} onChange={v => setContacts(p => ({...p, phone: v}))} placeholder="+38 (0XX) XXX-XX-XX" />
          <Field label="Адреса" value={contacts.address} onChange={v => setContacts(p => ({...p, address: v}))} />
          <Field label="Instagram" value={contacts.instagram} onChange={v => setContacts(p => ({...p, instagram: v}))} />
          <Field label="Telegram" value={contacts.telegram} onChange={v => setContacts(p => ({...p, telegram: v}))} />
          <Field label="Viber" value={contacts.viber} onChange={v => setContacts(p => ({...p, viber: v}))} />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Field label="Широта (Lat)" value={contacts.mapLat} onChange={v => setContacts(p => ({...p, mapLat: v}))} placeholder="49.9935" />
          <Field label="Довгота (Lng)" value={contacts.mapLng} onChange={v => setContacts(p => ({...p, mapLng: v}))} placeholder="36.2304" />
        </div>
        <button onClick={() => save('Контакти')} className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-[#A67C00] transition-all">Зберегти контакти</button>
      </Section>

      {/* Schedule */}
      <Section title="Графік роботи" icon="calendar_month">
        <div className="space-y-3">
          {DAYS.map(day => (
            <div key={day} className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-2xl">
              <Toggle checked={schedule[day].open} onChange={() => setSchedule(p => ({...p, [day]: {...p[day], open: !p[day].open}}))} />
              <span className="w-8 font-bold text-secondary">{day}</span>
              {schedule[day].open ? (
                <div className="flex items-center gap-3 flex-1">
                  <input type="time" value={schedule[day].from} onChange={e => setSchedule(p => ({...p, [day]: {...p[day], from: e.target.value}}))}
                    className="px-4 py-2 bg-white border border-primary/10 rounded-xl outline-none font-bold text-sm" />
                  <span className="text-secondary/40 font-bold">—</span>
                  <input type="time" value={schedule[day].to} onChange={e => setSchedule(p => ({...p, [day]: {...p[day], to: e.target.value}}))}
                    className="px-4 py-2 bg-white border border-primary/10 rounded-xl outline-none font-bold text-sm" />
                </div>
              ) : (
                <span className="text-secondary/30 font-bold text-sm">Вихідний</span>
              )}
            </div>
          ))}
        </div>
        <button onClick={() => save('Графік')} className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-[#A67C00] transition-all">Зберегти графік</button>
      </Section>

      {/* Integrations */}
      <Section title="Інтеграції та токени" icon="integration_instructions">
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-amber-700 text-sm font-bold">
          <span className="material-symbols-outlined">lock</span>
          Зберігайте токени лише у захищеному середовищі. Не публікуйте їх у відкритому доступі.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Telegram Bot Token" value={integrations.tgBotToken} onChange={v => setIntegrations(p => ({...p, tgBotToken: v}))} type="password" placeholder="1234567890:AAFxxxxxxx" />
          <Field label="Google Analytics ID" value={integrations.gaId} onChange={v => setIntegrations(p => ({...p, gaId: v}))} placeholder="G-XXXXXXXXXX" />
          <Field label="Meta Pixel ID" value={integrations.metaPixelId} onChange={v => setIntegrations(p => ({...p, metaPixelId: v}))} placeholder="XXXXXXXXXXXXXXX" />
        </div>
        <button onClick={() => save('Інтеграції')} className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-[#A67C00] transition-all">Зберегти токени</button>
      </Section>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-100 rounded-[32px] p-8">
        <h2 className="font-bold text-lg text-red-600 flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined">warning</span>
          Небезпечна зона
        </h2>
        <p className="text-sm text-red-500 mb-6">Ці дії незворотні. Виконуйте тільки якщо впевнені.</p>
        <div className="flex gap-4 flex-wrap">
          <button onClick={handleExportAll} className="flex items-center gap-2 px-6 py-3 bg-white border border-red-200 text-red-500 rounded-2xl font-bold text-sm hover:bg-red-500 hover:text-white transition-all">
            <span className="material-symbols-outlined">download</span>Зробити бекап
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-red-200 text-red-500 rounded-2xl font-bold text-sm hover:bg-red-500 hover:text-white transition-all">
            <span className="material-symbols-outlined">delete_forever</span>Очистити кеш
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

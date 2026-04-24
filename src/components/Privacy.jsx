import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactEmail = "waxbutterfly@studio.com";
  const contactPhone = "+38 (063) 123-45-67";
  const contactAddress = "м. Харків, проспект Людвіга Свободи, 31 (Олексіївка)";

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-8 py-20 md:py-32">
        <nav className="flex items-center gap-2 mb-8 text-sm font-medium text-secondary/50">
          <Link to="/" className="hover:text-primary transition-colors group">
            <span>Головна</span>
          </Link>
          <span className="material-symbols-outlined text-[16px] opacity-30 select-none">chevron_right</span>
          <span className="text-primary/80">Політика конфіденційності</span>
        </nav>

        <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-6">
          ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ОБРОБКИ ПЕРСОНАЛЬНИХ ДАНИХ
        </h1>
        <p className="text-slate-400 mb-12 font-sans text-sm uppercase tracking-widest">
          Останнє оновлення: 23.04.2026
        </p>

        <div className="prose prose-slate max-w-none space-y-12 text-secondary font-body-md leading-relaxed">
          <p>
            Ця Політика визначає порядок збору, використання, зберігання та захисту персональних даних користувачів сайту WaxButterfly (далі – «Сайт»), який належить майстру з воскової депіляції Наталії (далі – «Оператор» або «Ми»).
            Використовуючи Сайт та залишаючи заявки на запис, ви погоджуєтесь з умовами цієї Політики.
          </p>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">1. Загальні положення</h2>
            <div className="space-y-4">
              <p>1.1. Ми поважаємо вашу приватність та дбаємо про безпеку ваших персональних даних.</p>
              <p>1.2. Обробка даних здійснюється відповідно до Закону України «Про захист персональних даних» та інших нормативно-правових актів України.</p>
              <p>1.3. Ця Політика діє для всіх сервісів Сайту, включаючи форму онлайн-запису, месенджери та блог.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">2. Які персональні дані ми збираємо</h2>
            <p>Ми збираємо лише ту інформацію, яка необхідна для надання послуг та комунікації з вами:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Ім'я та прізвище (за бажанням)</li>
              <li>Номер телефону</li>
              <li>Адреса електронної пошти (якщо вказано)</li>
              <li>Інформація про обрану послугу, бажану дату та час візиту</li>
              <li>Технічні дані: IP-адреса, тип браузера, cookie-файли (для аналітики та покращення роботи Сайту)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">3. Мета обробки даних</h2>
            <p>Ваші дані використовуються виключно для:</p>
            <div className="space-y-3 mt-4">
              <p>✅ Обробки заявок на запис до студії WaxButterfly</p>
              <p>✅ Підтвердження візиту та нагадувань про запис</p>
              <p>✅ Зворотного зв'язку щодо послуг або акцій (лише за вашою згодою)</p>
              <p>✅ Виконання вимог законодавства України</p>
              <p>✅ Покращення роботи Сайту та аналітики відвідуваності</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">4. Правові підстави обробки</h2>
            <p>Обробка персональних даних здійснюється на підставі:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Вашої добровільної згоди (натискання кнопки «Надіслати заявку» або «Записатися»)</li>
              <li>Необхідності для укладення та виконання договору про надання послуг</li>
              <li>Вимог чинного законодавства України</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">5. Зберігання та захист даних</h2>
            <div className="space-y-4">
              <p>5.1. Дані зберігаються на захищених серверах/у CRM-системі/в месенджерах протягом строку, необхідного для надання послуг або виконання юридичних вимог.</p>
              <p>5.2. Ми вживаємо організаційних та технічних заходів для захисту даних від несанкціонованого доступу, втрати або зміни.</p>
              <p>5.3. Доступ до даних мають лише уповноважені особи (майстер Наталія та технічні спеціалісти, залучені до підтримки Сайту).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">6. Права користувача</h2>
            <p>Відповідно до законодавства України, ви маєте право:</p>
            <div className="space-y-3 mt-4">
              <p>📩 Отримати інформацію про свої персональні дані, які ми обробляємо</p>
              <p>✏️ Вимагати виправлення неточної інформації</p>
              <p>🗑️ Вимагати видалення ваших даних (якщо немає юридичних підстав для їх зберігання)</p>
              <p>🔄 Відкликати згоду на обробку даних у будь-який момент (написавши на пошту або в месенджер)</p>
              <p>⚖️ Звернутися зі скаргою до Уповноваженого Верховної Ради України з прав людини</p>
            </div>
            <p className="mt-6">
              Для реалізації своїх прав напишіть нам: <a href={`mailto:${contactEmail}`} className="text-primary font-bold">{contactEmail}</a> або в Instagram Direct <a href="#" className="text-primary font-bold">@waxbutterfly</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">7. Використання cookie-файлів</h2>
            <p>Сайт використовує cookie-файли для:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Аналізу трафіку (Google Analytics)</li>
              <li>Запам'ятовування ваших налаштувань</li>
              <li>Покращення швидкості та зручності роботи</li>
            </ul>
            <p className="mt-4 italic">Ви можете відключити cookie у налаштуваннях браузера, але це може обмежити функціонал Сайту.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">8. Передача даних третім особам</h2>
            <p>Ми не продаємо, не обмінюємо та не передаємо ваші персональні дані третім особам у комерційних цілях.</p>
            <p className="mt-4">Дані можуть бути передані лише:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>📦 Сервісам, необхідним для роботи Сайту (хостинг, аналітика, CRM)</li>
              <li>⚖️ Державним органам у випадках, передбачених законодавством України</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">9. Контактна інформація</h2>
            <p>Якщо у вас виникли запитання щодо цієї Політики або обробки даних, звертайтесь:</p>
            <ul className="mt-4 space-y-2">
              <li>📍 <strong>Адреса:</strong> {contactAddress}</li>
              <li>📱 <strong>Instagram:</strong> @waxbutterfly</li>
              <li>📧 <strong>Email:</strong> {contactEmail}</li>
              <li>📞 <strong>Телефон:</strong> {contactPhone}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">10. Зміни в Політиці</h2>
            <p>
              Ми залишаємо за собою право оновлювати цю Політику. Актуальна версія завжди доступна за посиланням <Link to="/privacy" className="text-primary font-bold">waxbutterfly.com/privacy</Link>. Про суттєві зміни ми повідомимо через Сайт або месенджери.
            </p>
          </section>

          <div className="pt-12 border-t border-slate-100">
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              <span className="material-symbols-outlined">arrow_back</span>
              Повернутися на головну
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

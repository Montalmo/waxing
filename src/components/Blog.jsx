import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';

const Blog = () => {
  const articles = [
    {
      category: 'Догляд',
      title: 'Як підготувати шкіру до процедури?',
      text: 'Дізнайтеся 5 простих кроків для ідеального результату депіляції...',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbxipCCZ51gWtjob38M_3YFPN-kT4ArvOswtVTczvPt1WLdeWIS2LN37LIQS84jqQ8VmUYgX02F_jAxzHA8oJXY1Lh5JMHrpgyzYuFChBXsOrCeRVTUNjbvthMFRg3DfH8R1HN2mUBhz83or3KoLqjgDFCtT9uZlxwStnE5tYmZHQiMYZDSV_SYU5FOwKC3pJcqnb3PxFqybsISm6kreGlZpKAx5mLtHxY4_pkMCv1MNL96MLUpVPQX7HddcAKzIM6HbUc8Oiqk_XN'
    },
    {
      category: 'Матеріали',
      title: 'Чому ми обираємо ItalWax?',
      text: 'Переваги італійського воску для чутливої шкіри та мінімізація болю.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz9TfvG_caYmINRQFfzVJAER73UamsawiIJOvgtfpEe7htamSNzd3KblQ0nGp2a_p_KPx1H_LP991Xg_FrG7mn8FUaCrVBoGB0JBa6Fy3CpLj1Hq9GUJTWgsfdIUgL4xyae42EXkqOb_67uIib0xH4m5XLecsyr2RzdKHlYKpHAHSdoW7WGXen9H4z87bPnUQD56vizOKES7w8KzomztDEd6oimEX1wVnEFfiMi3F3hX1PTHWc9xQpWtXo_t84RO6r8YvKheW0TGpT'
    },
    {
      category: 'Поради',
      title: 'Догляд після: як зберегти ефект',
      text: 'Поради від майстра Наталії по догляду вдома для довготривалої гладкості.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi768B4JXSGlbmI2i9J1lYCRZhbaUxnMu76WHUsSvgBSBznuw6qPn5SUHDsPAadMq4mcsxPjF9dEryu7KiK_393RsxNu5ry1zkLqBTNY8pGFS5yYTRs9zFzvglRCi4GSYIfWwkW55XhU1L3zJEciGbU3Lzj6t4y6aWLfwqGvxBqi7FAeFg0UNwK8wgHMLlHNHKEdGBlcK86KEDgouzBR2v-0R4V_E--E_Z3iCnMMZMJxH1zLpR-sCKuiC2g-uzOuvSDw-8zgHdGvH1'
    }
  ];

  return (
    <section className="py-xl bg-white" id="tips">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading align="left" className="mb-16">Блог</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={article.img}
                  alt={article.title}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 block">{article.category}</span>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-secondary text-body-md line-clamp-2">{article.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-4 md:px-8 py-4 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all group"
          >
            Усі статті
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;

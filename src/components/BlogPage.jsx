import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const articles = blogPosts.map((post, index) => ({
  id: index + 1,
  slug: post.slug,
  category: post.category,
  title: post.title,
  excerpt: post.excerpt,
  img: post.featuredImage.src,
  date: new Date(post.publishedAt).toLocaleDateString('uk-UA', { day: 'numeric', month: 'short', year: 'numeric' }),
  readingTime: `${post.readingTime} хв`,
  views: post.views,
  tags: post.tags
}));

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('Усі');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Усі', 'Підготовка', 'Догляд після', 'Міфи та факти', 'Ціни та акції', 'Новини студії'];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = activeCategory === 'Усі' || article.category === activeCategory;
      return matchesCategory;
    });
  }, [activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-10 bg-gradient-to-b from-[#FAF7F2] to-[#E8D5C4]/30 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 mb-8 text-sm font-medium text-secondary/50">
            <Link to="/" className="hover:text-primary transition-colors">Головна</Link>
            <span className="material-symbols-outlined text-[16px] opacity-30 select-none">chevron_right</span>
            <span className="text-primary/80">Блог</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-primary mb-6 max-w-3xl"
          >
            Блог: Корисні поради про депіляцію
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-lg md:text-xl max-w-2xl mb-0 leading-relaxed"
          >
            Статті, які допоможуть підготуватися, доглядати та отримувати максимум від процедур
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-16">
        {/* Categories */}
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <span className="text-sm font-bold uppercase tracking-widest text-secondary/40 whitespace-nowrap">Категорії:</span>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${activeCategory === cat
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container-low text-secondary hover:bg-surface-container-high'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
              >
                <Link to={`/blog/${article.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="font-headline-md text-xl md:text-2xl mb-4 text-primary group-hover:text-accent-pink transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-secondary text-sm md:text-base mb-6 line-clamp-2 opacity-80 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50 text-[10px] text-secondary/60 font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          {article.readingTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        {article.views}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-32">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl text-slate-200">search_off</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Нічого не знайдено</h3>
            <p className="text-secondary mb-8">Спробуйте обрати іншу категорію</p>
            <button
              onClick={() => { setActiveCategory('Усі'); }}
              className="px-4 md:px-8 py-3 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 transition-all shadow-lg"
            >
              Скинути всі фільтри
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';

const AdminBlog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleDelete = (slug) => {
    if (window.confirm('Ви впевнені, що хочете видалити цю статтю?')) {
      setPosts(posts.filter(p => p.slug !== slug));
    }
  };

  const handleCreate = () => {
    setCurrentPost({
      title: '',
      category: 'Підготовка',
      excerpt: '',
      content: '',
      status: 'Чернетка',
      tags: [],
      publishedAt: new Date().toISOString(),
      views: 0,
      author: { name: 'Наталія', role: 'Майстер воскової депіляції', avatar: 'src/assets/hero-image.png' },
      featuredImage: { src: '', alt: '' },
      seo: { title: '', description: '', keywords: '' }
    });
    setIsEditing(true);
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="font-display-lg text-4xl text-[#1A1A1A] font-bold mb-2">Управління блогом</h1>
          <p className="text-secondary/60">Створюйте нові статті та редагуйте існуючі.</p>
        </div>
        <button 
          onClick={handleCreate}
          className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-[#A67C00] transition-all"
        >
          <span className="material-symbols-outlined">add</span>
          <span>Нова стаття</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!isEditing ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-[40px] border border-primary/5 overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-primary/5">
                    <th className="px-8 py-6 text-[10px] uppercase font-bold tracking-[0.2em] text-secondary/30">Стаття</th>
                    <th className="px-8 py-6 text-[10px] uppercase font-bold tracking-[0.2em] text-secondary/30">Категорія</th>
                    <th className="px-8 py-6 text-[10px] uppercase font-bold tracking-[0.2em] text-secondary/30">Статус</th>
                    <th className="px-8 py-6 text-[10px] uppercase font-bold tracking-[0.2em] text-secondary/30">Перегляди</th>
                    <th className="px-8 py-6 text-[10px] uppercase font-bold tracking-[0.2em] text-secondary/30">Дії</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {posts.map((post) => (
                    <tr key={post.slug} className="group hover:bg-[#FAF7F2]/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-white">
                            <img src={post.featuredImage.src} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-bold text-secondary group-hover:text-primary transition-colors line-clamp-1">{post.title}</p>
                            <p className="text-xs text-secondary/30 font-bold uppercase tracking-widest">{new Date(post.publishedAt).toLocaleDateString('uk-UA')}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-[#E8D5C4] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-green-500"></div>
                           <span className="text-xs font-bold text-secondary">Опубліковано</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-bold text-secondary">{post.views}</td>
                      <td className="px-8 py-6">
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                          <button 
                            onClick={() => handleEdit(post)}
                            className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                            title="Редагувати"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button 
                            onClick={() => handleDelete(post.slug)}
                            className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all" 
                            title="Видалити"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-[40px] border border-primary/5 p-8 lg:p-12 shadow-sm"
          >
            <div className="flex items-center justify-between mb-12">
               <button 
                 onClick={() => setIsEditing(false)}
                 className="flex items-center gap-2 text-secondary/40 hover:text-primary font-bold transition-all"
               >
                 <span className="material-symbols-outlined">arrow_back</span>
                 Назад до списку
               </button>
               <div className="flex gap-4">
                 <button className="px-6 py-3 bg-white border border-primary/10 text-secondary/60 rounded-xl font-bold hover:bg-[#FAF7F2] transition-all">
                   Чернетка
                 </button>
                 <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-[#A67C00] transition-all">
                   Опублікувати
                 </button>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-8">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-3 ml-1">Заголовок статті (H1)</label>
                    <input 
                      type="text" 
                      defaultValue={currentPost?.title}
                      className="w-full px-6 py-4 bg-[#FAF7F2] border border-transparent rounded-2xl focus:border-primary/30 focus:bg-white outline-none transition-all text-xl font-bold"
                      placeholder="Наприклад: 5 порад для ідеальної шкіри"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-3 ml-1">Зміст (Rich Text)</label>
                    <textarea 
                      defaultValue={currentPost?.content}
                      rows="15"
                      className="w-full px-6 py-6 bg-[#FAF7F2] border border-transparent rounded-2xl focus:border-primary/30 focus:bg-white outline-none transition-all font-body-md leading-relaxed"
                      placeholder="Почніть писати тут..."
                    />
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="bg-[#FAF7F2] rounded-[32px] p-8 border border-white">
                    <h3 className="font-bold text-secondary mb-6 flex items-center gap-2">
                       <span className="material-symbols-outlined text-primary text-[20px]">settings</span>
                       Параметри
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">Категорія</label>
                        <select className="w-full px-4 py-3 bg-white border border-primary/5 rounded-xl outline-none font-bold text-sm">
                           <option>Підготовка</option>
                           <option>Догляд після</option>
                           <option>Міфи та факти</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">Обкладинка (URL)</label>
                        <input type="text" className="w-full px-4 py-3 bg-white border border-primary/5 rounded-xl outline-none text-sm" placeholder="https://unsplash.com/..." />
                        <div className="mt-4 aspect-video rounded-xl bg-white border border-dashed border-primary/20 flex flex-col items-center justify-center text-secondary/30">
                           <span className="material-symbols-outlined text-3xl mb-2">image</span>
                           <span className="text-[10px] uppercase font-bold tracking-widest">Прев'ю відсутнє</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] rounded-[32px] p-8 border border-white">
                    <h3 className="font-bold text-secondary mb-6 flex items-center gap-2">
                       <span className="material-symbols-outlined text-primary text-[20px]">search</span>
                       SEO
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">Meta Title</label>
                        <input type="text" className="w-full px-4 py-3 bg-white border border-primary/5 rounded-xl outline-none text-sm" placeholder="Заголовок для Google" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/30 mb-2">Meta Description</label>
                        <textarea rows="3" className="w-full px-4 py-3 bg-white border border-primary/5 rounded-xl outline-none text-sm resize-none" placeholder="Короткий опис..." />
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminBlog;

import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  // Get latest 3 articles sorted by date
  const latestArticles = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <section className="py-12 xs:py-xl bg-white" id="tips">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading align="center" className="mb-10 xs:mb-16">Блог</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <Link 
              key={article.slug} 
              to={`/blog/${article.slug}`}
              className="group cursor-pointer flex flex-col h-full"
            >
              <article className="h-full flex flex-col">
                <div className="aspect-video overflow-hidden rounded-xl mb-4 xs:mb-6">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={article.featuredImage.src}
                    alt={article.featuredImage.alt || article.title}
                  />
                </div>
                <span className="text-[10px] xs:text-xs font-bold uppercase tracking-widest text-secondary mb-2 xs:mb-3 block">
                  {article.category}
                </span>
                <h3 className="text-lg xs:text-xl md:text-headline-md font-bold mb-3 xs:mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-secondary text-sm xs:text-base line-clamp-2 opacity-80 mb-6">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary">
                  <span>Читати далі</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="mt-10 xs:mt-16 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 xs:px-8 py-3.5 xs:py-4 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all group text-sm xs:text-base"
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


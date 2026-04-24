import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isCTAClosed, setIsCTAClosed] = useState(() => {
    const closedTime = localStorage.getItem('cta_closed_time');
    if (closedTime) {
      const now = new Date().getTime();
      return now - parseInt(closedTime) < 24 * 60 * 60 * 1000;
    }
    return false;
  });

  const post = blogPosts.find(p => p.slug === slug);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }
    window.scrollTo(0, 0);

    // Update SEO
    if (post.seo) {
      document.title = post.seo.title;
      
      // Update/Create meta tags
      const updateMeta = (name, content) => {
        let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          if (name.startsWith('og:')) meta.setAttribute('property', name);
          else meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      updateMeta('description', post.seo.description);
      if (post.seo.keywords) updateMeta('keywords', post.seo.keywords);
      if (post.seo.robots) updateMeta('robots', post.seo.robots);
      
      // OG Tags
      updateMeta('og:title', post.seo.title);
      updateMeta('og:description', post.seo.description);
      updateMeta('og:image', post.featuredImage.src);
      updateMeta('og:url', window.location.href);
      updateMeta('og:type', 'article');
      
      // Twitter
      updateMeta('twitter:card', 'summary_large_image');
      
      // Canonical
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://waxbutterfly.com.ua/blog/${post.slug}`);
    }

    // Inject Schema.org JSON-LD
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-ld-json';
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.seo.description,
      "image": post.featuredImage.src,
      "author": {
        "@type": "Person",
        "name": post.author.name,
        "jobTitle": post.author.role,
        "url": `https://waxbutterfly.com.ua/#pro-majstra`
      },
      "publisher": {
        "@type": "LocalBusiness",
        "name": "WaxButterfly",
        "logo": { "@type": "ImageObject", "url": "https://waxbutterfly.com.ua/logo.webp" }
      },
      "datePublished": post.publishedAt,
      "dateModified": post.publishedAt,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://waxbutterfly.com.ua/blog/${post.slug}`
      },
      "articleSection": post.category,
      "timeRequired": `PT${post.readingTime}M`
    };
    schemaScript.text = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    // Analytics: article_view
    console.log('Analytics Event: article_view', { slug: post.slug });

    // Handle Anchor IDs for headers
    const contentElement = document.querySelector('.prose-custom');
    if (contentElement) {
      const headers = contentElement.querySelectorAll('h2');
      headers.forEach((h, index) => {
        const id = `section-${index + 1}`;
        h.id = id;
        h.classList.add('group', 'relative');
        
        // Add anchor icon
        const anchor = document.createElement('span');
        anchor.className = 'material-symbols-outlined absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 cursor-pointer text-xl transition-all';
        anchor.innerText = 'link';
        anchor.onclick = () => {
          window.location.hash = id;
          navigator.clipboard.writeText(window.location.href);
        };
        h.prepend(anchor);
      });
    }

    // Scroll listener for sticky CTA
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrolled / height) * 100;
      
      if (percentage > 60 && !isCTAClosed) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const existingScript = document.getElementById('schema-ld-json');
      if (existingScript) existingScript.remove();
    };
  }, [slug, post, navigate, isCTAClosed]);

  const relatedPostsData = post ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug)) : [];

  if (!post) return null;

  const closeCTA = () => {
    setShowStickyCTA(false);
    setIsCTAClosed(true);
    localStorage.setItem('cta_closed_time', new Date().getTime().toString());
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="bg-[#FAF7F2]/30 min-h-screen font-body-md">
      <Navbar />
      
      {/* Reading Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#C9A227] origin-left z-[101]"
        style={{ scaleX }}
      />

      <main className="pt-32 pb-20">
        <article className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Hero Section */}
          <div className="max-w-[800px] mx-auto mb-12">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-8 text-[14px] font-medium text-secondary/40">
              <Link to="/" className="hover:text-primary transition-colors">Головна</Link>
              <span className="opacity-30">/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Блог</Link>
              <span className="opacity-30">/</span>
              <Link to={`/blog?category=${post.category}`} className="hover:text-primary transition-colors">{post.category}</Link>
              <span className="opacity-30">/</span>
              <span className="text-secondary/60 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-block px-4 py-1 bg-[#E8D5C4] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest rounded-full">
                  🏷️ {post.category}
                </span>
              </div>
              
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight font-semibold">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-[14px] text-secondary/60">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 border border-white shadow-sm">
                    <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1A1A1A] leading-tight">{post.author.name}</span>
                    <span className="text-[10px] uppercase tracking-wider">{post.author.role}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span>{post.readingTime} хв читання</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                  <span>{post.views} перегляди</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-[1000px] mx-auto w-full aspect-[21/9] max-h-[600px] rounded-[32px] overflow-hidden mb-16 shadow-2xl border border-white">
            <img 
              src={post.featuredImage.src} 
              alt={post.featuredImage.alt} 
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
            />
          </div>

          {/* Content Body */}
          <div className="max-w-[720px] mx-auto">
            <div 
              className="prose-custom text-[#2D2D2D] text-[18px] leading-[1.8] mb-20"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Internal Navigation Grid (2x2) */}
            <div className="grid grid-cols-2 gap-4 mb-16">
              {[
                { title: 'Наші послуги', icon: 'auto_awesome', link: '/#services', desc: 'Ціни та опис' },
                { title: 'Відгуки', icon: 'forum', link: '/#reviews', desc: 'Що кажуть клієнти' },
                { title: 'Наступна стаття', icon: 'article', link: '/blog', desc: 'Читайте більше' },
                { title: 'Питання та відповіді', icon: 'help', link: '/#faq', desc: 'FAQ' }
              ].map((item, i) => (
                <Link key={i} to={item.link} className="p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <span className="material-symbols-outlined text-primary mb-3 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h4 className="font-bold text-primary text-sm mb-1">{item.title}</h4>
                  <p className="text-[11px] text-secondary/60 uppercase tracking-widest font-bold">{item.desc}</p>
                </Link>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 pt-8 border-t border-[#E8D5C4]/40">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  to={`/blog?tag=${tag}`}
                  onClick={() => console.log('Analytics Event: tag_click', { tag, slug: post.slug })}
                  className="px-4 py-2 bg-white text-secondary/60 text-[13px] font-bold uppercase tracking-widest rounded-lg border border-slate-100 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Sharing */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-y border-[#E8D5C4]/40 mb-16">
              <span className="font-bold text-secondary/40 uppercase tracking-widest text-[10px]">Поділитися статтею:</span>
              <div className="flex gap-4">
                {[
                  { id: 'telegram', icon: 'send', color: '#229ED9', label: 'Telegram' },
                  { id: 'viber', icon: 'chat', color: '#7360F2', label: 'Viber' },
                  { id: 'facebook', icon: 'facebook', color: '#1877F2', label: 'Facebook' },
                  { id: 'share', icon: 'link', color: '#C9A227', label: 'Копіювати' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-lg hover:scale-110 transition-all group border border-slate-50"
                    onClick={() => {
                      console.log('Analytics Event: share_click', { platform: item.id, slug: post.slug });
                      if (item.id === 'share') {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Посилання скопійовано!');
                      } else if (item.id === 'telegram') {
                        window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank');
                      } else if (item.id === 'viber') {
                        window.open(`viber://forward?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank');
                      } else if (item.id === 'facebook') {
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
                      }
                    }}
                  >
                    <span 
                      className="material-symbols-outlined transition-colors text-[22px]"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            {relatedPostsData.length > 0 && (
              <div className="mb-20">
                <h3 className="font-display-lg text-2xl text-primary mb-8 font-semibold">Вам також буде корисно:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-x-auto pb-4 sm:overflow-visible">
                  {relatedPostsData.slice(0, 2).map((related) => (
                    <Link 
                      key={related.slug} 
                      to={`/blog/${related.slug}`}
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img src={related.featuredImage.src} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="p-6">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">{related.category}</span>
                        <h4 className="font-bold text-secondary text-lg group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {related.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Post CTA */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-[40px] p-10 md:p-16 mb-20 shadow-2xl text-center border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/10 blur-[80px] -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] -ml-32 -mb-32"></div>
              
              <div className="relative flex flex-col items-center max-w-2xl mx-auto">
                <h2 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-white mb-6 font-semibold leading-tight">
                  Готові до ідеальної <br />
                  <span className="text-[#C9A227]">гладкості шкіри?</span>
                </h2>
                
                <p className="text-white/70 text-lg mb-12 leading-relaxed">
                  Запишіться на процедуру прямо зараз та відчуйте всі переваги професійної депіляції воском від Наталії.
                </p>
                
                <Link 
                  to="/#booking"
                  onClick={() => console.log('Analytics Event: cta_click', { location: 'post_bottom', slug: post.slug })}
                  className="group relative inline-flex items-center gap-3 bg-[#C9A227] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#A67C00] transition-all shadow-xl shadow-[#C9A227]/20 active:scale-95"
                >
                  <span>📅 Записатися на візит</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
          </div>
        </article>
      </main>

      {/* Sticky CTA */}
      {showStickyCTA && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] bg-white rounded-2xl shadow-2xl p-6 z-[100] border border-primary/10"
        >
          <button 
            onClick={closeCTA}
            className="absolute top-4 right-4 text-secondary/30 hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl">calendar_month</span>
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A] text-lg mb-1">Готові до ідеальної шкіри?</p>
              <Link 
                to="/#booking"
                onClick={() => console.log('Analytics Event: cta_click', { location: 'sticky_footer', slug: post.slug })}
                className="text-[#C9A227] font-bold hover:underline underline-offset-4 flex items-center gap-1"
              >
                Записатися за 1 хв <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .prose-custom h2 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }
        .prose-custom blockquote {
          font-style: italic;
          font-weight: 500;
        }
        .prose-custom p:first-of-type {
          font-size: 1.125rem;
          line-height: 1.8;
        }
      `}} />
    </div>
  );
};

export default BlogPost;


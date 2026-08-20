import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';

const Blogs = () => {
  const [activeCat, setActiveCat] = useState('ALL');
  
  const categories = ['ALL', 'PRODUCT GUIDES', 'CONSTRUCTION', 'TIMBER KNOWLEDGE', 'INTERIOR & JOINERY', 'BUYING GUIDES'];

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Timber Insights', path: '' }
  ];

  const upcomingArticles = [
    { 
      slug: 'marine-plywood-vs-commercial-plywood',
      title: 'Marine Plywood vs Commercial Plywood: Which Should You Choose?', 
      cat: 'Product Guides', 
      excerpt: 'Understanding the key differences between BWP marine and MR commercial plywood to select the right specification for your UAE construction or interior project.',
      img: 'https://images.unsplash.com/photo-1596700683696-65123d45ef42?auto=format&fit=crop&q=80',
    },
    { 
      slug: 'best-plywood-for-construction-uae',
      title: 'How to Choose the Right Plywood for Construction Projects in the UAE', 
      cat: 'Construction', 
      excerpt: 'A comprehensive guide to selecting shuttering plywood, load-bearing capacities, and moisture resistance for civil building contracts in Dubai and Abu Dhabi.',
      img: 'https://images.unsplash.com/photo-1620601366579-20fdfbf664cc?auto=format&fit=crop&q=80',
    },
    { 
      slug: 'mdf-vs-plywood',
      title: 'MDF vs Plywood: Which Is Better for Interior Fit-Out?', 
      cat: 'Interior & Joinery', 
      excerpt: 'Comparing MDF boards and commercial plywood for custom cabinetry, CNC routing, and wall paneling in UAE commercial and residential interiors.',
      img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    },
    { 
      slug: 'timber-for-joinery-uae',
      title: 'Wood & Timber Materials Used in UAE Construction & Joinery Projects', 
      cat: 'Timber Knowledge', 
      excerpt: 'An overview of sawn lumber, softwoods, and hardwoods commonly specified for architectural carpentry and structural framing across the Emirates.',
      img: 'https://images.unsplash.com/photo-1587582423116-ec0729285098?auto=format&fit=crop&q=80',
    }
  ];

  const filteredArticles = activeCat === 'ALL' ? upcomingArticles : upcomingArticles.filter(b => b.cat.toUpperCase() === activeCat);

  return (
    <>
      <SEO 
        title="Timber & Plywood Insights - Coming Soon | MME Trading UAE"
        description="Our technical guides, timber buying guides, and industry insights portal is coming soon. MME Trading is a leading wood and plywood supplier serving Dubai and the UAE."
        canonical="/blogs"
      />

      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-mme-gold/10 border border-mme-gold/30 px-3 py-1.5 mb-6 text-mme-gold text-xs font-semibold tracking-[0.2em] uppercase">
              <Sparkles size={14} />
              <span>INSIGHTS PORTAL · COMING SOON</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6">
              TIMBER & PLYWOOD INSIGHTS
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mb-10">
              Our engineering guides, product selection manuals, and technical timber resources are currently being prepared by our commercial team.
            </p>
          </motion.div>
          
          {/* Categories Filter Preview */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase border transition-colors duration-300 ${activeCat === cat ? 'bg-mme-gold text-mme-deepBlack border-mme-gold' : 'border-white/20 text-white/60 hover:text-white hover:border-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON FEATURED NOTICE & UPCOMING ARTICLES */}
      <section className="py-16 md:py-24 bg-mme-charcoal min-h-[500px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Main Coming Soon Banner */}
          <div className="bg-mme-deepBlack border border-white/10 p-8 md:p-14 text-center max-w-4xl mx-auto mb-20 relative overflow-hidden">
            <div className="w-16 h-[2px] bg-mme-gold mx-auto mb-6"></div>
            <span className="text-mme-gold text-xs font-bold tracking-[0.3em] uppercase block mb-3">UNDER DEVELOPMENT</span>
            <h2 className="font-heading text-3xl md:text-5xl uppercase mb-6 text-white">
              NEW ARTICLES & TECHNICAL GUIDES COMING SOON
            </h2>
            <p className="text-white/60 font-light text-base md:text-lg mb-8 max-w-2xl mx-auto">
              We are compiling detailed technical content on marine plywood ratings, commercial BOQ pricing structures, and timber specification guides for UAE contractors.
            </p>
            <Link to="/contact" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
              <span>HAVE A TECHNICAL QUESTION? CONTACT US</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Upcoming Articles Preview Grid */}
          <div className="mb-8">
            <h3 className="font-heading text-2xl uppercase mb-8 text-white/80">UPCOMING ARTICLES PREVIEW</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <div key={article.slug} className="bg-mme-deepBlack border border-white/5 p-6 flex flex-col sm:flex-row gap-6 relative group">
                  <div className="w-full sm:w-2/5 aspect-[4/3] overflow-hidden relative shrink-0">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                    <div className="absolute top-2 left-2 bg-mme-deepBlack/90 text-mme-gold text-[10px] font-mono px-2 py-1 uppercase border border-mme-gold/30">
                      COMING SOON
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-mme-gold text-xs font-mono tracking-widest uppercase mb-2 block">{article.cat}</span>
                      <h4 className="font-heading text-xl text-white mb-3 uppercase leading-snug">{article.title}</h4>
                      <p className="text-white/50 text-sm font-light leading-relaxed line-clamp-3 mb-4">{article.excerpt}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-white/40 text-xs font-mono">
                      <Clock size={12} className="text-mme-gold" />
                      <span>Publication scheduled soon</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Blogs;

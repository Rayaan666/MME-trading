import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';

const BlogDetail = () => {
  const { slug } = useParams();

  // Articles database with rich content & internal links
  const articlesDatabase = {
    'marine-plywood-vs-commercial-plywood': {
      title: 'Marine Plywood vs Commercial Plywood: Which Should You Choose?',
      cat: 'Product Guides',
      date: 'August 12, 2026',
      readTime: '7 min read',
      img: 'https://images.unsplash.com/photo-1596700683696-65123d45ef42?auto=format&fit=crop&q=80',
      description: 'Compare Marine Plywood (BWP) and Commercial Plywood (MR Grade). Learn key differences in water resistance, adhesives, and application suitability in the UAE.',
      content: `
        <p>When procuring wood materials for building or fit-out contracts in Dubai and across the UAE, selecting the appropriate plywood grade is vital to prevent delamination, structural failure, or unexpected maintenance costs. Two of the most widely specified materials are <strong>Marine Plywood</strong> and <strong>Commercial Plywood</strong>.</p>
        
        <h2>What Is Commercial Plywood?</h2>
        <p>Commercial plywood, classified under Moisture Resistant (MR) grade, is engineered primarily for interior joinery, office furniture, partitions, and dry architectural paneling. It is bonded using Urea Formaldehyde resin. While it withstands ordinary atmospheric humidity in air-conditioned Middle Eastern buildings, it is not designed to withstand prolonged exposure to standing water or rainfall.</p>
        <p>For detailed specifications on interior panels, explore our dedicated <a href="/products/commercial-plywood">Commercial Plywood supply options</a>.</p>

        <blockquote>
          "Specifying the right plywood grade during the engineering BOQ phase protects your project budget and long-term reputation."
        </blockquote>

        <h2>What Is Marine Plywood?</h2>
        <p>Marine Plywood (BWP - Boiling Water Proof grade) is a specialized structural panel engineered for high-moisture environments, marine vessel fit-outs, and exterior applications. It is manufactured using 100% Phenol Formaldehyde resin and premium hardwood veneers with zero internal core gaps.</p>
        <p>To view load ratings and available sheet sizes, see our <a href="/products/marine-plywood">Marine Plywood product range</a>.</p>

        <h2>Key Differences Comparison</h2>
        <ul>
          <li><strong>Adhesive Resin:</strong> Commercial plywood utilizes MR urea resin, whereas Marine plywood employs 100% BWP phenolic resin.</li>
          <li><strong>Core Gap Integrity:</strong> Marine plywood features zero core voids to eliminate moisture pockets.</li>
          <li><strong>Water Exposure:</strong> Marine plywood can withstand boiling water tests for up to 72 hours without glue line failure.</li>
          <li><strong>Insect Protection:</strong> Premium marine panels receive specialized anti-borer and anti-termite chemical treatments suitable for tropical climates.</li>
        </ul>

        <h2>Which Plywood Specification Fits Your UAE Project?</h2>
        <p>If your project involves indoor wardrobes, dry office partitions, or bedroom cabinetry in Dubai, Commercial Plywood offers an economical, reliable solution. However, for outdoor cladding, kitchen under-sink cabinets, bathroom vanities, or coastal structures in Ajman and Abu Dhabi, investing in genuine BWP Marine Plywood is essential.</p>
      `
    },
    'mdf-vs-plywood': {
      title: 'MDF vs Plywood: Which Is Better for Interior Fit-Out?',
      cat: 'Interior & Joinery',
      date: 'July 28, 2026',
      readTime: '6 min read',
      img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
      description: 'MDF Boards vs Commercial Plywood for interior fit-out in the UAE. Discover which engineered wood board is best for CNC routing, painting, and cabinetry.',
      content: `
        <p>Architects and interior contractors in Dubai often weigh the choice between Medium Density Fiberboard (MDF) and Commercial Plywood when planning hotel refurbishments, retail outlets, and residential interiors.</p>
        
        <h2>Understanding MDF Boards</h2>
        <p>MDF is manufactured by breaking down wood fibers into a uniform density panel. It features an exceptionally smooth, knot-free surface, making it the preferred substrate for CNC 3D routing, lacquer painting, and melamine lamination.</p>
        <p>Check out available thicknesses on our <a href="/products/mdf-boards">MDF Board product page</a>.</p>

        <h2>Understanding Commercial Plywood</h2>
        <p>Commercial Plywood consists of cross-laminated timber veneers, providing high tensile strength and superior screw-holding capacity. It is ideal for heavy wardrobe frames and structural shelving carcasses.</p>
        <p>Learn more about sheet sizes via our <a href="/products/commercial-plywood">Commercial Plywood catalog</a>.</p>

        <h2>Summary Recommendation</h2>
        <p>Use MDF boards when smooth spray finishes, detailed CNC carving, or curved moldings are required. Use Commercial Plywood when maximum weight-bearing capacity and fastener retention are prioritized.</p>
      `
    }
  };

  // Fallback for dynamic slugs
  const defaultArticle = {
    title: slug ? slug.replace(/-/g, ' ').toUpperCase() : 'TIMBER & PLYWOOD GUIDE',
    cat: 'Technical Guide',
    date: 'August 2026',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1587582423116-ec0729285098?auto=format&fit=crop&q=80',
    description: 'Technical insights on wood, plywood, MDF, and timber supply in the UAE by MME Trading.',
    content: `
      <p>Sourcing quality wood materials for construction and interior projects in Dubai and across the UAE requires understanding density grades, moisture resistance ratings, and core veneer qualities.</p>
      <h2>Wood Supply Solutions Across Dubai, Ajman & UAE</h2>
      <p>MME Trading provides reliable material sourcing and swift jobsite delivery for contractors, joineries, and developers across the Emirates.</p>
      <ul>
        <li>For wet area & outdoor projects: Explore <a href="/products/marine-plywood">Marine Plywood</a>.</li>
        <li>For furniture & interior partitions: Explore <a href="/products/commercial-plywood">Commercial Plywood</a>.</li>
        <li>For CNC routing & cabinetry: Explore <a href="/products/mdf-boards">MDF Boards</a>.</li>
        <li>For civil formwork & framing: Explore <a href="/products/wood-timber">Wood & Timber</a>.</li>
      </ul>
    `
  };

  const article = articlesDatabase[slug] || defaultArticle;

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/blogs' },
    { name: article.title, path: '' }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": article.img,
    "datePublished": "2026-08-12",
    "author": {
      "@type": "Organization",
      "name": "MME Trading"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MME Trading FZE LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mmetrading.com/assets/logo.png"
      }
    },
    "description": article.description
  };

  return (
    <>
      <SEO 
        title={`${article.title} | MME Trading UAE`}
        description={article.description}
        canonical={`/blog/${slug}`}
        ogImage={article.img}
        ogType="article"
        schema={articleSchema}
      />

      {/* ARTICLE HERO */}
      <section className="pt-36 pb-12 bg-mme-deepBlack">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <Link to="/blogs" className="inline-flex items-center space-x-2 text-white/50 hover:text-mme-gold font-semibold tracking-widest text-xs uppercase mb-8 transition-colors">
            <ArrowLeft size={14} />
            <span>BACK TO INSIGHTS</span>
          </Link>
          
          <div className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">{article.cat}</div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase leading-[1.15] mb-8">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-white/50 text-sm font-light border-y border-white/10 py-4">
            <div className="flex items-center space-x-2">
              <Calendar size={14} className="text-mme-gold" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} className="text-mme-gold" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="bg-mme-deepBlack px-6 lg:px-12 pb-12">
        <div className="max-w-4xl mx-auto aspect-[21/9] overflow-hidden border border-white/10">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-12 md:py-16 bg-mme-deepBlack text-base md:text-lg font-light leading-relaxed text-white/80">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 blog-content" dangerouslySetInnerHTML={{ __html: article.content }}>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          .blog-content p { margin-bottom: 1.75rem; color: rgba(255, 255, 255, 0.75); }
          .blog-content h2 { font-family: 'Oswald', sans-serif; font-size: 2rem; text-transform: uppercase; margin-top: 3rem; margin-bottom: 1.25rem; color: #fff; line-height: 1.2; }
          .blog-content ul { margin-bottom: 2rem; padding-left: 1.5rem; list-style-type: none; }
          .blog-content li { margin-bottom: 0.75rem; position: relative; color: rgba(255, 255, 255, 0.8); }
          .blog-content li::before { content: ''; position: absolute; left: -1.25rem; top: 0.65rem; width: 0.35rem; height: 0.35rem; background-color: #D6A62A; border-radius: 50%; }
          .blog-content blockquote { font-family: 'Oswald', sans-serif; font-size: 1.5rem; line-height: 1.3; text-transform: uppercase; color: #D6A62A; margin: 3rem 0; padding-left: 1.5rem; border-left: 3px solid #D6A62A; }
          .blog-content a { color: #D6A62A; text-decoration: underline; text-underline-offset: 4px; font-weight: 500; }
          .blog-content a:hover { color: #fff; }
          .blog-content strong { color: #fff; font-weight: 600; }
        `}} />
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-mme-charcoal border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl uppercase mb-4 text-white">
            NEED MATERIALS FOR YOUR PROJECT?
          </h2>
          <p className="text-white/60 font-light mb-8">
            Talk to the MME Trading team for reliable material sourcing across Dubai, Ajman, and the UAE.
          </p>
          <Link to="/contact" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST A QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;

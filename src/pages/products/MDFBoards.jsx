import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const MDFBoards = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/products-services' },
    { name: 'MDF Boards', path: '' }
  ];

  const features = [
    { title: 'Ultra-Smooth Surface', desc: 'Homogeneous grain-free structure providing an exceptionally smooth finish for painting and routing.' },
    { title: 'Consistent Core Density', desc: 'Uniform density throughout the board ensures clean edges when CNC machining or profile routing.' },
    { title: 'Multiple Finishes & Grades', desc: 'Available in Plain MDF, Melamine Laminated MDF, and Moisture Resistant (MR) Green MDF.' },
    { title: 'Ideal for Precision CNC Works', desc: 'Minimal chipping or flaking during intricate carving, grooving, and decorative routing.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MDF Boards",
    "image": "https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_10_29_AM",
    "description": "Medium Density Fiberboard (MDF) supplier in Dubai, Ajman, and across the UAE.",
    "brand": {
      "@type": "Brand",
      "name": "MME Trading"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AED",
      "offerCount": "1000",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEO 
        title="MDF Board Supplier in Dubai & UAE | MME Trading"
        description="MME Trading is a leading MDF board supplier in Dubai, Ajman, and the UAE. High-density Plain, Melamine, and MR MDF boards for cabinetry, furniture, and interior fit-out."
        canonical="/products/mdf-boards"
        ogImage="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_10_29_AM"
        schema={productSchema}
      />

      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_10_50_AM" alt="MME Trading MDF Boards Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">ENGINEERED WOOD PANELS</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              MDF BOARD SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              MME Trading supplies premium Medium Density Fiberboard (MDF) panels engineered for interior decoration, custom cabinetry, CNC routing, wall paneling, and furniture manufacturing across Dubai, Ajman, and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=MDF%20Boards" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST MDF QUOTE</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 md:py-24 bg-mme-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl uppercase mb-6 text-white">
                PRECISION ENGINEERED PANELS FOR MODERN INTERIORS
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Medium Density Fiberboard (MDF) is produced by breaking down hardwood or softwood residuals into wood fibers, combining it with wax and a resin binder, and forming panels by applying high temperature and pressure.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Because MDF is free of knots and grain lines, it provides an unblemished, flat surface that is easy to cut, shape, spray-paint, or veneer. MME Trading delivers plain and moisture-resistant (MR Green Core) MDF boards to joineries and fit-out contractors across Dubai, Ajman, and Sharjah.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">AVAILABLE THICKNESS</div>
                  <div className="text-white/60 text-sm font-mono">3mm, 6mm, 9mm, 12mm, 15mm, 18mm, 25mm</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">GRADES & TYPES</div>
                  <div className="text-white/60 text-sm font-mono">Plain, Melamine Face, Moisture Resistant (MR)</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_10_29_AM" 
                  alt="MDF boards for furniture and interior fit-out projects in UAE" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">TECHNICAL ADVANTAGES OF MDF BOARDS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feat, i) => (
                <div key={i} className="bg-mme-deepBlack p-8 border border-white/5 hover:border-mme-gold/40 transition-colors">
                  <div className="text-mme-gold mb-4"><ShieldCheck size={32} /></div>
                  <h4 className="font-heading text-lg mb-3 text-white">{feat.title}</h4>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* APPLICATIONS */}
          <div className="bg-mme-deepBlack p-8 md:p-12 border border-white/10">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-mme-gold">COMMON APPLICATIONS IN UAE INTERIORS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white/80">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Custom kitchen cabinets, wardrobe doors & drawers</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>CNC 3D decorative wall panels & room dividers</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Architectural moldings, skirting boards & architraves</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Retail display kiosks, counters & exhibition stands</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Acoustic wall paneling & ceiling baffle systems</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Laminated office desks and storage cabinets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16 bg-mme-deepBlack border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="font-heading text-2xl uppercase mb-8 text-white">RELATED PRODUCTS & GUIDES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products/commercial-plywood" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">COMMERCIAL PLYWOOD</h4>
              <p className="text-white/60 text-sm font-light">Layered wood sheets offering high screw-holding strength.</p>
            </Link>

            <Link to="/products/marine-plywood" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">MARINE PLYWOOD</h4>
              <p className="text-white/60 text-sm font-light">100% moisture-resistant panels for high humidity & exterior projects.</p>
            </Link>

            <Link to="/blog/mdf-vs-plywood" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">COMPARISON GUIDE</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">MDF VS PLYWOOD</h4>
              <p className="text-white/60 text-sm font-light">Understand when to choose MDF over plywood for interior joinery.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_10_56_AM" alt="MDF boards wood supply" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">LOOKING FOR AN MDF BOARD SUPPLIER IN THE UAE?</h2>
          <p className="text-white/60 font-light mb-8">Speak with MME Trading for bulk orders, wholesale rates, and fast delivery.</p>
          <Link to="/contact?product=MDF%20Boards" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST MDF QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default MDFBoards;

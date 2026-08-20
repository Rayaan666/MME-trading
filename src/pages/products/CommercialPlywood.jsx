import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const CommercialPlywood = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/products-services' },
    { name: 'Commercial Plywood', path: '' }
  ];

  const features = [
    { title: 'Moisture Resistant (MR Grade)', desc: 'Bonded with urea-formaldehyde resin suitable for humid interior environments and interior partitions.' },
    { title: 'Smooth Surface Finish', desc: 'Sanded smooth on both sides, providing an ideal substrate for veneers, laminates, and paints.' },
    { title: 'High Screw Holding Capacity', desc: 'Dense core construction ensures strong retention for fasteners, hinges, and jointing screws.' },
    { title: 'Cost-Effective Solution', desc: 'Ideal balance of structural strength and economic efficiency for large commercial fit-outs.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Commercial Plywood",
    "image": "https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_59_30_AM",
    "description": "Commercial plywood supplier in Dubai, Ajman, and across the UAE for interior fit-outs, joinery, and furniture.",
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
        title="Commercial Plywood Supplier Dubai & UAE | MME Trading"
        description="MME Trading supplies commercial plywood in Dubai, Ajman, and across the UAE. Strong, versatile MR grade plywood for furniture, interior fit-outs, partitions, and carpentry."
        canonical="/products/commercial-plywood"
        ogImage="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_59_30_AM"
        schema={productSchema}
      />

      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_59_00_AM" alt="MME Trading Commercial Plywood Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">VERSATILE MR GRADE PANELS</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              COMMERCIAL PLYWOOD SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              High-quality commercial plywood supplied across Dubai, Ajman, Sharjah, and the UAE. Designed for interior joinery, office partitions, wall paneling, ceiling works, and modular furniture manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=Commercial%20Plywood" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST PLYWOOD QUOTE</span>
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
                VERSATILE MATERIAL FOR INTERIOR & JOINERY PROJECTS
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Commercial plywood is the backbone of interior construction and carpentry across the UAE. Formed by cross-banding select timber veneers, it delivers dimensional stability and warping resistance under climate-controlled indoor environments.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                At MME Trading, we stock multiple thicknesses suitable for structural paneling, cabinetry carcasses, sub-flooring, and architectural decorative features, enabling interior contractors and joinery factories in Dubai to source consistent sheets effortlessly.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">AVAILABLE THICKNESS</div>
                  <div className="text-white/60 text-sm font-mono">3.6mm, 6mm, 9mm, 12mm, 18mm</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">GRADE SPECIFICATION</div>
                  <div className="text-white/60 text-sm font-mono">MR / BB & CC Grade</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_59_30_AM" 
                  alt="Stacked commercial plywood for construction and interior projects" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">WHY CHOOSE COMMERCIAL PLYWOOD FROM MME TRADING</h3>
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
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-mme-gold">COMMON APPLICATIONS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white/80">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Interior wall paneling and decorative partitions</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Modular office furniture and workstation carcasses</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Residential wardrobes, shelves, and bed frames</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Commercial interior fit-out & retail store fixtures</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>False ceilings and architectural soffits</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Packaging, crating, and temporary protection sheets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16 bg-mme-deepBlack border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="font-heading text-2xl uppercase mb-8 text-white">RELATED PRODUCTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products/marine-plywood" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">MARINE PLYWOOD</h4>
              <p className="text-white/60 text-sm font-light">100% moisture-resistant BWP grade plywood for wet areas.</p>
            </Link>

            <Link to="/products/mdf-boards" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">MDF BOARDS</h4>
              <p className="text-white/60 text-sm font-light">Ultra-smooth engineered wood panels for interior decorative finishes.</p>
            </Link>

            <Link to="/products/wood-timber" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">WOOD & TIMBER</h4>
              <p className="text-white/60 text-sm font-light">Quality natural wood for construction, framing, and decorative work.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_59_48_AM" alt="Commercial plywood wood supply" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">REQUIRE COMMERCIAL PLYWOOD FOR YOUR PROJECT?</h2>
          <p className="text-white/60 font-light mb-8">Get competitive pricing and immediate delivery across Dubai, Ajman, and the UAE.</p>
          <Link to="/contact?product=Commercial%20Plywood" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST PLYWOOD QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CommercialPlywood;

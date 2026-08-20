import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Droplets, Layers, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const MarinePlywood = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/products-services' },
    { name: 'Marine Plywood', path: '' }
  ];

  const features = [
    { title: 'Boiling Water Proof (BWP)', desc: 'Bonded with high-grade Phenol Formaldehyde resin to prevent delamination under extreme moisture.' },
    { title: 'Zero Core Gaps', desc: 'Precision-layered veneers with no internal cavities, preventing water entrapment and fungal growth.' },
    { title: 'High Structural Strength', desc: 'Superior load-bearing capability suitable for demanding exterior and marine structural applications.' },
    { title: 'Termite & Borer Resistant', desc: 'Chemically treated to withstand insect attacks in tropical Middle Eastern climates.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Marine Plywood",
    "image": "https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_51_51_AM",
    "description": "High-grade BWP Marine Plywood supplier serving Dubai, Ajman, and across the UAE.",
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
        title="Marine Plywood Supplier in Dubai & UAE | MME Trading"
        description="MME Trading is a leading marine plywood supplier in Dubai, Ajman, and across the UAE. Premium BWP moisture-resistant plywood for marine, exterior, and heavy construction projects."
        canonical="/products/marine-plywood"
        ogImage="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_51_51_AM"
        schema={productSchema}
      />

      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_51_45_AM" alt="MME Trading Marine Plywood Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">PREMIUM GRADE BWP PLYWOOD</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              MARINE PLYWOOD SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              MME Trading supplies high-performance marine plywood engineered to withstand harsh moisture, humidity, and water exposure. Serving contractors, joineries, interior firms, and boatbuilders across Dubai, Ajman, Sharjah, and the wider UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=Marine%20Plywood" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST MARINE PLYWOOD QUOTE</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT DETAILS & OVERVIEW */}
      <section className="py-16 md:py-24 bg-mme-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl uppercase mb-6 text-white">
                DEPENDABLE MOISTURE-RESISTANT PLYWOOD FOR DEMANDING PROJECTS
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Marine plywood is manufactured using top-tier hardwood veneers bonded under extreme heat and pressure with 100% Phenolic WBP (Water Boiling Proof) resin. Unlike standard commercial grades, genuine marine plywood undergoes rigorous multi-stage quality checks to eliminate gaps, voids, and weak points in the core.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Whether you are constructing high-end waterfront joinery, exterior structural paneling, kitchen carcass frames, or marine vessel fit-outs in the UAE, MME Trading ensures consistent thickness, density, and structural integrity in every batch.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">AVAILABLE THICKNESS</div>
                  <div className="text-white/60 text-sm font-mono">6mm, 9mm, 12mm, 15mm, 18mm</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">STANDARD SHEET SIZE</div>
                  <div className="text-white/60 text-sm font-mono">8ft x 4ft (2440mm x 1220mm)</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_51_51_AM" 
                  alt="Marine plywood supplied by MME Trading in UAE" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* KEY FEATURES */}
          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">TECHNICAL SPECIFICATIONS & ADVANTAGES</h3>
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
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-mme-gold">COMMON APPLICATIONS IN THE UAE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white/80">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Boatbuilding, docks, and marine vessel interiors</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Exterior wall cladding and architectural features</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>High-moisture kitchen, bathroom, and sauna cabinetry</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Heavy-duty shuttering and civil construction projects</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Sub-flooring for luxury commercial fit-out spaces</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Outdoor signages and exhibition structures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS TO RELATED PRODUCTS & BLOGS */}
      <section className="py-16 bg-mme-deepBlack border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="font-heading text-2xl uppercase mb-8 text-white">EXPLORE RELATED PRODUCTS & GUIDES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products/commercial-plywood" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">COMMERCIAL PLYWOOD</h4>
              <p className="text-white/60 text-sm font-light">Versatile plywood for furniture, partitions, and interior joinery.</p>
            </Link>

            <Link to="/products/mdf-boards" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">MDF BOARDS</h4>
              <p className="text-white/60 text-sm font-light">Smooth engineered panels for cabinetry and decorative interior work.</p>
            </Link>

            <Link to="/blog/marine-plywood-vs-commercial-plywood" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">BUYING GUIDE</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">MARINE VS COMMERCIAL PLYWOOD</h4>
              <p className="text-white/60 text-sm font-light">Learn which plywood specification is right for your project budget.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_09_52_33_AM" alt="Marine plywood wood supply" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">NEED MARINE PLYWOOD IN DUBAI OR ACROSS THE UAE?</h2>
          <p className="text-white/60 font-light mb-8">Contact MME Trading today for bulk inquiries, custom thickness quotes, and fast delivery.</p>
          <Link to="/contact?product=Marine%20Plywood" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST MARINE PLYWOOD QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default MarinePlywood;

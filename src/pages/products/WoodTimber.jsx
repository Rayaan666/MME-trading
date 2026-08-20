import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const WoodTimber = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/products-services' },
    { name: 'Wood & Timber', path: '' }
  ];

  const features = [
    { title: 'Sustainably Sourced Hardwood & Softwood', desc: 'Carefully selected timber logs and sawn lumber compliant with international quality standards.' },
    { title: 'Kiln Dried Moisture Control', desc: 'Properly seasoned wood reducing natural shrinkage, warping, and cracking under UAE weather.' },
    { title: 'Structural & Decorative Grades', desc: 'Supplied for heavy civil shuttering, structural framing, or luxury joinery and cladding.' },
    { title: 'Custom Dimensions Upon Request', desc: 'Flexible cutting, dressing, and sizing to match exact contractor engineering BOQs.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wood & Timber",
    "image": "https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_16_20_AM",
    "description": "Natural wood and timber supplier in Dubai, Ajman, and across the UAE for construction and joinery.",
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
        title="Wood & Timber Supplier in Dubai & UAE | MME Trading"
        description="MME Trading is a dependable timber supplier serving Dubai, Ajman, and across the UAE. Natural sawn lumber, hardwood, softwood, and structural timber for construction and joinery."
        canonical="/products/wood-timber"
        ogImage="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_16_20_AM"
        schema={productSchema}
      />

      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_16_30_AM" alt="MME Trading Wood & Timber Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">NATURAL SAWN LUMBER & TIMBER</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              WOOD & TIMBER SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              MME Trading is a trusted wood and timber supplier providing natural lumber, structural timbers, softwoods, and hardwoods for civil construction, carpentry, joinery, and architectural wood installations across Dubai, Ajman, Sharjah, and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=Wood%20%2F%20Timber" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST TIMBER QUOTE</span>
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
                HIGH-GRADE NATURAL TIMBER FOR CONTRACTORS & JOINERIES
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                From temporary site scaffolding battens and shuttering props to high-end architectural hardwood joinery, natural timber remains an essential construction material throughout the United Arab Emirates.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                MME Trading procures quality timber species from sustainable sources worldwide, offering kiln-dried seasoning and precise dimensional dressing to satisfy demanding commercial contracts across Dubai, Ajman, and Abu Dhabi.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">TIMBER TYPES</div>
                  <div className="text-white/60 text-sm font-mono">Softwoods, Hardwoods, Sawn Lumber</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">SUPPLY CAPABILITY</div>
                  <div className="text-white/60 text-sm font-mono">Bulk Project Supply Across UAE</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_16_20_AM" 
                  alt="Timber wood supplier Dubai UAE MME Trading" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">ADVANTAGES OF SOURCING TIMBER FROM MME TRADING</h3>
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
                <span>Civil construction formwork, shuttering & scaffolding support</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Custom solid wood furniture, table tops & doors</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Architectural pergola framing & exterior wooden decking</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Interior door frames, jambs, molding & trims</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Heavy industrial machinery crating & wooden pallets</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Decorative carpentry & luxury interior joinery work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16 bg-mme-deepBlack border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="font-heading text-2xl uppercase mb-8 text-white">RELATED ENGINEERED WOOD PRODUCTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products/marine-plywood" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">MARINE PLYWOOD</h4>
              <p className="text-white/60 text-sm font-light">Water boiling proof marine grade plywood for exterior & wet areas.</p>
            </Link>

            <Link to="/products/commercial-plywood" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">COMMERCIAL PLYWOOD</h4>
              <p className="text-white/60 text-sm font-light">Versatile MR plywood for furniture, partitions, and interior joinery.</p>
            </Link>

            <Link to="/products/mdf-boards" className="p-6 bg-mme-charcoal border border-white/5 hover:border-mme-gold transition-colors block group">
              <div className="text-xs font-mono text-mme-gold mb-2">PRODUCT</div>
              <h4 className="font-heading text-xl text-white group-hover:text-mme-gold transition-colors mb-2">MDF BOARDS</h4>
              <p className="text-white/60 text-sm font-light">Smooth engineered fiberboard panels for cabinetry & CNC paneling.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_16_26_AM" alt="Wood & Timber wood supply" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">NEED RELIABLE TIMBER SUPPLIES IN THE UAE?</h2>
          <p className="text-white/60 font-light mb-8">Contact MME Trading today for competitive bulk pricing and efficient UAE-wide dispatch.</p>
          <Link to="/contact?product=Wood%20%2F%20Timber" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST TIMBER QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default WoodTimber;

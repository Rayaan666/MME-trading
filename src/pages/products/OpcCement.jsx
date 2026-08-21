import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const OpcCement = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Building Materials', path: '/products-services' },
    { name: 'OPC Cement', path: '' }
  ];

  const features = [
    { title: 'High Compressive Strength', desc: 'Ensures robust and long-lasting concrete structures suited for heavy loads.' },
    { title: 'General Purpose Use', desc: 'Versatile application in almost all types of basic construction works.' },
    { title: 'Fast Setting Time', desc: 'Rapid strength development accelerates construction schedules safely.' },
    { title: 'Durable Binding', desc: 'Creates a highly durable matrix when mixed with aggregates and water.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "OPC Cement",
    "image": "https://mmetrading.com/images/opc_cement.jpg",
    "description": "Ordinary Portland Cement (OPC) for general construction works.",
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
        title="OPC Cement Supplier in Dubai & UAE | MME Trading"
        description="MME Trading is a trusted supplier of Ordinary Portland Cement (OPC) in Dubai and the UAE, perfect for structural concrete, masonry, and general construction."
        canonical="/products/opc-cement"
        ogImage="/images/opc_cement.jpg"
        schema={productSchema}
      />

      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="/images/opc_cement.jpg" alt="OPC Cement Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">ESSENTIAL BINDING MATERIAL</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              OPC CEMENT SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              MME Trading provides high-quality Ordinary Portland Cement (OPC), the foundational building material for strong, resilient structural concrete and everyday masonry across the United Arab Emirates.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=OPC%20Cement" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST CEMENT QUOTE</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-mme-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl uppercase mb-6 text-white">
                THE BACKBONE OF MODERN CONSTRUCTION
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Ordinary Portland Cement (OPC) is the most widely used type of cement in the world. It provides excellent compressive strength and sets rapidly, making it the preferred choice for a vast array of construction activities where quick mold release or early strength is required.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Sourced from leading manufacturers, our OPC guarantees consistent performance, ensuring that your buildings, bridges, and infrastructure projects stand the test of time.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">PACKAGING</div>
                  <div className="text-white/60 text-sm font-mono">50kg Bags and Bulk Supply</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">GRADE</div>
                  <div className="text-white/60 text-sm font-mono">Grade 42.5N / 42.5R and higher</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="/images/opc_cement.jpg" 
                  alt="OPC Cement bags neatly stacked" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">TECHNICAL ADVANTAGES OF OPC CEMENT</h3>
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

          <div className="bg-mme-deepBlack p-8 md:p-12 border border-white/10">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-mme-gold">COMMON APPLICATIONS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white/80">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Structural reinforced concrete (RC) elements</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Brick and block masonry mortar</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Wall plastering and rendering</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Precast concrete blocks and pipes</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Floor screeds and toppings</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Pavement and road construction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/images/opc_cement.jpg" alt="Cement background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">LOOKING FOR BULK OPC CEMENT SUPPLY?</h2>
          <p className="text-white/60 font-light mb-8">Get in touch with MME Trading for consistent quality and timely deliveries directly to your site.</p>
          <Link to="/contact?product=OPC%20Cement" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST CEMENT QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OpcCement;

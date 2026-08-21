import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const PlcCement = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Building Materials', path: '/products-services' },
    { name: 'PLC Cement', path: '' }
  ];

  const features = [
    { title: 'Eco-Friendly Choice', desc: 'Significantly reduces carbon footprint compared to traditional OPC through limestone blending.' },
    { title: 'Enhanced Workability', desc: 'The fineness of limestone particles improves the smoothness and workability of the concrete mix.' },
    { title: 'Consistent Quality', desc: 'Manufactured to deliver uniform strength and setting characteristics matching OPC.' },
    { title: 'Reduced Bleeding', desc: 'Improves concrete cohesion, leading to better surface finishes and reduced bleeding.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PLC Cement",
    "image": "https://mmetrading.com/images/plc_cement.jpg",
    "description": "Portland Limestone Cement (PLC) offering sustainable construction binding.",
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
        title="PLC Cement Supplier in Dubai & UAE | Sustainable Binding"
        description="MME Trading supplies Portland Limestone Cement (PLC) in the UAE. A sustainable, high-performance alternative for modern eco-friendly construction projects."
        canonical="/products/plc-cement"
        ogImage="/images/plc_cement.jpg"
        schema={productSchema}
      />

      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="/images/plc_cement.jpg" alt="PLC Cement Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">SUSTAINABLE CEMENT SOLUTIONS</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              PLC CEMENT SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              MME Trading proudly supplies Portland Limestone Cement (PLC), delivering the strength and performance you expect with a significantly reduced environmental impact, ideal for the UAE's green building initiatives.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=PLC%20Cement" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST PLC QUOTE</span>
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
                BUILDING A SUSTAINABLE FUTURE
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Portland Limestone Cement (PLC) is an innovative blended cement that incorporates a higher percentage of limestone. This slight modification reduces the carbon emissions associated with cement manufacturing by up to 10% without compromising on strength or durability.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                As the UAE pushes towards sustainable development and LEED-certified buildings, PLC is becoming the material of choice for environmentally conscious contractors looking for a drop-in replacement for traditional OPC.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">PACKAGING</div>
                  <div className="text-white/60 text-sm font-mono">50kg Bags and Bulk Loaders</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">BENEFITS</div>
                  <div className="text-white/60 text-sm font-mono">Lower CO2 emissions, Better finish</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="/images/plc_cement.jpg" 
                  alt="PLC Cement in industrial setting" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">TECHNICAL ADVANTAGES OF PLC CEMENT</h3>
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
                <span>LEED and Green Building certified projects</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>General purpose concrete applications</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Architectural and decorative concrete</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Masonry, mortars, and stuccos</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Paving and flatwork</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Precast and ready-mix concrete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/images/plc_cement.jpg" alt="PLC Cement background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">UPGRADING TO SUSTAINABLE PLC CEMENT?</h2>
          <p className="text-white/60 font-light mb-8">Contact MME Trading to source high-quality Portland Limestone Cement for your next UAE project.</p>
          <Link to="/contact?product=PLC%20Cement" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST PLC QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default PlcCement;

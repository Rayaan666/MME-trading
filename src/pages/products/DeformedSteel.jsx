import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const DeformedSteel = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/products-services' },
    { name: 'Deformed Steel', path: '' }
  ];

  const features = [
    { title: 'High Tensile Strength', desc: 'Engineered to withstand heavy loads and provide superior structural stability in demanding projects.' },
    { title: 'Ribbed Surface Bonding', desc: 'Deformed ridges ensure optimal bonding with concrete, preventing slippage under stress.' },
    { title: 'Various Diameters', desc: 'Available in multiple standard thicknesses to meet precise structural engineering requirements.' },
    { title: 'Standard Compliance', desc: 'Manufactured to meet strict industry standards for yield strength and durability.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Deformed Steel",
    "image": "https://mmetrading.com/images/deformed_steel.jpg",
    "description": "High-strength deformed steel rebar for concrete reinforcement and structural stability.",
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
        title="Deformed Steel Supplier in Dubai & UAE | MME Trading"
        description="MME Trading is a leading deformed steel rebar supplier in Dubai and the UAE, providing high-strength reinforcement for commercial and residential construction."
        canonical="/products/deformed-steel"
        ogImage="/images/deformed_steel.jpg"
        schema={productSchema}
      />

      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="/images/deformed_steel.jpg" alt="Deformed Steel Rebar Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">CONSTRUCTION REINFORCEMENT</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              DEFORMED STEEL SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              MME Trading supplies high-strength deformed steel rebar for critical concrete reinforcement, ensuring structural integrity in high-rise, commercial, and residential projects across the UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=Deformed%20Steel" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST STEEL QUOTE</span>
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
                RELIABLE REINFORCEMENT FOR STRUCTURAL INTEGRITY
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Deformed steel rebar is a critical component in reinforced concrete structures. Its ribbed exterior provides mechanical anchoring, transferring stress efficiently between the concrete and the steel to prevent cracking and structural failure.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                MME Trading partners with top manufacturers to ensure a consistent supply of certified, high-grade steel to meet the demanding requirements of the UAE construction sector.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">STRENGTH GRADES</div>
                  <div className="text-white/60 text-sm font-mono">Grade 60, Grade 420, and custom specs available</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">APPLICATIONS</div>
                  <div className="text-white/60 text-sm font-mono">Foundations, Beams, Columns, Slabs</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="/images/deformed_steel.jpg" 
                  alt="Deformed steel rebar stacked for construction" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">TECHNICAL ADVANTAGES OF DEFORMED STEEL</h3>
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
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-mme-gold">COMMON CONSTRUCTION APPLICATIONS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white/80">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Foundation footings and rafts</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Suspended concrete slabs and beams</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Vertical columns and shear walls</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Retaining walls and bridge structures</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Precast concrete elements</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Infrastructure and civil engineering projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/images/deformed_steel.jpg" alt="Steel background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">NEED DEFORMED STEEL FOR YOUR PROJECT?</h2>
          <p className="text-white/60 font-light mb-8">Contact MME Trading for bulk rates and reliable delivery across the UAE.</p>
          <Link to="/contact?product=Deformed%20Steel" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST STEEL QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default DeformedSteel;

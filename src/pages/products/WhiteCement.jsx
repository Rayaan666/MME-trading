import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const WhiteCement = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Building Materials', path: '/products-services' },
    { name: 'White Cement', path: '' }
  ];

  const features = [
    { title: 'Bright White Finish', desc: 'Exceptional whiteness makes it ideal for decorative applications and achieving vibrant pigmented colored concrete.' },
    { title: 'High Fineness', desc: 'Superior fineness allows for smooth finishes, sharp architectural details, and better workability.' },
    { title: 'Superior Bonding', desc: 'Excellent adhesive properties make it perfect for tile grouting, fixing marbles, and intricate masonry.' },
    { title: 'Aesthetic Appeal', desc: 'Enhances the visual impact of exposed concrete structures without compromising on strength.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "White Cement",
    "image": "https://mmetrading.com/images/white_cement.jpg",
    "description": "High-quality white cement perfect for architectural finishes and decorative concrete.",
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
        title="White Cement Supplier in Dubai & UAE | MME Trading"
        description="MME Trading supplies white cement in Dubai and the UAE, perfect for architectural finishes, decorative concrete, tile grouting, and terrazzo flooring."
        canonical="/products/white-cement"
        ogImage="/images/white_cement.jpg"
        schema={productSchema}
      />

      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="/images/white_cement.jpg" alt="White Cement Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">ARCHITECTURAL & DECORATIVE</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              WHITE CEMENT SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              MME Trading is your source for high-quality white cement, offering the perfect blend of structural strength and brilliant aesthetic appeal for architectural finishes and decorative applications across the UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=White%20Cement" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST WHITE CEMENT QUOTE</span>
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
                WHERE STRENGTH MEETS BRILLIANCE
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                White Portland Cement offers the same robust structural properties as standard gray OPC, but its manufacturing process strictly controls the amounts of iron and manganese to achieve a pristine white color.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                This brilliant whiteness serves as the ultimate base for adding color pigments, creating vivid, consistent colored concrete. It is the go-to material for architects and interior designers aiming for high-end, flawless finishes in luxury UAE developments.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">APPLICATIONS</div>
                  <div className="text-white/60 text-sm font-mono">Grouting, Decorative, Architectural</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">FINISH</div>
                  <div className="text-white/60 text-sm font-mono">Ultra-smooth & Bright White</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="/images/white_cement.jpg" 
                  alt="High quality white cement powder" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">TECHNICAL ADVANTAGES OF WHITE CEMENT</h3>
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
                <span>Architectural concrete facades</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Terrazzo flooring and polished concrete</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Tile grouting and marble fixing</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Precast ornamental structures and sculptures</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Swimming pool finishes and copings</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Colored concrete (when mixed with pigments)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/images/white_cement.jpg" alt="White Cement background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">PLANNING A HIGH-END FINISH?</h2>
          <p className="text-white/60 font-light mb-8">Get in touch with MME Trading for reliable supply of white cement for your decorative projects.</p>
          <Link to="/contact?product=White%20Cement" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST WHITE CEMENT QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhiteCement;

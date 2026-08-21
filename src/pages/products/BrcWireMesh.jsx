import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const BrcWireMesh = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/products-services' },
    { name: 'BRC Wire Mesh', path: '' }
  ];

  const features = [
    { title: 'Welded Steel Fabric', desc: 'Precision-welded intersections provide rigid and reliable structural support.' },
    { title: 'Uniform Grid Spacing', desc: 'Consistent spacing ensures even distribution of stress and minimizes cracking.' },
    { title: 'Standard Sheet Sizes', desc: 'Easy to transport and lay out, reducing installation time on-site.' },
    { title: 'High Yield Strength', desc: 'Offers excellent tensile strength for floor slabs, driveways, and pavements.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "BRC Wire Mesh",
    "image": "https://mmetrading.com/images/brc_wire_mesh.jpg",
    "description": "BRC wire mesh for reliable concrete reinforcement.",
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
        title="BRC Wire Mesh Supplier in Dubai & UAE | MME Trading"
        description="MME Trading supplies BRC wire mesh for reliable concrete reinforcement, ideal for slabs, driveways, and construction projects across the UAE."
        canonical="/products/brc-wire-mesh"
        ogImage="/images/brc_wire_mesh.jpg"
        schema={productSchema}
      />

      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="/images/brc_wire_mesh.jpg" alt="BRC Wire Mesh Supplier Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">SURFACE REINFORCEMENT</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              BRC WIRE MESH SUPPLIER<br/>
              <span className="text-mme-gold">IN DUBAI & UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mb-8 leading-relaxed">
              Enhance the durability of your concrete slabs with our BRC wire mesh, offering superior crack control and structural reinforcement for both residential and commercial applications.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact?product=BRC%20Wire%20Mesh" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>REQUEST MESH QUOTE</span>
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
                EFFICIENT & DURABLE CRACK CONTROL
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                BRC wire mesh is a prefabricated steel fabric consisting of a series of parallel longitudinal wires welded to cross wires at precise intervals. It acts as an essential reinforcement, providing tensile strength to concrete slabs and preventing shrinkage cracking.
              </p>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                By reducing installation time compared to tying individual rebars, BRC mesh is highly cost-effective for large-area surface reinforcement across the UAE's booming construction sector.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">MESH SIZES</div>
                  <div className="text-white/60 text-sm font-mono">Various pitch options available (A142, A193, etc.)</div>
                </div>
                <div>
                  <div className="text-mme-gold font-heading text-2xl mb-1">FORMAT</div>
                  <div className="text-white/60 text-sm font-mono">Flat Sheets and Rolls</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative">
                <img 
                  src="/images/brc_wire_mesh.jpg" 
                  alt="BRC Wire Mesh laid out for construction" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="font-heading text-2xl md:text-3xl uppercase mb-10 text-center text-white">TECHNICAL ADVANTAGES OF BRC MESH</h3>
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
                <span>Concrete floor slabs and foundations</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Driveways, pavements, and pathways</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Pre-cast concrete wall panels</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Swimming pool shells</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Retaining walls and fencing structures</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={20} className="text-mme-gold shrink-0 mt-1" />
                <span>Industrial warehouse flooring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="/images/brc_wire_mesh.jpg" alt="Mesh background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl uppercase mb-4 text-white">REQUIRE BRC WIRE MESH FOR YOUR SITE?</h2>
          <p className="text-white/60 font-light mb-8">Reach out to MME Trading for competitive pricing and prompt delivery across the UAE.</p>
          <Link to="/contact?product=BRC%20Wire%20Mesh" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST MESH QUOTE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BrcWireMesh;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Truck, ShieldCheck, PhoneCall, Building2, Hammer, Layers, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';

const ProductsServices = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Building Materials', path: '' }
  ];

  const productsList = [
    {
      title: 'Marine Plywood',
      path: '/products/marine-plywood',
      desc: 'Durable, BWP moisture-resistant plywood designed for marine environments, exterior cladding, and wet area joinery across Dubai and the UAE.',
      img: 'https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_44_02_AM',
      specs: ['Boiling Water Proof (BWP)', '6mm - 18mm Thickness', 'Zero Core Gaps']
    },
    {
      title: 'Commercial Plywood',
      path: '/products/commercial-plywood',
      desc: 'Versatile MR grade plywood suitable for indoor furniture, office partitions, wall paneling, and interior fit-out contracts.',
      img: 'https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_44_14_AM',
      specs: ['Moisture Resistant (MR Grade)', 'High Screw Holding', 'Smooth Sanded Finish']
    },
    {
      title: 'MDF Boards',
      path: '/products/mdf-boards',
      desc: 'Smooth Medium Density Fiberboard panels for cabinetry, furniture manufacturing, CNC wall routing, and interior decoration.',
      img: 'https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_44_25_AM',
      specs: ['Plain & Melamine MDF', 'MR Green Core Available', 'Uniform Core Density']
    },
    {
      title: 'Wood & Timber',
      path: '/products/wood-timber',
      desc: 'High-grade natural sawn timber, hardwoods, and softwoods supplied for civil construction, carpentry, and architectural woodwork.',
      img: 'https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_44_45_AM',
      specs: ['Kiln-Dried Seasoning', 'Structural & Joinery Grades', 'Custom Dimensions']
    },
    {
      title: 'Deformed Steel',
      path: '/products/deformed-steel',
      desc: 'High-strength deformed steel rebar for concrete reinforcement and structural stability in construction projects.',
      img: '/images/deformed_steel.jpg',
      specs: ['High Tensile Strength', 'Various Diameters', 'Standard Grade']
    },
    {
      title: 'BRC Wire Mesh',
      path: '/products/brc-wire-mesh',
      desc: 'BRC wire mesh for reliable concrete reinforcement in foundations, slabs, and structural applications.',
      img: '/images/brc_wire_mesh.jpg',
      specs: ['Welded Steel Fabric', 'Standard Sheet Sizes', 'Uniform Spacing']
    },
    {
      title: 'OPC Cement',
      path: '/products/opc-cement',
      desc: 'Ordinary Portland Cement (OPC) for general construction, masonry, and high-strength structural concrete works.',
      img: '/images/opc_cement.jpg',
      specs: ['High Compressive Strength', 'General Purpose', 'Fast Setting']
    },
    {
      title: 'PLC Cement',
      path: '/products/plc-cement',
      desc: 'Portland Limestone Cement (PLC) offering sustainable, high-performance binding for various construction needs.',
      img: '/images/plc_cement.jpg',
      specs: ['Eco-Friendly', 'Enhanced Workability', 'Consistent Quality']
    },
    {
      title: 'White Cement',
      path: '/products/white-cement',
      desc: 'High-quality white cement perfect for architectural finishes, decorative concrete, and tile grouting.',
      img: '/images/white_cement.jpg',
      specs: ['Bright White Finish', 'High Fineness', 'Superior Bonding']
    }
  ];

  const serviceCapabilities = [
    { 
      icon: <FileCheck size={36} className="text-mme-gold" />, 
      title: 'PRODUCT SOURCING', 
      desc: 'Assisting project managers, procurement heads, and joinery factories in identifying precise wood grades, species, and board specifications matching BOQ compliance.' 
    },
    { 
      icon: <Box size={36} className="text-mme-gold" />, 
      title: 'BULK WOOD & PLYWOOD SUPPLY', 
      desc: 'Equipped to fulfill large volume orders of marine plywood, commercial plywood, MDF, and structural timber for major commercial and residential developments across the UAE.' 
    },
    { 
      icon: <Building2 size={36} className="text-mme-gold" />, 
      title: 'PROJECT MATERIAL SUPPLY', 
      desc: 'Consolidated material procurement for multi-phase interior fit-outs, hospitality refurbishments, and mega infrastructure projects.' 
    },
    { 
      icon: <Truck size={36} className="text-mme-gold" />, 
      title: 'LOGISTICS & DELIVERY', 
      desc: 'Coordinated transportation ensuring safe, prompt delivery of stacked timber and board materials directly to job sites in Dubai, Ajman, Sharjah, and Abu Dhabi.' 
    },
    { 
      icon: <Hammer size={36} className="text-mme-gold" />, 
      title: 'CONTRACTOR & JOINERY SUPPLY', 
      desc: 'Dedicated account support and recurring supply schedules customized for interior fit-out contractors, carpentry workshops, and furniture manufacturers.' 
    },
    { 
      icon: <ShieldCheck size={36} className="text-mme-gold" />, 
      title: 'COMMERCIAL MATERIAL SUPPLY', 
      desc: 'Transparent pricing, material test certificates upon request, and consistent batch quality to keep commercial projects running smoothly on schedule.' 
    }
  ];

  return (
    <>
      <SEO 
        title="Building Materials & Wood Supply Services UAE | MME Trading"
        description="MME Trading specializes in building and construction materials trading, supplying cement, steel, plywood, MDF boards, and timber across Dubai and the UAE."
        canonical="/products-services"
      />

      {/* HERO */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-10 bg-mme-charcoal overflow-hidden border-b border-white/5 flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_43_48_AM" alt="MME Trading Products & Services Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">MME TRADING MATERIAL CAPABILITIES</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6">
              BUILDING & CONSTRUCTION<br/>
              <span className="text-mme-gold">MATERIALS TRADING UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 font-light max-w-3xl leading-relaxed">
              MME Trading is a dependable trading partner based in Ajman, specializing in building and construction materials trading. We deliver high-quality steel rebar, cement, wire mesh, marine plywood, commercial plywood, MDF boards, and quality timber to contractors and developers serving Dubai and across the United Arab Emirates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE PRODUCT SECTIONS */}
      <section className="pt-8 pb-8 md:pt-10 md:pb-10 bg-mme-deepBlack">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-8 md:mb-10">
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">OUR BUILDING MATERIALS</span>
            <h2 className="font-heading text-3xl md:text-5xl uppercase text-white">SELECT A MATERIAL SPECIFICATION</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {productsList.map((product) => (
              <div key={product.title} className="bg-mme-charcoal border border-white/5 hover:border-mme-gold/40 transition-colors flex flex-col group overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={product.img} 
                    alt={`${product.title} supplier MME Trading UAE`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mme-charcoal via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-2xl md:text-3xl text-white group-hover:text-mme-gold transition-colors mb-3 uppercase">
                    {product.title}
                  </h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {product.desc}
                  </p>
                  
                  <div className="mb-6 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, i) => (
                        <span key={i} className="text-[11px] font-mono bg-mme-deepBlack text-mme-gold/80 px-2.5 py-1 border border-white/5">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={product.path} 
                    className="inline-flex items-center space-x-2 text-mme-gold hover:text-white font-semibold text-sm tracking-wider uppercase transition-colors"
                  >
                    <span>VIEW DETAILED PRODUCT SPECIFICATIONS</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES CAPABILITIES */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 bg-mme-warmWhite text-mme-deepBlack">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-mme-deepGold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">COMPLETE SUPPLY CHAIN SOLUTIONS</span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase leading-[1.1] mb-4">
              MORE THAN JUST MATERIALS
            </h2>
            <p className="text-mme-charcoal/80 font-light text-lg">
              We focus on dependable service, transparent material sourcing, and efficient delivery to keep your construction and interior projects moving on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCapabilities.map((srv, idx) => (
              <div key={idx} className="bg-white p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{srv.icon}</div>
                <h3 className="font-heading text-xl uppercase mb-3 text-mme-deepBlack">{srv.title}</h3>
                <p className="text-mme-charcoal/70 font-light text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 bg-mme-charcoal border-t border-white/5 text-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_44_58_AM" alt="Wood materials supply" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-5xl uppercase mb-6 text-white">
            NEED A SPECIFIC WOOD SPECIFICATION FOR YOUR PROJECT?
          </h2>
          <p className="text-lg text-white/60 font-light mb-8">
            Send us your required product, dimensions, thickness, and quantity. Our team serving Dubai and the UAE will provide a competitive quotation.
          </p>
          <Link to="/contact" className="inline-flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-10 py-5 font-semibold tracking-wider text-sm hover:bg-mme-deepGold transition-colors">
            <span>REQUEST PRICING & QUOTATION</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductsServices;

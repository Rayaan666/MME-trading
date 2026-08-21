import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const Home = () => {
  const whyReasons = [
    { num: '01', title: 'HIGH QUALITY', desc: 'Carefully selected materials suitable for demanding project requirements.' },
    { num: '02', title: 'WIDE RANGE', desc: 'Multiple timber and engineered wood solutions for different applications.' },
    { num: '03', title: 'RELIABLE SERVICE', desc: 'Professional support from initial enquiry through order fulfilment.' },
    { num: '04', title: 'TIMELY DELIVERY', desc: 'Efficient logistics designed to keep projects moving across Dubai and the UAE.' }
  ];

  const products = [
    { 
      num: '01', 
      title: 'Marine Plywood Supplier in UAE', 
      name: 'Marine Plywood',
      path: '/products/marine-plywood',
      desc: 'Durable, moisture-resistant BWP grade plywood ideal for marine environments, exterior applications, and high-moisture interiors.', 
      img: 'https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_19_2026_11_49_54_PM',
      alt: 'Marine plywood supplied by MME Trading in UAE'
    },
    { 
      num: '02', 
      title: 'Commercial Plywood Supplier in UAE', 
      name: 'Commercial Plywood',
      path: '/products/commercial-plywood',
      desc: 'Strong, reliable MR grade plywood suitable for furniture manufacturing, interior fit-outs, partitions, and joinery.', 
      img: 'https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_03_50_AM',
      alt: 'Stacked commercial plywood for construction and interior projects'
    },
    { 
      num: '03', 
      title: 'MDF Board Supplier in UAE', 
      name: 'MDF Boards',
      path: '/products/mdf-boards',
      desc: 'Smooth surface engineered fiberboard panels with consistent quality for cabinetry, CNC wall paneling, and interior decoration.', 
      img: 'https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_04_41_AM',
      alt: 'MDF boards for furniture and interior fit-out projects in UAE'
    },
    { 
      num: '04', 
      title: 'Wood & Timber Supplier in UAE', 
      name: 'Wood & Timber',
      path: '/products/wood-timber',
      desc: 'Quality natural sawn lumber, hardwood, and softwood supplied for civil construction, carpentry, and architectural woodwork.', 
      img: 'https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_12_05_23_AM',
      alt: 'Timber wood supplier Dubai UAE MME Trading'
    },
    { 
      num: '05', 
      title: 'Deformed Steel Supplier in UAE', 
      name: 'Deformed Steel',
      path: '/products/deformed-steel',
      desc: 'High-strength deformed steel rebar for concrete reinforcement and structural stability in construction projects.', 
      img: '/images/deformed_steel.jpg',
      alt: 'Deformed steel supplier Dubai UAE MME Trading'
    },
    { 
      num: '06', 
      title: 'BRC Wire Mesh Supplier in UAE', 
      name: 'BRC Wire Mesh',
      path: '/products/brc-wire-mesh',
      desc: 'BRC wire mesh for reliable concrete reinforcement in foundations, slabs, and structural applications.', 
      img: '/images/brc_wire_mesh.jpg',
      alt: 'BRC Wire Mesh supplier Dubai UAE MME Trading'
    },
    { 
      num: '07', 
      title: 'OPC Cement Supplier in UAE', 
      name: 'OPC Cement',
      path: '/products/opc-cement',
      desc: 'Ordinary Portland Cement (OPC) for general construction, masonry, and high-strength structural concrete works.', 
      img: '/images/opc_cement.jpg',
      alt: 'OPC Cement supplier Dubai UAE MME Trading'
    },
    { 
      num: '08', 
      title: 'PLC Cement Supplier in UAE', 
      name: 'PLC Cement',
      path: '/products/plc-cement',
      desc: 'Portland Limestone Cement (PLC) offering sustainable, high-performance binding for various construction needs.', 
      img: '/images/plc_cement.jpg',
      alt: 'PLC Cement supplier Dubai UAE MME Trading'
    },
    { 
      num: '09', 
      title: 'White Cement Supplier in UAE', 
      name: 'White Cement',
      path: '/products/white-cement',
      desc: 'High-quality white cement perfect for architectural finishes, decorative concrete, and tile grouting.', 
      img: '/images/white_cement.jpg',
      alt: 'White Cement supplier Dubai UAE MME Trading'
    }
  ];

  const industries = [
    'Construction', 
    'Interior Fit-Out', 
    'Furniture Manufacturing', 
    'Marine Projects', 
    'Joinery & Carpentry', 
    'Commercial Developments', 
    'Residential Projects', 
    'Hospitality'
  ];

  return (
    <>
      <SEO 
        title="Building Materials, Wood & Plywood Supplier in Dubai & UAE | MME Trading"
        description="MME Trading is a leading building and construction materials trading company, supplying marine plywood, commercial plywood, MDF boards, timber, steel, and cement across Dubai and the UAE."
        canonical="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-mme-deepBlack pt-36 pb-16 md:pt-48 md:pb-20 flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_19_2026_11_49_03_PM" alt="MME Trading Wood Supplier" className="w-full h-full object-cover object-center" />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-10 w-px h-64 bg-mme-gold"></div>
          <div className="absolute top-1/4 left-10 w-32 h-px bg-mme-gold"></div>
          <span className="absolute top-[22%] left-12 text-[10px] text-mme-gold font-mono tracking-widest">PLYWOOD / 18MM</span>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center w-full">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-[1px] bg-mme-gold"></div>
              <span className="text-mme-gold text-xs font-semibold tracking-[0.2em] uppercase">MME TRADING FZE LLC</span>
            </motion.div>

            {/* H1 - Exact match with SEO Strategy */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mb-6 text-mme-white uppercase">
              BUILDING & CONSTRUCTION<br />
              <span className="text-white/80">MATERIALS TRADING.</span><br />
              <span className="text-mme-gold">BUILT FOR EVERY PROJECT.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg md:text-xl text-white/70 max-w-3xl mb-8 leading-relaxed font-light">
              MME Trading is a trusted partner for building and construction materials trading, serving Dubai and across the UAE. We provide steel, cement, wire mesh, marine plywood, commercial plywood, MDF, and quality timber for all construction, interior, and commercial projects.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/products-services" className="group flex items-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold">
                <span>EXPLORE BUILDING MATERIALS</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/contact" className="group flex items-center space-x-3 text-mme-white hover:text-mme-gold px-8 py-4 font-semibold tracking-wider text-sm border border-white/20 hover:border-mme-gold transition-all duration-300">
                <span>REQUEST A QUOTE</span>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="mt-8 text-xs font-mono text-white/40 tracking-wider">
              Building Materials • Deformed Steel • Cement • BRC Wire Mesh • Plywood & MDF • Timber & Wood • UAE Delivery
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="bg-mme-warmWhite text-mme-deepBlack py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-mme-gold"></div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="pl-8">
                <div className="text-mme-deepGold text-xs font-bold tracking-[0.2em] mb-3">WHO WE ARE</div>
                
                {/* H2 - Structured for Local SEO */}
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-4">
                  BUILDING, CONSTRUCTION &<br/>WOOD PRODUCTS IN THE UAE.
                </h2>
                
                <p className="text-base md:text-lg text-mme-charcoal/80 leading-relaxed font-light mb-4">
                  MME Trading FZE LLC is based in Ajman and offers comprehensive building and construction materials trading, supplying dependable construction, wood, and timber products for commercial, residential, and marine projects across Dubai, Sharjah, Abu Dhabi, and the wider UAE. From steel rebar, wire mesh, and cement to marine-grade plywood, commercial plywood, MDF boards, and natural timber, we focus on consistent quality, dependable service and efficient delivery.
                </p>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="order-1 lg:order-2 h-[400px] w-full relative group overflow-hidden">
              <img 
                src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_19_2026_11_49_51_PM" 
                alt="Stacked commercial plywood for construction and interior fit out projects in UAE" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
              <div className="absolute inset-0 border border-black/10 m-4 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY MME */}
      <section className="bg-mme-charcoal pt-12 pb-6 md:pt-16 md:pb-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-8 md:mb-10">
            {/* H2 - Structured for Local SEO */}
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] uppercase text-white/90">
              RELIABLE WOOD SUPPLY<br/>
              <span className="text-mme-gold">ACROSS DUBAI & UAE.</span>
            </h2>
          </div>
          <div className="flex flex-col">
            {whyReasons.map((reason, idx) => (
              <motion.div 
                key={reason.num} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative py-6 border-t border-white/10 hover:border-mme-gold transition-colors duration-500 cursor-default"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative z-10">
                  <span className="font-heading text-5xl md:text-6xl text-white/10 group-hover:text-mme-gold transition-colors duration-500">{reason.num}</span>
                  <h3 className="font-heading text-2xl md:text-3xl text-white tracking-wide min-w-[300px] group-hover:text-mme-gold transition-colors duration-500">{reason.title}</h3>
                  <p className="text-white/60 font-light text-lg md:text-xl max-w-2xl group-hover:text-white transition-colors duration-500">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PRODUCTS */}
      <section className="bg-mme-deepBlack pt-8 pb-12 md:pt-10 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6 md:mb-8 text-center">
          <div className="text-mme-gold text-xs font-bold tracking-[0.2em] mb-2 uppercase">OUR MATERIALS</div>
          {/* H2 - Structured Hierarchy */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.1]">
            OUR PREMIUM<br/><span className="text-white/60">BUILDING MATERIALS</span>
          </h2>
        </div>

        <div className="flex flex-col space-y-16 md:space-y-20">
          {products.map((product, idx) => (
            <div key={product.num} className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-3/5 relative group"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={product.img} 
                      alt={product.alt} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                      loading="lazy"
                    />
                    <div className="absolute inset-4 border border-mme-gold/0 group-hover:border-mme-gold/30 transition-colors duration-500 pointer-events-none"></div>
                  </div>
                  <div className="absolute -bottom-10 -right-4 lg:-right-10 font-heading text-[8rem] lg:text-[12rem] leading-none text-white/5 pointer-events-none select-none z-0">
                    {product.num}
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-2/5 relative z-10"
                >
                  <div className="w-8 h-[1px] bg-mme-gold mb-6"></div>
                  
                  {/* H3 - Exact product keyword headings */}
                  <h3 className="font-heading text-2xl lg:text-3xl uppercase mb-4 tracking-wide text-white group-hover:text-mme-gold transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-white/60 font-light text-lg mb-8 leading-relaxed">{product.desc}</p>
                  
                  <Link to={product.path} className="group inline-flex items-center space-x-2 text-mme-gold hover:text-white font-semibold tracking-widest text-sm transition-colors uppercase">
                    <span>VIEW {product.name} SPECIFICATIONS</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIES GRID */}
      <section className="relative py-12 md:py-16 bg-mme-charcoal overflow-hidden border-y border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* H2 - Structured Hierarchy */}
          <h2 className="font-heading text-3xl md:text-5xl text-center uppercase mb-10">
            WOOD SOLUTIONS FOR CONSTRUCTION, INTERIORS & JOINERY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10">
            {industries.map((ind, i) => (
              <motion.div 
                key={ind}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="aspect-square border-b border-r border-white/10 p-6 flex items-end group hover:bg-mme-gold transition-colors duration-300 relative overflow-hidden"
              >
                <h3 className="font-heading text-lg md:text-xl uppercase group-hover:text-mme-deepBlack transition-colors relative z-10">
                  {ind}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOURCE TO SITE */}
      <section className="py-12 md:py-16 bg-mme-deepBlack relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-10">
          {/* H2 - Structured Hierarchy */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.1] mb-4">
            FROM SOURCE<br/><span className="text-mme-gold">TO SITE.</span>
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            Reliable procurement and efficient delivery ensure the right wood materials reach your project in Dubai, Ajman, or across the UAE when you need them.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 h-[1px] bg-mme-gold -translate-y-1/2 z-0 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 space-y-8 md:space-y-0">
            {['SOURCE', 'QUALITY CHECK', 'WAREHOUSE', 'ORDER PROCESSING', 'DELIVERY'].map((step, idx) => (
              <div key={step} className="flex flex-row md:flex-col items-center md:items-center space-x-4 md:space-x-0 group">
                <div className="w-4 h-4 bg-mme-deepBlack border-2 border-mme-gold rounded-full md:mb-4 group-hover:bg-mme-gold transition-colors shadow-[0_0_15px_rgba(214,166,42,0.3)]"></div>
                <span className="font-heading text-sm md:text-base tracking-widest text-white/80 group-hover:text-mme-gold transition-colors">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROJECT VISUAL */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-mme-deepBlack z-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Interior architecture and wood fit out in UAE" className="w-full h-full object-cover opacity-60" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-mme-deepBlack via-transparent to-transparent z-10"></div>
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center text-center">
          <span className="font-heading text-4xl md:text-5xl lg:text-7xl uppercase text-white drop-shadow-2xl">
            MATERIALS BEHIND <br/><span className="text-mme-gold">GREAT PROJECTS.</span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;

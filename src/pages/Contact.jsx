import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: initialProduct,
    quantity: '',
    dimensions: '',
    location: '',
    message: ''
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '' }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MME Trading",
    "description": "Get in touch with MME Trading for wood, plywood, MDF, and timber supply in Dubai, Ajman, and across the UAE.",
    "mainEntity": {
      "@type": "Organization",
      "name": "MME Trading FZE LLC",
      "telephone": "+971557354031",
      "email": "info@mmetrading.com",
      "url": "https://www.mmetrading.com/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ajman",
        "addressCountry": "AE"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact MME Trading | Wood Supplier in UAE"
        description="Contact MME Trading for wood, marine plywood, commercial plywood, MDF, and timber solutions in Dubai, Ajman, and across the UAE. Request a quote today."
        canonical="/contact"
        schema={contactSchema}
      />

      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-20 bg-mme-deepBlack border-b border-white/5 overflow-hidden flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          <img src="https://res.cloudinary.com/uw8ii9wg/image/upload/ChatGPT_Image_Aug_20_2026_10_35_47_AM" alt="MME Trading Contact Hero" className="w-full h-full object-cover object-center" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">GET IN TOUCH</span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] mb-6 text-white">
              CONTACT YOUR WOOD & PLYWOOD<br/>
              <span className="text-mme-gold">SUPPLIER IN UAE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl">
              Tell us what wood materials your project requires and our team will provide expert advice and a fast, competitive quotation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SPLIT SECTION */}
      <section className="py-16 md:py-24 bg-mme-deepBlack">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 bg-mme-charcoal border border-white/5 overflow-hidden">
            
            {/* LEFT: Info & Location */}
            <div className="lg:col-span-2 relative p-8 md:p-12 lg:p-14 flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="relative z-10">
                <span className="text-mme-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">HEAD OFFICE & DISTRIBUTION</span>
                <h2 className="font-heading text-3xl uppercase mb-8 text-white">MME TRADING FZE LLC</h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start space-x-5 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-mme-gold group-hover:bg-mme-gold group-hover:text-mme-deepBlack transition-colors shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest text-white/40 mb-0.5 uppercase">Phone</div>
                      <a href="tel:0557354031" className="text-base font-light text-white hover:text-mme-gold transition-colors">055 735 4031</a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-5 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-mme-gold group-hover:bg-mme-gold group-hover:text-mme-deepBlack transition-colors shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest text-white/40 mb-0.5 uppercase">Email</div>
                      <a href="mailto:info@mmetrading.com" className="text-base font-light text-white hover:text-mme-gold transition-colors">info@mmetrading.com</a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-5 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-mme-gold group-hover:bg-mme-gold group-hover:text-mme-deepBlack transition-colors shrink-0">
                      <Globe size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest text-white/40 mb-0.5 uppercase">Website</div>
                      <a href="https://www.mmetrading.com/" className="text-base font-light text-white hover:text-mme-gold transition-colors">www.mmetrading.com</a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-5 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-mme-gold group-hover:bg-mme-gold group-hover:text-mme-deepBlack transition-colors shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest text-white/40 mb-0.5 uppercase">Location & Service Area</div>
                      <div className="text-base font-light text-white">Based in Ajman, serving Dubai, Sharjah, Abu Dhabi & wider UAE</div>
                    </div>
                  </li>

                  <li className="flex items-start space-x-5 group">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-mme-gold group-hover:bg-mme-gold group-hover:text-mme-deepBlack transition-colors shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest text-white/40 mb-0.5 uppercase">Business Hours</div>
                      <div className="text-base font-light text-white">Mon - Sat: 8:00 AM - 6:00 PM</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
                <p className="text-xs font-mono text-white/40 leading-relaxed">
                  Fast material quotation and delivery dispatch for contractors, interior firms, and joineries across all Emirates.
                </p>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-14 bg-white/[0.02]">
              <h2 className="font-heading text-2xl uppercase mb-2 text-white">REQUEST A MATERIAL QUOTE</h2>
              <p className="text-white/50 font-light text-sm mb-8">Fill out your specifications below and our commercial team will respond promptly.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm" 
                      placeholder="Your Full Name" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm" 
                      placeholder="Company / Contracting LLC" 
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm" 
                      placeholder="name@company.com" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm" 
                      placeholder="+971 50 123 4567" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Product Required *</label>
                    <select 
                      required
                      className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm appearance-none"
                      value={formData.product}
                      onChange={e => setFormData({...formData, product: e.target.value})}
                    >
                      <option value="">Select a Product</option>
                      <option value="Marine Plywood">Marine Plywood</option>
                      <option value="Commercial Plywood">Commercial Plywood</option>
                      <option value="MDF Boards">MDF Boards</option>
                      <option value="Wood / Timber">Wood / Timber</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Required Quantity</label>
                    <input 
                      type="text" 
                      className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm" 
                      placeholder="e.g. 200 Sheets / 50 CBM" 
                      value={formData.quantity}
                      onChange={e => setFormData({...formData, quantity: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Dimensions / Thickness</label>
                    <input 
                      type="text" 
                      className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm" 
                      placeholder="e.g. 18mm, 8x4 ft" 
                      value={formData.dimensions}
                      onChange={e => setFormData({...formData, dimensions: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Project Delivery Location</label>
                    <input 
                      type="text" 
                      className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm" 
                      placeholder="e.g. Dubai Investment Park / Ajman" 
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Message / Specifications</label>
                  <textarea 
                    rows="3" 
                    className="w-full bg-mme-deepBlack border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-mme-gold transition-colors text-sm resize-none" 
                    placeholder="Describe any specific moisture requirements, surface finishes, or delivery timelines..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest text-white/60 uppercase">Upload BOQ / Specification File</label>
                  <div className="w-full border border-dashed border-white/20 hover:border-mme-gold transition-colors bg-mme-deepBlack px-4 py-6 text-center cursor-pointer">
                    <span className="text-white/40 font-light text-sm">Click to upload BOQ / Drawing (PDF, DOCX, XLSX up to 10MB)</span>
                  </div>
                </div>

                <button type="submit" className="group w-full flex items-center justify-center space-x-3 bg-mme-gold text-mme-deepBlack px-8 py-4 font-semibold tracking-wider text-sm transition-all duration-300 hover:bg-mme-deepGold mt-8">
                  <span>REQUEST QUOTE</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

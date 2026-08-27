import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { title: 'Marine Plywood', path: '/products/marine-plywood' },
    { title: 'Commercial Plywood', path: '/products/commercial-plywood' },
    { title: 'MDF Boards', path: '/products/mdf-boards' },
    { title: 'Wood & Timber', path: '/products/wood-timber' }
  ];

  return (
    <footer className="relative bg-mme-charcoal pt-20 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="font-heading font-bold text-[15vw] leading-none whitespace-nowrap text-white">
          MME TRADING
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Tagline */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src="https://res.cloudinary.com/tejjggbw/image/upload/Untitled_design_-_2026-08-21T182953.259" alt="MME Trading Logo" className="h-20 md:h-24 w-auto object-contain" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-light">
              Building and construction materials trading, supplying steel, cement, wire mesh, plywood, MDF and timber serving projects across Dubai and the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6 tracking-wide text-white">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-mme-gold text-sm transition-colors font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products-services" className="text-white/60 hover:text-mme-gold text-sm transition-colors font-light">
                  Building Materials
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-white/60 hover:text-mme-gold text-sm transition-colors font-light">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-mme-gold text-sm transition-colors font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg mb-6 tracking-wide text-white">BUILDING MATERIALS</h4>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.title}>
                  <Link 
                    to={item.path}
                    className="text-white/60 hover:text-mme-gold text-sm transition-colors font-light"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-6 tracking-wide text-white">CONTACT</h4>
            <ul className="space-y-3 text-sm text-white/60 font-light">
              <li>
                <span className="text-white/40 text-xs block font-mono">LOCATION</span>
                Ajman, UAE
              </li>
              <li>
                <span className="text-white/40 text-xs block font-mono">PHONE</span>
                <div className="flex flex-col space-y-1">
                  <a href="tel:0557354031" className="hover:text-mme-gold transition-colors">
                    055 735 4031
                  </a>
                  <a href="tel:0503478428" className="hover:text-mme-gold transition-colors">
                    050 347 8428
                  </a>
                </div>
              </li>
              <li>
                <span className="text-white/40 text-xs block font-mono">EMAIL</span>
                <a href="mailto:info@mmetrading.com" className="hover:text-mme-gold transition-colors">
                  info@mmetrading.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs mb-4 md:mb-0">
            &copy; {currentYear} MME TRADING FZE LLC. All rights reserved.
          </p>
          <p className="font-heading text-mme-gold tracking-widest text-sm uppercase">
            Building Stronger Spaces, Together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

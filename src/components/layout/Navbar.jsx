import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Building Materials', path: '/products-services' },
  { title: 'Blogs', path: '/blogs' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-mme-charcoal/90 backdrop-blur-md py-4 border-b border-white/5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-50 group flex items-center">
            <img src="https://res.cloudinary.com/tejjggbw/image/upload/Untitled_design_-_2026-08-21T182953.259" alt="MME Trading Logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="relative group text-sm font-medium tracking-wide"
              >
                <span className={`transition-colors duration-300 ${location.pathname === link.path ? 'text-mme-gold' : 'text-mme-white group-hover:text-mme-gold'}`}>
                  {link.title}
                </span>
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-mme-gold transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-mme-gold hover:bg-mme-deepGold text-mme-deepBlack px-6 py-2.5 text-sm font-semibold tracking-wider transition-colors duration-300"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 text-mme-white hover:text-mme-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-mme-deepBlack flex flex-col justify-center px-6 pt-20"
          >
            <div className="max-w-md mx-auto w-full flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="font-heading text-4xl uppercase tracking-wider hover:text-mme-gold transition-colors block"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-8 border-t border-white/10"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-between bg-mme-gold text-mme-deepBlack px-6 py-4 font-semibold tracking-wider text-lg"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

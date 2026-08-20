import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = "971557354031"; // 055 735 4031 without leading zero + country code
  const defaultMessage = encodeURIComponent("Hello MME Trading, I would like to enquire about your wood and timber products.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-mme-gold text-mme-deepBlack shadow-[0_4px_20px_rgba(214,166,42,0.3)] hover:bg-mme-deepGold transition-colors duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-300" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-mme-charcoal text-mme-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;

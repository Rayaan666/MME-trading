import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Breadcrumbs = ({ items }) => {
  // items format: [{ name: 'Home', path: '/' }, { name: 'Products', path: '/products-services' }, { name: 'Marine Plywood', path: '' }]

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.path ? { "item": `https://www.mmetrading.com${item.path}` } : {})
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbListSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-xs font-mono tracking-wider text-white/50">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              {idx > 0 && <ChevronRight size={12} className="text-mme-gold/60" />}
              {item.path && idx < items.length - 1 ? (
                <Link to={item.path} className="hover:text-mme-gold transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-mme-gold">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;

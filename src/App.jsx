import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductsServices from './pages/ProductsServices';
import MarinePlywood from './pages/products/MarinePlywood';
import CommercialPlywood from './pages/products/CommercialPlywood';
import MDFBoards from './pages/products/MDFBoards';
import WoodTimber from './pages/products/WoodTimber';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products-services" element={<ProductsServices />} />
            
            {/* Dedicated Product Landing Pages */}
            <Route path="/products/marine-plywood" element={<MarinePlywood />} />
            <Route path="/products/commercial-plywood" element={<CommercialPlywood />} />
            <Route path="/products/mdf-boards" element={<MDFBoards />} />
            <Route path="/products/wood-timber" element={<WoodTimber />} />

            {/* Blog Routes */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            {/* Contact Route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;

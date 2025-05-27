// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Reviews from './Pages/Reviews';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Faqs from './Pages/faqs';
import LatestNews from './Pages/LatestNews';
import ProductDetails from './Pages/ProductDetails';
import FooterImageFeed from './Components/Footer/FooterImageFeed';
import SearchResults from './Pages/SearchResults';
import CheckoutPage from './Pages/CheckoutPage';
import Terms from './Pages/Terms';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Careers from './Pages/Careers';
import OurStory from './Pages/OurStory';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation runs only once per element
    });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>

      <FooterImageFeed />
      <Footer />
    </>
  );
}

export default App;

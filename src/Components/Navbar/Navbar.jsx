import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useCart } from "../../Context/CartContext";
import CartDrawer from "../Cart/CartDrawer";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const {
    cartCount,
    isCartOpen,
    openCartDrawer,
    closeCartDrawer
  } = useCart();

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setSearchOpen(false);
    }
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  return (
    <>
      <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className='container'>
          <div className='top_nav_sec'>
            <div className='nav_left'>
              <div className='nav_logo'>
              <Link to="/"><img className='main_top_logo' src={logo} alt='logo' height="56px" /></Link>
              </div>
              <ul className='nav_menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className='nav_cart_sec'>
              <button className='search_icon' onClick={() => setSearchOpen(!searchOpen)}>
                <IoSearchOutline />
              </button>

              {searchOpen && (
                <form className='search_form' onSubmit={handleSearchSubmit}>
                  <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search products...'
                  />
                </form>
              )}

              <div className='cart_sec' onClick={openCartDrawer}>
                <PiShoppingCartSimple />
                <div className='cart_count'>{cartCount}</div>
              </div>

              <button className='hamburger' onClick={() => setMobileMenuOpen(true)} aria-label="Toggle Menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                  <rect x="10" width="20" height="2" fill="currentColor"></rect>
                  <rect x="5" y="7" width="25" height="2" fill="currentColor"></rect>
                  <rect x="10" y="14" width="20" height="2" fill="currentColor"></rect>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile_menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="close-icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <line x1="4" y1="4" x2="20" y2="20" stroke="black" strokeWidth="2"/>
            <line x1="20" y1="4" x2="4" y2="20" stroke="black" strokeWidth="2"/>
          </svg>
        </button>
        <ul>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</Link></li>
          <li><Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="body_overlay"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={closeCartDrawer} />
    </>
  );
};

export default Navbar;

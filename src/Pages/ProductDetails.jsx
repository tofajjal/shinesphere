import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from "../Context/CartContext";
import './ProductDetails.css';
import MarqueSection from '../Components/MarqueSection/MarqueSection';
import HappyCustomerSection from '../Components/HappyCustomerSection/HappyCustomerSection';
import TraditionSection from '../Components/TraditionSection/TraditionSection';
import { MdOutlineLocalShipping } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cartItems, openCartDrawer } = useCart();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const selectedProduct = storedProducts.find(p => p.id === parseInt(productId));
    if (selectedProduct) setProduct(selectedProduct);
  }, [productId]);

  const isInCart = cartItems.some(item => item.id === parseInt(productId));

  const handleAddToCart = () => {
    if (product && !isInCart) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const handleBuyNow = () => {
    if (product && !isInCart) {
      addToCart({ ...product, quantity: 1 });
    }
    openCartDrawer();
  };

  return (
    <div>
      <div className="product-details-section">
        <div className="container product-details-container">
          <div className="product-image">
            <div className='main_pro_img'>
            {product && <img src={product.image} alt={product.name} />}
            <div className='money_back'>
              <h3><span>30</span><br></br>Day </h3>
              <p>Money-Back<br></br>Guarantee</p>
            </div>
            </div>
            <div className='row pro_bottom_sec'>
                <div className='col-12 col-md-4'>
                  <div className='pro_bottom_sec_box'>
                    <h3>Artisan Crafted</h3>
                    <p>Made by skilled hands, not machines, with meticulous attention to detail.</p>
                  </div>
                </div>
                <div className='col-12 col-md-4'>
                  <div className='pro_bottom_sec_box'>
                    <h3>Ethically Sourced</h3>
                    <p>Materials responsibly obtained to support sustainable and fair practices.</p>
                  </div>
                </div>
                <div className='col-12 col-md-4'>
                  <div className='pro_bottom_sec_box'>
                    <h3>One-of-a-Kind</h3>
                    <p>Each piece is unique —no mass production, no replicas.</p>
                  </div>
                </div>
            </div>
          </div>

          <div className="product-info">
            {product ? (
              <>
                <p className="brand-name">ShineSphere</p>
                <h1 className="product-name" data-aos="fade-up" data-aos-duration="500">{product.name}</h1>
                <p className="product-description" data-aos="fade-up" data-aos-duration="600">{product.shortDesc}</p>

                
                <div className='pro_details_desc' data-aos="fade-up" data-aos-duration="700">
                  <strong>Uniquely One-of-a-Kind</strong>
                  <p>Each piece is individually made, ensuring no two items are exactly alike.</p>
                </div>
                <div className='pro_details_desc' data-aos="fade-up" data-aos-duration="800">
                  <strong>Crafted by Skilled Artisans</strong>
                  <p>Handmade with love and precision by experienced craftsmen who pour soul into every detail.</p>
                </div>
               <div className='pro_details_desc' data-aos="fade-up" data-aos-duration="900">
                  <strong>High Attention to Detail</strong>
                  <p>Intricate designs and fine finishes that mass-produced pieces can't replicate.</p>
                </div>

                <p className="product-price" data-aos="fade-up" data-aos-duration="1000">
                  <strong>Price: ${product.price.toFixed(2)}</strong> 
                  <span className="original-price">${(product.price + 5).toFixed(2)}</span>
                </p>

                <div className="action-buttons">
                  <div data-aos="fade-up" data-aos-duration="1100">
                  <button
                    className="btn btn-outline"
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    style={{
                      cursor: isInCart ? 'not-allowed' : 'pointer',
                      backgroundColor: isInCart ? '#ccc' : ''
                    }}
                  >
                    {isInCart ? "Already in Cart" : "Add To Cart"}
                  </button>
                  </div>
                  <div className='animate-on-load'>
                  <button className="btn btn-filled" onClick={handleBuyNow}>
                    Buy Now
                  </button>
                  </div>
                </div>

                <div className="shipping-notes animate-on-load">
                  <div><CiDiscount1 /> Free shipping on orders over $100</div>
                  <div><MdOutlineLocalShipping /> 30-day returns & exchanges</div>
                </div>
              </>
            ) : (
              <p>Product not found</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <MarqueSection />
        <HappyCustomerSection />
        <TraditionSection/>
      </div>
    </div>
  );
};

export default ProductDetails;

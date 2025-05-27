import React, { useState, useEffect } from 'react';
import './CheckoutPage.css';
import { useCart } from '../Context/CartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CheckoutPage = () => {
  const { clearCart } = useCart();

  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [cartData, setCartData] = useState(() => {
    return JSON.parse(localStorage.getItem('checkoutData')) || { items: [], total: 0 };
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('checkoutData');
    setCartData({ items: [], total: 0 });
    const event = new Event('cartDataUpdated');
    window.dispatchEvent(event);
    setIsSuccess(true);
    clearCart();
    localStorage.removeItem("products");
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const updateCartFromLocalStorage = () => {
      const updatedCart = JSON.parse(localStorage.getItem('checkoutData')) || { items: [], total: 0 };
      setCartData(updatedCart);
    };

    window.addEventListener('cartDataUpdated', updateCartFromLocalStorage);
    return () => {
      window.removeEventListener('cartDataUpdated', updateCartFromLocalStorage);
    };
  }, []);

 
  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSuccess]);

  return (
    <div className="container">
      {!isSuccess && (
        <h2 className="checkout_page_title" data-aos="fade-down">Checkout</h2>
      )}

      <div id="checkoutSection">
        {!isSuccess ? (
          <div className="row checkout">
            <div className="col-12 col-md-6 px-4 order-2 order-md-1">
              <h2>Shipping Details</h2>
              <form id="checkoutForm" onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" name="fullName" value={shippingDetails.fullName} onChange={handleShippingChange} required />
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" value={shippingDetails.phoneNumber} onChange={handleShippingChange} required />
                <label>Address</label>
                <input type="text" name="address" value={shippingDetails.address} onChange={handleShippingChange} required />
                <label>City</label>
                <input type="text" name="city" value={shippingDetails.city} onChange={handleShippingChange} required />
                <label>Postal Code</label>
                <input type="text" name="postalCode" value={shippingDetails.postalCode} onChange={handleShippingChange} required />
                <button type="submit" className="btn">Place Order</button>
              </form>

              <div className="payment d-block d-md-none">
                <h3>Payment Method</h3>
                <div className="payment-card">
                  <span className="payment-icon">💵</span>
                  <div className="payment-info">
                    <strong>Cash on Delivery</strong>
                    <p>Pay with cash upon delivery of your order.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 px-4 order-1 order-md-2 mb-4 mb-md-0">
              <h2>Your Order</h2>
              <div className="order-summary">
                {cartData.items.length > 0 ? (
                  <>
                    <div className="summary-header">
                      <strong>Product</strong>
                      <strong>Total</strong>
                    </div>
                    {cartData.items.map((item, index) => (
                      <div key={index}>
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <div><span>No items in cart.</span></div>
                )}

                <div><span>Shipping</span><span>Free</span></div>
                <div className="total">
                  <span>Total</span>
                  <span>${cartData.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="payment d-none d-md-block">
                <h3>Payment Method</h3>
                <div className="payment-card">
                  <span className="payment-icon">💵</span>
                  <div className="payment-info">
                    <strong>Cash on Delivery</strong>
                    <p>Pay with cash upon delivery of your order.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="success-container"
            id="successMessage"
            data-aos="fade-up"
          >
            <img src="/images/rg8ODccD5Z.gif" style={{ width: '150px', height: 'auto' }} />
            <h2>🎉 Thank you for your order!</h2>
            <p>We’ve received your request and will contact you shortly via phone.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;

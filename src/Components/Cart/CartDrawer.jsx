import React, { useEffect, useRef } from 'react';
import './CartDrawer.css';
import { IoClose } from 'react-icons/io5';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const drawerRef = useRef(null);
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    closeCartDrawer,
  } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isCartOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCartDrawer();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCartOpen, closeCartDrawer]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const syncLocalStorage = () => {
    const updatedCart = {
      items: cartItems,
      total: calculateTotal(),
    };
    localStorage.setItem('checkoutData', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartDataUpdated'));
  };

  const handleCheckout = () => {
    const cartData = {
      items: cartItems,
      total: calculateTotal(),
    };
    localStorage.setItem('checkoutData', JSON.stringify(cartData));
    window.dispatchEvent(new Event('cartDataUpdated'));

    closeCartDrawer();
    navigate('/checkout');
  };

  return (
    <>
      {isCartOpen && <div className="cart-drawer-overlay" />}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} ref={drawerRef}>
        <div className="cart-drawer-content">
          <div className="cart-drawer-header">
            <button className="close-btn" onClick={closeCartDrawer}>
              <IoClose size={24} />
            </button>
            <h3>Your Cart</h3>
          </div>

          <div className="cart-drawer-body">
            {cartItems.length === 0 ? (
              <p className="empty-message">Your cart is empty.</p>
            ) : (
              <ul className="cart-item-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <p className="cart-item-title">{item.name}</p>
                    <div className="cart-item-body">
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-details">
                        <div className="price-info">
                          <span>Price: ${item.price.toFixed(2)}</span>
                          <span>Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className="quantity-controls">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.id, item.quantity - 1);
                              } else {
                                removeFromCart(item.id);
                              }
                              syncLocalStorage();
                            }}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => {
                              updateQuantity(item.id, item.quantity + 1);
                              syncLocalStorage();
                            }}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="remove-btn"
                          onClick={() => {
                            removeFromCart(item.id);
                            syncLocalStorage();
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="total-row">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

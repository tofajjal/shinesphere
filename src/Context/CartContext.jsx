import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartLoaded, setCartLoaded] = useState(false); // ✅ flag to avoid premature 0 count

  const openCartDrawer = () => setIsCartOpen(true);
  const closeCartDrawer = () => setIsCartOpen(false);

  // ✅ Load cart items from localStorage on first load
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedCart = JSON.parse(localStorage.getItem("checkoutData"));
        if (savedCart?.items) {
          setCartItems(savedCart.items);
        }
      } catch (err) {
        console.error("Failed to parse cart:", err);
      }
      setCartLoaded(true); // ✅ cart has now been loaded
    }
  }, []);

  // ✅ Save to localStorage every time cartItems changes
  useEffect(() => {
    if (cartLoaded) {
      const checkoutData = {
        items: cartItems,
        total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
      localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
      window.dispatchEvent(new Event("cartDataUpdated"));
    }
  }, [cartItems, cartLoaded]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    openCartDrawer();
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Only show cart count after cart has loaded
  const cartCount = cartLoaded
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : null;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        isCartOpen,
        openCartDrawer,
        closeCartDrawer,
        cartLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

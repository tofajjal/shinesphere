import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingBasket } from "react-icons/ci";
import { useCart } from "../Context/CartContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      const mockProducts = [
        { id: 1, name: 'Malachite Earrings', shortDesc: 'Elegantly crafted by hand for timeless beauty.', price: 10, image: '/images/p_01.png' },
        { id: 2, name: 'Turquoise Bead Necklace', shortDesc: 'Where artisanal charm meets modern sophistication.', price: 20, image: '/images/p_02.png' },
        { id: 3, name: 'Lapis Lazuli Bracelet', shortDesc: 'Each piece tells a story of skilled craftsmanship.', price: 30, image: '/images/p_03.png' },
        { id: 4, name: 'Amethyst Ring', shortDesc: 'Crafted with passion, worn with pride.', price: 40, image: '/images/p_04.png' },
        { id: 5, name: 'Pearl Drop Earrings', shortDesc: 'Delicate details, lovingly made by hand.', price: 50, image: '/images/p_05.png' },
        { id: 6, name: 'Rose Quartz Pendant', shortDesc: 'Jewelry that speaks from the heart, made by hand.', price: 60, image: '/images/p_06.png' },
        { id: 7, name: 'Citrine Studs', shortDesc: 'A personal touch in every shimmering detail.', price: 70, image: '/images/p_07.png' },
        { id: 8, name: 'Garnet Charm Anklet', shortDesc: 'Handmade elegance for your everyday moments.', price: 80, image: '/images/p_08.png' },
      ];

      localStorage.setItem('products', JSON.stringify(mockProducts));
      setProducts(mockProducts);
    }
  }, []);

  const handleAddToCart = (product) => {
    const isInCart = cartItems.some(item => item.id === product.id);
    if (!isInCart) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <div>
      <div className='container'>
        <div className="shop-page">
          <p className='shop_sub_title' data-aos="fade-down">Collections</p>
          <h1 data-aos="fade-down" data-aos-delay="100">Our Products</h1>
          <div className="row product-list">
            {products.length === 0 ? (
              <p>No products available.</p>
            ) : (
              products.map((product, index) => (
                <div
                  key={product.id}
                  className="col-6 col-lg-3 my-3"
                  data-aos="fade-down"
                  data-aos-delay={index * 100}  // stagger effect
                >
                  <div className='pro_box'>
                    <div className='pro_box_img'>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className='pro_box_desc'>
                      <h3>{product.name}</h3>
                      <p>{product.shortDesc}</p>
                      <p className='price'>
                        ${product.price}.00{" "}
                        <span style={{ textDecoration: 'line-through', color: '#888' }}>
                          ${product.price + 5}.00
                        </span>
                      </p>
                    </div>
                    <Link className='buy_now' to={`/product/${product.id}`}>
                      <CiShoppingBasket /> Shop Now
                    </Link>
                    {/* Optional: Enable this to show "Add to Cart" logic
                    {cartItems.some(item => item.id === product.id) ? (
                      <button className='add_to_cart disabled' disabled>
                        Already in Cart
                      </button>
                    ) : (
                      <button className='add_to_cart' onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </button>
                    )} */}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;


import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q")?.toLowerCase() || "";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.shortDesc?.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Search Results for: <em>{searchTerm}</em></h2>
      {filteredProducts.length > 0 ? (
        <div className="row product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-6 col-lg-3 my-3">
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
                <Link className='buy_now' to={`/product/${product.id}`}>Buy Now</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;

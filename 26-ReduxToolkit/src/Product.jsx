import React from 'react'

const Product = () => {
  return (
    <div className="product-card">
      <img
        src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww"
        alt="Product Image"
        className="product-image"
      />

      <div className="product-info">
        <h3 className="product-title">Wireless Headphones</h3>
        <p className="product-desc">
          High quality wireless headphones with noise cancellation.
        </p>

        <div className="product-footer">
          <span className="product-price">₹2,999</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product

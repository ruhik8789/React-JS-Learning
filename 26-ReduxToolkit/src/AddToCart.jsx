import React from "react";
import './App.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const selector = useSelector((state) => {
    // console.log('Add to cart:',state.cart.items.length);
    return state.cart.items.length;
  });
  // console.log(selector);

  return (
    <Link to="/cart">
      <div className="cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{selector}</span>
      </div>
    </Link>
  );
};

export default AddToCart;

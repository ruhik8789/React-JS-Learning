import React from "react";
import './App.css'
import { useSelector } from "react-redux";

const AddToCart = () => {
  const selector = useSelector((state) => {
    console.log(state.cart.value);
    return state.cart.value;
  });
  console.log(selector);

  return (
    <div className="cart">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{selector}</span>
    </div>
  );
};

export default AddToCart;

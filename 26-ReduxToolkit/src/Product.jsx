import React from "react";
import AddToCart from "./AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { fetchProducts } from "./redux/productSlice";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('🚀 Dispatching fetchProducts...');
    dispatch(fetchProducts());
  }, [dispatch]); 

  const productSelector = useSelector((state) => {
    console.log("state", state);
    return state.products.items;
  });

  return (
    <div className="grid">
      {productSelector.length &&
        productSelector.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt="" />
            <div className="content">
              <div className="title">{product.title}</div>
              <div className="brand">{product.brand}</div>
              <div className="price">${product.price}</div>
              <div className="rating">{product.rating}</div>
              <button class="add-to-cart">Add To Cart</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;

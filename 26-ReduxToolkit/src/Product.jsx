import React from "react";
import AddToCart from "./AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { fetchProducts } from "./redux/productSlice";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productSelector = useSelector((state) => {
    // console.log("productSelector", state);
    return state.products.items;
  });

  const CartSelector = useSelector((state) => {
    // console.log("Add to cart:", state.cart.items);
    return state.cart.items;
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
              {CartSelector.find((item) => item.id === product.id) ? (
                <button onClick={() => dispatch(removeItem(product))} className="remove-from-cart">
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addItem(product))}
                  className="add-to-cart"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;

import React from "react";
import Header from "./Header";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./redux/slice";

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <h1 className="heading">React redux toolkit tutorials</h1>
      <button onClick={() => dispatch(clearAllItems())} className="add-to-cart">Clear Cart</button>
      <Product />
    </>
  );
};

export default App;

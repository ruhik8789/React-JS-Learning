import React from "react";
import Header from "./Header";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./redux/slice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./CartList";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

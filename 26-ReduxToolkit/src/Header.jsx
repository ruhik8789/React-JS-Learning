import React from "react";
import './App.css'
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="header">
        <div className="logo">MyShop</div>

        <div className="right-section">
          <nav className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <a>Products</a>
            {/* <a href="#">Contact</a> */}
          </nav>
        </div>
        <AddToCart />
      </header>
    );
}

export default Header;

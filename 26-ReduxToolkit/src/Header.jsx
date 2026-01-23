import React from "react";
import './App.css'
import AddToCart from "./AddToCart";

function Header() {
    return (
        <header className="header">
            <div className="logo">MyShop</div>

            <div className="right-section">
                <nav className="nav">
                    <a href="#">About</a>
                    <a href="#">Products</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
            <AddToCart />
        </header>
    );
}

export default Header;

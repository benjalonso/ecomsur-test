import React, { useState } from "react";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Cart from "./Cart.jsx";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Ecomsur</h1>

      <div className="cart-container" onClick={toggleCart}>
        {isCartOpen ? (
          <RiShoppingCartFill className="cart" />
        ) : (
          <RiShoppingCartLine className="cart" />
        )}
        <div
          className={`cart-dropdown ${isCartOpen ? "open" : ""} ${
            isCartOpen && window.innerWidth <= 768 ? "mobile" : ""
          }`}
        >
          {" "}
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

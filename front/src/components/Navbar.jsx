import React, { useState } from "react";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Cart from "./Cart.jsx";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Ecomsur</h1>
      <div className="cart-container" onClick={toggleCart}>
        {isCartOpen ? (
          <>
            <RiShoppingCartFill className="cart" />
            <div className="badge">{quantity}</div>
          </>
        ) : (
          <>
            <RiShoppingCartLine className="cart" />
            <div className="badge">{quantity}</div>
          </>
        )}
        <div
          className={`cart-dropdown ${isCartOpen ? "open" : ""} ${
            isCartOpen && window.innerWidth <= 768 ? "mobile" : ""
          }`}
        >
          {" "}
          <Cart setQuantity={setQuantity} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

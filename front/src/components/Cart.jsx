import React, { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(newCartItems);
  };

  return (
    <div className="cart">
      <h3>Resumen de compra</h3>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Quitar</button>
            </div>
          ))
        )}
      </div>
      <button onClick={() => handleAddToCart({ name: "Producto 1" })}>
        Agregar al carrito
      </button>
      <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
        <h3>Total</h3>
        <p >{cartItems.length} </p>
      </div>
    </div>
  );
}

export default Cart;

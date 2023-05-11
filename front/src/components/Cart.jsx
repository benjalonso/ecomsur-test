import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../features/cartSlice";

function Cart({ setQuantity }) {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    const existingProduct = cart.find((product) => product.id === item.id);
    if (existingProduct.quantity > 1) {
      dispatch(decrement({ ...existingProduct, quantity: existingProduct.quantity - 1 }));
    } else {
      dispatch(decrement(existingProduct));
    }
  };

  useEffect(() => {
    setQuantity(cart.reduce((total, item) => total + item.quantity, 0));
    console.log(cart)
  }, [cart]);

  return (
    <div className="cart">
      <h3>Resumen de compra</h3>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="cart-item">
              <p>{item.name}</p>
              <p>{`Cantidad: ${item.quantity}`}</p>
              <button onClick={() => handleRemoveFromCart(item)}>
                Quitar
              </button>
            </div>
          ))
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Total</h3>
        <p>{cart.reduce((total, item) => total + item.quantity, 0)}</p>
      </div>
    </div>
  );
}

export default Cart;

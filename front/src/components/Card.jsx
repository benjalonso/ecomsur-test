import React from "react";

const Card = ({
  name = "Xiaomi 13 Pro",
  price = "700",
  image = "http://bit.ly/2tMBBTd",
  handleAddToCart,
}) => {
  return (
    <div className="wrapper">
      <img src={image} alt="product" />
      <div className="product-info">
        <div className="product-text">
          <h2 style={{ textAlign: "left", marginBottom: "5px" }}>{name}</h2>
          {/* <span style={{ textAlign: "left", margin: "0px" }}> {brand} </span> */}
          {/* <p style={{ fontSize: "14px" }}>{description}</p> */}
        </div>
        <div className="product-price-btn">
          <p>
            <span>{price}</span>$
          </p>
          <button onClick={handleAddToCart} type="button">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

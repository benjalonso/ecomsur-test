import React from "react";

const Card = ({
  name = "Xiaomi 13 Pro",
  description = "celular muy bueno, con buena cámara y bateria",
  price = "700",
  brand = "Xiaomi",
  image = "http://bit.ly/2tMBBTd"
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
          <button type="button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

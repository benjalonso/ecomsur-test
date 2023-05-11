import React from "react";

const Card = ({
  name = "Xiaomi 13 Pro",
  price = "700",
  image = "http://bit.ly/2tMBBTd",
  handleAddToCart,
  stock = true,
  handleProductClick
}) => {
  return (
    <div className="wrapper">
      <img onClick={handleProductClick} src={image} alt="product" />
      <div className="product-info">
        <div className="product-text">
          <h2 style={{ textAlign: "left", marginBottom: "5px" }}>{name}</h2>
        </div>
        <div className="product-price-btn">
          <p>
            <span>{price}</span>$
          </p>
          <button
            onClick={handleAddToCart}
            disabled={stock === 0 ? true : false}
            type="button"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

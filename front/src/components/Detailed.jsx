import React from "react";

const Detailed = ({
  name = "aifon",
  isHidden,
  setIsHidden,
  handleAddToCart,
  brand = "apel",
  description = "las 3 b",
  price = "300",
  image = "https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg",
}) => {
  return (
    <>
      <div id={`${isHidden}`}>
        <div id="container">
          {/* <!-- Start	Product details --> */}
          <div class="product-details">
            <h1>{name}</h1>

            {/* <!-- The most important information about the product --> */}
            <h3 style={{ margin: "0px" }}>{brand}</h3>
            <p class="information">{description}</p>

            {/* <!-- 		Control --> */}
            <div class="control">
              <button class="btn">
                {/* <!-- 		the Price --> */}
                <span class="price">${price}</span>
                {/* <!-- 		Buy Now / ADD to Cart--> */}
                <span onClick={handleAddToCart} class="buy">
                  Buy Now
                </span>
              </button>
            </div>
          </div>
          <div class="product-image">
            <img src={image} alt="product" />
          </div>
        </div>
        <div
          onClick={() => {
            setIsHidden("hidden");
          }}
          id="background"
        ></div>
      </div>
    </>
  );
};

export default Detailed;

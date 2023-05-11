import React, { useState } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { increment } from "../features/cartSlice";
import Detailed from "./Detailed";

const Products = ({ productsData }) => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isHidden, setIsHidden] = useState("hidden");



  const handleAddToCart = (item) => {
    dispatch(increment(item));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsHidden("block");
  };

  const showProducts = (data) => {
    if (Array.isArray(data)) {
      return data.map((product) => {
        return (
          <Card
            key={product._id}
            image={`http://localhost:5000${product.image}`}
            name={product.name}
            price={product.price}
            stock={product.countInStock}
            handleAddToCart={() => {
              handleAddToCart(product);
            }}
            handleProductClick={() => {
              handleProductClick(product);
            }}
          />
        );
      });
    }
  };

  const showDetailed = () => {
    if (selectedProduct) {
      return (
        <Detailed
        isHidden={isHidden}
        setIsHidden={setIsHidden}
          name={selectedProduct.name}
          brand={selectedProduct.brand}
          description={selectedProduct.description}
          price={selectedProduct.price}
          image={`http://localhost:5000${selectedProduct.image}`}
          handleAddToCart={() => {
            handleAddToCart(selectedProduct);
          }}
        />
      );
    }
  };

  return (
    <div>
      {showProducts(productsData)}
      {showDetailed()}
    </div>
  );
};

export default Products;

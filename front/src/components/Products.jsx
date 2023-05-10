import React from "react";
import Card from "./Card";

const Products = ({ productsData }) => {

  const showProducts = (data) => {
    if (Array.isArray(data)) {
      return data.map((product) => {
        return (
          <Card
            key={product._id}
            image={`http://localhost:5000${product.image}`}
            brand={product.brand}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      });
    }
  };

  return <div>{showProducts(productsData)}</div>;
};

export default Products;

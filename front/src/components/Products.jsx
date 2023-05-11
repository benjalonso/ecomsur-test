import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { increment } from '../features/cartSlice'

const Products = ({ productsData }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(increment(item));
  };

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
            handleAddToCart={() => {handleAddToCart(product)}}
          />
        );
      });
    }
  };

  return <div>{showProducts(productsData)}</div>;
};

export default Products;

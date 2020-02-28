import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const ProductInfo = ({ product }) => {
  const { removeProduct } = useContext(ProductContext);
  const deleteProduct = () => {
    removeProduct(product.id);
  };
  return (
    <li>
      <img src={product.image} width="150" />
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <button onClick={deleteProduct}>x</button>
    </li>
  );
};

export default ProductInfo;

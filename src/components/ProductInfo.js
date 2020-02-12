import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <li>
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
    </li>
  );
};

export default ProductInfo;

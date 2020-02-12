import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      title: "Product title 1",
      price: "200"
    },
    {
      title: "Product title 2",
      price: "300"
    }
  ]);
  return (
    <ul className="product-list">
      {products.map(product => {
        return (
          <li>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;

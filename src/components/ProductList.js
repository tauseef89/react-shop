import React, { useState } from "react";
import ProductInfo from "./ProductInfo";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product title 1",
      price: "200"
    },
    {
      id: 2,
      title: "Product title 2",
      price: "300"
    }
  ]);
  return (
    <ul className="product-list">
      {products.map(product => {
        return <ProductInfo product={product} key={product.id} />;
      })}
    </ul>
  );
};

export default ProductList;

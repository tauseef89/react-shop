import React, { useContext } from "react";
import ProductInfo from "./ProductInfo";

import { ProductContext } from "../contexts/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <ul className="product-list">
      {products.map(product => {
        return <ProductInfo product={product} key={product.id} />;
      })}
    </ul>
  );
};

export default ProductList;

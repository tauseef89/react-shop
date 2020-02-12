import React, { useState, useEffect } from "react";
import ProductInfo from "./ProductInfo";
import NewProductForm from "./NewProductForm";

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
  const [age, setAge] = useState(20);

  const addProduct = (title, price) => {
    setProducts([
      ...products,
      { title: title, price: price, id: Math.random() }
    ]);
  };
  useEffect(() => {
    console.log("useEffect callback", products);
  }, [products]);

  useEffect(() => {
    console.log("useEffect callback", age);
  }, [age]);
  return (
    <ul className="product-list">
      {products.map(product => {
        return <ProductInfo product={product} key={product.id} />;
      })}
      <NewProductForm addProduct={addProduct} />

      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </ul>
  );
};

export default ProductList;

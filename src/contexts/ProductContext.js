import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = props => {
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

  const addProduct = (title, price) => {
    setProducts([
      ...products,
      { title: title, price: price, id: Math.random() }
    ]);
  };
  const removeProduct = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, removeProduct, addProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

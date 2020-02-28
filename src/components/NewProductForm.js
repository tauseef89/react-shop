import React, { useState, useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";

const NewProductForm = () => {
  const { addProduct } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(title, price);
    const newProduct = {
      id: Math.random(),
      title,
      price
    };
    addProduct(newProduct);
    setTitle("");
    setPrice("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        placeholder="Enter title"
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={price}
        type="text"
        placeholder="Enter price"
        onChange={e => {
          setPrice(e.target.value);
        }}
      />
      <input type="submit" value="Add product" />
    </form>
  );
};

export default NewProductForm;

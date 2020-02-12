import React, { useState } from "react";
const NewProductForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(title, price);
    addProduct(title, price);
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

import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>My Shop</h1>
      <span></span>
      <Link to="/">Products</Link>
      <Link to="/add-product">Add Product</Link>
    </header>
  );
};

// const headerStyle = {
//   color: "#fff",
//   backgroundColor: "#563d7c",
//   padding: "10px"
// };

export default Header;

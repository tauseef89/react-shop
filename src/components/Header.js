import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>My Blog</h1>
      <span></span>
      <Link to="/">All Blog</Link>
      <Link to="/add-blog">Add Blog</Link>
    </header>
  );
};

export default Header;

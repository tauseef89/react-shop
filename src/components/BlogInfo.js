import React, { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";

const BlogInfo = ({ post }) => {
  const { removePost } = useContext(BlogContext);
  const deleteProduct = () => {
    removePost(post.id);
  };
  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={deleteProduct}>x</button>
    </li>
  );
};

export default BlogInfo;

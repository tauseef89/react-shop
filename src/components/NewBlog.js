import React, { useState, useContext } from "react";

import { BlogContext } from "../contexts/BlogContext";

const NewBlog = () => {
  const { addPost } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      title,
      body
    };
    addPost(newPost);
    setTitle("");
    setBody("");
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
        value={body}
        type="text"
        placeholder="Enter body"
        onChange={e => {
          setBody(e.target.value);
        }}
      />
      <input type="submit" value="Add Post" />
    </form>
  );
};

export default NewBlog;

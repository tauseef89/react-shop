import React, { createContext, useReducer } from "react";
import { blogReducer } from "../reducers/blogReducer";

import axios from "axios";

// Initial state
const initialState = {
  posts: []
};

export const BlogContext = createContext(initialState);

const BlogContextProvider = props => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Actions
  const getPosts = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      dispatch({
        type: "GET_POSTS",
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removePost = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

      dispatch({
        type: "REMOVE_POST",
        payload: id
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addPost = async blog => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        blog,
        config
      );

      dispatch({
        type: "ADD_POST",
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BlogContext.Provider
      value={{ posts: state.posts, getPosts, addPost, removePost }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

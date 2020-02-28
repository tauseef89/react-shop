import React, { createContext, useReducer } from "react";
import { blogReducer } from "../reducers/blogReducer";

// Initial state
const initialState = {
  posts: []
};

export const BlogContext = createContext(initialState);

const BlogContextProvider = props => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Actions

  return (
    <BlogContext.Provider value={{ posts: state.posts, dispatch }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

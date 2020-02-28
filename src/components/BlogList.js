import React, { useEffect, useContext } from "react";
import BlogInfo from "./BlogInfo";

import { BlogContext } from "../contexts/BlogContext";

const BlogList = () => {
  const { posts, getPosts } = useContext(BlogContext);
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className="blog-list">
      {posts.map(post => {
        return <BlogInfo post={post} key={post.id} />;
      })}
    </ul>
  );
};

export default BlogList;

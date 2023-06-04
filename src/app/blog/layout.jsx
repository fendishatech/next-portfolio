import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-5xl text-green-400 font font-extralight text-center">
        This is the blog post layout.
      </h1>
      {children}
    </div>
  );
};

export default BlogLayout;

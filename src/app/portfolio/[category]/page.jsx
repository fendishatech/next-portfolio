import React from "react";

const Category = ({ params }) => {
  return (
    <h1 className="text-3xl text-green-400 font font-extralight text-start">
      {params.category}
    </h1>
  );
};

export default Category;

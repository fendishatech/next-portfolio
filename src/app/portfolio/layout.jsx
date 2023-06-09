import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="p-6">
      <h1 className="my-4 text-6xl font-semibold text-green-600">Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;

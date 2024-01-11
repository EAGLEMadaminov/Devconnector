import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl ">Page Not Found </h1>
      <p className="text-xl">
        Go to <Link to="/">main page</Link>
      </p>
    </div>
  );
};

export default NotFound;

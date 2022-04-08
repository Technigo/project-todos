import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>This page doesn't exist</h1>
      <Link to="/">
        <p>Go home</p>
      </Link>
    </>
  );
};

export default Error;

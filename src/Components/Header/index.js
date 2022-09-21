import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/Products">
            Productos
          </Link>
        </div>
      </nav>
    </>
  );
};

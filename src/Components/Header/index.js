import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { Logo } from "../Logo";
import { SideCart } from "../SideCart";

import "./style.css";

export const Header = () => {
  const [toggleOrders, setToggleOrders] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark headerConfig">
        <Logo />
        <div className="container-fluid containerConfig">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/list-of-products">
            Productos
          </Link>

          <FiShoppingCart
            size={20}
            className="iconBtn"
            onClick={() => setToggleOrders(!toggleOrders)}
          />

          {toggleOrders && <SideCart setToggleOrders={setToggleOrders} />}
        </div>
      </nav>
    </header>
  );
};

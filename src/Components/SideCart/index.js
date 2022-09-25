import React from "react";
import { useSelector } from "react-redux";

import { OrderItem } from "../OrderItem";

import "./style.css";

export const SideCart = ({ setToggleOrders }) => {
  const productInfo = useSelector((state) => state.CartInfo.cart);
  const totalProduct = useSelector((state) => state.CartInfo.total);

  const handleClose = (e) => {
    e.preventDefault();
    setToggleOrders(false);
  };

  const sumTotal = productInfo
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.totalPrice,
      0
    )
    .toFixed(2);
  console.log("total", totalProduct);

  const handlePay = (e) => {
    e.preventDefault();
  };

  return (
    <aside className="myOrder">
      <div className="myOrderContainer">
        <div className="myOrderHeader">
          <h1 className="title">My Order</h1>

          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => handleClose(e)}
          ></button>
        </div>

        <div className="myOrderContent">
          <div className="shoppingCart">
            {productInfo.length > 0 &&
              productInfo.map((product) => (
                <OrderItem product={product} key={`orderItem-${product.id}`} />
              ))}
          </div>

          <div className="totalOrderContainer">
            <div className="totalProductContent">
              <b>Total Products</b>
              <p>{totalProduct}</p>
            </div>
            <div className="totalProductContent">
              <b>Total Price</b>
              <p>$ {sumTotal}</p>
            </div>
          </div>

          <div className="buyBtnContainer">
            <button
              type="button"
              className="btn btn-dark"
              onClick={(e) => handlePay(e)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

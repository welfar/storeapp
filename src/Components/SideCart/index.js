import React from "react";
import { useSelector } from "react-redux";

import { OrderItem } from "../OrderItem";

import "./style.css";

export const SideCart = ({ setToggleOrders }) => {
  const productInfo = useSelector((state) => state.CartInfo.cart);
  //console.log("carinfo", productInfo);

  const handleClose = (e) => {
    e.preventDefault();
    setToggleOrders(false);
  };

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;

    const sum = productInfo.reduce(reducer, 0);
    return sum;
  };

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

          <div className="totalOrder">
            <p>
              <b>Total Price</b>
            </p>
            <p>$ {sumTotal()}</p>
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

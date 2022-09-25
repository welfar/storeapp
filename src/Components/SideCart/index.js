import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { OrderItem } from "../OrderItem";
import { ClearCart } from "../../Actions/cartActions";

export const SideCart = ({ setToggleOrders }) => {
  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.CartInfo.cart);

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

  const handlePay = (e, item) => {
    e.preventDefault();
    dispatch(ClearCart(item));
    Swal.fire({
      title: "Success",
      icon: "success",
      text: "The purchase has been made successfully",
      button: "OK",
    });
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
            <b>Total Price</b>
            <p>$ {sumTotal}</p>
          </div>

          <div className="buyBtnContainer">
            <button
              type="button"
              className="btn btn-dark"
              onClick={(e) => handlePay(e, productInfo)}
              disabled={productInfo.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import { AddToCart, RemoveFromCart } from "../../Actions/cartActions";

import "./style.css";

export const OrderItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemove = (e, item) => {
    e.preventDefault();
    dispatch(RemoveFromCart(item.id, true));
  };

  const handlePlus = (e, item) => {
    e.preventDefault();
    dispatch(AddToCart(item));
  };

  const handleMinus = (e, item) => {
    e.preventDefault();
    dispatch(RemoveFromCart(item.id));
  };

  const renderItem = () => (
    <div className=" OrderItem ">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>

      <div className="infoProductContent">
        <p title={product.title}>
          {product.title.length > 10
            ? product.title.substring(0, 20) + "..."
            : product.title}
        </p>
        <p> $ {product.price} </p>
      </div>

      <div className="amountControlsContent">
        <span className="addItem">
          <AiOutlinePlus color="#000" onClick={(e) => handlePlus(e, product)} />
        </span>
        <span className="amount">{product.quantity}</span>
        <span className="substractItem">
          <AiOutlineMinus
            color="#000"
            onClick={(e) => handleMinus(e, product)}
          />
        </span>
      </div>

      <button
        type="button"
        className="btn btn-dark cancelBtn"
        onClick={(e) => handleRemove(e, product)}
      >
        <FaTimes color="#D32F2F" />
      </button>
    </div>
  );

  return <>{renderItem()}</>;
};

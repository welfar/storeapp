import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

import { AddToCart } from "../../Actions/cartActions";
import { finishLoading, startLoading } from "../../Actions/uiActions";
import { Types } from "../../Types/types";
import { Loader } from "../Loader";

import "./style.css";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const productDetail = useSelector((state) => state.productsInfo.data);
  const isLoading = useSelector((state) => state.Ui.isLoading);

  useEffect(() => {
    dispatch(startLoading());
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        dispatch({
          type: Types.setProduct,
          payload: {
            ProductDetails: res.data,
          },
        });
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  const renderProduct = () => (
    <>
      <div className="productContainer">
        <div
          className="card text-bg-dark border-light "
          style={{ width: "18rem" }}
        >
          <figure>
            <img
              src={productDetail.image}
              className="card-img-top"
              alt={productDetail.category}
              title={productDetail.title}
            />
          </figure>
          <div className="card-body">
            <p className="card-text">
              <b>Title:</b> {productDetail.title}
            </p>
            <br />
            <p className="card-text">
              <b>Price:</b> $ {productDetail.price}
            </p>
            <br />
            <p className="card-text">
              <b>Description:</b> {productDetail.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const handleClick = (e, item) => {
    e.preventDefault();
    dispatch(AddToCart(item));
  };

  return (
    <>
      <h3 className="text-center" style={{ marginTop: "1rem" }}>
        product Detail
      </h3>

      {!isLoading ? (
        <>
          {renderProduct()}
          <div className="addBtnContainer">
            <button
              type="button"
              className="btn btn-dark"
              onClick={(e) => handleClick(e, productDetail)}
            >
              Add to cart
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { AddToCart } from "../../Actions/cartActions";
import { FinishLoading, StartLoading } from "../../Actions/uiActions";
import { Types } from "../../Types/types";
import { Loader } from "../Loader";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const productDetail = useSelector((state) => state.productsInfo.data);
  const isLoading = useSelector((state) => state.Ui.isLoading);

  useEffect(() => {
    dispatch(StartLoading());
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        dispatch({
          type: Types.setProduct,
          payload: {
            ProductDetails: res.data,
          },
        });
        dispatch(FinishLoading());
      })
      .catch((err) => {
        console.log("Error", err);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: err,
          button: "OK",
        });
      });
  }, []);

  const renderProduct = () => (
    <div className="productContainer ">
      <div className="cardConfig cardconfig-productDetail">
        <figure>
          <img
            src={productDetail ? productDetail.image : null}
            className="cardImgTop"
            alt={productDetail ? productDetail.category : null}
            title={productDetail ? productDetail.title : null}
          />
        </figure>
        <div className="textContent textContent-productDetail">
          <p>
            <b>Title:</b> {productDetail ? productDetail.title : null}
          </p>
          <br />
          <p>
            <b>Price:</b> $ {productDetail ? productDetail.price : null}
          </p>
          <br />
          <p>
            <b>Description:</b>{" "}
            {productDetail ? productDetail.description : null}
          </p>
        </div>
      </div>
    </div>
  );

  const handleClick = (e, item) => {
    e.preventDefault();
    dispatch(AddToCart(item));
    Swal.fire(
      {
        title: "Success",
        icon: "success",
        text: "The product was added successfully!!",
        button: "OK",
      },
      { className: "" }
    );
  };

  return (
    <>
      <h3 className="text-center titleConfig">product Detail</h3>

      {!isLoading ? (
        <>
          {renderProduct()}
          <div className="btnContainer">
            <button
              type="button"
              className="btn btn-dark btnConfig"
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

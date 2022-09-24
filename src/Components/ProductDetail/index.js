import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

import { AddToCart } from "../../Actions/cartActions";
import { Types } from "../../Types/types";

import "./style.css";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const productDetail = useSelector((state) => state.productsInfo.data);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        dispatch({
          type: Types.setProduct,
          payload: {
            ProductDetails: res.data,
          },
        });
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
              src={productDetail ? productDetail.image : null}
              className="card-img-top"
              alt={productDetail ? productDetail.category : null}
              title={productDetail ? productDetail.title : null}
            />
          </figure>
          <div className="card-body">
            <p className="card-text">
              <b>Title:</b> {productDetail ? productDetail.title : null}
            </p>
            <p className="card-text">
              <b>Price:</b> $ {productDetail ? productDetail.price : null}
            </p>
            <p className="card-text">
              <b>Description:</b>{" "}
              {productDetail ? productDetail.description : null}
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
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { GetAllProducts } from "../../Actions/productsInfoActions";
import { AddToCart } from "../../Actions/cartActions";
import { ProductItem } from "../ProductItem";
import { Loader } from "../Loader";

import "./style.css";

export const ListProduct = () => {
  const dispatch = useDispatch();
  const productsInfo = useSelector((state) => state.productsInfo.data);
  const isLoading = useSelector((state) => state.Ui.isLoading);

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);

  return (
    <>
      <h2 style={{ marginTop: "1rem" }} className="text-center">
        List of Products
      </h2>
      {!isLoading ? (
        productsInfo &&
        productsInfo.length > 0 &&
        productsInfo.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/details/${product.id}`}>
                Go to Details
                <ProductItem
                  product={product}
                  addToCart={() => dispatch(AddToCart(product.id))}
                />
              </Link>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </>
  );
};

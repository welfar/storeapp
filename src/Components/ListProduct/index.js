import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetAllProducts } from "../../Actions/productsInfoActions";
import { AddToCart } from "../../Actions/cartActions";
import { ProductItem } from "../ProductItem";
import { ProductDetail } from "../ProductDetail";

import "./style.css";
import { Link } from "react-router-dom";

export const ListProduct = () => {
  const dispatch = useDispatch();
  const productsInfo = useSelector((state) => state.productsInfo.data);
  /* const navigate = useNavigate(); */

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);

  return (
    <>
      <h2 style={{ marginTop: "1rem" }} className="text-center">
        List of Products
      </h2>
      {productsInfo &&
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
        })}
    </>
  );
};

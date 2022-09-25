import axios from "axios";

import { startLoading, finishLoading } from "./uiActions";
import { Types } from "../Types/types";

export const GetProductsLimited = () => {
  return (dispatch) => {
    dispatch(startLoading());

    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((res) => {
        dispatch({
          type: Types.setLimitInfoProducts,
          payload: {
            ProductsInfo: res.data,
          },
        });
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
};

export const GetAllProducts = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({
          type: Types.setListProducts,
          payload: {
            ListProducts: res.data,
          },
        });
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
};

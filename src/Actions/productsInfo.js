import axios from "axios";

import { Types } from "../Types/types";

export const GetProductsLimited = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((res) => {
        dispatch({
          type: Types.setLimitInfoProducts,
          payload: {
            ProductsInfo: res.data,
          },
        });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
};

export const GetAllProducts = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({
          type: Types.setListProducts,
          payload: {
            ListProducts: res.data,
          },
        });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
};

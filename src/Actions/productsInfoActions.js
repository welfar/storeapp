import axios from "axios";
import Swal from "sweetalert2";

import { StartLoading, FinishLoading } from "./uiActions";
import { Types } from "../Types/types";

export const GetProductsLimited = () => {
  return (dispatch) => {
    dispatch(StartLoading());

    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((res) => {
        dispatch({
          type: Types.setLimitInfoProducts,
          payload: {
            ProductsInfo: res.data,
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
  };
};

export const GetAllProducts = () => {
  return (dispatch) => {
    dispatch(StartLoading());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({
          type: Types.setListProducts,
          payload: {
            ListProducts: res.data,
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
  };
};

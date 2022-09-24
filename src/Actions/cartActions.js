import { Types } from "../Types/types";

export const AddToCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: Types.addToCart,
      payload: id,
    });
  };
};

export const RemoveFromCart = (id, all = false) =>
  all
    ? {
        type: Types.removeAllFromCart,
        payload: id,
      }
    : {
        type: Types.removeOneFromCart,
        payload: id,
      };

export const ClearCart = () => {
  return (dispatch) => {
    dispatch({
      type: Types.clearCart,
    });
  };
};

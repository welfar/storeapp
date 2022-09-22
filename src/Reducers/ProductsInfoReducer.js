import { Types } from "../Types/types";

export const ProductsInfoReducer = (state = [], action) => {
  switch (action.type) {
    case Types.setLimitInfoProducts:
      return {
        ...state,
        data: action.payload.ProductsInfo,
      };
    case Types.setListProducts:
      return {
        ...state,
        data: action.payload.ListProducts,
      };
    default:
      return state;
  }
};

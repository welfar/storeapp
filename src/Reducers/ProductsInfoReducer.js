import { Types } from "../Types/types";

export const ProductsInfoReducer = (state = [], action) => {
  switch (action.type) {
    case Types.setLimitInfoProducts:
      return {
        ...state,
        data: action.payload.ProductsInfo,
        isLoaded: true,
      };
    case Types.setListProducts:
      return {
        ...state,
        data: action.payload.ListProducts,
        isLoaded: true,
      };
    case Types.setProduct: {
      return {
        ...state,
        data: action.payload.ProductDetails,
        isLoaded: true,
      };
    }
    default:
      return state;
  }
};

import { Types } from "../Types/types";

export const ProductsInfoReducer = (state = [], action) => {
  switch (action.type) {
    case Types.setInfoProducts:
      return {
        ...state,
        data: action.payload.ProductsInfo,
      };
    default:
      return state;
  }
};

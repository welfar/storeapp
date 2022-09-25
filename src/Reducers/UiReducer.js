import { Types } from "../Types/types";

const initialState = {
  isLoading: false,
  active: false,
  message: "",
  Type: "",
};

export const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.setLoading:
      return {
        ...state,
        isLoading: true,
      };
    case Types.unSetLoading:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

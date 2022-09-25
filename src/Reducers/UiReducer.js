import { Types } from "../Types/types";

const initalState = {
  isLoading: false,
  MessageError: null,
};

export const UiReducer = (state = initalState, action) => {
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
    case Types.setMessageError:
      return {
        ...state,
        MessageError: action.payload.MessageError,
      };
    case Types.unSetMessageError:
      return {
        ...state,
        MessageError: null,
      };
    default:
      return state;
  }
};

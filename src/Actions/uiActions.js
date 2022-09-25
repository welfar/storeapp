import { Types } from "../Types/types";

export const startLoading = () => {
  return {
    type: Types.setLoading,
  };
};

export const finishLoading = () => {
  return {
    type: Types.unSetLoading,
  };
};

export const setError = (error) => {
  return {
    type: Types.setMessageError,
    payload: {
      MessageError: error,
    },
  };
};

export const UnSetError = () => {
  return {
    type: Types.unSetMessageError,
  };
};

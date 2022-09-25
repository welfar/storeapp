import { Types } from "../Types/types";

export const StartLoading = () => {
  return {
    type: Types.setLoading,
  };
};

export const FinishLoading = () => {
  return {
    type: Types.unSetLoading,
  };
};

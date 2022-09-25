import { Types } from "../Types/types";

const initialState = {
  cart: [],
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.addToCart: {
      const newItem = action.payload;

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: (item.totalPrice += newItem.price),
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                ...newItem,
                quantity: 1,
                totalPrice: newItem.price,
              },
            ],
          };
    }
    case Types.removeOneFromCart: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: (item.totalPrice -= item.price),
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case Types.removeAllFromCart: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case Types.clearCart: {
      return initialState;
    }
    default:
      return state;
  }
};

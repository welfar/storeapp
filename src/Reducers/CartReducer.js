import { Types } from "../Types/types";

const initialState = {
  cart: [],
  total: 0,
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
            total: (state.total += 1),
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
            total: (state.total += 1),
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
            total: (state.total -= 1),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
            total: (state.total -= 1),
          };
    }
    case Types.removeAllFromCart: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        total: (state.total = 0),
      };
    }
    case Types.clearCart: {
      return initialState;
    }
    default:
      return state;
  }
};

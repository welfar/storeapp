import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { ProductsInfoReducer } from "../Reducers/ProductsInfoReducer";
import { CartReducer } from "../Reducers/CartReducer";

const rootReducer = combineReducers({
  productsInfo: ProductsInfoReducer,
  CartInfo: CartReducer,
});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);

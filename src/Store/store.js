import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { ProductsInfoReducer } from "../Reducers/ProductsInfoReducer";
import { CartReducer } from "../Reducers/CartReducer";
import { UiReducer } from "../Reducers/UiReducer";

const rootReducer = combineReducers({
  productsInfo: ProductsInfoReducer,
  CartInfo: CartReducer,
  Ui: UiReducer,
});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);

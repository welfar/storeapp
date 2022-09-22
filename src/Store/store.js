import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { ProductsInfoReducer } from "../Reducers/ProductsInfoReducer";

const rootReducer = combineReducers({
  productsInfo: ProductsInfoReducer,
});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);

import { combineReducers } from "redux";

import products from "./products/slice";
import cart from "./cart/slice";

const rootReducer = combineReducers({ products, cart });

export default rootReducer;

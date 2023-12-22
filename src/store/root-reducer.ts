import { combineReducers } from "redux";

import products from "./products/slice";
import cart from "./cart/slice";
import checkout from "./checkout/slice";

const rootReducer = combineReducers({ products, cart, checkout });

export default rootReducer;

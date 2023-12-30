import { combineReducers } from "redux";

import products from "./products/slice";
import cart from "./cart/slice";
import checkout from "./checkout/slice";
import auth from "./auth/slice";

const rootReducer = combineReducers({ products, cart, checkout, auth });

export default rootReducer;

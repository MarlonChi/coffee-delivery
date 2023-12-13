import { combineReducers } from "redux";

import inputQuantity from "./inputQuantity/slice";
import products from "./products/slice";

const rootReducer = combineReducers({ inputQuantity, products });

export default rootReducer;

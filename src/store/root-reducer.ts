import { combineReducers } from "redux";

import products from "./products/slice";

const rootReducer = combineReducers({ products });

export default rootReducer;

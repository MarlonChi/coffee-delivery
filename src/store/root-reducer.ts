import { combineReducers } from "redux";

import contador from "./contador/slice";

const rootReducer = combineReducers({ contador });

export default rootReducer;

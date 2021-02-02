import { combineReducers } from "redux";
import test from "./test";
import counter from "./counter";

const rootReducer = combineReducers({ test, counter });

export default rootReducer;

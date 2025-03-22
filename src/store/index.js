import {combineReducers} from "redux";
import {counterReducer} from "./counter";
import {messageReducer} from "./message";

export const reducers = combineReducers({
  counterReducer: counterReducer,
  messageReducer: messageReducer,
});

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";
import authReucer from "./authReducer";
export default combineReducers({
  auth: authReucer,
  form: formReducer,
  streams: streamReducer,
});

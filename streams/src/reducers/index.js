import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReucer from "./authReducer";
export default combineReducers({
  auth: authReucer,
  form: formReducer,
});

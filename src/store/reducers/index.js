import { combineReducers } from "redux";
import UserHeaderReducer from "./UserHeaderReducer";

export default combineReducers({
  info: UserHeaderReducer,
});

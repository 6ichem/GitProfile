import { combineReducers } from "redux";
import Reducers from "./Reducers";

export default combineReducers({
  info: Reducers,
  repos: Reducers,
  loading: Reducers,
});

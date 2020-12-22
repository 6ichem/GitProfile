import { GET_INFO, GET_REPOS } from "../types";

const initialState = {
  info: [],
  repos: [],
  loading: true,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        info: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

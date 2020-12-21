import { GET_INFO } from "../types";

const initialState = {
  info: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        info: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

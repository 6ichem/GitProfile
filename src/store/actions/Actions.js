import { GET_INFO, INFO_ERROR } from "../types";
import axios from "axios";

export const getProfile = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      type: GET_INFO,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: INFO_ERROR,
      payload: console.log(e),
    });
  }
};

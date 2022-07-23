import {
  FILTER_DATA,
  GET_PRODUCTS,
  IS_ERROR,
  IS_LOADING,
  SORT_DATA,
} from "./actionTypes";
import axios from "axios";

export const prodReq = () => ({
  type: IS_LOADING,
});

export const prodSuccess = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const prodError = () => ({
  type: IS_ERROR,
});

export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export const sortData = (payload) => ({
  type: SORT_DATA,
  payload,
});

export const getProducts = (category) => (dispatch) => {
  dispatch(prodReq());
  axios
    .get(`http://localhost:8000/${category}`)
    .then((res) => {
      dispatch(prodSuccess(res.data));
    })
    .catch((err) => dispatch(prodError(err.message)));
};

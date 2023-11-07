import axios from "axios";
import * as types from "./actionTypes";

export const registerRequest = () => ({
  type: types.REGISTER_REQUEST,
});

export const registerSuccess = (payload) => ({
  type: types.REGISTER_SUCCESS,
  payload,
});

export const registerFailure = (payload) => ({
  type: types.REGISTER_FAILURE,
  payload,
});

export const Register = (payload) => (dispatch) => {
  dispatch(registerRequest());
  console.log({ payload });
  return axios
    .post("http://localhost:5000/api/user/register", payload)
    .then((r) => {
      dispatch(registerSuccess(r.data));
      return types.REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch(registerFailure(e));
      return types.REGISTER_FAILURE;
    });
};

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const login = (payload) => (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post("http://localhost:5000/api/user/login", payload)
    .then((r) => {
      console.log({ data: r.data });
      dispatch(loginSuccess(r.data?.user));
      return types.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch(loginFailure(e));
      return types.LOGIN_FAILURE;
    });
};

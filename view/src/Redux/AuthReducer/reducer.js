import { getLocalData, saveLocalData } from "../../Utils/localStorage";
import * as types from "./actionTypes";

const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case types.REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.LOGIN_SUCCESS: {
      saveLocalData("user", payload);
      return {
        ...state,
        isAuth: true,
        user: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
    }
    default:
      return state;
  }
};

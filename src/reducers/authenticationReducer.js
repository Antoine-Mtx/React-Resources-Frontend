import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../constants/authenticationConstants.js';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case LOGOUT_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGOUT_USER_SUCCESS:
      return initialState;
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LOGOUT_USER_FAILURE:
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        user: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authenticationReducer;

import authenticationService from '../services/authenticationService.js';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  // SET_USER_REQUEST,
  // SET_USER_SUCCESS,
  // SET_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  RESTORE_AUTHENTICATED_USER,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../constants/authenticationConstants.js';

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const user = await authenticationService.getCurrentUser();
    dispatch(fetchUserSuccess(user));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};

// export const setUserRequest = () => ({
//   type: SET_USER_REQUEST,
// });

// export const setUserSuccess = (user) => ({
//   type: SET_USER_SUCCESS,
//   payload: user,
// });

// export const setUserFailure = (error) => ({
//   type: SET_USER_FAILURE,
//   payload: error,
// });

// export const setUser = () => async (dispatch) => {
//   dispatch(setUserRequest());
//   try {
//     const user = await authenticationService.setUser(formData);
//     dispatch(setUserSuccess(user));
//   } catch (error) {
//     dispatch(setUserFailure(error.message));
//   }
// };

export const loginRequest = () => ({
  type: LOGIN_USER_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const login = (formData) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const user = await authenticationService.loginUser(formData);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const restoreAuthenticatedUser = () => (dispatch) => {
  const userString = localStorage.getItem('user');
  if (userString) {
    const user = JSON.parse(userString);
    // Dispatch an action to restore the authenticated user in the Redux store
    dispatch({
      type: RESTORE_AUTHENTICATED_USER,
      payload: user });
  }
};

export const logoutRequest = () => ({
  type: LOGOUT_USER_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_USER_FAILURE,
  payload: error,
});

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    await authenticationService.logoutUser();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
};

export const registerRequest = () => ({
  type: REGISTER_USER_REQUEST,
});

export const registerSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const register = (formData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const user = await authenticationService.registerUser(formData);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

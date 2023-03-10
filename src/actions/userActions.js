import { loginUser, logoutUser, registerUser } from '../services/authenticationService.js';

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_USER_REQUEST' });
    const user = await loginUser(formData);
    dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'LOGIN_USER_FAILURE', payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  logoutUser();
  dispatch({ type: 'LOGOUT_USER' });
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'REGISTER_USER_REQUEST' });
    const user = await registerUser(formData);
    dispatch({ type: 'REGISTER_USER_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'REGISTER_USER_FAILURE', payload: error.message });
  }
};

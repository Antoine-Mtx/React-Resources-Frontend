import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/authentication/LoginForm.js';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authenticationActions.js';

const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authentication.loading);
  const error = useSelector(state => state.authentication.error);

  const handleLogin = (formData) => {
    dispatch(login(formData))
      .then(() => navigate('/resources'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <LoginForm handleLogin={handleLogin} loading={loading} error={error} />
    </>
  );
};

export default LoginContainer;


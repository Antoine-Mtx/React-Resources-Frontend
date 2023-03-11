import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/authentication/LoginForm.js';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/userActions.js';

const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(login(formData))
      .then(() => navigate('/resources'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};

export default LoginContainer;


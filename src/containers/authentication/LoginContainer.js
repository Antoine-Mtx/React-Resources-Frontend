import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/authentication/LoginForm.js';

const LoginContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/resources');
    } catch (error) {
      console.log(error);
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default LoginContainer;

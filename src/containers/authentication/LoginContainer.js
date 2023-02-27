import React from 'react';
import axios from 'axios';
import LoginForm from '../../components/authentication/LoginForm.js';

const LoginContainer = () => {
  const handleSubmit = async (formData) => {
    console.log(formData)
    try {
        const response = await axios.post(
            `http://localhost:8000/api/login`,
            formData,
            {
                headers: {
                'Content-Type': 'application/json',
                }
            }
        );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default LoginContainer;
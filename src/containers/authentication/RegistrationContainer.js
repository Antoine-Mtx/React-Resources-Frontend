import React from 'react';
import axios from 'axios';
import RegistrationForm from '../../components/authentication/RegistrationForm.js';

const RegistrationContainer = () => {
  const handleSubmit = async (formData) => {
    console.log(formData)
    try {
        const response = await axios.post(
            `http://localhost:8000/api/register`,
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

  return <RegistrationForm onSubmit={handleSubmit} />;
};

export default RegistrationContainer;

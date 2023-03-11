import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../../components/authentication/RegistrationForm.js';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/userActions.js';

const RegistrationContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(register(formData))
      .then(() => navigate('/login'))
      .catch((error) => console.log(error));
  };
  
  

  return <RegistrationForm onSubmit={handleSubmit} />;
};

export default RegistrationContainer;

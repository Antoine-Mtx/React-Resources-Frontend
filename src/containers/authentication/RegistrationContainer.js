import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../../components/authentication/RegistrationForm.js';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/authenticationActions.js';

const RegistrationContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authentication.loading);
  const error = useSelector(state => state.authentication.error); 

  const handleRegistration = (formData) => {
    dispatch(register(formData))
      .then(() => navigate('/login'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <RegistrationForm handleRegistration={handleRegistration} loading={loading} error={error} />
    </>
  );
};

export default RegistrationContainer;

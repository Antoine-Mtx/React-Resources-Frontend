import React, { useState, useEffect } from 'react';

const LoginForm = ({ handleLogin, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    const isFormValid = isEmailValid && isPasswordValid;
    setFormValid(isFormValid);
  }, [isEmailValid, isPasswordValid]);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const emailRegex = /^\S+@\S+\.\S+$/;
    setEmail(email);
    setEmailValid(emailRegex.test(email));
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setPasswordValid(password.length >= 6 && password.length <= 20);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
        const formData = {
            email: email,
            password: password
          };
        handleLogin(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      { loading ? (
        <p>Loading...</p>
      ) : error ? (
          <div className="alert alert-danger" role="alert">
            <p>{error.message}</p>
          </div>
      ) : (
        <>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Se connecter
          </button>
        </>
      )}
    </form>
  );
};

export default LoginForm;

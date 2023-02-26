import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [isUsernameValid, setUsernameValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    const isFormValid = isEmailValid && isUsernameValid && isPasswordValid;
    setFormValid(isFormValid);
  }, [isEmailValid, isUsernameValid, isPasswordValid]);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const emailRegex = /^\S+@\S+\.\S+$/;
    setEmail(email);
    setEmailValid(emailRegex.test(email));
  };

  const handleUsernameChange = (event) => {
    const username = event.target.value;
    setUsername(username);
    setUsernameValid(username.length >= 3 && username.length <= 20);
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setPasswordValid(password.length >= 6 && password.length <= 20);
  };

  const handlePasswordConfirmationChange = (event) => {
    const passwordConfirmation = event.target.value;
    setPasswordConfirmation(passwordConfirmation);
    setPasswordValid(passwordConfirmation.length >= 6 && passwordConfirmation.length <= 20);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      alert("Le mot de passe et sa confirmation ne correspondent pas.");
      return;
    }
    if (isFormValid) {
        const formData = {
            email: email,
            username: username,
            password: password
          };
        onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="username" className="form-label">
          Pseudo
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleUsernameChange}
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
      <div className="mb-3">
        <label htmlFor="password_confirmation">Confirmation du mot de passe:</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        S'inscrire
      </button>
    </form>
  );
};

export default RegistrationForm;

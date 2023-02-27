import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [isEmailValid, setEmailValid] = useState(false);
  const [isUsernameValid, setUsernameValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isPasswordConfirmationValid, setPasswordConfirmationValid] = useState(false);

  const [emailError, setEmailError] = useState('');
  // const [usernameError, setUsernameError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    const isFormValid = isEmailValid && isUsernameValid && isPasswordValid && isPasswordConfirmationValid;
    setFormValid(isFormValid);
  }, [isEmailValid, isUsernameValid, isPasswordValid, isPasswordConfirmationValid]);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const emailRegex = /^\S+@\S+\.\S+$/;
    setEmail(email);
    setEmailValid(emailRegex.test(email));
    if (!emailRegex.test(email)) {
      setEmailError("L'email saisi n'est pas valide");
    } else {
      setEmailError('');
    }
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
    setPasswordConfirmationValid(passwordConfirmation === password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
      {emailError && <div className="invalid-feedback">{emailError}</div>}
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
          className="form-control"
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

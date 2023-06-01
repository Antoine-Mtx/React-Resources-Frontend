import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ handleRegistration, loading, error }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [isEmailValid, setEmailValid] = useState(false);
  const [isUsernameValid, setUsernameValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isPasswordConfirmationValid, setPasswordConfirmationValid] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

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
    const isUsernameValid = username.length >= 3 && username.length <= 20;
    setUsernameValid(isUsernameValid);
    setUsernameError(isUsernameValid ? '' : 'Le pseudo doit contenir entre 3 et 20 caractères');
  };
  
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    const isPasswordValid = password.length >= 6 && password.length <= 20;
    setPasswordValid(isPasswordValid);
    setPasswordError(isPasswordValid ? '' : 'Le mot de passe doit contenir entre 6 et 20 caractères');
  };
  
  const handlePasswordConfirmationChange = (event) => {
    const passwordConfirmation = event.target.value;
    setPasswordConfirmation(passwordConfirmation);
    const isPasswordConfirmationValid = passwordConfirmation === password;
    setPasswordConfirmationValid(isPasswordConfirmationValid);
    setPasswordConfirmationError(isPasswordConfirmationValid ? '' : 'La confirmation du mot de passe ne correspond pas au mot de passe');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      const formData = {
        email: email,
        username: username,
        password: password
      };
      return handleRegistration(formData); // Return the promise here
    } else {
      return Promise.reject(new Error('Form is not valid')); // Return a rejected promise here
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
          className={`form-control ${emailError ? 'is-invalid' : ''} ${isEmailValid ? 'is-valid' : ''}`}
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      {emailError && <div className="invalid-feedback">{emailError}</div>}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Pseudo</label>
        <input
          type="text"
          className={`form-control ${usernameError ? 'is-invalid' : ''} ${isUsernameValid ? 'is-valid' : ''}`}
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        {usernameError && <div className="invalid-feedback">{usernameError}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Mot de passe</label>
        <input
          type="password"
          className={`form-control ${passwordError ? 'is-invalid' : ''} ${isPasswordValid ? 'is-valid' : ''}`}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password_confirmation">Confirmation du mot de passe:</label>
        <input
          type="password"
          className={`form-control ${passwordConfirmationError ? 'is-invalid' : ''} ${isPasswordConfirmationValid ? 'is-valid' : ''}`}
          id="password_confirmation"
          name="password_confirmation"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
          required
        />
        {passwordConfirmationError && <div className="invalid-feedback">{passwordConfirmationError}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        S'inscrire
      </button>
    </form>
  );
};

export default RegistrationForm;

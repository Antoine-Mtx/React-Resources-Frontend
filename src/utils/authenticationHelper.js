// services/authenticationHelper.js
export const getAuthenticationToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return null;
};

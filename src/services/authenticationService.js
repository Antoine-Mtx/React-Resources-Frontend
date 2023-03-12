import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const authenticationService = {
  loginUser: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Invalid email or password.');
    }
  },
  logoutUser: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  registerUser: async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const { user } = response.data;
      return user;
    } catch (error) {
      throw new Error('Failed to register user.');
    }
  },
};

export default authenticationService;
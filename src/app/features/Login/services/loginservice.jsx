import axios from 'axios';
import { API_BASE_URL, API_LOGIN_ENDPOINT, API_REGISTER_ENDPOINT } from '@/app/config/env';
import HomePage from '../pages/loginpage';

const loginservice = {
  login: async (employeeEmail, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}${API_LOGIN_ENDPOINT}`, {
        employeeEmail,
        password
      });
      return response.data;
    } catch (error) {
      // Throw an error with the response data or a generic message if data is not available
      const errorMessage = error.response ? error.response.data.message : 'Login failed';
      // Display the error message on the UI
      HomePage.displayError(errorMessage);
      throw new Error(errorMessage);
    }
  },

  register: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}${API_REGISTER_ENDPOINT}`, {
        email,
        password
      });
      return response.data;
    } catch (error) {
      // Throw an error with the response data or a generic message if data is not available
      const errorMessage = error.response ? error.response.data.message : 'Registration failed';
      // Display the error message on the UI
      HomePage.displayError(errorMessage);
      throw new Error(errorMessage);
    }
  }
};

export default loginservice;
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
      throw new Error('Login failed');
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
      throw new Error('Registration failed');
    }
  }
};

export default loginservice;
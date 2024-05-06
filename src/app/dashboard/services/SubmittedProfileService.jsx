import { API_BASE_URL, API_LOGIN_ENDPOINT, } from '@/app/config/env';
import axios from 'axios';
const fetchSubmittedProfiles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}${API_LOGIN_ENDPOINT}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching submitted profiles:', error);
    throw error;
  }
};

export { fetchSubmittedProfiles };

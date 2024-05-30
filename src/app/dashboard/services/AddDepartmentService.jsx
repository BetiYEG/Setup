import axios from 'axios';
import { API_BASE_URL, API_CREATE_DEPARTMENT_ENDPOINT } from '@/app/config/env'; // Import your environment variables

const addDepartment = async (departmentId, departmentName, departmentDescription) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${API_CREATE_DEPARTMENT_ENDPOINT}`, {
      departmentId,
      departmentName,
      departmentDescription
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    });
    if (response.status === 200) {
      return true;
    } else {
      throw new Error('Failed to add department');
    }
  } catch (error) {
    console.error('Error adding department:', error);
    throw new Error('Error adding department');
  }
};

export default addDepartment;
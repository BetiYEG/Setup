import axios from 'axios';

const API_URL = 'https://localhost:5001/';

export const createTraining = async (trainingData) => {
  const token = localStorage.getItem('authToken');
  if (!token) throw new Error('No auth token found');

  try {
    const response = await axios.post(`${API_URL}api/Trainings`, trainingData, {
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json-patch+json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error creating training: ' + error.message);
  }
};

// Exporting the service as an object if you need to add more methods later
const TrainingFormService = {
  createTraining,
};

export default TrainingFormService;

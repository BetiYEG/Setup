import axios from 'axios';

const BASE_URL = 'https://localhost:5001/'; // Ensure this matches your backend URL

export const fetchUploadedFiles = async (userId, token) => {
    try {
        // Retrieve the token from localStorage if not passed as an argument
        if (!token) {
            token = localStorage.getItem('authToken');
        }

        // Check if token exists
        if (!token) {
            throw new Error('Authentication token not found');
        }

        const response = await axios.get(`${BASE_URL}api/EmployeeFile`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            params: {
                userId
            }
        });

        // Log the complete response for debugging
        console.log('API response:', response);

        // Ensure response data is in the expected format
        if (typeof response.data !== 'object' || response.data === null) {
            throw new Error('Unexpected response data format');
        }

        // Convert the object into an array of file objects
        const files = [];
        for (const key in response.data) {
            if (response.data[key]) {
                files.push({
                    type: key,
                    url: response.data[key]
                });
            }
        }

        return files;
    } catch (error) {
        console.error('Error fetching files:', error);
        throw error;
    }
};

const API_BASE_URL = 'https://localhost:5001/api';

const getAuthToken = () => localStorage.getItem('authToken');

const checkIn = (_clockinTime) => {
  const token = getAuthToken();
  if (!token) throw new Error('No auth token found');

  return new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/Attendance/Clockin`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _clockinTime: _clockinTime.toISOString().slice(0, -5) + 'Z' }), // Sending the DateTime directly as an object
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      resolve({ success: true, data });
    })
    .catch(error => {
      reject({ success: false, message: error.message });
    });
  });
};

const checkOut = (_clockoutTime, ) => {
  const token = getAuthToken();
  if (!token) throw new Error('No auth token found');

  return new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/Attendance/Clockout`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _clockoutTime: _clockoutTime.toISOString()
        
       }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to check out.');
      }
      return response.json();
    })
    .then(data => {
      resolve({ success: true, data });
    })
    .catch(error => {
      reject({ success: false, message: error.message });
    });
  });
};

const AttendanceFormService = {
  checkIn,
  checkOut,
};

export default AttendanceFormService;

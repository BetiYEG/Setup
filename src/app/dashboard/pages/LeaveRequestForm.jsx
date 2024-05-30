import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaveRequestFormService from '../services/LeaveRequestFormService';

const LeaveRequestForm = () => {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [formData, setFormData] = useState({
    LeaveType: '',
    StartDate: '',
    EndDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchLeaveTypes = async () => {
      try {
        const types = await LeaveRequestFormService.getLeaveTypes();
        setLeaveTypes(types);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch leave types. Please try again.');
      }
    };
    fetchLeaveTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await LeaveRequestFormService.submitLeaveRequest(formData);
      console.log('Leave request submitted:', response);
      setSuccessMessage('Leave request submitted successfully.');
    } catch (error) {
      console.error('Error submitting leave request:', error);
      setError('Failed to submit leave request. Please ensure you are logged in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Leave Request Form</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Leave Type:</label>
          <select
            value={formData.LeaveType}
            onChange={(e) => setFormData({ ...formData, LeaveType: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Leave Type</option>
            {leaveTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Start Date:</label>
          <input
            type="date"
            value={formData.StartDate}
            onChange={(e) => setFormData({ ...formData, StartDate: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">End Date:</label>
          <input
            type="date"
            value={formData.EndDate}
            onChange={(e) => setFormData({ ...formData, EndDate: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit Leave Request'}
        </button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;

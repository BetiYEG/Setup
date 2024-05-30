import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addDepartment from '../services/AddDepartmentService';

const AddDepartment = () => {
  const navigate = useNavigate();

  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');
  const [error, setError] = useState(null);

  const handleDepartmentNameChange = (event) => {
    setDepartmentName(event.target.value);
  };

  const handleDepartmentDescriptionChange = (event) => {
    setDepartmentDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDepartment(departmentName, departmentDescription);
      setDepartmentName('');
      setDepartmentDescription('');
      navigate('/DepartmentList'); 
    } catch (error) {
      setError('Failed to add department');
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Add Department</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="departmentName" className="block font-medium mb-1">
              Department Name:
            </label>
            <input
              type="text"
              id="departmentName"
              value={departmentName}
              onChange={handleDepartmentNameChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="departmentDescription" className="block font-medium mb-1">
              Department Description:
            </label>
            <textarea
              id="departmentDescription"
              value={departmentDescription}
              onChange={handleDepartmentDescriptionChange}
              className="border border-gray-300 rounded px-3 py-2 w-full h-32 resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              Add Department
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddDepartment;

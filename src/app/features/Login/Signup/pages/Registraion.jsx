import React, { useState } from 'react';
import registrationService from '../services/Regestrationservice';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the registration service to register the user
      await registrationService.register(employeeName, employeeEmail, password);
      // Reset form fields
      setEmployeeName('');
      setEmployeeEmail('');
      setPassword('');
      // Display a success message or redirect to a success page
      console.log('Registration successful');
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#26313c]">
      <form onSubmit={handleSubmit} className="max-w-md w-full md:max-w-lg p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register
        </button>
        <p className="text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
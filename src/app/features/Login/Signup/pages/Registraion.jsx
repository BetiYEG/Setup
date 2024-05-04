import React, { useState } from 'react';
import registrationService from '../services/Regestrationservice';
import { Link } from 'react-router-dom';
import { Input } from '@/app/components/Input/input';
import { Button } from '@/app/components/Button/button';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const RegistrationForm = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the registration service to register the user
      await registrationService.register(employeeName, employeeEmail, password);
      // Reset form fields
      setEmployeeName('');
      setEmployeeEmail('');
      setPassword('');
      // Display a success message
      setRegistrationSuccess(true);
      setRegistrationError('');
    } catch (error) {
      // Handle registration error
      setRegistrationError('Registration failed: ' + error.message);
      setRegistrationSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#26313c] h-screen flex items-center justify-center p-10">
      <form onSubmit={handleSubmit} className="max-w-md w-full md:max-w-lg p-8 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
        {registrationSuccess && (
          <div className="text-green-500 mb-4 text-center">
            Registration successful!
          </div>
        )}
        {registrationError && (
          <div className="text-red-500 mb-4 text-center">
            {registrationError}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-gray-600">
            Name:
          </label>
          <Input
            type="text"
            id="name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="input-field"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-gray-600">
            Email:
          </label>
          <Input
            type="email"
            id="email"
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
            className="input-field"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-gray-600">
            Password:
          </label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Your Password"
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FiEyeOff size={18} className="text-gray-400" />
              ) : (
                <FiEye size={18} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600"
        >
          Register
        </Button>
        <p className="text-sm mt-4 text-gray-600 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
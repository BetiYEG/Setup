import React, { useState } from 'react';
import { Button } from "@/app/components/Button/button";
import { Label } from "@radix-ui/react-label";
import { Input } from '@/app/components/Input/input';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import the eye icons
import loginservice from '../services/loginservice';

function HomePage() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = async (e) => {
    e.preventDefault();
    const enteredEmail = e.target.elements.email.value;
    const enteredPassword = e.target.elements.password.value;

    try {
      // Call the login function from loginservice
      await loginservice.login(enteredEmail, enteredPassword);

      // Redirect to the appropriate page after successful authentication
      navigate('/employee');
    } catch (error) {
      // Handle any errors that occur during the login process
      console.error("Login error:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const enteredEmail = e.target.elements.email.value;
    const enteredPassword = e.target.elements.password.value;

    try {
      // Call the register function from loginservice
      await loginservice.register(enteredEmail, enteredPassword);

      // Redirect to the appropriate page after successful registration
      navigate('/dashboard');
    } catch (error) {
      // Handle any errors that occur during the registration process
      console.error("Registration error:", error);
    }
  };

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="bg-white md:w-96 p-8 rounded-lg flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6">Login</h1>
        <form onSubmit={handleLogin} className="w-full" method="post">
          <Label htmlFor="email">
            Email*
            <Input
              className="input-field mb-4 valid:border-indigo-500"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </Label>
          <Label htmlFor="password">
            Password*
            <div className="relative">
              <Input
                className="input-field mb-4 valid:border-indigo-500"
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
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
          </Label>
          <div className="flex items-center justify-between mb-6">
            <label
              htmlFor="rememberMe"
              className="text-sm text-gray-400 cursor-pointer flex items-center"
            >
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <a href="/Forget" className="text-indigo-500 hover:underline">
              Forget Password?
            </a>
          </div>
          <Button
            type="submit"
            className="w-full bg-indigo-500 text-white rounded-full py-2 hover:bg-indigo-700 mb-4"
          >
            Login
          </Button>
        </form>
        <p className="mt-4 text-xs text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </a>
        </p>
        <p className="mt-6 text-xs text-gray-400">@2024 All rights reserved.</p>
      </div>
    </main>
  );
}

export default HomePage;
import React, { useState } from 'react';
import { Button } from "@/app/components/Button/button";
import { Label } from "@radix-ui/react-label";
import { Input } from '@/app/components/Input/input';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredPassword = e.target.elements.password.value;

    // Send the password to the server for authentication and authorization
    // Implement server-side logic to validate the password and retrieve the user's role

    // Example: Assuming the server returns the user's role upon successful authentication and authorization
    const role = authenticateUser(enteredPassword);

    if (role) {
      // Redirect to the appropriate page based on the user's role
      if (role === "admin") {
        navigate('/admin');
      } else if (role === "manager") {
        navigate('/manager');
      } else if (role === "employee") {
        navigate('/employee');
      }
    } else {
      // Invalid password or authentication error, show an error message or handle it as needed
      console.log("Invalid password or authentication error, Try Again");
    }
  };

  const authenticateUser = (password) => {
    // Implement server-side logic to authenticate the user and retrieve the user's role
    // Example: Hard-coded password check, replace with your own authentication logic
    if (password === "admin123") {
      return "admin";
    } else if (password === "manager123") {
      return "manager";
    } else if (password === "employee123") {
      return "employee";
    } else {
      return null;
    }
  };

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="bg-white md:w-96 p-8 rounded-lg flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6">Login</h1>

        <form onSubmit={handleLogin} className="w-full" method="post">
          <Label htmlFor="email">Email*
            <Input className="input-field mb-4 valid:border-indigo-500" type="email" id="email" name="email" placeholder="Email" required />
          </Label>
          <Label htmlFor="password">Password*
            <Input className="input-field mb-4 valid:border-indigo-500" type="password" id="password" name="password" placeholder="Password" pattern="[a-z0-5]{8,}" required />
          </Label>

          <div className="flex items-center justify-between mb-6">
            <label htmlFor="rememberMe" className="text-sm text-gray-400 cursor-pointer flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              Remember Me
            </label>
            <a href="/forgot-password" className="text-indigo-500 hover:underline">Forgot Password?</a>
          </div>

          <Button type="submit" className="w-full bg-indigo-500 text-white rounded-full py-2 hover:bg-indigo-700 mb-4">
            Login
          </Button>
        </form>

        <p className="mt-4 text-xs text-gray-400">
          Don't have an account?<a href="/signup" className="text-indigo-500 hover:underline">Sign Up</a>
        </p>

        <p className="mt-6 text-xs text-gray-400">
          @2024 All rights reserved.
        </p>
      </div>
    </main>
  );
}

export default HomePage;

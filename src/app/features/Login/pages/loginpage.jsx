import React, { useState } from 'react';
import { Button } from "@/app/components/Button/button";
import { Label } from "@radix-ui/react-label";
import { Input } from '@/app/components/Input/input';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState(null); // State to store user information

  const handleLogin = async (e) => {
    e.preventDefault();
    const enteredPassword = e.target.elements.password.value;

    // Simulate server authentication
    try {
      const role = await authenticateUser(enteredPassword);
      if (role) {
        setUser({ name: 'John Doe', role }); // Store user information
        redirectBasedOnRole(role); // Redirect based on user role
      } else {
        console.log("Invalid password or authentication error, Try Again");
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
    }
  };

  const authenticateUser = async (password) => {
    // Simulated server authentication logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === "admin123") {
          resolve("admin");
        } else if (password === "manager123") {
          resolve("manager");
        } else if (password === "employee123") {
          resolve("employee");
        } else {
          resolve(null);
        }
      }, 1000); // Simulate delay for API call
    });
  };

  const redirectBasedOnRole = (role) => {
    // Redirect to the appropriate page based on the user's role
    if (role === "admin") {
      navigate('/admin');
    } else if (role === "manager") {
      navigate('/manager');
    } else if (role === "employee") {
      navigate('/employee');
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
          Don't have an account? <a href='/signup' className='text-indigo-500 hover:underline'>Sign Up</a>
        </p>

        <p className="mt-6 text-xs text-gray-400">
          @2024 All rights reserved.
        </p>
      </div>
    </main>
  );
}

export default HomePage;

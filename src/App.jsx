/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import Performance from "./app/components/PerformanceReviewForm/Performance";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./app/features/Login/pages/loginpage";
import Home from "./app/dashboard/pages/Dashboard";
import RegistrationForm from "./app/features/Login/Signup/pages/Registraion";
import Header from "./app/layout/Header";
import Admin from "./app/dashboard/pages/Admin";
import Manager from "./app/dashboard/pages/Manager";
import Employee from "./app/dashboard/pages/employee";
import ForgotPasswordPage from "./app/features/Login/Signup/pages/Forgetpassword";
import EmployeeHome from "./app/dashboard/pages/Home";
import Profile from "./app/dashboard/pages/Profile";
import Settings from "./app/dashboard/pages/Settings";



function App() {
  useEffect(() => {
    axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/login" element={<HomePage />} />
          <Route path="/dashboard/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/EmployeeHome" element={<EmployeeHome />} />
          <Route path="/performance/:id" element={<Performance />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Forget" element={<ForgotPasswordPage />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/Settings" element={<Settings />} />



          <Route path="/signup" element={<RegistrationForm />} />

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
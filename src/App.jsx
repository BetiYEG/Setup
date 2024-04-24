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
import Employee from "./app/components/List/EmployeeList/Employee";
import Admin from "./app/dashboard/pages/Admin";
import Manager from "./app/dashboard/pages/Manager";


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
          <Route path="/reg" element={<RegistrationForm />} />
          <Route path="/header" element={<Header />} />
          
          <Route path="/performance/:id" element={<Performance />} />
          <Route path="/employee/:id" element={<Employee />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/manager" element={<Manager />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
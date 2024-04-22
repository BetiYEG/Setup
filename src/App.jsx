/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import Performance from "./app/components/PerformanceReviewForm/Performance";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./app/features/auth/pages/Login";
import Home from "./app/dashboard/pages/Dashboard";
import RegistrationForm from "./app/features/auth/pages/Register";
import Header from "./app/layout/Header";
import Sidebar from "./app/layout/Sidebar";
import Employee from "./app/components/List/EmployeeList/Employee";
function App() {
  useEffect(() => {
    axios.get(" https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/reg" element={<RegistrationForm />} />
          <Route path="/header" element={<Header />} />
          <Route path="/homepage" element={<Sidebar />} />
          <Route path="/Performance" element={<Performance />} />
          <Route path="/Employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
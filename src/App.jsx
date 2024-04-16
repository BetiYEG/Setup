/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./app/features/auth/pages/Login";
import Dashboard from "./app/dashboard/pages/Dashboard";
import RegistrationForm from "./app/features/auth/pages/Register";
import Header from "./app/layout/Header";
import Sidebar from "./app/layout/Sidebar";
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
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reg" element={<RegistrationForm />} />
          <Route path="/header" element={<Header />} />
          <Route path="/headr" element={<Sidebar />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
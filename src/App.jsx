import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Performance from './app/components/PerformanceReviewForm/Performance';
import HomePage from './app/features/Login/pages/loginpage';
import Home from './app/dashboard/pages/Dashboard';
import RegistrationForm from './app/dashboard/pages/Setting/User/AddUser';
import Header from './app/layout/Header';
import Admin from './app/dashboard/pages/Admin';
import Manager from './app/dashboard/pages/Manager';
import Employee from './app/dashboard/pages/employee';
import ForgotPasswordPage from './app/features/Login/Signup/pages/Forgetpassword';
import EmployeeHome from './app/dashboard/pages/Home';
import Profile from './app/dashboard/pages/Profile';
import GeneralSettings from './app/dashboard/pages/Setting/GeneralSetting';
import GeneralSettingsService from './app/dashboard/services/GeneralSettingsService';
import UserAccessRolePage from './app/dashboard/pages/Setting/role/UserAccessRolePage';
import AssignRoleForm from './app/dashboard/pages/Setting/role/AssignRoleForm';
import AdminPage from './app/dashboard/pages/Setting/role/AdminPage';
import UserList from './app/dashboard/pages/Setting/User/UserList';
import AddDepartment from './app/dashboard/pages/AddDepartment';
import DepartmentList from './app/dashboard/pages/DepartmentList';
import UpdatedProfile from './app/dashboard/pages/Setting/User/UpdatedProfile';
import Attendance from './app/dashboard/pages/Attendance';
import AttendanceForm from './app/dashboard/pages/AttendanceForm';
import Leave from './app/dashboard/pages/Leave';
import LeaveRequestForm from './app/dashboard/pages/LeaveRequestForm';
import Payroll from './app/dashboard/pages/Payroll';
import PayrollList from './app/dashboard/pages/PayrollList';
import EmployeeDetail from './app/dashboard/pages/EmployeeDetail';
import FileUploadPage from './app/dashboard/pages/Fileupload';
import FileUploadList from './app/dashboard/pages/FileuploadList';
function App() {
  useEffect(() => {
    axios.get("")
      .then(res => {
        console.log("Response data:", res.data); // Log the response data
      })
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/EmployeeHome" element={<EmployeeHome />} />
        <Route path="/performance/:id" element={<Performance />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Forget" element={<ForgotPasswordPage />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/AddUser" element={<RegistrationForm />} />
        <Route path="/GeneralSettings" element={<GeneralSettings />} />
        <Route path="/GeneralSettingsService" element={<GeneralSettingsService />} />
        <Route path="/UserAccessRolePage" element={<UserAccessRolePage />} />
        <Route path="/AssignRoleForm" element={<AssignRoleForm />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/AddDepartment" element={<AddDepartment />} />
        <Route path="/DepartmentList" element={<DepartmentList />} />
        <Route path="/UpdatedProfile/:employeeId" element={<UpdatedProfile />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/AttendanceForm" element={<AttendanceForm />} />
        <Route path="/Leave" element={<Leave />} />
        <Route path="/LeaveRequestForm" element={<LeaveRequestForm />} />
        <Route path="/Payroll" element={<Payroll />} />
        <Route path="/PayrollList" element={<PayrollList />} />
        <Route path="/EmployeeDetail" element={<EmployeeDetail />} />
        <Route path="/FileUploadPage/:employeeId" element={<FileUploadPage />} />
        <Route path="/FileUploadList" element={<FileUploadList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

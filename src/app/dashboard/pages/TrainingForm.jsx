import React, { useState } from 'react';
import { createTraining } from '../services/TrainingFormService'; // Adjust the path if needed
import Header from '@/app/layout/Header';
import { FcDepartment } from "react-icons/fc";

import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsBriefcaseFill,
  BsPaypal
} from 'react-icons/bs';

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    type: 'video',
    title: '',
    description: '',
    url: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false); 
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    // Log formData before making the API call
    console.log('Submitting form data:', formData);
    
    try {
      const responseData = await createTraining(formData);
      setSuccess('Training created successfully!');
      console.log('Response:', responseData);
    } catch (error) {
      setError('Failed to create training');
    }
  };

  const handleSettingsClick = () => {
    setShowSubmenu(!showSubmenu);
  };

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 ">
      <Header />
      <div className="flex flex-1">
        <div className={`${openSidebarToggle ? "sidebar-responsive" : ""} bg-white text-gray-800 overflow-y-auto p-4 transition-all duration-300 md:w-64 lg:w-64`}>
          <aside id="sidebar">
            <div className='flex justify-between items-center mb-4'>
              <div className='flex items-center'>
                <button className="md:hidden" onClick={toggleSidebar}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <span className='cursor-pointer' onClick={toggleSidebar}></span>
            </div>
            <ul className={`space-y-2 ${openSidebarToggle ? 'block' : 'hidden md:block'}`}>
              <li className='sidebar-list-item'>
                <a href="#" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors' onClick={handleSettingsClick}>
                  <BsFillGearFill className='text-lg mr-2' /> Settings
                </a>
                {showSubmenu && (
                  <ul className="ml-4">
                    <li className='sidebar-list-item'>
                      <a href="/PayrollSetting" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                        <BsPaypal className='text-lg mr-2' /> Payroll Settings
                      </a>
                    </li>
                    <li className='sidebar-list-item'>
                      <a href="/GeneralSettings" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                        <BsFillGearFill className='text-lg mr-2' /> General Settings
                      </a>
                    </li>
                    <li className='sidebar-list-item'>
                      <a href="/EmployeeData" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                        <BsPeopleFill className='text-lg mr-2' /> Employee Data
                      </a>
                    </li>
                    <li className='sidebar-list-item'>
                      <a href="/PerformanceManagement" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                        <BsFillGrid3X3GapFill className='text-lg mr -2' /> Performance Management
                      </a>
                    </li>
                    <li className='sidebar-list-item'>
                      <a href="/AttendanceManagement" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                        <BsBriefcaseFill className='text-lg mr-2' /> Attendance and Leave Management
                      </a>
                    </li>
                    <li className='sidebar-list-item'>
                      <a href="/TrainingDevelopment" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                        <BsPaypal className='text-lg mr-2' /> Training and Development
                      </a>
                    </li>
                    <li className='sidebar-list-item'>
                      <a href="/Security" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                        <BsPaypal className='text-lg mr-2' /> Security
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className='sidebar-list-item'>
                <a href="Admin" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <BsGrid1X2Fill className='text-lg mr-2' /> Dashboard
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="Performance" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <BsFillGrid3X3GapFill className='text-lg mr-2' /> Performance
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="UserList" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded -lg transition-colors'>
                  <BsPeopleFill className='text-lg mr-2' /> Employees
                </a>
              </li>
            
              <li className='sidebar-list-item'>
                <a href="/DepartmentList" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <FcDepartment className='text-lg mr-2' /> Department
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="/GenerateReport" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                <BsMenuButtonWideFill className='text-lg mr-2' /> Reports
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="/AdminLeave" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <BsBriefcaseFill className='text-lg mr-2' /> Leave
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="/payroll" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <BsPaypal className='text-lg mr-2' /> Salary
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="/TrainingForm" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <BsMenuButtonWideFill className='text-lg mr-2' /> Training
                </a>
              </li>
            </ul>
          </aside>
              </div>
              <div className="flex items-center justify-center min-h-screenb mx-auto ">

        <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded">
          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">URL</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
          </div>
          </div>
  );
};

export default TrainingForm;


import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import Header from '@/app/layout/Header';
import { FaRegCommentAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiViewList } from "react-icons/ci";
import { BiMoney } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
<<<<<<< HEAD
import EmployeeHome from './Home';

// eslint-disable-next-line react/prop-types
function Employee({ openSidebarToggle, OpenSidebar }) {
  const menuItems = [
    {
      icon: <IoHomeOutline className='text-lg mr-2' />,
      text: 'Home',
      link: '/EmployeeHome'
    },
    {
      icon: <BsPeopleFill className='text-lg mr-2' />,
      text: 'My Profile',
      link: '/Profile'
    },
    {
      icon: <SlCalender className='text-lg mr-2' />,
      text: 'Attendance',
      link: ''
    },
    {
      icon: <FaRegCommentAlt className='text-lg mr-2' />,
      text: 'Leave',
      link: ''
    },
    {
      icon: <CiViewList className='text-lg mr-2' />,
      text: 'Report',
      link: ''
    },
    {
      icon: <BiMoney className='text-lg mr-2' />,
      text: 'Finance',
      link: ''
    },
    {
      icon: <GiTrophyCup className='text-lg mr-2' />,
      text: 'Performance',
      link: ''
    }
    // Add other menu items specific to the Employee component
  ];
=======
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
function Employee({ openSidebarToggle, OpenSidebar }) {
  // You can add any necessary state or useEffect hooks specific to the Employee component
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const currentDateString = currentDate.toLocaleDateString();
  const [showAttendancePopup, setShowAttendancePopup] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
>>>>>>> 64d073f3134589b22f478bc7bdb6c9d895632451

  const handleAttendanceClick = (e) => {
    e.preventDefault();  
    setShowAttendancePopup(true);
  };

  const handleSubmitAttendance = (e) => {
    e.preventDefault();
    console.log('Attendance submitted!');
    setShowAttendancePopup(false);
    setShowConfirmationPopup(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmationPopup(false);
  };
  return (
<<<<<<< HEAD
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`${
        openSidebarToggle ? "w-0" : "w-"
      } bg-white text-gray-800 overflow-y-auto p-4 transition-all duration-300`}>
        <aside id="sidebar">
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center'>
              <button className="md:hidden" onClick={OpenSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <span className='cursor-pointer' onClick={OpenSidebar}></span>
          </div>
          <ul className={`space-y-2 ${openSidebarToggle ? 'block' : 'hidden md:block'}`}>
            {menuItems.map((menuItem, index) => (
              <li key={index} className='sidebar-list-item'>
                <a href={menuItem.link} className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  {menuItem.icon} {menuItem.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Employee Home Page */}
      <div className="flex-1 overflow-y-auto">
        <Header /> {/* Use the Header component */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Employee Page</h1>
=======
    <div className="flex flex-col h-screen">
      <Header /> {/* Use the Header component */}
      <div className="flex flex-1">
        <div className={`${openSidebarToggle ? "sidebar-responsive" : ""} bg-white text-gray-800 overflow-y-auto p-4 transition-all duration-300 md:w-64 lg:w-64`}>
          <aside id="sidebar">
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center'>
                <button className="md:hidden" onClick={OpenSidebar}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <span className='cursor-pointer' onClick={OpenSidebar}></span>
            </div>
            <ul className={`space-y-2 ${openSidebarToggle ? 'block' : 'hidden md:block'}`}>
              <li className='sidebar-list-item'>
                <a href="/EmployeeHome" className='flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white'>
                  <IoHomeOutline  className='mr-2 text-lg' /> Home
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="/Profile" className='flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white'>
                  <BsPeopleFill className='mr-2 text-lg' /> My Profile
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a className='flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white' onClick={handleAttendanceClick}>
                  <SlCalender className='mr-2 text-lg' /> Attendance
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white'>
                  <FaRegCommentAlt className='mr-2 text-lg' /> Leave
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white'>
                  <CiViewList className='mr-2 text-lg' /> Report
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white'>
                  <BiMoney className='mr-2 text-lg' /> Finance
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white'>
                  <GiTrophyCup className='mr-2 text-lg' /> Performancce
                </a>
              </li>
              
              {/* Add other menu items specific to the Employee component */}
            </ul>
          </aside>
        </div>
        <div className="flex justify-between flex-1 overflow-y-auto">
          {/* Add the content for the Employee component */}
          <h1>Employee</h1>
          <div className="h-4 p-2">
          <p>Current Date: {currentDateString}</p>
          <p>Current Time: {currentTime}</p>
          </div>
>>>>>>> 64d073f3134589b22f478bc7bdb6c9d895632451
          {/* Add the rest of the employee page content */}
        </div>
        <div className="ml-0 mr-0 w-2/3">
          <EmployeeHome />
        </div>
      </div>
      {showAttendancePopup && (
        <div className="fixed top-0 left-0 flex justify-center w-full h-full bg-gray-500 bg-opacity-50">
          <div className="w-1/2 p-4 bg-white rounded-lg h-1/2">
  <h2 className="text-lg font-bold">Attendance Sheet</h2>
  <p>Today's Date: {new Date().toLocaleDateString()}</p>
  <p>Today's Time: {new Date().toLocaleTimeString()}</p>
  <form onSubmit={handleSubmitAttendance}>  {/* Submit form on button click */}
    <div className="mb-4">
      <label htmlFor="employeeName" className="block mb-2 font-bold text-gray-700">Employee Name:</label>
      <input type="text" id="employeeName" name="employeeName" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" required />
    </div>
    <div className="mb-4">
      <label htmlFor="attendanceStatus" className="block mb-2 font-bold text-gray-700">Attendance Status:</label>
      <div className="flex items-center">
        <input type="radio" id="present" name="attendanceStatus" value="present" className="mr-2" required />
        <label htmlFor="present">Present</label>
        <input type="radio" id="absent" name="attendanceStatus" value="absent" className="ml-4 mr-2" required />
        <label htmlFor="absent">Absent</label>
        <input type="radio" id="sick" name="attendanceStatus" value="sick" className="ml-4 mr-2" required />
        <label htmlFor="sick">Sick</label>
        {/* Add additional options like "Late" if needed */}
      </div>
    </div>
    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">Submit Attendance</button>
  </form>
</div>

        </div>
      )}
      {showConfirmationPopup && (
        <div className="fixed top-0 left-0 flex justify-center w-full h-full bg-gray-500 bg-opacity-50">
          <div className="w-1/2 p-4 bg-white rounded-lg h-1/2">
            <h2 className="text-lg font-bold text-center">Attendance Submission Confirmation</h2>
            <p className="text-center">Your attendance has been successfully submitted!</p>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded mx-[275px] hover:bg-blue-700" onClick={handleConfirmationClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employee;
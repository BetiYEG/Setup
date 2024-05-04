import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import Header from '@/app/layout/Header';
import { FaRegCommentAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiViewList } from "react-icons/ci";
import { BiMoney } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
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

  return (
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
          {/* Add the rest of the employee page content */}
        </div>
        <div className="ml-0 mr-0 w-2/3">
          <EmployeeHome />
        </div>
      </div>
    </div>
  );
}

export default Employee;
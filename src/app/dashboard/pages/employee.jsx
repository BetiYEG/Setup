import React, { } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import Header from '@/app/layout/Header';
import { FaRegCommentAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiViewList } from "react-icons/ci";
import { BiMoney } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
function Employee({ openSidebarToggle, OpenSidebar }) {
  // You can add any necessary state or useEffect hooks specific to the Employee component

  return (
    <div className="flex flex-col h-screen">
      <Header /> {/* Use the Header component */}
      <div className="flex flex-1">
        <div className={`${openSidebarToggle ? "sidebar-responsive" : ""} bg-white text-gray-800 overflow-y-auto p-4 transition-all duration-300 md:w-64 lg:w-64`}>
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
              <li className='sidebar-list-item'>
                <a href="/EmployeeHome" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <IoHomeOutline  className='text-lg mr-2' /> Home
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="/Profile" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <BsPeopleFill className='text-lg mr-2' /> My Profile
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <SlCalender className='text-lg mr-2' /> Attendance
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <FaRegCommentAlt className='text-lg mr-2' /> Leave
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <CiViewList className='text-lg mr-2' /> Report
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <BiMoney className='text-lg mr-2' /> Finance
                </a>
              </li>
              <li className='sidebar-list-item'>
                <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors'>
                  <GiTrophyCup className='text-lg mr-2' /> Performancce
                </a>
              </li>
              
              {/* Add other menu items specific to the Employee component */}
            </ul>
          </aside>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Add the content for the Employee component */}
          <h1>Employee Page</h1>
          {/* Add the rest of the employee page content */}
        </div>
      </div>
    </div>
  );
}

export default Employee;
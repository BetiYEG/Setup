import React, { useState } from 'react';
import { BsPeopleFill, BsPaypal } from 'react-icons/bs';
import Header from '@/app/layout/Header';
import { FaRegCommentAlt } from 'react-icons/fa';
import { CiViewList } from 'react-icons/ci';
import { BiMoney } from 'react-icons/bi';
import { GiTrophyCup } from 'react-icons/gi';
import { IoHomeOutline } from 'react-icons/io5';

function Settings({ openSidebarToggle, OpenSidebar }) {
  const [dailyWagesFraction, setDailyWagesFraction] = useState(0.5);
  const [emailSalarySlip, setEmailSalarySlip] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div
          className={`${
            openSidebarToggle ? 'sidebar-responsive' : ''
          } bg-white text-gray-800 overflow-y-auto p-4 transition-all duration-300 md:w-64 lg:w-64`}
        >
          <aside id="sidebar" className='fixed'>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <button className="md:hidden" onClick={OpenSidebar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <span className="cursor-pointer" onClick={OpenSidebar}></span>
            </div>
            <ul
              className={`space-y-2 ${
                openSidebarToggle ? 'block' : 'hidden md:block'
              }`}
            >
              <li className='sidebar-list-item'>
                <a href="/EmployeeHome" className='flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white'>
                  <IoHomeOutline  className='mr-2 text-lg' />
                   Home
                </a>
              </li>
              <li className="sidebar-list-item">
  <a
    href="#Profile_Settings"
    className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
  >
    <BsPeopleFill className="mr-2 text-lg" /> My Profile
  </a>
</li>

              <li className="sidebar-list-item">
                <a
                  href="#Leave_Settings"
                  className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
                >
                  <FaRegCommentAlt className="mr-2 text-lg" /> Leave
                </a>
              </li>
              <li className="sidebar-list-item">
                <a
                  href="#Report_Settings"
                  className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
                >
                  <CiViewList className="mr-2 text-lg" /> Report
                </a>
              </li>
              <li className="sidebar-list-item">
                <a
                  href="#Finiance_Settings"
                  className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
                >
                  <BiMoney className="mr-2 text-lg" /> Finance
                </a>
              </li>
              <li className="sidebar-list-item">
                <a
                  href="#Performance_settings"
                  className="flex items-center px-2 py-1 transition-colors rounded-lg hover:bg-blue-500 hover:text-white"
                >
                  <GiTrophyCup className="mr-2 text-lg" /> Performance
                </a>
              </li>
              <li className="sidebar-list-item">
                <a
                  href="#payroll"
                  className="flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-lg transition-colors"
                >
                  <BsPaypal className="text-lg mr-2" /> Payroll
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <div>
        <div className="p-4 h-full" id="Profile_Settings"><h1 className="text-2xl font-bold mb-4">Profile Settings</h1></div>
        <div className="p-4 h-full" id="Leave_Settings"><h1 className="text-2xl font-bold mb-4">Leave Settings</h1></div>
        <div className="p-4 h-full" id="Report_Settings"><h1 className="text-2xl font-bold mb-4">Report Settings</h1></div>
        <div className="p-4 h-full" id="Finiance_Settings"><h1 className="text-2xl font-bold mb-4">Finiance Settings</h1></div>
        <div className="p-4 h-full" id="Performance_settings"><h1 className="text-2xl font-bold mb-4">Performance settings</h1></div>
          <div className="p-4" id="payroll">
            <h1 className="text-2xl font-bold mb-4">Payroll Settings</h1>
            <div className="mb-4">
            <div className="mb-4">
  <label htmlFor="paySchedule" className="block text-sm font-medium mb-2">Pay Schedule</label>
  <select id="paySchedule" className="border rounded-md px-3 py-2 focus:outline-none">
    <option value="weekly">Weekly</option>
    <option value="biweekly">Bi-weekly</option>
    <option value="semimonthly">Semi-monthly</option>
    <option value="monthly">Monthly</option>
  </select>
</div>
<div className="mb-4">
  <label htmlFor="bankName" className="block text-sm font-medium mb-2">Bank Name</label>
  <input type="text" id="bankName" className="border rounded-md px-3 py-2 focus:outline-none" />
  <label htmlFor="accountNumber" className="block text-sm font-medium mb-2">Account Number</label>
  <input type="text" id="accountNumber" className="border rounded-md px-3 py-2 focus:outline-none" />
</div>

<div className="mb-4">
  <label htmlFor="filingStatus" className="block text-sm font-medium mb-2">Filing Status</label>
  <select id="filingStatus" className="border rounded-md px-3 py-2 focus:outline-none">
    <option value="single">Single</option>
    <option value="married">Married</option>
    <option value="headOfHousehold">Head of Household</option>
  </select>
  <label htmlFor="allowances"className="block text-sm font-medium mb-2">Allowances (W-4)</label>
  <input type="number" id="allowances" className="border rounded-md px-3 py-2 focus:outline-none" />
</div>
              
            </div>
            <div className="mb-4">
              <label htmlFor="HalfDay" className="block text-sm font-medium mb-2">Daily Wages Fraction for Half Day</label>
              <input type="number" id="halfDay" className="border rounded-md px-3 py-2 focus:outline-none" step="0.01" min="0" max="1" value={dailyWagesFraction} onChange={(e) => setDailyWagesFraction(parseFloat(e.target.value))} />
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={emailSalarySlip}
                onChange={(e) => setEmailSalarySlip(e.target.checked)}
              />
              <label className="text-sm font-medium mb-2"> Email Salary Slip to Employee</label>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
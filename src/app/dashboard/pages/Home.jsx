import React from 'react';
import { FcLeave } from 'react-icons/fc';
import { BsPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GiTakeMyMoney } from 'react-icons/gi';

const EmployeeHome = () => {
  return (
    <main className="main-container bg-gray-100 p-4 sm:p-6">
      <div className="main-title mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold">DASHBOARD</h3>
      </div>

      <div className="main-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {/* Cards */}
        <div className="card bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center justify-between">
          <div className="card-icon bg-blue-500 text-white rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-110">
            <GiTakeMyMoney size={20} sm:size={24} />
          </div>
          <div className="card-content">
            <h4 className="text-xl sm:text-2xl font-bold">Salary</h4>
            <p className="text-gray-500">Salary</p>
          </div>
        </div>
        <div className="card bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center justify-between">
          <div className="card-icon bg-green-500 text-white rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-110">
            <FcLeave size={20} sm:size={24} />
          </div>
          <div className="card-content">
            <h4 className="text-xl sm:text-2xl font-bold">Leave</h4>
            <p className="text-gray-500">Leave</p>
          </div>
        </div>
        <div className="card bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center justify-between">
          <div className="card-icon bg-yellow-500 text-white rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:scale-110">
            <BsPeopleFill size={20} sm:size={24} />
          </div>
          <div className="card-content">
            <h4 className="text-xl sm:text-2xl font-bold">Employee</h4>
            <p className="text-gray-500">Employee</p>
          </div>
        </div>
        <div className="card bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center justify-between">
          <div className="card-icon bg-red-500 text-white rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-red-600 hover:scale-110">
            <CgProfile size={20} sm:size={24} />
          </div>
          <div className="card-content">
            <h4 className="text-xl sm:text-2xl font-bold">Profile</h4>
            <p className="text-gray-500">Profile</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployeeHome;
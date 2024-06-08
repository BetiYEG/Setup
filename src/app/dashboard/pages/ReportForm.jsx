// ReportForm.js
import React, { useState } from 'react';

const ReportForm = () => {
  const [criteria, setCriteria] = useState({
    fromDate: '',
    toDate: '',
    employeeAttributes: [],
    departments: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria(prevCriteria => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send criteria to backend for report generation
    console.log(criteria);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Generate Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">From Date</label>
          <input type="date" name="fromDate" value={criteria.fromDate} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">To Date</label>
          <input type="date" name="toDate" value={criteria.toDate} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        {/* Additional criteria inputs */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Employee Attributes</label>
          <select multiple name="employeeAttributes" value={criteria.employeeAttributes} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="attribute1">Attribute 1</option>
            <option value="attribute2">Attribute 2</option>
            <option value="attribute3">Attribute 3</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Departments</label>
          <select multiple name="departments" value={criteria.departments} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="department1">Department 1</option>
            <option value="department2">Department 2</option>
            <option value="department3">Department 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Generate Report</button>
      </form>
    </div>
  );
};

export default ReportForm;

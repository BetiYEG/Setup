import React, { useState } from 'react';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeId, setEmployeeId] = useState(null);
  const [gender, setGender] = useState('');
  const [employeeDOB, setEmployeeDOB] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [department, setDepartment] = useState('');
  const [educationCredentialFiles, setEducationCredentialFiles] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmployeeIdChange = (event) => {
    const file = event.target.files[0];
    setEmployeeId(file);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEmployeeDOBChange = (event) => {
    setEmployeeDOB(event.target.value);
  };

  const handleEmployeeAddressChange = (event) => {
    setEmployeeAddress(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleEducationCredentialFilesChange = (event) => {
    const files = Array.from(event.target.files);
    setEducationCredentialFiles(files);
  };

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or API call with the collected data
    // You can access the form data in these variables:
    // firstName, lastName, employeeId, gender, employeeDOB, employeeAddress, department, educationCredentialFiles, profilePhoto

    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmployeeId(null);
    setGender('');
    setEmployeeDOB('');
    setEmployeeAddress('');
    setDepartment('');
    setEducationCredentialFiles([]);
    setProfilePhoto(null);
  };
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="bg-[#26313c] max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Profile</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="employeeAddress" className="block mb-1">
              Employee Address:
            </label>
            <input
              type="text"
              id="employeeAddress"
              value={employeeAddress}
              onChange={handleEmployeeAddressChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="department" className="block mb-1">
              Department:
            </label>
            <select
              id="department"
              value={department}
              onChange={handleDepartmentChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="department1">Department 1</option>
              <option value="department2">Department 2</option>
              <option value="department3">Department 3</option>
            </select>
          </div>
          <div>
            <label htmlFor="employeeId" className="block mb-1">
              Employee ID:
            </label>
            <input
              type="file"
              id="employeeId"
              onChange={handleEmployeeIdChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block mb-1">
              Gender:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={handleGenderChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="employeeDOB" className="block mb-1">
              Date of Birth:
            </label>
            <input
              type="date"
              id="employeeDOB"
              value={employeeDOB}
              onChange={handleEmployeeDOBChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="educationCredentialFiles" className="block mb-1">
              Education Credentials:
            </label>
            <input
              type="file"
              id="educationCredentialFiles"
              multiple
              onChange={handleEducationCredentialFilesChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="profilePhoto" className="block mb-1">
              Profile Photo:
            </label>
            <input
              type="file"
              id="profilePhoto"
              onChange={handleProfilePhotoChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="col-span-2">
          <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Profile;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/Button/button';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/app/components/Input/input';
import RegistrationFormService from '@/app/dashboard/services/AddUserService';

const AddUser = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [employeeDOB, setEmployeeDOB] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [department, setDepartment] = useState('');
  const [roleOptions, setRoleOptions] = useState([]);
  const [role, setRole] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDepartmentOptions();
    fetchRoleOptions();
  }, []);

  const fetchDepartmentOptions = async () => {
    try {
      const response = await fetch('https://localhost:5001/api/Department/GetAllDepartmentNames');
      if (!response.ok) {
        throw new Error('Failed to fetch department options');
      }
      const data = await response.json();
      const options = data.map((name) => ({ id: name, name }));
      setDepartmentOptions(options);
      if (options.length > 0) {
        setDepartment(options[0].id);
      }
    } catch (error) {
      console.log('Error fetching department options:', error);
    }
  };

  const fetchRoleOptions = async () => {
    try {
      const response = await fetch('https://localhost:5001/api/Role/getAllRoles');
      if (!response.ok) {
        throw new Error('Failed to fetch role options');
      }
      const data = await response.json();
      const options = data.map((name) => ({ id: name, name }));
      setRoleOptions(options);
      if (options.length > 0) {
        setRole(options[0].name);
      }
    } catch (error) {
      console.log('Error fetching role options:', error);
    }
  };

  const handleInputChange = (event, setState, isDepartment) => {
    if (isDepartment) {
      const selectedDepartmentId = event.target.value;
      setDepartment(selectedDepartmentId);
    } else {
      setState(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const userData = {
        EmployeeFirstName: firstName,
        EmployeeLastName: lastName,
        EmployeePhone: phoneNumber,
        Gender: gender,
        EmployeeAddress: employeeAddress,
        EmployeeEmail: email,
        AdminAssignedRole: role,
        DepartmentName: department,
        BankAccount: bankAccount,
        EmployeeDOB: employeeDOB,
      };

      await RegistrationFormService.registerUser(userData);

      resetFormFields();
      navigate('/UserList');
    } catch (error) {
      setIsLoading(false);
      setFormError(error.message || 'Registration failed.');
    }
  };

  const resetFormFields = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setEmployeeDOB('');
    setEmployeeAddress('');
    setPhoneNumber('');
    setEmail('');
    setDepartment('');
    setRole('');
    setBankAccount('');
    setFormError('');
  };

  return (
    <main className="bg-[#26313c] min-h-screen flex items-center justify-center p-10">
      <div className="bg-white max-w-md mx-auto p-4 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Add User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Form fields */}
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="firstName">First Name:</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(event) => handleInputChange(event, setFirstName)}
            />
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="lastName">Last Name:</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(event) => handleInputChange(event, setLastName)}
            />
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="employeeAddress">Employee Address:</Label>
            <Input
              id="employeeAddress"
              value={employeeAddress}
              onChange={(event) => handleInputChange(event, setEmployeeAddress)}
            />
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="role">Role:</Label>
            <select
              id="role"
              value={role}
              onChange={(event) => handleInputChange(event, setRole)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Role</option>
              {roleOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          {/* Other form fields */}
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="employeeDOB">Employee Date of Birth:</Label>
            <Input
              id="employeeDOB"
              type="date"
              value={employeeDOB}
              onChange={(event) => handleInputChange(event, setEmployeeDOB)}
            />
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="gender">Gender:</Label>
            <select
              id="gender"
              value={gender}
              onChange={(event) => handleInputChange(event, setGender)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="phoneNumber">Phone Number:</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(event) => handleInputChange(event, setPhoneNumber)}
            />
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => handleInputChange(event, setEmail)}
            />
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="department">Department:</Label>
            <select
              id="department"
              value={department}
              onChange={(event) => handleInputChange(event, setDepartment, true)}
              className="border border-black rounded px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Department</option>
              {departmentOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-md">
            <Label htmlFor="bankAccount">Bank Account:</Label>
            <Input
              id="bankAccount"
              value={bankAccount}
              onChange={(event) => handleInputChange(event, setBankAccount)}
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Register'}
            </Button>
          </div>
          <div className="col-span-2 flex justify-center">
            {formError && (
              <p className="text-red-500 mt-2 text-sm">{formError}</p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddUser;

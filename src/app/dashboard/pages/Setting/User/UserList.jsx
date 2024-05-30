import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import UserListService from '@/app/dashboard/services/UserListService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await UserListService.fetchUsers();
      setUsers(usersData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (userEmail) => {
    try {
      await UserListService.deleteUser(userEmail);
      setUsers(users.filter((user) => user.employeeEmail !== userEmail));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    navigate(`/UpdatedProfile/${user.employeeId}`, { state: { user } });
  };

  const handleAddUser = () => {
    navigate('/AddUser');
  };

  const handleFileUpload = (user) => {
    // Assuming `user.employeeId` contains the correct employeeId
    navigate(`/FileUploadPage/${user.employeeId}`, { state: { user } });
  };

  const handleMoreDetails = (user) => {
    navigate('/EmployeeDetail', { state: { user } });
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={handleAddUser}
        >
          Add User
        </button>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.employeeId}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.employeeFirstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.employeeLastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.departmentName || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.employeeEmail}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => handleEditUser(user)}>Edit</button>
                    <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteUser(user.employeeEmail)}>Delete</button>
                    <button className="text-green-600 hover:text-green-900 ml-2" onClick={() => handleFileUpload(user)}>FileUpload</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-900 ml-2" onClick={() => handleMoreDetails(user)}>More</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default UserList;

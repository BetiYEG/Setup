import React, { useState, useEffect } from 'react';
import { getAllEmployees } from '../services/EmployeeDetaileService';
import FileUploadList from './FileuploadList';

const EmployeeDetail = () => {
    const [employees, setEmployees] = useState([]);
    const [showMore, setShowMore] = useState({});
    const [error, setError] = useState(null); // State to track error

    const toggleMore = (id) => {
        setShowMore((prevShowMore) => ({
            ...prevShowMore,
            [id]: !prevShowMore[id],
        }));
    };

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getAllEmployees();
                setEmployees(data);
            } catch (error) {
                setError(error.message); // Set error message
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className="bg-white max-w-full mx-auto p-4 shadow-md rounded-md">
            <h2 className="text-3xl font-semibold mb-6 text-center">Employee Details</h2>
            {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
            <table className="min-w-full bg-white border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Employee ID</th>
                        <th className="border px-4 py-2">First Name</th>
                        <th className="border px-4 py-2">Last Name</th>
                        <th className="border px-4 py-2">Gender</th>
                        <th className="border px-4 py-2">Date of Birth</th>
                        <th className="border px-4 py-2">Phone Number</th>
                        <th className="border px-4 py-2">Address</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Department</th>
                        <th className="border px-4 py-2">Role</th>
                        <th className="border px-4 py-2">More</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <React.Fragment key={employee.employeeId}>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">{employee.employeeId}</td>
                                <td className="border px-4 py-2">{employee.employeeFirstName}</td>
                                <td className="border px-4 py-2">{employee.employeeLastName}</td>
                                <td className="border px-4 py-2">{employee.gender}</td>
                                <td className="border px-4 py-2">{employee.employyDOB}</td>
                                <td className="border px-4 py-2">{employee.employeePhone}</td>
                                <td className="border px-4 py-2">{employee.employeeAddress}</td>
                                <td className="border px-4 py-2">{employee.employeeEmail}</td>
                                <td className="border px-4 py-2">{employee.departmentName}</td>
                                <td className="border px-4 py-2">{employee.role}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => toggleMore(employee.employeeId)}
                                    >
                                        {showMore[employee.employeeId] ? 'Less' : 'More'}
                                    </button>
                                </td>
                            </tr>
                            {showMore[employee.employeeId] && (
                                <tr className="bg-gray-200">
                                    <td colSpan="11" className="border px-4 py-2">
                                        <FileUploadList employeeId={employee.employeeId} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeDetail;

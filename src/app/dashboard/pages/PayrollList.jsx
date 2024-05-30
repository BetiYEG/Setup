import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PayrollList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/employees');
            console.log('Fetched employees:', response.data); // Log fetched data
            if (Array.isArray(response.data)) {
                setEmployees(response.data);
            } else {
                console.error('Fetched data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Employee Payroll List</h1>
            <table className="min-w-full bg-white shadow-md rounded mb-4">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Employee ID</th>
                        <th className="border px-4 py-2">Salary Type</th>
                        <th className="border px-4 py-2">Amount</th>
                        <th className="border px-4 py-2">Payment Duration</th>
                        <th className="border px-4 py-2">Payment Date</th>
                        <th className="border px-4 py-2">Bonuses</th>
                        <th className="border px-4 py-2">Contract Start Date</th>
                        <th className="border px-4 py-2">Contract End Date</th>
                        <th className="border px-4 py-2">Payment Status</th>
                        <th className="border px-4 py-2">Payment Method</th>
                        <th className="border px-4 py-2">Net Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee._id}>
                            <td className="border px-4 py-2">{employee.name}</td>
                            <td className="border px-4 py-2">{employee.employeeId}</td>
                            <td className="border px-4 py-2">{employee.type}</td>
                            <td className="border px-4 py-2">{employee.amount}</td>
                            <td className="border px-4 py-2">{employee.frequency}</td>
                            <td className="border px-4 py-2">{employee.paymentDate}</td>
                            <td className="border px-4 py-2">{employee.bonuses}</td>
                            <td className="border px-4 py-2">{employee.contractStartDate}</td>
                            <td className="border px-4 py-2">{employee.contractEndDate}</td>
                            <td className="border px-4 py-2">{employee.paymentStatus}</td>
                            <td className="border px-4 py-2">{employee.paymentMethod}</td>
                            <td className="border px-4 py-2">{employee.netPay}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PayrollList;

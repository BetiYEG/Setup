import React from 'react';
import { useParams } from 'react-router-dom';

const Employee = () => {
  let { id } = useParams();

  // Sample employee data for demonstration
  const employeeData = [
    { id: 23, name: 'Alice Smith', position: 'Software Engineer' },
    { id: 65, name: 'Abebe', position: 'CS' }
  ];

  // Find the employee data based on the ID parameter
  const selectedEmployee = employeeData.find(employee => employee.id === parseInt(id));

  return (
    <div>
      <h2>Employee Details for ID: {id}</h2>
      {selectedEmployee ? (
        <div>
          <p>Name: {selectedEmployee.name}</p>
          <p>Position: {selectedEmployee.position}</p>
        </div>
      ) : (
        <p>Employee not found</p>
      )}
    </div>
  );
};

export default Employee;